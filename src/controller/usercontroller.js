import USER from "../model/user";
import successmessage from "../utils/successmessage";
import errormessage from "../utils/errormessage";

class UserController{
    static async CreateUser(req,res){
        const{FirstName,LastName,UserName,Email,Password,RetypePassword,Role}=req.body
        const user=await USER.create({FirstName,LastName,UserName,Email,Password,RetypePassword,Role})
        if(!user){
            return errormessage(res,401,`user not created`)
        }
        else{
            return successmessage(res,201,`user successfuly created`,user)
        }
    }
}
export default UserController