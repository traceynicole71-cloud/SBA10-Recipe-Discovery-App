import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${query}`);
            setQuery('');
        }
    };

    return (
        <nav className="bg-orange-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tight">RecipeDiscovery</Link>

                <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4">
                    <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="Search recipes..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />
                </form>

                <Link to="/favorites" className="hover:text-orange-200 font-semibold">Favorites</Link>
            </div>
        </nav>
    );
};