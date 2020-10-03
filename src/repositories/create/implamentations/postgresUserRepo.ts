import { User } from "../../../entities/users/Users";
import db from "../../database/connections";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepo implements IUserRepository{
    async findByEmail(email:string):Promise<User>{
        const user = await db('users').select('users.*')
            .where('users.email', '=', email).returning('users.*')

        return user[0]
    }
    async save(user:User):Promise<User>{
        const trx = await db.transaction()
        try {
            const { id, name, email, whatsapp } = user
            await trx('users').insert({
                id,
                name,
                email,
                whatsapp
            }).returning('users.*')
            await trx.commit()

            return user
        } catch (err) {
            await trx.rollback()
            throw new Error('Unexpected error')
        }
    }
}