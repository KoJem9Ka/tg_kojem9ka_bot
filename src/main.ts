import 'dotenv/config'
import { delay }         from './utils/utils'
import { checkSchedule } from './utils/checkSchedule'
import { PrismaClient }  from '../prisma/client'
import { activateBot }   from './bot'



console.clear()
export const prisma = new PrismaClient()
void activateBot()