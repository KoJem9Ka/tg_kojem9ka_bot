import axios      from 'axios'
import parse      from 'node-html-parser'
import { isNil }  from 'lodash'
import { prisma } from '../index'



type TCheckReturn = {
  changed: true
  text: string
} | {
  changed: false
}

export const checkSchedule = async (): Promise<TCheckReturn> => {
  const { data } = await axios.get<string>( 'https://www.vstu.ru/student/raspisaniya/zanyatiy/index.php?dep=fevt' )
  const ulElement = parse( data ).querySelector( '.content > ul:nth-child(3)' )
  if ( isNil( ulElement ) ) throw new Error( 'Элемент списка на странице не найден!' )

  const match = data.match( /3 курс.*изменение: ([\d :-]+)/i )
  const fetchedDate = match?.[1]
  if ( !fetchedDate ) throw new Error( 'Не найдена дата на странице!' )

  const memory = await prisma.memory.findUnique( { where: { id: 1 } } )

  if ( isNil( memory ) ) {
    await prisma.memory.create( { data: { id: 1, date: fetchedDate } } )
    return {
      changed: true,
      text:    fetchedDate,
    }
  }
  if ( memory.date !== fetchedDate ) {
    await prisma.memory.update( { where: { id: 1 }, data: { date: fetchedDate } } )
    return {
      changed: true,
      text:    `${memory.date} -> ${fetchedDate}`,
    }
  }
  return { changed: false }
}