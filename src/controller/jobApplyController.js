import jobApply from "../model/jobApply";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import jwt from "jsonwebtoken";

class jobApplyController{
    static async Apply(req,res){
    const jobs=await jobApply.create(req.body);
        if(!jobs){
           return errormessage(res,401,'job is not created')
        }
        else{
            return successmessage(res,201,'job is created', jobs);
        }

    } 
    static async getAlljob(req, res) {
        const jobs = await jobApply.find();
        if (!jobs || jobs.length == 0) {
          return errormessage(res, 401, "no job found");
        } else if (jobs) {
          const status = 200;
          const msg = `all ${jobs.length} jobs Found`;
          const data = jobs;
          return successmessage(res, status, msg, data);
        }
        error;
      } 

}
export default jobApplyController