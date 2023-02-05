import axios                  from 'axios'
import parse, { HTMLElement } from 'node-html-parser'
import {
  isEmpty,
  isNil,
}                             from 'lodash'
import { state }              from '../../index'
import { bot }                from '../bot'
import { scheduleFileName }   from '../../utils/utils'



export type TCheckReturn = {
  isChanged: true
  text: string
} | {
  isChanged: false
}

export const fetchSchedule = async (): Promise<TCheckReturn> => {
  let html: string
  // Загрузка HTML кода страницы
  try {
    console.log( 'fetching' )
    html = (await axios.get<string>( 'https://www.vstu.ru/student/raspisaniya/zanyatiy/index.php?dep=fevt' )).data
  } catch ( e ) {
    console.log( 'fetch error!' )
    throw 'Не удалось загрузить URL'
  }
  console.log( 'fetch success' )

  //Поиск элементов списка в блоке с расписаниями
  const liElements = parse( html ).querySelectorAll( '.content > ul:nth-child(3) > li' )
  if ( isEmpty( liElements ) ) throw 'Список на странице не найден!'
  let liElement: HTMLElement | undefined
  let aElement: HTMLElement | undefined
  // Поиск нужного элемента списка
  for ( const liElement1 of liElements ) if ( /3 курс/i.test( liElement1.text ) ) {
    liElement = liElement1
    aElement = liElement1.querySelector( 'a' ) ?? undefined
    break
  }
  if ( isNil( liElement ) ) throw 'Не удалось найти строку с расписанием 3 курса'
  if ( isNil( aElement ) ) throw 'Не удалось найти ссылку на файл расписания'

  // Получение даты обновления
  const fetchedDate = (liElement.text.match( /3 курс.*?изменение: ([\d :-]+)/i ))?.[1]
  if ( !fetchedDate ) throw new Error( 'Не найдена дата на странице!' )

  const memory = state.getMemory()

  if ( isNil( memory ) || memory.date !== fetchedDate ) {
    // Получение ссылки на файл и его скачивание
    const link = aElement.attributes.href.replace( /(\.\.\/)+/g, 'https://www.vstu.ru/' )
    const { data: file } = await axios.get<Buffer>( encodeURI( link ), { responseType: 'arraybuffer' } )
    const sentMsg = await bot.sendDocument( 56146105, file, { caption: 'Файл нового расписания' }, {
      filename:    scheduleFileName( fetchedDate || '' ),
      contentType: 'xls',
    } )
    await state.setMemory( { date: fetchedDate, file_id: sentMsg.document?.file_id! } )
    await bot.deleteMessage( sentMsg.chat.id, sentMsg.message_id.toString() )
    if ( !isNil( memory ) ) {
      console.log( 'NEW SCHEDULE!' )
      return {
        isChanged: true,
        text:      `${memory.date}\nᅠᅠᅠᅠ⬇\n${fetchedDate}`,
      }
    }
  }
  return { isChanged: false }
}