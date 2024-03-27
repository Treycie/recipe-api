import { Router } from "express";
import { addRecipe, getRecipe, getRecipes, updateRecipe, deleteRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

// Create multer upload middleware
const upload = multer({ dest: 'uploads/images' });

// Create recipes router
const router = Router();


// Define your routes

router.post('/recipes', upload.single('image'), addRecipe);

router.get('/recipes', getRecipes);

router.get('/recipes/:id', getRecipe);

router.patch('/recipes/:id', updateRecipe);

router.delete('/recipes/:id', deleteRecipe);



export default router;

