import app from "./app.js";

app.listen(process.env.PORT,()=>{

    const PORT = process.env.PORT || 5000;
    console.log(`server is started on port ${PORT}`);
});