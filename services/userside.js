import { db } from "../DB/mongo.js";


export const validateUser = async (req, res,next) => {
    try {
        const {username,password} = req.headers
        const find  =await db.collection("users").find({username:username},{password:password})
        if (find){
            next()
        }else{
           res.sendStatus(501)   
        }    
    }catch (error){ 
    console.error(error);
    }
    
}
export const reversed = (msg)=>{
    return msg.split("").reverse().join("").toUpperCase();
}
export const original = (text)=>{
    return text.split("").reverse().join("").toLowerCase();
}
