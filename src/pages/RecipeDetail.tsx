import { useParams } from 'react-router-dom';
import { useFetch } from '..hooks/useFetch';
import { useFavorites } from '../context/FavoritesContext';
import { ApiResponse, Meal } from '../types/index';
import { Spinner } from '../components/Spinner';