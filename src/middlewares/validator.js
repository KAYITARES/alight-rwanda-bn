import errormessage from "../utils/errormessage";
import { check,validationResult } from "express-validator";

class Validator{
    static InputValidator(req,res,next){
        const error=validationResult(req)
        if(!error==error.isEmpty()){
            error.errors.map((err)=>{
                return errormessage(res,401,err.msg)
            })
        }
        else{
            return next()
        }
    }
    static UserAccountRule(){
        return[
                check("FirstName","please write your FirstName correctly").trim().isAlpha(),
                check("LastName","please write your LastName correctly").trim().isAlpha(),
                check("UserName","please write your UserName correctly").trim().isAlpha(),
                check("Email","please write your Email correctly").trim().isEmail(),
                check("Password","please write your Password correctly").isStrongPassword(),
        ]
    }
}
export default Validator