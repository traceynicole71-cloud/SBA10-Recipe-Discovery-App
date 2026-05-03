import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites } from '../context/FavoritesContext';
import type { ApiResponse, Meal } from '../types/index';
import { Spinner } from '../components/Spinner';

export const RecipeDetail = () => {
    const { recipeId } = useParams();
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    const { data, loading } = useFetch<ApiResponse<Meal>>(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

    if (loading) return <Spinner />;
    const meal = data?.meals?.[0];

    if (!meal) return <p>Recipe Not Found.</p>;

    const ingredients = Object.keys(meal)
        .filter(key => key.startsWith('strIngredient') && (meal as any)[key])
        .map((key, index) => ({
            item: (meal as any)[key],
            measure: (meal as any)[`strMeasure${index + 1}`]
        }));

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md-grid-cols-2">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-full object-cover" />
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-4xl font-bold text-gray-900">{meal.strMeal}</h1>
                        <button
                            onClick={() => isFavorite(meal.idMeal) ? removeFromFavorites(meal.idMeal) : addToFavorites(meal.idMeal)}
                            className={`p-3 rounded-full transition ${isFavorite(meal.idMeal) ? 'bg-red-500 text-white' : 'bg-gray-100 text-red-500 hover:bg-red-50'}`}
                        >
                            {isFavorite(meal.idMeal) ? '❤️ Favorite' : '🤍 Add to Fav'}
                        </button>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-orange-600 mb-2">Ingredients</h2>
                        <ul className="grid grid-cols-1 gap-2">
                            {ingredients.map((ing, i) => <li key={i} className="text-gray-700">✅ {ing.measure} {ing.item}</li>)}
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold text-orange-600 mb-2">Instructions</h2>
                    <p className="text-gray-600 whitespace-pre-wrap">{meal.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};