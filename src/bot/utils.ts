import { prisma } from '../index'
import { isNil }  from 'lodash'



export const botCommand = ( command: string ) => new RegExp( `^\\/${command}(@kojem9ka.*?bot)?$` )

export const isAdmin = async ( userId: number ) => !isNil(await prisma.admin.findUnique( { where: { id: userId } } ))

export const isCTX = async ( userId: number | undefined, context: UserContext ): Promise<boolean> => {
  if ( isNil( userId ) ) return false
  const dbContext = await prisma.context.findUnique( { where: { userId: userId } } )
  return (isNil( dbContext ) ? UserContext.None : dbContext.context as UserContext) === context
}

export const CTX = async ( userId?: number, context?: UserContext ): Promise<UserContext | void> => {
  if ( isNil( userId ) ) return
  const dbContext = await prisma.context.findUnique( { where: { userId: userId } } )
  if ( isNil( context ) )
    return isNil( dbContext ) ? UserContext.None : dbContext.context as UserContext
  isNil( dbContext )
    ? await prisma.context.create( { data: { userId, context } } )
    : await prisma.context.update( { data: { userId, context }, where: { userId } } )
}

export const enum UserContext {
  None = 'CTX_None',
  SetStickers = 'CTX_SetStickers',
  SomethingElse = 'CTX_SomethingElse'
}