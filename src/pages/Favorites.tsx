import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { RecipeCard } from '../components/RecipeCard';
import type { Meal } from '../types/index';
import { Spinner } from '../components/Spinner';

export const Favorites = () => {
    const { favorites } = useFavorites();
    const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            if (favorites.length === 0) {
                setFavoriteMeals([]);
                setLoading(false);
                return;
            }
            const results = await Promise.all(
                favorites.map(id => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(r => r.json()))
            );
            setFavoriteMeals(results.map(r => r.meals[0]));
            setLoading(false);
        };
        fetchAll();
    }, [favorites]);

    if (loading) return <Spinner />;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
            {favoriteMeals.length === 0 ? (
                <p className="text-gray-500 italic">No favorites have been added. Go explore recipes!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols 2 lg:grid-cols-4 gap-6">
                    {favoriteMeals.map(meal => <RecipeCard key={meal.idMeal} meal={meal} />)}
                </div>
            )}
        </div>
    );
};