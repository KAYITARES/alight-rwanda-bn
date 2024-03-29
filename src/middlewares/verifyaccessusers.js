import errormessage from "../utils/errormessage";
import Jwt,{JsonWebTokenError}  from "jsonwebtoken";

const verifyAccessUsers=(req,res,next)=>{
    
    const token=req.headers["alight"]
    if(!token){
        return errormessage(res,401,`no token provided`)
    }
    else {
        try {
            const verifytoken=Jwt.verify(token,process.env.SECRET_KEY,{expiresIn:"1d"})
            req.user=verifytoken.user
            if(verifytoken.user.Role !=="admin" && verifytoken.user.Role !=="user"){
                return errormessage(res,401,`you don't have access`)
            }
            else{
                next()
            }
        } catch (error) {
            if(error=JsonWebTokenError){
                return errormessage(res,401,`invalid token`)
            }
            
        }
       
    }
}

export default verifyAccessUsers