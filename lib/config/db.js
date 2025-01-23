import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://listyodwi062:TF1nOyTLN6nUr0SI@cluster0.y9wwv.mongodb.net/blog-app');
    console.log('DB Connected');
    
} 

