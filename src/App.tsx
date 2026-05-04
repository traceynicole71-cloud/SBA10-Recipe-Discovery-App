import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { RecipeDetail } from './pages/RecipeDetail';
import { Favorites } from './pages/Favorites';
import { SearchResults} from './pages/SearchResults';
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
      <div className="min-h-screen bg-gray-400 font-sans antialiased text-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<SearchResults />} />
            </Routes>
            </div>
            </div>
            </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
