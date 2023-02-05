import 'dotenv/config'
import { PrismaClient } from '../prisma/client'
import { StoreClass }   from './bot/store'



export const prisma = new PrismaClient()
export let state: StoreClass

const main = async () => {
  console.clear()
  state = new StoreClass(
    await prisma.admin.findMany(),
    await prisma.context.findMany(),
    await prisma.memory.findUnique( { where: { id: 1 } } ),
    await prisma.subscribed_chat.findMany(),
    await prisma.sticker_list.findMany(),
  )
  require( './utils/server' )
  require( './bot' )
  console.log( 'APP STARTED!' )
}

void main()