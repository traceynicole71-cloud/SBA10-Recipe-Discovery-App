import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { RecipeCard } from '../components/RecipeCard';
import { Meal } from '../types/index';
import { Spinner } from '../components/Spinner';