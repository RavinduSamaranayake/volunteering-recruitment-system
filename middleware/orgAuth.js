const jwt=require("jsonwebtoken");
const config = require("../config/keys");

module.exports=(req,res,next)=>{
    const token2=req.headers.authorization.split(" ")[1];
    console.log(token2);
    console.log("dsdsa");
    try{
    const token=req.headers.authorization.split(" ")[1];

    const decodedtoken=jwt.verify(token,"this_is_a_secret_string");
    req.userData={OrgId:decodedtoken.id}
    next();
    }
    catch(error){
        res.status(401).json({message:"Auth failed"}); 
    }

}