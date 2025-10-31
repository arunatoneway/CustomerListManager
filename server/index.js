const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./Routes");
const cookieparser = require("cookie-parser")
require('dotenv').config()


const app = express();

app.use(express.json())
app.use(cookieparser())

app.use(cors({
    origin:'https://customer-list-manager-frontend234.vercel.app',
    credentials: true
}))

mongoose.connect(process.env.MONGOURL).then((res)=>{
    console.log('db connection successfull')
}).catch((err)=>{
    console.log(err)
})

app.use("/api",apiRouter)




app.listen(process.env.PORT,()=>{
    console.log(`server starts on port 4000 ${process.env.PORT}`)
})