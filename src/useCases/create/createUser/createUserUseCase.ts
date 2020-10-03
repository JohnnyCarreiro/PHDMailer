import { User } from "../../../entities/users/Users";
import { IMailProvider } from "../../../providers/mail/IMailProvider";
import { IUserRepository } from "../../../repositories/create/IUserRepository";
import { IUserDTO } from "./createUserDTO";
import emailBody from '../../../providers/mail/emailBody'


export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private mailProvider: IMailProvider
    ){}

    async execute(data:IUserDTO):Promise<User>{
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)
        
        if(userAlreadyExists){
            const type =2
            await this.mailProvider.sendMail({
                to:{
                    name:data.name,
                    address: data.email
                },
                from:{
                    name:'Equipe PHD Representações',
                    address:'contato@phdrepresentacoes.com.br'
                },
                subject:'PHD Representações',
                body:String(emailBody.clients(data.name,type))
            })
            await this.mailProvider.sendMail({
                to:{
                    name:'Equipe PHD Representações',
                    address:'contato@phdrepresentacoes.com.br'
                },
                from:{
                    name:data.name,
                    address: data.email
                },
                subject:`Urgente - ${data.name}`,
                body:String(emailBody.team(userAlreadyExists,type))
            })
            throw new Error('User already contacted us before')
        }
        const user = new User(data)
        try {            
            const newUser = await this.userRepository.save(user)
            const type =1
                await this.mailProvider.sendMail({
                    to:{
                        name:data.name,
                        address: data.email
                    },
                    from:{
                        name:'Equipe PHD Representações',
                        address:'contato@phdrepresentacoes.com.br'
                    },
                    subject:'PHD Representações',
                    body:String(emailBody.clients(data.name,type))
                })
                await this.mailProvider.sendMail({
                    to:{
                        name:'Equipe PHD Representações',
                        address:'contato@phdrepresentacoes.com.br'
                    },
                    from:{
                        name:data.name,
                        address: data.email
                    },
                    subject:`Contato do Site - ${data.name}`,
                    body:String(emailBody.team(newUser,type))
                })
    
            return (newUser)
        } catch (error) {
            throw new Error('Unexpected error whiling save new contact')
        }
    }
}