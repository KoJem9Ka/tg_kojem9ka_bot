import { UserContext } from './utils'
import {
  admin,
  context,
  memory,
  sticker_list,
  subscribed_chat,
}                      from '../../prisma/client'
import { prisma }      from '../index'
import {
  ID,
  ReadonlyObject,
}                      from '../types'
import {
  isNil,
  sample,
  some,
}                      from 'lodash'



type TMemory = ReadonlyObject<Omit<memory, 'id'>> | null

export class StoreClass {
  private readonly admins: Set<ID>
  private context: Map<ID, UserContext>
  private memory: TMemory
  private subscribed: Set<ID>
  private stickers: sticker_list[]

  constructor(
    admins: admin[],
    context: context[],
    memory: memory | null,
    subscribed: subscribed_chat[],
    stickers: sticker_list[],
  ) {
    this.admins = new Set( admins.map( el => el.id ) )
    this.context = new Map( context.map( ctx => [ ctx.userId, ctx.context as UserContext ] ) )
    this.memory = memory ? { file_id: memory.file_id, date: memory.date } : null
    this.subscribed = new Set( subscribed.map( el => +el.id ) )
    this.stickers = stickers
  }

  getAdmins = () => Array.from( this.admins )
  isAdmin = ( userId: number | undefined ) => userId && this.admins.has( userId )
  notAdmin = ( userId: number | undefined ) => !this.isAdmin( userId )

  getContext = ( userId: number | undefined ): UserContext => userId && this.context.get( userId ) || UserContext.None
  isContext = ( userId: number | undefined, context: UserContext ) => this.getContext( userId ) === context
  notContext = ( userId: number | undefined, context: UserContext ) => !this.isContext( userId, context )
  setContext = async ( userId: number | undefined, context: UserContext ) => {
    if ( isNil( userId ) ) return
    this.context.has( userId )
      ? await prisma.context.update( { data: { userId, context }, where: { userId } } )
      : await prisma.context.create( { data: { userId, context } } )
    this.context.set( userId, context )
  }

  getMemory = () => this.memory
  setMemory = async ( { date, file_id }: NonNullable<TMemory> ) => {
    isNil( this.memory )
      ? await prisma.memory.create( { data: { id: 1, date, file_id } } )
      : await prisma.memory.update( { data: { date, file_id }, where: { id: 1 } } )
    this.memory = { date, file_id }
  }

  isSubscribed = ( chatId: number ) => this.subscribed.has( chatId )
  setSubscribed = async ( chatId: number, subscribe: boolean ) => {
    if ( this.subscribed.has( chatId ) === subscribe ) return false
    if ( subscribe ) {
      await prisma.subscribed_chat.create( { data: { id: chatId.toString() } } )
      this.subscribed.add( chatId )
    } else {
      await prisma.subscribed_chat.delete( { where: { id: chatId.toString() } } )
      this.subscribed.delete( chatId )
    }
    return true
  }

  randomStickerId = () => sample( this.stickers )?.file_id
  removeSticker = async ( { name, file_uniq_id }: Omit<sticker_list, 'file_id'> ) => {
    if ( !some( this.stickers, { file_uniq_id } ) ) return false
    this.stickers = this.stickers.filter( el => el.file_uniq_id !== file_uniq_id )
    await prisma.sticker_list.deleteMany( { where: { file_uniq_id } } )
    return true
  }
  addSticker = async ( { name, file_id, file_uniq_id }: sticker_list ) => {
    if ( some( this.stickers, { file_uniq_id } ) ) return false
    this.stickers.push( { name, file_uniq_id, file_id } )
    await prisma.sticker_list.create( { data: { name, file_id, file_uniq_id } } )
    return true
  }
}
