import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        const DB_OPT = { dbName: 'contact' }
        await mongoose.connect(process.env.DB_URL, DB_OPT);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log('Error in connecting to DB:', error);
    }
};

export default ConnectDB;
