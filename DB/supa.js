import { createClient} from "@supabase/supabase-js"

import dotenv from "dotenv"
dotenv.config()

const supa =  createClient(process.env.SUPA,process.env.KEY)

export default supa