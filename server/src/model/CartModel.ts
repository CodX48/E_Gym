import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "./productModel";

export interface ICartItem{
    Product: IProduct;
    UnitPrice: number;
    Quantity: number;
}

export interface Icart extends Document{
    UserId: string | Object;
    CartItems: ICartItem[];
    TotalAmount: number;
    Status: 'active' | 'Completed'; //this is made so when the cart is not on the order state it will be active then completed
};

const CartItemSchema = new Schema<ICartItem>({
    Product: { type: Schema.Types.ObjectId, ref: "products", required: true }, // "type: Schema.Types.ObjectId" : the added product will have the id as a pointer to the database product
    Quantity: { type: Number, required: true, default: 1 },
    UnitPrice: { type: Number, required: true, },
});

const CartStatusEmun = ["active", "Completed"];

const CartSchema = new Schema<Icart>({
    UserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    CartItems: [CartItemSchema],
    TotalAmount: { type: Number , default:0},
    Status: { type: String, enum: CartStatusEmun, default: 'active' },
    
});

export const CartModel = mongoose.model("Cart", CartSchema);

