import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import type { ApiResponse, Meal } from '../types/index';
import { RecipeCard } from '../components/RecipeCard';
import { Spinner } from '../components/Spinner';

export const Category = () => {
    const { categoryName } = useParams();
    const { data, loading, error } = useFetch<ApiResponse<Meal>>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

    if (loading) return <Spinner />;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Category: <span className="text-green-600">{categoryName}</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data?.meals?.map(meal => (
                    <RecipeCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
};