import { app } from './app'
import 'dotenv/config'

app.listen(process.env.PORT || 3333)
console.log(`Server is Running on port ${process.env.PORT}`)