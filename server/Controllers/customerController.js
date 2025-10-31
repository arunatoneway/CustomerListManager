const customerDB = require("../models/customerModel")

const addtolist = async (req,res)=>{
    try {
        const {name,phone,contactinfo,status} = req.body
        if(!name||!contactinfo||!phone||!status){
            res.status(400).json({error:"All fields are required"})
        }
        if(isNaN(phone)){
            res.status(400).json({error:"Please enter phone numbers in number"})
        }
        const customerExist = await customerDB.findOne({phone})
        if(customerExist){
            return res.status(400).json({ error: "Customer already exist" })
        }
        const newCustomer = new customerDB({
            name,phone,contactinfo,status
        })
        const saved = newCustomer.save()
        if (saved){
            return res.status(200).json({message:"new customer is added"})
        }
        
    } catch (error) {
        res.status(500).json({error:"Internal error"})
    }

}

const listall = async (req,res)=>{
    try {

        const listCustomer = await customerDB.find()
        res.status(200).json(listCustomer)
        
    } catch (error) {
        res.status(error.status||500).json(error.message||"internal server error")
        
    }

}

const editcustomer = async (req,res)=>{
    try {
        const {customerid} = req.params
        const {name,phone,contactinfo,status} = req.body

        let isCustomerExist = await customerDB.findById(customerid)
        if(!isCustomerExist){
            return res.status(400).json({error:"Customer not found"})
        }
        const customerupdate = await customerDB.findByIdAndUpdate(customerid,{name,phone,contactinfo,status},{new:true})
        res.json({message:"updated customer",customerupdate})
    } catch (error) {
        res.status(error.status||500).json(error.message||"Internal server error")
        
    }

}

const removecustomer  = async (req,res)=>{
    try {

        const {customerid} = req.params
        const deletecustomer = await customerDB.findByIdAndDelete(customerid)
        if(!deletecustomer){
            return res.status(400).json({error:"customer not found"})
        }
        res.status(200).json({message:"customer deleted"})
    } catch (error) {
        res.status(error.status||500).json(error.message||"Internal server error")
        
    }

}

module.exports={
    addtolist,
    listall,
    editcustomer,
    removecustomer
}