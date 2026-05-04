import { useState, useEffect } from 'react';

//manage loading state, error, and returned data
export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("Fetching from:", url);
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP Error. status: ${response.status}`);
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An Unknown Error Has Occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

return { data, loading, error };
    }
