import { message } from "../models/messageSchema.js"; //importing the message model


export const sendMessage = async (req, res) => {

    try 
    {
        const { name, email, subject, description } = req.body; //destructuring the data from the body of the request

            if (!name || !email || !subject || !description) 
            {
                return res.status(400).json({
                success: false,
                message: "please fill all the fields",
                });
            }
            await message.create({name,email,subject,description}); //creating a new message in the database
                res.status(200).json({
                success:true,
                message:"Message sent successfully",
                });    
    } 
    catch (error) 
    {
        if(error.name === "ValidationError")
        {
            let errorMessage = "";
            if(error.errors,name)
            {
                errorMessage += error.errors.name.message + ""
            }
            if(error.errors,email)
            {
                    errorMessage += error.errors.email.message + ""
            }
            if(error.errors,subject)
            {
                    errorMessage += error.errors.subject.message + ""
            }
            if(error.errors,description)
            {
                    errorMessage += error.errors.description.message + ""
            }
            return res.status(400).json({
                success:false,
                message: errorMessage,
            })
        }

        return res.status(500).json({
                success:false,
                message:"Unkown error occurred",
        })    
    }
}
