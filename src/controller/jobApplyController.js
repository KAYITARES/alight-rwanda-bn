import Applyjob from "../model/Applyjob";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";
import jwt from "jsonwebtoken";


class jobApplyController{
    static async Applyjobed(req,res){
    const jobapp=await Applyjob.create(req.body);
        if(!jobapp){
           return errormessage(res,401,'job is not Applyed')
        }
        else{
            return successmessege(res,201,'job is Applyed', jobapp);
        }

    }
    static async getAllAppjob(req, res) {
        const jobapp = await Applyjob.find();
        if (!jobapp || jobapp.length == 0) {
          return errormessage(res, 401, "no Applyjobs");
        } else if (jobapp) {
          const status = 200;
          const msg = `all ${jobapp.length} Applyjob Found`;
          const data = jobapp;
          return successmessege(res, status, msg, data);
        }
        er;
      } }

export default jobApplyController