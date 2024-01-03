import BLOG from "../model/blog";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class BlogController{
    static async CreateBlog(req,res,){
        const blog=await BLOG.create(req.body)
        if(!blog){
            return errormessage(res,401,`Blogs not posted`)
        }
        else{
            return successmessage(res,201,`Blogs  successfuly posted`,blog)
        }
    }

    static async GetAllBlog(req,res){
        const blog=await BLOG.find()
        if(!blog){
            return errormessage(res,401,`Blogs not found`)
        }
        else{
            return successmessage(res,201,`All Blogs ${blog.length} successfuly retrieved`,blog)
        }
    }

    static async DeleteAllBLogs(req,res){
        const blog=await BLOG.deleteMany()
        if(!blog){
            return errormessage(res,401,`Blogs not deleted`)
        }
        else{
            return successmessage(res,201,`All Blogs successfuly deleted`)
        }
    }
}
export default BlogController