import STOCK from "../model/stock";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class StockController{
    static async PostProduct(req,res){
        const stock=await STOCK.create(req.body)
        if(!stock){
            return errormessage(res,401,`Product not Posted`)
        }
        else{
            return successmessage(res,201,`Product successfuly Posted`,stock)
        }
    }

    static async GetAllProduct(req,res){
        const stock=await STOCK.find()
        if(!stock){
            return errormessage(res,401,`Product not found`)
        }
        else{
            return successmessage(res,201,`Product ${stock.length} successfuly retrieved`,stock)
        }
    }

    static async DeleteAllProduct(req,res){
        const stock=await STOCK.deleteMany()
        if(!stock){
            return errormessage(res,401,`Product not deleted`)
        }
        else{
            return successmessage(res,201,`Product successfuly deleted`)
        }
    }

    static async GetOneProduct(req,res){
        const id=req.params.id
        const stock=await STOCK.findById(id)
        if(!stock){
            return errormessage(res,401,`Product with id ${id} not found`)
        }
        else{
            return successmessage(res,201,`Product successfuly retrieved`,stock)
        }
    }

    static async DeleteOneProduct(req,res){
        const id=req.params.id
        const stock=await STOCK.findByIdAndDelete(id)
        if(!stock){
            return errormessage(res,401,`Product with id ${id} not deleted`)
        }
        else{
            return successmessage(res,201,`Product successfuly deleted`)
        }
    }

    static async UpdateProduct(req,res){
        const id=req.params.id
        const stock=await STOCK.findByIdAndUpdate(id,req.body,{new:true})
        if(!stock){
            return errormessage(res,401,`Product with id ${id} not found`)
        }
        else{
            return successmessage(res,201,`Product successfuly updated`,stock)
        }
    }
}

export default StockController