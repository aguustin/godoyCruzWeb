import mongoose from "mongoose";
import { mongoose_uri } from "./config.js";

export const connectionDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(mongoose_uri, {useNewUrlParser: true});
        console.log('database connected');
    } catch (error) {
        console.log(error)
    }
}
