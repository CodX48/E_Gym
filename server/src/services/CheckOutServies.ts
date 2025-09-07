import { IOrderItems, OrderModel } from "../model/OrderModel";
import { ProductModel } from "../model/productModel";
import GetCartForUser from "./CartServies";

interface IUser {
    UserId: string;
}

export const CheckOut = async ({ UserId }: IUser) => {
    const cart = await GetCartForUser({ UserId });

    if (!cart) {
        return { data: "No cart for the user", status: 400 };
    }

    if (cart.CartItems.length === 0) {
        return { data: "No elements in the cart", status: 200 };
    }

    let OrderItems: IOrderItems[] = [];

    OrderItems = await Promise.all(
        cart.CartItems.map(async (item) => {
            const product = await ProductModel.findById(item.Product);
            if (!product) throw new Error("Product not found"); 

            return {
                ProductName: product.title,
                ProductPic: product.image,
                ProductPrice: product.price,
                ProductQuantity: item.Quantity
            };
        })
    );

   
    const UserOrder = new OrderModel({
        OrderItems,
        UserId,
        UserAddress: "istanbul",
        TotalAmount: cart.TotalAmount
    });

    await UserOrder.save();
    cart.Status = "Completed";
    await cart.save();

    return { data: UserOrder, status: 200 };
};
