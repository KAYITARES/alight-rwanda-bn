import USER from "../model/user";
import successmessage from "../utils/successmessage";
import errormessage from "../utils/errormessage";
import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";
import welcomeEmail from "../utils/email";

class UserController{
    static async CreateUser(req,res){
        const{FirstName,LastName,UserName,Email,Password,RetypePassword,Role}=req.body
        if(req.body.Password!==req.body.RetypePassword){
            return errormessage(res,401,`Password and RetypePassword must be matchs`)
        }
        const hashpassword=bcrypt.hashSync(req.body.Password,10)
        const user=await USER.create({FirstName,LastName,UserName,Email,Role,Password:hashpassword})
        welcomeEmail(user)
        return successmessage(res,201,`user successfuly created`,user)
    }

    static async GetAllUser(req,res){
        const user=await USER.find()
        if(!user){
            return errormessage(res,401,`user not found`)
        }
        else{
            return successmessage(res,201,`all user ${user.length} found`,user)
        }
    }

    static async DeleteAllUser(req,res){
        const user=await USER.deleteMany()
        if(!user){
            return errormessage(res,401,`users not deleted`)
        }
        else{
            return successmessage(res,201,`users successfuly deleted`)
        }
    }

    static async GetOneUser(req,res){
        const id=req.params.id
        const user=await USER.findById(id)
            if(!user){
                return errormessage(res,401,`user with ${id} not found`)
            }
            else{
                return successmessage(res,201,`user successfuly retrieved`,user)
            }
    }
    

    static async DeleteOneUser(req,res){
        const id=req.params.id
        const user=await USER.findByIdAndDelete(id)
            if(!user){
                return errormessage(res,401,`user with ${id} not found`)
            }
            else{
                return successmessage(res,201,`user successfuly deleted`)
            }
    }

    static async UpdateUser(req,res){
        const id=req.params.id
        const user=await USER.findByIdAndUpdate(id,req.body,{new:true})
        if(!user){
            return errormessage(res,401,`user with id ${id} not updated`)
        }
        else{
            return successmessage(res,201,`user successfuly updated`,user)
        }
    }

    static async Login(req,res){
        const{Email,Password}=req.body
        const user=await USER.findOne({Email})
        if(!user){
            return errormessage(res,401,`incorrect Email`)
        }
        else{
            const passwordmatch=bcrypt.compareSync(Password,user.Password)
            if(!passwordmatch){
                return errormessage(res,401,`incorrect Password`)
            }
            else{
                const token=Jwt.sign({user:user},process.env.SECRET_KEY,{expiresIn:"1d"})   
                res.status(200).json({
                    token:token,
                    data:{
                        user:user
                    }
                })
            }
        }
    }
}
export default UserController