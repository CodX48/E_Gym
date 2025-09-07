import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from "../model/usermodel";

interface ExtendRequest extends Request {
    user?: any;
}

const JWT_SECRET = "3,2wUCn(bV>KOpmqG7>v|7fGBNam_|=T"; 

const ValidateJWT = async (req: ExtendRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const AuthHeader = req.get('authorization');
        if (!AuthHeader) {
            res.status(401).json({ error: "Authorization header missing" });
            return;
        }

        const Token = AuthHeader.split(" ")[1];
        if (!Token) {
            res.status(401).json({ error: "Token not found" });
            return;
        }

        const payload = jwt.verify(Token, JWT_SECRET) as jwt.JwtPayload;
        if (!payload.Email) {
            res.status(401).json({ error: "Invalid token payload" });
            return;
        }

        const user = await User.findOne({ Email: payload.Email });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        req.user = user;
       
        next();
    } catch (err: any) {
        if (err.name === "TokenExpiredError") {
            res.status(401).json({ error: "Token expired" });
        } else if (err.name === "JsonWebTokenError") {
            res.status(401).json({ error: "Invalid token" });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export default ValidateJWT;
