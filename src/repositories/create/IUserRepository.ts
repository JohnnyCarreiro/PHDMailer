import { User } from '../../entities/users/Users'

export interface IUserRepository{
    findByEmail(email:string): Promise<User>
    save(user:User):Promise<User>
}