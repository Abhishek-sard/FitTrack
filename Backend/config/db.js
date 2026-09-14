import dns from "node:dns";
import mongoose from "mongoose";

const dnsServers = process.env.DNS_SERVERS?.split(",").map((server) => server.trim()).filter(Boolean);

if (dnsServers?.length) {
    dns.setServers(dnsServers);
}

const ConnectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI is not set. Starting server without MongoDB.");
      return null;
    }

    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`\n MongoDB connected: ${connectionInstance.connection.host}\n`);
    return connectionInstance;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.warn("Continuing without database connection so the app can still run.");
    return null;
  }
};

export default ConnectDB;