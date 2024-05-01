
const jwt = require( "jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();

function isRequestAuthenticated(req, res, next) {
    console.log("request middleware running")
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        req.isAuth = false;
        console.log("no auth header");
        return next();
    }

    const token = authHeader.split(" ")[1];
    if (!token || token === "") {
        {

            console.log("no token");
            req.isAuth = false
            return next();
        }
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        req.isAuth = true;
        //req.isAuth = true;
        console.log("token valid")
        next();
    } catch (ex) {
        req.isAuth = false;
        //req.isAuth = false;
        console.log("token invalid "+ex);
        next();
    }
}

module.exports = isRequestAuthenticated