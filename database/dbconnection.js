import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "EVENT_MENEGEMENT" })

    .then(() => {
        console.log("connected to database successfully")
    })
    .catch((err)=>{
        console.log("some error has been occured",err);
    });
}
