import { User } from "../model/usermodel";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

interface R_Params {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
};

export const register = async ({ FirstName, LastName, Email, Password }: R_Params) => {

    const findUser = await User.findOne({ Email });
    if (findUser) {
        return { data: "User is already exist", status: 400 };
    }
    const hashedpass = await bcrypt.hash(Password, 10);
    const user = new User({
        FirstName,
        LastName,
        Email,
        Password: hashedpass,
    });

    await user.save();

    return { data: generateJWT({ FirstName, LastName, Email }), status: 200 };

};
interface L_Params{
    Email: string;
    Password: string;
};

export const login = async ({ Email, Password }: L_Params) => {
    
    const findUser = await User.findOne({ Email });
    if (!findUser) {
        return { data: "Incorrect Email or password", status: 400 };
    };

    const hashedpass = await bcrypt.compare(Password, findUser.Password);
    if (hashedpass && findUser !== null) {
        return { data: generateJWT({Email,FirstName: findUser.FirstName,LastName: findUser.LastName}) , status: 200 };
    };

    return { data: "Incorrect Email or password", status: 400 };
};

const generateJWT = (data: any) => {
    return jwt.sign(data, '3,2wUCn(bV>KOpmqG7>v|7fGBNam_|=T', { expiresIn: "24h" });
};