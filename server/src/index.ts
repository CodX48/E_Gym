import express from "express";
import mongoose from "mongoose";
import UserRouter from './Routes/UserRoutes';
import ProductRouter from "./Routes/ProductRoutes";
import CartRouter from './Routes/CartRouter';
import { SeedProducts } from "./services/ProductSevies";
import cors from "cors";

const port: number = 5000;
const app = express();

app.use(express.json());
app.use(cors())


// Corrected MongoDB connection string
mongoose.connect("mongodb://localhost:27017/Ecom")
.then(async () => {
    console.log("Database is connected");
    await SeedProducts();
})
.catch(e => console.log("Database failed to connect", e));

// Route Handlers
app.use('/user', UserRouter);
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
