import express from "express" 
import usersRoutes from "./routes/usersR.js"
import msgRoutes from "./routes/msgR.js"
const port = 3000;
const app = express()
app.use(express.json());


app.use("/", usersRoutes);
app.use("/messages", msgRoutes);


app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})
