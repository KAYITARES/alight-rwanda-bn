import ApplyJob from "../model/applyjob";
import job from "../model/job";
import errormessage from "../utils/errormessage";
import successmessage  from "../utils/successmessage";

class ApplyJobController{
    static async ApplyOneJob(req,res){
        const jobid=req.params.id
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
    }
    static async getAllApplyjob(req, res) {
      const jobapply = await ApplyJob.find();
      if (!jobapply || jobapply.length == 0) {
        return errormessage(res, 401, "no jobApply found");
      } else if (jobapply) {
        const status = 200;
        const msg = `all ${jobapply.length} jobApply Found`;
        const data = jobapply;
        return successmessage(res, status, msg, data);
      }
      er;
    }
    static async getOnejobApply(req, res) {

      const id = req.params.id
      const jobapply = await ApplyJob.findById(id)
     
       try {
         if (!jobapply) {
           return errormessage(res, 401, `jobapply with id ${id} not found`);
         } else {
           return successmessage(res,200,`jobapply it's goods`,jobapply)
         }
       } catch (error) {
         return errormessage(res, 404, error);
       }
      }
      static async deleteAlljobapply(req, res) {
        const jobapply = await ApplyJob.deleteMany();
        if(!jobapply){
          return errormessage(res,401,`jobapply not deleted`)
        }
        else{
          return successmessage(res,201,`all jobapply successlfuly deleted`)
        }
      }
      static async deleteOnejobapply(req, res) {
        const id = req.params.id;
        const jobapply = await ApplyJob.findByIdAndDelete(id);
        if (!jobapply) {
          errormessage(res, 401, `jobapply with id ${id} not found`);
        } else {
          successmessage(res, 200, `jobapply successfuly deleted`, jobapply);
        }
      }

     
}
export default ApplyJobController