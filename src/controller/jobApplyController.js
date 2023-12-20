import Applyjob from "../model/Applyjob";
import job from "../model/job";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";
import jwt from "jsonwebtoken";


class jobApplyController{
    static async Applyjobed(req,res){
      const jobIdParams = req.params.id;
      req.body.user = req.user._id;
      const jobapply = await Applyjob.create(req.body);
      const jobs = await job.findByIdAndUpdate(
        { _id: jobIdParams },
        {
          $push: {
            jobs:  jobs,
          },
        },
        { jobs: true }
      );
      if (!jobapply) {
        return errormessage(res, 401, `no job found`);
      } else {
        return successmessege(res, 200, `Applyjob successfuly created`, jobapply);
      }
    }
    static async getAllAppjob(req, res) {
      const  jobapply= await Applyjob.find();
      return successmessege(res, 200, `Applyed that can be successfuly ${Applyjob.length}`, jobapply);
    }
    static async deleteOnejobApply(req, res) {
      const id = req.params.id;
      const deletejobApp = await  Applyjob.findByIdAndDelete({ _id: id });
      if (!deletejobApp) {
        return errormessage(res, 401, "Applyjob not found");
      } else {
        return successmessege(res, 200, `jobApplyed successfuly deleted`,deletejobApp);
      }
    }
    }

export default jobApplyController