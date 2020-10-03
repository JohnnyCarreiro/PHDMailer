import { Attachment } from "nodemailer/lib/mailer";

interface IAdress{
    name:string
    address:string
}

export interface IMessage{
    to:IAdress
    from:IAdress
    subject:string
    body:string
    attachment?:Attachment
}

export interface IMailProvider{
    sendMail(message:IMessage):Promise<void>
}