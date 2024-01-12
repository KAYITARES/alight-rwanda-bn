import job from "../model/job";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";




class jobController{
    static async createjob(req,res){
      try {
        const jobs=await job.create(req.body);
        if(!jobs){
           return errormessage(res,401,'job is not created')
        }
        else{
            return successmessege(res,201,'job is created', jobs);
        }

      } catch (error) {
        return errormessage(res,500,error)
      }

    }

    static async getAlljob(req, res) {
        const jobs = await job.find();
        try {
          if (!jobs || jobs.length == 0) {
            return errormessage(res, 401, "no job found");
          } else if (jobs) {
            const status = 200;
            const msg = `all ${jobs.length} jobs Found`;
            const data = jobs;
            return successmessege(res, status, msg, data);
          }
        } catch (error) {
          return errormessage(res,500,error)
        }

      
      }

      static async getOnejob(req, res) {
        const id = req.params.id;
        try{
        if(id.length!==24 || id.length>24){
          return errormessage(res,401,'invalid id ')
        }
        const jobs = await job.findById(id);
        if (!jobs) {
          return errormessage(res, 401, `no job found with that id : ${id}`);
        } else {

          return successmessege(res, 200, `job successfuly `, jobs);
        }
      }catch (error) {
        return errormessage(res,500, error);
      }
      
      }

      static async deleteAlljob(req, res) {
        const jobs = await job.deleteMany();
        try {
          if(!jobs){
            return errormessage(res,401,`job not deleted`)
          }
          else{
            return successmessege(res, 200, "all jobs is deleted", jobs);
          }
        } catch (error) {
          return errormessage(res,500,error)
        }

      }

      static async deleteOnejob(req, res) {
        const id = req.params.id;
        try {
          if(id.length!==24 || id.length>24){
            return errormessage(res,401,'invalid id ')
          }
          const jobs = await job.findByIdAndDelete(id);
          if (!jobs) {
            errormessage(res, 401, `job with id ${id} not found`);
          } else {
            successmessege(res, 200, `job successfuly deleted`, jobs);
          }
        } catch (error) {
          return errormessage(res,500,error)
        }

      } 

      static async updatejob(req, res) {
        const id = req.params.id;
        try {
          if(id.length!==24 || id.length>24){
            return errormessage(res,401,'invalid id ')
          }
          const jobs = await job.findByIdAndUpdate(id, req.body);
          if (!jobs) {
            errormessage(res, 401, `job with id ${id} not found`);
          } else {
            return successmessege(res, 200, `job successfuly update`, jobs);
          }
        } catch (error) {
          return errormessage(res,500,error)
        }
      }
}
export default jobController