import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface FavoritesContextType {
    favorites: string[];
    addToFavorites: (id: string) => void;
    removeFromFavorites: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
//manages global list of recipes
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useLocalStorage<string[]>('my_favorites', [])

    const addToFavorites = (id: string) => {
        if (!favorites.includes(id)) setFavorites([...favorites, id]);
    };

    const removeFromFavorites =  (id: string) => {
        setFavorites(favorites.filter((favId) => favId !== id));
    };

    const isFavorite = (id: string) => favorites.includes(id);

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
    return context;
};