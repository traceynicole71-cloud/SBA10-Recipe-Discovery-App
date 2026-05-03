//define interfaces
export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDecription: string;
}

export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions?: string;
    strCategory?: string;
    strArea?: string;
}

export interface ApiResponse<T> {
    meals: T[] | null;
    categories: T[] | null;
}