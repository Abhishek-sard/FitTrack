import mongoose from "mongoose";
import {DB_NAME} from "../Server.js";


const ConnectDB = async () =>  {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected: ${connectionInstance.connection.host}\n`);

    }catch(error){
        console.log("MongoDB connection failed");
        process.exit(1);
    }
}

export default ConnectDB;