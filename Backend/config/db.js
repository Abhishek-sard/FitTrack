import dns from "node:dns";
import mongoose from "mongoose";

const dnsServers = process.env.DNS_SERVERS?.split(",").map((server) => server.trim()).filter(Boolean);

if (dnsServers?.length) {
    dns.setServers(dnsServers);
}

const ConnectDB = async () =>  {
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB connected: ${connectionInstance.connection.host}\n`);

    }catch(error){
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

export default ConnectDB;