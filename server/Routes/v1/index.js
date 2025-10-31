const userRouter = require('./userRoutes')
const customerRouter = require('./customerRoutes')

const v1Router = require('express').Router()

v1Router.use("/user",userRouter)
v1Router.use("/customer",customerRouter)


module.exports = v1Router