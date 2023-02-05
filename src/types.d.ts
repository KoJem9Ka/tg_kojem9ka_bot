export type ID = number

export type ReadonlyObject<T extends object> = {
  readonly [P in keyof T]: T[P] extends object ? ReadonlyObject<T[P]> : T[P]
}

export type PickOne<T> = { [P in keyof T]: Record<P, T[P]> & Partial<Record<Exclude<keyof T, P>, undefined>> }[keyof T]