const userDb = require("../models/userModel")
const { createToken } = require("../Utilities/generateToken")
const { hashPassword, comparePassword } = require("../Utilities/passwordUtilities")

const register = async (req, res) => {

    try {
        const { name, email, phone, password, confirmpasworrd } = req.body

        if (!name || !email || !phone || !password || !confirmpasworrd) {
            return res.status(400).json({ error: "all fields are required" })

        }
        if (password !== confirmpasworrd) {
            return res.status(400).json({ error: "Password does not match" })

        }
        const userExist = await userDb.findOne({ email })

        if (userExist) {
            return res.status(400).json({ error: "Email already exist" })
        }

        const hashedpassword = await hashPassword(password)

        const newUser = new userDb({
            name, email, phone, password: hashedpassword
        })
        const saved = await newUser.save()
        if (saved) {
            const token = await createToken(saved._id)
            res.cookie("token", token)
            return res.status(200).json({ message: "user created" })
        }


    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }

}

const login = async (req, res) => {
    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }
        const userExist = await userDb.findOne({ email })
        if (!userExist) {
            return res.status(400).json({ error: "User not found" })
        }

        const passwordmatch = await comparePassword(password, userExist.password)
        console.log(passwordmatch)
        if (!passwordmatch) {
            return res.status(400).json({ error: "Incorrect password" })
        }

        const token = await createToken(userExist._id)
        res.cookie("token", token)
        return res.status(200).json({ message: "user login successfull", userExist })


    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}

const logout = async (req,res) =>{
    try {
        res.clearCookie("token")
        res.status(200).json({message:"logout successful"})
        
    } catch (error) {
        res.status(400).json({error:"unexpected error"})
    }
}

module.exports = {
    register,
    login,
    logout
}