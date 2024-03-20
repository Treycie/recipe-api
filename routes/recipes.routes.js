import { Router } from "express";


const router = Router();


// Define your routes
 
router.post('/', (req, res) => {
    res.send("Create new recipe");
    
});

router.get('/recipes', (req, res) => {
    res.send("Get all recipes");
    
});

router.get('/recipes/:id', (req, res) => {
    res.send(`Get single recipe with id: ${req.params.id}`);
    
});

router.patch('/recipes/:id', (req, res) => {
    res.send(`Update single receipe! by id: ${req.params.id}`);
});

router.delete('/recipes/:id', (req, res) => {
    res.send(`Delete single receipe!byid: ${req.params.id} `);
});



export default router;

