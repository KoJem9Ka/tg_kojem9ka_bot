import { prisma } from '../index'
import { isNil }  from 'lodash'



export const botCommand = ( command: string ) => new RegExp( `^\\/${command}(@kojem9ka.*?bot)?$` )

export const isAdmin = async ( userId: number ) => !isNil(await prisma.admin.findUnique( { where: { id: userId } } ))

export const enum UserContext {
  None = 'CTX_None',
  SetStickers = 'CTX_SetStickers',
  SomethingElse = 'CTX_SomethingElse'
}