const { register, login, logout } = require('../../Controllers/userController')

const userRouter = require('express').Router()

userRouter.post("/signup",register)
userRouter.post("/login",login)
userRouter.post("/logout",logout)




module.exports = userRouter