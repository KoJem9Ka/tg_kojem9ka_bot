import axios      from 'axios'
import parse      from 'node-html-parser'
import { isNil }  from 'lodash'
import { prisma } from '../index'



export type TCheckReturn = {
  isChanged: true
  text: string
} | {
  isChanged: false
}

export const checkSchedule = async (): Promise<TCheckReturn> => {
  let data: string
  try {
    console.log( 'fetch start' )
    data = (await axios.get<string>( 'https://www.vstu.ru/student/raspisaniya/zanyatiy/index.php?dep=fevt' )).data
  } catch ( e ) {
    console.error( 'fetch error!' )
    throw new Error( 'Не удалось загрузить URL' )
  }
  console.log( 'fetch success!' )
  const ulElement = parse( data ).querySelector( '.content > ul:nth-child(3)' )
  if ( isNil( ulElement ) ) throw new Error( 'Элемент списка на странице не найден!' )

  const match = data.match( /3 курс.*?изменение: ([\d :-]+)/i )
  const fetchedDate = match?.[1]
  if ( !fetchedDate ) throw new Error( 'Не найдена дата на странице!' )

  const memory = await prisma.memory.findUnique( { where: { id: 1 } } )

  if ( isNil( memory ) ) {
    await prisma.memory.create( { data: { id: 1, date: fetchedDate } } )
    return {
      isChanged: true,
      text:    fetchedDate,
    }
  }
  if ( memory.date !== fetchedDate ) {
    console.log( 'NEW SCHEDULE!' )
    await prisma.memory.update( { where: { id: 1 }, data: { date: fetchedDate } } )
    return {
      isChanged: true,
      text:    `${memory.date} -> ${fetchedDate}`,
    }
  }
  return { isChanged: false }
}