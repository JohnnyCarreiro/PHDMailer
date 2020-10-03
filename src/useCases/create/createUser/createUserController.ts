import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}
    async handle(request:Request, response:Response):Promise<Response>{
        const { name, email, whatsapp } = request.body

        try{
            const user = await this.createUserUseCase.execute({name, email, whatsapp})
            return response.status(201).send({
                user,
                message:'User create successfuly'
            })
        }catch(err){
            if(err.message === 'User already contacted us before'){
                return response.status(200).json({
                    message: err.message
                })
            }
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}