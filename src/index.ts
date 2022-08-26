import 'dotenv/config'
import express          from 'express'
import { PrismaClient } from '../prisma/client'
import { activateBot }  from './bot'



console.clear()
export const prisma = new PrismaClient()
void activateBot()


const app = express()
const port = 3000

app.get( '/', ( req, res ) => {
  res.json( { 'message': 'ok' } )
} )
// @ts-ignore
app.use( ( err, req, res, next ) => {
  const statusCode = err.statusCode || 500
  console.error( err.message, err.stack )
  res.status( statusCode ).json( { 'message': err.message } )

  return
} )
app.listen( port, '0.0.0.0', () => {
  console.log( `Example app listening at http://localhost:${port}` )
} )