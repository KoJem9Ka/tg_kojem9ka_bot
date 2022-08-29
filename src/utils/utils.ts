export const delay = async ( ms: number ) => await new Promise(
  ( resolve, reject ) => setTimeout( resolve, ms ),
)


const onCycle = () => {
  const seen = new WeakSet()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return ( key: unknown, value: unknown ) => {
    if ( typeof value === 'object' && value !== null ) {
      if ( seen.has( value ) ) return
      seen.add( value )
    }
    return value
  }
}
export const getJSON = ( obj?: object | null ) => JSON.stringify( obj, onCycle() )

export const scheduleFileName = ( date: string ) => `Расписание ${date?.replace( / (:?\d{2}){3}/g, '' )}, 3 курс.xls`