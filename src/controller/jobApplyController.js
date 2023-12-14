import Applyjob from "../model/Applyjob";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";
import jwt from "jsonwebtoken";


class jobApplyController{
    static async Applyjobed(req,res){
    const jobapp=await Applyjob.create(req.body);
        if(!jobapp){
           return errormessage(res,401,'job is not created')
        }
        else{
            return successmessege(res,201,'job is created', jobapp);
        }

    }
       }

export default jobApplyController