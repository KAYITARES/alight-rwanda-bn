import BLOG from "../model/blog";
import COMMENT from "../model/comment";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class CommentController{
    static async CreateComment(req,res){
        const blogid=req.params.id;
        req.body.user=req.user._id;
        const comments=await COMMENT.create(req.body)
        const blog=await BLOG.findByIdAndUpdate({_id:blogid},{$push:{Comment:comments}},{new:true})
        if(!blog){
            return errormessage(res,401,`Comment not posted`)
        }
        else{
            return successmessage(res,201,`Comment successfuly created`,blog)
        }
    }

    static async getcomment(req,res){
        const comments = await COMMENT.find()
        if(!comments){
            return errormessage(res,401,`comment not found`)
        }else{
            return successmessage(res,201,`comment retrived`,comments)
        }
    }
}
export default CommentController