import Router from 'express'
import { createUserController } from './useCases/create/createUser'

const router = Router()

router.get('/', (req, res)=>{
    console.log('Server is Running')
    res.send('Server is Running ')
    
})
router.post('/users',(req, res)=>{
    return createUserController.handle(req,res)
})

export { router }
