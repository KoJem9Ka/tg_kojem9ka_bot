import 'dotenv/config'
import { activateBot }  from './bot'
import { PrismaClient } from '../prisma/client'
import express from 'express'



console.clear()
console.log( 'App starting!...' )
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

console.log( 'App started!' )
