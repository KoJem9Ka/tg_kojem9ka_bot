import 'dotenv/config'
import express          from 'express'
import { PrismaClient } from '../prisma/client'
import { activateBot }  from './bot'



console.clear()
export const prisma = new PrismaClient()
void activateBot()


const app = express()
const port = process.env.PORT || 5000
app.set( 'port', port )
app.get( '/', function ( request, response ) {
  const result = 'App is running'
  response.send( result )
} )
app.listen( app.get( 'port' ), function () {
  console.log( 'App is running, server is listening on port ', app.get( 'port' ) )
} )