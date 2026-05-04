import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { RecipeCard } from '../components/RecipeCard';
import { Spinner } from '../components/Spinner';
import type { ApiResponse, Meal } from '../types/index';

export const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const { data, loading } = useFetch<ApiResponse<Meal>>(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`);

    if (loading) return <Spinner />;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Search Results for ${query}"</h1>
            {data?.meals ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-xols-4 gap-6">
                {data.meals.map(meal => <RecipeCard key={meal.idMeal} meal={meal} />)}
                </div>
            ) : (
                <p className="text-gray-600">No recipes match your search.</p>
            )}
        </div>
    );
};