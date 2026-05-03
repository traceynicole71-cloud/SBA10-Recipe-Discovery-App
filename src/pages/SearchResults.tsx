import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { RecipeCard } from '../components/RecipeCard';
import { Spinner } from '../components/Spinner';
import { ApiResponse, Meal } from '../types/index';