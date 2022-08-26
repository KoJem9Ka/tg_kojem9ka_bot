import 'dotenv/config'
import { PrismaClient } from '../prisma/client'
import { activateBot }  from './bot'



console.clear()
export const prisma = new PrismaClient()
void activateBot()