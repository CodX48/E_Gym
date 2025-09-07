import { CartModel } from "../model/CartModel";
import {ProductModel} from '../model/productModel'

interface UserIdInterface {
    UserId: string;
}

const createCartForUser = async ({UserId}: UserIdInterface) => {
    return await CartModel.create({ UserId});
};

const GetCartForUser = async ({ UserId}: UserIdInterface) => {
    let cart = await CartModel.findOne({ UserId, Status: "active"});
    if (!cart) {
        const newcart = await createCartForUser({UserId});
        return newcart;
    }

    return cart;
};

interface IProductType {
    ProductId: any;
    UserId: string;
    Quantity: number;
}

//i will not increase the size of the stock if the check out is not done yet
export const AddItemsToCart = async ({ UserId, ProductId, Quantity }: IProductType) => {
    const UserCart = await GetCartForUser({UserId});
    const ItemExist = UserCart.CartItems.find(((p) => p.Product.toString() === ProductId));

    console.log({ItemExist,ProductId})
    if (ItemExist) {
        return { data: "Item is already exists in cart ", status: 400 };
    };
   
    const product = await ProductModel.findOne({ _id: ProductId });
    if (!product) {
        return { data: "product not found", status: 400 };
    };
    if (product.stock < Quantity) {
    return { data: "No enough stock", status: 400 };
    }

    UserCart.CartItems.push({ Product: ProductId, UnitPrice: product.price, Quantity: Quantity });
    UserCart.TotalAmount += product.price * Quantity;
    const UpdatedCart = await UserCart.save();  
    return { data: UpdatedCart, status: 200 };
};


interface IProductUpgradeType {
    ProductId: any;
    UserId: string;
    Quantity: number;
}

export const UpdateItemOnCart = async ({ UserId, ProductId, Quantity }: IProductUpgradeType) => {
    let UserCart = await GetCartForUser({ UserId }); 
    const ItemExist = UserCart.CartItems.find((p) => p.Product.toString() === ProductId);
    if (!ItemExist) {
        return { data: "Item does not exist in cart", status: 400 };
    }

    const product = await ProductModel.findOne({ _id: ProductId });
    if (!product) return { data: "Product not found", status: 400 };
    if (product.stock < Quantity) return { data: "Not enough stock", status: 400 };

    const TotalAmount = UserCart.CartItems.reduce((TotalSum, CurrentVal) => 
        TotalSum + CurrentVal.UnitPrice * CurrentVal.Quantity, 0
    );

    let AmountWithoutUpdatedProduct = TotalAmount - ItemExist.Quantity * ItemExist.UnitPrice;

    UserCart.CartItems.forEach((P) => {
        if (P.Product.toString() === ProductId) {
            P.Quantity = Quantity;
            AmountWithoutUpdatedProduct += P.UnitPrice * Quantity;
        }
    });

   
    UserCart.TotalAmount = AmountWithoutUpdatedProduct;
    await UserCart.save();
    return { data: UserCart, status: 200 };
};


interface IProductDeletTypes {
    ProductId: string;
    UserId: string;
}

export const DeleteItem = async ({ProductId,UserId}: IProductDeletTypes) => {
    let UserCart = await GetCartForUser({ UserId }); 
    const ItemExist = UserCart.CartItems.find((p) => p.Product.toString() === ProductId);
    if (!ItemExist) {
        return { data: "Item does not exist in cart", status: 400 };
    }

    const UserItemsWithOutDeletedProduct = UserCart.CartItems.filter((P) => {return P.Product.toString() != ProductId });
    UserCart.CartItems = UserItemsWithOutDeletedProduct;
    const TotalAmount = UserCart.CartItems.reduce((TotalSum, CurrentVal) => 
        TotalSum + CurrentVal.UnitPrice * CurrentVal.Quantity, 0
    );
    UserCart.TotalAmount = TotalAmount;
    await UserCart.save();
    return { data: UserCart, status: 200 };
}

export default GetCartForUser;
