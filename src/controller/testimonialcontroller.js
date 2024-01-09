import TESTIMONIAL from "../model/testimonial";
import USER from "../model/user";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import testimonialEmail from "../utils/testimonialemail";


class TestimonialController{
    static async PostTestimonial(req,res){
        const testimonial=await TESTIMONIAL.create(req.body)
        if(!testimonial){
            return errormessage(res,401,`Testimonial  not Posted`)
        }
        else{
            const test=await USER.find()
            test.map((tests)=>{
                testimonialEmail(tests,testimonial)
            })
            return successmessage(res,201,`Testimonial successfuly Posted`,testimonial)
        }
    }

    static async GetAllTestimonial(req,res){
        const testimonial=await TESTIMONIAL.find()
        if(!testimonial){
            return errormessage(res,401,`Testimonial not found`)
        }
        else{
            return successmessage(res,201,`Testimonial ${testimonial.length} successfuly retrieved`,testimonial)
        }
    }
    
    static async DeleteAllTestimonial(req,res){
        const testimonial=await TESTIMONIAL.deleteMany()
        if(!testimonial){
            return errormessage(res,401,`Testimonial not deleted`)
        }
        else{
            return successmessage(res,201,`Testimonial successfuly deleted`)
        }
    }

    static async GetOneTestimonial(req,res){
        const id=req.params.id
        const testimonial=await TESTIMONIAL.findById(id)
        if(!testimonial){
            return errormessage(res,401,`Testimonial with id ${id} not found`)
        }
        else{
            return successmessage(res,201,`Testimonial successfuly retrieved`,testimonial)
        }
    }

    static async DeleteOneTestimonial(req,res){
        const id=req.params.id
        const testimonial=await TESTIMONIAL.findByIdAndDelete(id)
        if(!testimonial){
            return errormessage(res,401,`Testimonial with id ${id} not deleted`)
        }
        else{
            return successmessage(res,201,`Testimonial successfuly deleted`)
        }
    }

    static async UpdateTestimonial(req,res){
        const id=req.params.id
        const testimonial=await TESTIMONIAL.findByIdAndUpdate(id,req.body,{new:true})
        if(!testimonial){
            return errormessage(res,401,`Testimonial with id ${id} not updated`)
        }
        else{
            return successmessage(res,201,`Testimonial successfuly updated`,testimonial)
        }
    }
}

export default TestimonialController