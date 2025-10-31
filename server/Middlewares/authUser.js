const jwt = require('jsonwebtoken')
require('dotenv').config()


const authUser = (req, res, next) => {
    try {

        let { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ error: "jwt not found" })
        }

        const verifiedtoken = jwt.verify(token, process.env.JWT_SECRETE)

        if (!verifiedtoken) {
            return res.status(401).json({ error: "user not autherised" })
        }

        if (verifiedtoken.role !== "user") {
            return res.status(401).json({ error: "access denied" })
        }

         req.user = verifiedtoken.id

        next()

    } catch (error) {
        res.status(401).json({ error: "User autherization failed" })
    }
}


module.exports = authUser