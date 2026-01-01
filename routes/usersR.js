import express from "express"

import { getMyMsg, register } from "../controlles/usersC.js"
import { validateUser } from "../services/userside.js"



const router= express.Router()

router.post("/auth/register",register)
router.get("/users/me",validateUser,getMyMsg)
export default router