export const _throw = (err: string | Error) => () => {
  if ( err instanceof Error )
    throw err
  else
    throw new Error(err)
}
