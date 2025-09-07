import express from "express";
import { GetDataFromDB } from "../services/ProductSevies";

const router = express.Router();

router.get('/', async (req, res) => {
    const Products = await GetDataFromDB();
    res.status(Products.status).send(Products.data); 
});

export default router;