import nodemailer from "nodemailer";

const welcomeEmail=async(userinfo)=>{
    let transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            user:process.env.PASSWORD
        },
    });
    let mailoption={
        from:process.env.EMAIL,
        to:userinfo.email,
    }
}