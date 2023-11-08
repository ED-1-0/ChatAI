import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not connect to MongoDB");
    }
}
async function disconnectToDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect to MongoDB");
    }
}
export { connectToDatabase, disconnectToDatabase };
//# sourceMappingURL=connection.js.map