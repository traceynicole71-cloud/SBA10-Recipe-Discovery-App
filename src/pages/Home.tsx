import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Spinner } from '../components/Spinner';
import type { ApiResponse, Category } from '../types/index';
import { ErrorMessage } from '../components/ErrorMessage';

export const Home = () => {
    const { data, loading, error } = useFetch<ApiResponse<Category>>('https://www.themealdb.com/api/json/v1/1/categories.php');

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h1 className="text-3xl font-extrabold tect-gray-900 mb-8">Browse By Category</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.categories?.map((cat) => (
                    <Link key={cat.idCategory} to={`/category/${cat.strCategory}`} className="relative group overflow-hidden rounded-2xl shadow-md border-2 border-green-600">
                <img src={cat.strCategoryThumb} alt={cat.strCategory} className="w-full h-40 object-cover group-hover:scale-110 transition duration-300" />
                <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{cat.strCategory}</span>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};