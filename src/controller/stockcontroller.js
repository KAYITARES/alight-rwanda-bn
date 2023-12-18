import STOCK from "../model/stock";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class StockController{
    static async ImportProduct(req,res){
    const{ProductName,ProductPrice,Qauntity,ProductExpires}=req.body
    try {
        const ExistingStock=await STOCK.findOne({ProductName})
        if(ExistingStock){
            ExistingStock.Qauntity += Qauntity;
            await ExistingStock.save();
            return successmessage(res,201,`Product successfuly Posted`,ExistingStock)
        }
        else{
            const NewStock=await STOCK.create({ProductName,ProductPrice,Qauntity,ProductExpires})
            return successmessage(res,201,`Product successfuly Posted`,NewStock)
        }
    } catch (error) {
        return errormessage(res,500,error)
    }

    }

    static async Export(req,res){
        const{ProductName,ReqName,ReqPhone,ReqEmail,ReqLocation,ReqQauntity}=req.body
        try {
            const ExistingStock=await STOCK.findOne({ProductName})
            if(ExistingStock){
                if(ExistingStock.Qauntity >= ReqQauntity){
                    ExistingStock.Qauntity -=ReqQauntity
                    ExistingStock.ExportHistory.push({
                        ReqName,
                        ReqPhone,
                        ReqEmail,
                        ReqLocation,
                        ReqQauntity,
                        ReqTime:Date.now(),
                    })
                    await ExistingStock.save()
                    return successmessage(res,401,`product successfuly Exported`,ExistingStock.ExportHistory)
                }
                else{
                    return errormessage(res,401,`we don't have enough stock`)
                }
            }
            else{
                return errormessage(res,401,`product not found`)
            }
        } catch (error) {
            return errormessage(res,500,error)
        }

    }

    static async GetAllProduct(req,res){
        const product=await STOCK.find()
        if(!product){
            return errormessage(res,401,`Product not found`)
        }
        else{
            return successmessage(res,201,`Product ${product.length} successfuly retrieved`,product)
        }
    }

    static async DeleteAllProduct(req,res){
        const product=await STOCK.deleteMany()
        if(!product){
            return errormessage(res,401,`Product not deleted`)
        }
        else{
            return successmessage(res,201,`Product successfuly deleted`)
        }
    }

    static async GetOneProduct(req,res){
        const id=req.params.id
        const product=await STOCK.findById(id)
        if(!product){
            return errormessage(res,401,`Product with id ${id} not found`)
        }
        else{
            return successmessage(res,201,`Product successfuly retrieved`,product)
        }
    }

    static async DeleteOneProduct(req,res){
        const id=req.params.id
        const product=await STOCK.findByIdAndDelete(id)
        if(!product){
            return errormessage(res,401,`Product with id ${id} not deleted`)
        }
        else{
            return successmessage(res,201,`Product successfuly deleted`)
        }
    }

    static async UpdateProduct(req,res){
        const id=req.params.id
        const product=await STOCK.findByIdAndUpdate(id,req.body,{new:true})
        if(!product){
            return errormessage(res,401,`Product with id ${id} not found`)
        }
        else{
            return successmessage(res,201,`Product successfuly updated`,product)
        }
    }
}

export default StockController