import Mail from "nodemailer/lib/mailer";
import nodemailer from "nodemailer"
import { IMailProvider, IMessage } from "../IMailProvider";
import { mailer } from '../../../../envconfig'

export class DomainMailProvider implements IMailProvider{
    private transporter!: Mail
    constructor() {
        this.transporter = nodemailer.createTransport({
            host:mailer.MT_HOST,
            port:Number(mailer.MT_PORT),
            auth:{
                user:mailer.MT_USER,
                pass:mailer.MT_PASS,
            }
        })
    }
    async sendMail(message:IMessage):Promise<void>{
        const { to, from, subject, body } = message

        await this.transporter.sendMail({
            to:{
                name: to.name,
                address:to.address
            },
            from:{
                name:from.name,
                address: from.address
            },
            subject ,
            html: body
        })
    }
}