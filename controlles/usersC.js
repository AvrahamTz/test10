import { getData, insertTo } from "../DAL/mongoSupa.js"


const register = async(req,res)=>{
    try {
        const insert = await insertTo(req.body)
        const username = req.body.username
        if (insert){
        res.status(201).send({ id:insert.insertedId, username:username })
        }else{
            res.sendStatus(501)
        }
    } catch (error) {
        res.send(error)
        
    }
}
const getMyMsg = async(req,res)=>{
    const data = await getData(req.headers.username)
    res.status(200).send(data)}
export{
register,
getMyMsg
}