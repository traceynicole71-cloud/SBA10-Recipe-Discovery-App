import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { ApiResponse, Category, Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const Home = () => {
    const { data, loading, error } = useFetch<ApiResponse<Category>>('www.themealdb.com/api/json/v1/1/categories.php');

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h1 className="text-3xl font-extrabold tect-gray-900 mb-8">Browse By Category</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.categories?.map((cat) => (
                    <Link key={cat.idCategory} to={`/category/${cat.strCategory}`} className="relative group overflow-hidden rounded-2xl shadow-md">
                img src={cat.strCategoryThumb} alt={cat.strCategory} className="w-full h-40 object-cover group-hover:scale-110 transition duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{cat.strCategory}</span>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};