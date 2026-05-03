import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { ApiResponse, Meal } from '../types/index';
import { RecipeCard } from '..components/RecipeCard';
import { Spinner } from '..components/Spinner';