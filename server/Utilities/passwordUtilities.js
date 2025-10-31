const bcrypt = require("bcrypt");


const hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt()
    const hashedpassword = bcrypt.hash(password,salt)
    return hashedpassword;
}

const comparePassword = async (password,hashedpassword)=>{
    const passwordmatch = await bcrypt.compare(password,hashedpassword)
    return passwordmatch;
}



module.exports = {hashPassword,comparePassword}