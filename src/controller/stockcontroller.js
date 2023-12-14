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
}

export default StockController