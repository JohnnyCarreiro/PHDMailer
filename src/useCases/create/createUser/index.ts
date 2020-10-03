import { DomainMailProvider } from '../../../providers/mail/implamentations/domainMailProvider'
import { PostgresUserRepo } from '../../../repositories/create/implamentations/postgresUserRepo'
import { CreateUserController } from './createUserController'
import { CreateUserUseCase } from './createUserUseCase'

const postgresUserRepo = new PostgresUserRepo()
const mailtrapMailProvider = new DomainMailProvider()

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepo,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController}