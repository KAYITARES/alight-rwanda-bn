import PROGRAM from "../model/program";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";


class ProgramController{
    static async PostProgram(req,res){
        const program=await PROGRAM.create(req.body)
        if(!program){
            return errormessage(res,401,`Program not Posted`)
        }
        else{
            return successmessage(res,201,`Program successfuly Posted`,program)
        }
    }

    static async GetAllProgram(req,res){
        const program=await PROGRAM.find()
        if(!program){
            return errormessage(res,401,`Programs not found`)
        }
        else{
            return successmessage(res,201,`All Programs ${program.length} successfuly retrieved`,program)
        }
    }

    static async DeleteAllPorgram(req,res){
        const program=await PROGRAM.deleteMany()
        if(!program){
            return errormessage(res,401,`Programs not deleted`)
        }
        else{
            return successmessage(res,201,`Programs successfuly deleted`)
        }
    }

    static async GetOneProgram(req,res){
        const id=req.params.id
        const program=await PROGRAM.findById(id)
            if(!program){
                return errormessage(res,401,`Program with id ${id} not found`)
            }
            else{
                return successmessage(res,201,`Program successfuly retrieved`,program)
            }
    }

    static async DeleteOneProgram(req,res){
        const id=req.params.id
        const program=await PROGRAM.findByIdAndDelete(id)
        if(!program){
            return errormessage(res,401,`Program with id ${id} not deleted`)
        }
        else{
            return successmessage(res,201,`Program successfuly deleted`)
        }
    }

    static async UpdateProgram(req,res){
        const id=req.params.id
        const program=await PROGRAM.findByIdAndUpdate(id,req.body,{new:true})
        if(!program){
            return errormessage(res,401,`Program with id ${id} not updated`)
        }
        else{
            return successmessage(res,401,`Program successfuly updated`,program)
        }
    }
}
export default ProgramController