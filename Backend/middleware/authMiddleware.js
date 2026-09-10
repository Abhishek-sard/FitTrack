import { JsonWebToken } from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
    try{
        let token;

        //check Authorization header
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.headers.authorization.split("")[1];
        }

        //No token
        if(!token){
            return res.status(401).json({
                success:false,
                message: "Not authorized. Please login first.",
            });
        }

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //find user
        const user = await User.findById(decoded.id).select("-password");


        if(!user){
            return res.status(401).json({
                success:false,
                message: "User no longer exists.",
            });
        }

        //check account status
        if(!user.isActive){
            return res.status(403).json({
                success:false,
                message: "Your account has been deactivated.",
            });
        }

        //Attach user to request
        req.user = user;

        next();

    }catch(error){
        console.error("Authentication Error:", error.message);
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
                success:false,
                message: "Token has expired. please login again.",
            });
        }
    };



};
export default protect;