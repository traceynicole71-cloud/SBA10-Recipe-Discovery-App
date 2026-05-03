import { Link } from 'react-router-dom';
import type { Meal } from '../types/index';

//card for displaying meal info
export const RecipeCard = ({ meal }: { meal: Meal }) => {
    <Link to={`/recipe/${meal.idMeal}`} className="group">
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
            />
<div className="p-4">
    <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{meal.strMeal}</h3>
    <p className="text-orange-500 text-sm mt-2 font-medium uppercase tracking-wider">View Recipe</p>
</div>
        </div>
    </Link>
};