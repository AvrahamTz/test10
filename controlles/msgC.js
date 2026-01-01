import { decrypt, encrypt } from "../DAL/mongoSupa.js"


const encryptMsg = async(req,res)=>{
    const encryp = await encrypt(req.headers.username,req.body.message,req.body.cipherType)
    res.status(201).send(encryp)
}
const decryptMsg = async(req,res)=>{
    try {
        const decryp= await decrypt(req.body.messageId)
        res.status(200).send({id:req.body.messageId,decryptedText:decryp})
    } catch (error) {
        req.status(200).send({ "id":req.body.id, "decryptedText": null, "error": "CANNOT_DECRYPT" })
        
    }
}


export {
    encryptMsg,
    decryptMsg,
}