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

    static async Like(req,res){
            const idparams=req.params.id
            const blog=await BLOG.findById(idparams)
            if(!blog){
                return errormessage(res,401,`blog not found`)
            }
            else{
                const userid=req.user._id
                if(blog.Likes.includes(userid)){
                    return errormessage(res,401,`you are already like this blog`)
                }
                else{
                    if(blog.DisLikes.includes(userid)){
                        blog.DisLikes.pull(userid)
                    }
                    blog.Likes.push(userid)
                    blog.save()
                    return successmessage(res,200,`Like from ${req.user.FirstName}`)
                }

            }
    }

    static async DisLike(req,res){
        const idparams=req.params.id
        const blog=await BLOG.findById(idparams)
        if(!blog){
            return errormessage(res,401,`blog not found`)
        }
        else{
            const userid=req.user._id
            if(blog.DisLikes.includes(userid)){
                return errormessage(res,401,`you are already dislike this blog`)
            }
            else{
                if(blog.Likes.includes(userid)){
                    blog.Likes.pull(userid)
                }
                blog.DisLikes.push(userid)
                blog.save()
                return successmessage(res,200,`Dislike from ${req.user.FirstName}`)
            }
        }
    }
}
export default BlogController