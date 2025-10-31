const customerRouter = require('express').Router()
const { addtolist, listall, editcustomer, removecustomer } = require('../../Controllers/customerController')
const authUser = require('../../Middlewares/authUser')

customerRouter.post("/create",authUser,addtolist)
customerRouter.get("/list",authUser,listall)
customerRouter.put("/update/:customerid",authUser,editcustomer)
customerRouter.delete("/remove/:customerid",authUser,removecustomer)



module.exports = customerRouter