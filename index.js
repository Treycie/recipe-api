import express from "express"
import recipesRoutes from './routes/recipes.routes.js';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


// Load env variables
dotenv.config({path:['.env.local']})

// Create express app
const app = express();


//Use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// Use routes
app.use(recipesRoutes);


// Make database connection
await mongoose.connect(process.env.MONGO_URI);

// Listen for incoming requests
app.listen(6000, () => {
    console.log("Express app is running!")
});