
const jwt = require( "jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();

function isAuth(req, res, next) {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        req.isAuthenticated = false;
        return next();
    }

    const token = authHeader.split(" ")[1];
    if (!token || token === "") {
        {
            //req.isAuth = false;
            req.isAuthenticated = false
            return next();
        }
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        req.isAuthenticated = true;
        //req.isAuth = true;
        next();
    } catch (ex) {
        req.isAuthenticated = false;
        //req.isAuth = false;
        next();
    }
}

module.exports = isAuth