
import { db } from "../DB/mongo.js"
import supa from "../DB/supa.js"
import { original, reversed } from "../services/userside.js"

const insertTo= async({username,password})=>{
    const find = await db.collection("users").find({username:username}).toArray()
    if (find == false) {
        const data = {
            username,
            password: password.toString(), 
            encryptedMessagesCount: 0,
            createdAt: Date()
        }
            
        const insert= db.collection("users").insertOne(data)
    
        
        return insert
    }}

const encrypt = async(username,messeges,cipherType)=>{
    if (cipherType === "reverse"){
        const reverse = await reversed(messeges)
        const { data, error } = await supa.from('messages').insert({username:username,cipher_type:cipherType,encrypted_text:reverse,inserted_at:new Date()}).select('id,cipher_type,encrypted_text')
        db.collection("users").updateOne({username:username},{$inc:{encryptedMessagesCount:1}})
        return data 
    }
}
const decrypt = async(id)=>{
     const { data, error } = await supa.from('messages').select('encrypted_text').eq('id',id)
     const origin = await original(data.encrypted_text)
     if (error){
        throw error
     }
     return origin
}
const getData = async(username)=>{
    const find = db.collection("users").findOne({username:username},{encryptedMessagesCount:1})
    return find
}

export {
    insertTo,
    encrypt,
    decrypt,
    getData
}