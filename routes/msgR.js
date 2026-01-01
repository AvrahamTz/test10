import express from "express"
import { validateUser } from "../services/userside.js"
import { decryptMsg, encryptMsg } from "../controlles/msgC.js"


const router= express.Router()

router.post("/encrypt",validateUser,encryptMsg)
router.post("/decrypt",validateUser,decryptMsg)

export default router