import Applyjob from "../model/Applyjob";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";
import jwt from "jsonwebtoken";


class jobApplyController{
    static async createjob(req,res){
    const jobs=await Applyjob.create(req.body);
        if(!jobs){
           return errormessage(res,401,'job is not created')
        }
        else{
            return successmessege(res,201,'job is created', jobs);
        }

    }
       }

export default jobController