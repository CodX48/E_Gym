import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItems{
    ProductName: string;
    ProductPic: string;
    ProductPrice: number;
    ProductQuantity: number;
}

interface IOrder extends Document {
    OrderItems: IOrderItems[];
    UserId: mongoose.Schema.Types.ObjectId | string;
    UserAddress: string;
    TotalAmount: number;
}

const OrderItemSchema = new Schema<IOrderItems>({
    ProductName: { type: String, required: true },
    ProductPic: { type: String, required: true },
    ProductPrice: { type: Number, required: true },
    ProductQuantity: { type: Number, required: true }
});

const OrderSchema = new Schema<IOrder>({
    OrderItems: { type: [OrderItemSchema], required: true },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    UserAddress: { type: String, required: true },
    TotalAmount: { type: Number, required: true }
});

export const OrderModel = mongoose.model("Orders", OrderSchema);
