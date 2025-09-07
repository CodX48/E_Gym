import express from "express";
import { login, register } from "../services/UserServices";

const router = express.Router(); 

router.post('/register', async (req, res) => {
    const { FirstName, LastName, Email, Password } = req.body;
    const respo = await register({ FirstName, LastName, Email, Password });
    res.status(respo.status).send(respo.data);
});

router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    const respo = await login({ Email, Password });
    res.status(respo.status).send(respo.data);
});

export default router; 
