import express, { Request, Response } from "express";
import GetCartForUser, { AddItemsToCart, DeleteItem, UpdateItemOnCart } from "../services/CartServies";
import ValidateJWT from "../MiddelWare/UserAuthMiddleWare";
import { CheckOut } from "../services/CheckOutServies";

const router = express.Router();

interface ExtendRequest extends Request {
    user?: { _id: any }; 
}

router.get('/', ValidateJWT, async (req: Request, res: Response) => {
    const userId = (req as ExtendRequest).user?._id;
    const cart = await GetCartForUser({ UserId: userId});
    res.status(200).send(cart);
});

router.post('/items', ValidateJWT, async (req: Request, res: Response) => {
    const UserId = (req as ExtendRequest).user?._id;
    const { ProductId, Quantity } = req.body;
    const response = await AddItemsToCart({ UserId, ProductId, Quantity });
    res.status(response.status).send(response.data);
});

router.put('/updateitem/:id', ValidateJWT, async (req: Request, res:Response) => {
    const UserId = (req as ExtendRequest).user?._id;
    const ProductId = req.params.id;
    const { Quantity } = req.body;
    const response = await UpdateItemOnCart({ UserId, ProductId, Quantity });
    res.status(response.status).send(response.data);

});

router.delete('/deleteitem/:id', ValidateJWT, async (req: Request, res:Response) => {
    const UserId = (req as ExtendRequest).user?._id;
    const ProductId = req.params.id;
    const response = await DeleteItem({ UserId, ProductId});
    res.status(response.status).send(response.data);
});

router.post('/order', ValidateJWT, async (req: Request, res: Response) => {
    const UserId = (req as ExtendRequest).user?._id;
    const response = await CheckOut({ UserId });
    res.status(response.status).send(response.data);

})

export default router;
