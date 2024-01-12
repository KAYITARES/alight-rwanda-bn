import ApplyJob from "../model/applyjob";
import job from "../model/job";
import errormessage from "../utils/errormessage";
import successmessage  from "../utils/successmessage";

class ApplyJobController{
    static async ApplyOneJob(req,res){
        const jobid=req.params.id
        try {
          if(jobid.length !== 24 || jobid.length <24){
            return errormessage(res,401,`invalid id`)
        }
          const idexisting=await job.findById(jobid)
          if(!idexisting){
            console.log('no job with that id')
          }else{
            const jobapplicant=await ApplyJob.create(req.body)
            const jobs=await job.findByIdAndUpdate({_id:jobid},{$push:{jobapply:jobapplicant}},{new:true})
            if(!jobs){
              return errormessage(res,401,`job not applyed`)
            }
            else{
              return successmessage(res,200,`job successfuly applyed`,jobs)
            }
          }
        } catch (error) {
          return errormessage(res,500,error)
        }
        
 
    }
    static async getAllApplyjob(req, res) {
      const jobapply = await ApplyJob.find();
      try {
        if (!jobapply || jobapply.length == 0) {
          return errormessage(res, 401, "no jobApply found");
        } else if (jobapply) {
          const status = 200;
          const msg = `all ${jobapply.length} jobApply Found`;
          const data = jobapply;
          return successmessage(res, status, msg, data);
        }
      } catch (error) {
        return errormessage(res,500,error)
      }

    }
   
     
}
export default ApplyJobController