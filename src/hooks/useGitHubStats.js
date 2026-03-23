import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'iam-neo';
const CACHE_KEY = 'github_stats_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

const DEFAULT_STATS = {
    repos: 33,
    followers: 13,
    stars: 0,
    loading: true,
};

const useGitHubStats = () => {
    const [stats, setStats] = useState(DEFAULT_STATS);

    useEffect(() => {
        const fetchStats = async () => {
            // Check sessionStorage cache first
            try {
                const cached = sessionStorage.getItem(CACHE_KEY);
                if (cached) {
                    const { data, timestamp } = JSON.parse(cached);
                    if (Date.now() - timestamp < CACHE_DURATION) {
                        setStats({ ...data, loading: false });
                        return;
                    }
                }
            } catch (e) {
                // Ignore cache errors
            }

            try {
                // Fetch user profile
                const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                if (!userRes.ok) throw new Error('API rate limited');
                const userData = await userRes.json();

                // Fetch repos to calculate total stars
                const reposRes = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
                );
                if (!reposRes.ok) throw new Error('API rate limited');
                const reposData = await reposRes.json();

                const totalStars = reposData.reduce(
                    (sum, repo) => sum + (repo.stargazers_count || 0),
                    0
                );

                const data = {
                    repos: userData.public_repos || DEFAULT_STATS.repos,
                    followers: userData.followers || DEFAULT_STATS.followers,
                    stars: totalStars,
                };

                // Cache the result
                try {
                    sessionStorage.setItem(
                        CACHE_KEY,
                        JSON.stringify({ data, timestamp: Date.now() })
                    );
                } catch (e) {
                    // Ignore storage errors
                }

                setStats({ ...data, loading: false });
            } catch (error) {
                console.warn('GitHub API fetch failed, using defaults:', error.message);
                setStats({ ...DEFAULT_STATS, loading: false });
            }
        };

        fetchStats();
    }, []);

    return stats;
};

export default useGitHubStats;
