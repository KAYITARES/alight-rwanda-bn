import job from "../model/job";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";

import jwt from "jsonwebtoken";



class jobController{
    static async createjob(req,res){
    const jobs=await job.create(req.body);
        if(!jobs){
           return errormessage(res,401,'job is not created')
        }
        else{
            return successmessege(res,201,'job is created', jobs);
        }

    }
    static async getAlljob(req, res) {
        const jobs = await job.find();
        if (!jobs || jobs.length == 0) {
          return errormessage(res, 401, "no job found");
        } else if (jobs) {
          const status = 200;
          const msg = `all ${jobs.length} jobs Found`;
          const data = jobs;
          return successmessege(res, status, msg, data);
        }
        er;
      }
      static async getOnejob(req, res) {

        const id = req.params.id;

        const id = req.params.ido;

        const jobs = await job.findById(id);
        if (!jobs) {
          return errormessage(res, 401, `no job found with that id : ${id}`);
        } else {

          return successmessege(res, 200, `job successfuly `, jobs);
        }
      
      }
      static async deleteAlljob(req, res) {
        const jobs = await job.deleteMany();
        return successmessege(res, 200, "all jobs is deleted", jobs);
      }
      static async deleteOnejob(req, res) {
        const id = req.params.id;
        const jobs = await job.findByIdAndDelete(id);
        if (!jobs) {
          errormessage(res, 401, `job with id ${id} not found`);
        } else {
          successmessege(res, 200, `job successfuly deleted`, jobs);
        }
      }
      static async updatejob(req, res) {
        const id = req.params.id;
        const jobs = await job.findByIdAndUpdate(id, req.body);
        if (!jobs) {
          errormessage(res, 401, `job with id ${id} not found`);
        } else {
          successmessege(res, 200, `job successfuly updated`, jobs);

          return successmessege(res, 200, `job successfuly retrieved`, jobs);

        }
      }
}
export default jobController