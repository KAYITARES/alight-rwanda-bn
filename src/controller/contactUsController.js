import contactUs from "../model/contactUs";
import errormessage from "../utils/errormessage";
import successmessege from "../utils/successmessage";
import jwt from "jsonwebtoken";

class contactUsController{
 static async  createContact(req,res){
    const Contact=await contactUs.create(req.body)
    
    if(!Contact){
        return errormessage(res,401,"contact is not valiable")
        }
        else{
            return successmessege(res,201,"contact is full",Contact)
        }
 }
 static async getAllContact(req, res) {
  
  try {
    const Contact = await contactUs.find();
    if (!Contact) {
      return errormessage(res, 401, `No contacts Found`);
    } else {
      return successmessege(res, 200, `contacts ${ Contact.length} found`,Contact);
    }
  } catch (error) {
    return errormessage(res, 404, `jkkuk`);
  }
}
static async getOnecontact(req, res) {

  const id = req.params.id
  const Contact = await contactUs.findById(id)
 
   try {
     if (!Contact) {
       return errormessage(res, 401, `contact with id ${id} not found`);
     } else {
       return successmessege(res,200,`contact is Available`,Contact)
     }
   } catch (error) {
     return errormessage(res, 404, error);
   }
  }

}
export default contactUsController