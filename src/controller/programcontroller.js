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
}
export default ProgramController