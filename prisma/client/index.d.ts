
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model memory
 * 
 */
export type memory = {
  id: number
  date: string | null
}

/**
 * Model signed_chats
 * 
 */
export type signed_chats = {
  chat_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Memories
 * const memories = await prisma.memory.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Memories
   * const memories = await prisma.memory.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.memory`: Exposes CRUD operations for the **memory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memories
    * const memories = await prisma.memory.findMany()
    * ```
    */
  get memory(): Prisma.memoryDelegate<GlobalReject>;

  /**
   * `prisma.signed_chats`: Exposes CRUD operations for the **signed_chats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signed_chats
    * const signed_chats = await prisma.signed_chats.findMany()
    * ```
    */
  get signed_chats(): Prisma.signed_chatsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    memory: 'memory',
    signed_chats: 'signed_chats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model memory
   */


  export type AggregateMemory = {
    _count: MemoryCountAggregateOutputType | null
    _avg: MemoryAvgAggregateOutputType | null
    _sum: MemorySumAggregateOutputType | null
    _min: MemoryMinAggregateOutputType | null
    _max: MemoryMaxAggregateOutputType | null
  }

  export type MemoryAvgAggregateOutputType = {
    id: number | null
  }

  export type MemorySumAggregateOutputType = {
    id: number | null
  }

  export type MemoryMinAggregateOutputType = {
    id: number | null
    date: string | null
  }

  export type MemoryMaxAggregateOutputType = {
    id: number | null
    date: string | null
  }

  export type MemoryCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type MemoryAvgAggregateInputType = {
    id?: true
  }

  export type MemorySumAggregateInputType = {
    id?: true
  }

  export type MemoryMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type MemoryMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type MemoryCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type MemoryAggregateArgs = {
    /**
     * Filter which memory to aggregate.
     * 
    **/
    where?: memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memories to fetch.
     * 
    **/
    orderBy?: Enumerable<memoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memories
    **/
    _count?: true | MemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryMaxAggregateInputType
  }

  export type GetMemoryAggregateType<T extends MemoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemory[P]>
      : GetScalarType<T[P], AggregateMemory[P]>
  }




  export type MemoryGroupByArgs = {
    where?: memoryWhereInput
    orderBy?: Enumerable<memoryOrderByWithAggregationInput>
    by: Array<MemoryScalarFieldEnum>
    having?: memoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryCountAggregateInputType | true
    _avg?: MemoryAvgAggregateInputType
    _sum?: MemorySumAggregateInputType
    _min?: MemoryMinAggregateInputType
    _max?: MemoryMaxAggregateInputType
  }


  export type MemoryGroupByOutputType = {
    id: number
    date: string | null
    _count: MemoryCountAggregateOutputType | null
    _avg: MemoryAvgAggregateOutputType | null
    _sum: MemorySumAggregateOutputType | null
    _min: MemoryMinAggregateOutputType | null
    _max: MemoryMaxAggregateOutputType | null
  }

  type GetMemoryGroupByPayload<T extends MemoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryGroupByOutputType[P]>
        }
      >
    >


  export type memorySelect = {
    id?: boolean
    date?: boolean
  }

  export type memoryGetPayload<
    S extends boolean | null | undefined | memoryArgs,
    U = keyof S
      > = S extends true
        ? memory
    : S extends undefined
    ? never
    : S extends memoryArgs | memoryFindManyArgs
    ?'include' extends U
    ? memory 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof memory ? memory[P] : never
  } 
    : memory
  : memory


  type memoryCountArgs = Merge<
    Omit<memoryFindManyArgs, 'select' | 'include'> & {
      select?: MemoryCountAggregateInputType | true
    }
  >

  export interface memoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Memory that matches the filter.
     * @param {memoryFindUniqueArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends memoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, memoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'memory'> extends True ? CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>> : CheckSelect<T, Prisma__memoryClient<memory | null >, Prisma__memoryClient<memoryGetPayload<T> | null >>

    /**
     * Find the first Memory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoryFindFirstArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends memoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, memoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'memory'> extends True ? CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>> : CheckSelect<T, Prisma__memoryClient<memory | null >, Prisma__memoryClient<memoryGetPayload<T> | null >>

    /**
     * Find zero or more Memories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memories
     * const memories = await prisma.memory.findMany()
     * 
     * // Get first 10 Memories
     * const memories = await prisma.memory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryWithIdOnly = await prisma.memory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends memoryFindManyArgs>(
      args?: SelectSubset<T, memoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<memory>>, PrismaPromise<Array<memoryGetPayload<T>>>>

    /**
     * Create a Memory.
     * @param {memoryCreateArgs} args - Arguments to create a Memory.
     * @example
     * // Create one Memory
     * const Memory = await prisma.memory.create({
     *   data: {
     *     // ... data to create a Memory
     *   }
     * })
     * 
    **/
    create<T extends memoryCreateArgs>(
      args: SelectSubset<T, memoryCreateArgs>
    ): CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>>

    /**
     * Delete a Memory.
     * @param {memoryDeleteArgs} args - Arguments to delete one Memory.
     * @example
     * // Delete one Memory
     * const Memory = await prisma.memory.delete({
     *   where: {
     *     // ... filter to delete one Memory
     *   }
     * })
     * 
    **/
    delete<T extends memoryDeleteArgs>(
      args: SelectSubset<T, memoryDeleteArgs>
    ): CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>>

    /**
     * Update one Memory.
     * @param {memoryUpdateArgs} args - Arguments to update one Memory.
     * @example
     * // Update one Memory
     * const memory = await prisma.memory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends memoryUpdateArgs>(
      args: SelectSubset<T, memoryUpdateArgs>
    ): CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>>

    /**
     * Delete zero or more Memories.
     * @param {memoryDeleteManyArgs} args - Arguments to filter Memories to delete.
     * @example
     * // Delete a few Memories
     * const { count } = await prisma.memory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends memoryDeleteManyArgs>(
      args?: SelectSubset<T, memoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memories
     * const memory = await prisma.memory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends memoryUpdateManyArgs>(
      args: SelectSubset<T, memoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Memory.
     * @param {memoryUpsertArgs} args - Arguments to update or create a Memory.
     * @example
     * // Update or create a Memory
     * const memory = await prisma.memory.upsert({
     *   create: {
     *     // ... data to create a Memory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memory we want to update
     *   }
     * })
    **/
    upsert<T extends memoryUpsertArgs>(
      args: SelectSubset<T, memoryUpsertArgs>
    ): CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>>

    /**
     * Find one Memory that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {memoryFindUniqueOrThrowArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends memoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, memoryFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>>

    /**
     * Find the first Memory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoryFindFirstOrThrowArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends memoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, memoryFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__memoryClient<memory>, Prisma__memoryClient<memoryGetPayload<T>>>

    /**
     * Count the number of Memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memoryCountArgs} args - Arguments to filter Memories to count.
     * @example
     * // Count the number of Memories
     * const count = await prisma.memory.count({
     *   where: {
     *     // ... the filter for the Memories we want to count
     *   }
     * })
    **/
    count<T extends memoryCountArgs>(
      args?: Subset<T, memoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoryAggregateArgs>(args: Subset<T, MemoryAggregateArgs>): PrismaPromise<GetMemoryAggregateType<T>>

    /**
     * Group by Memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryGroupByArgs['orderBy'] }
        : { orderBy?: MemoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for memory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__memoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * memory base type for findUnique actions
   */
  export type memoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * Filter, which memory to fetch.
     * 
    **/
    where: memoryWhereUniqueInput
  }

  /**
   * memory: findUnique
   */
  export interface memoryFindUniqueArgs extends memoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * memory base type for findFirst actions
   */
  export type memoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * Filter, which memory to fetch.
     * 
    **/
    where?: memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memories to fetch.
     * 
    **/
    orderBy?: Enumerable<memoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memories.
     * 
    **/
    cursor?: memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memories.
     * 
    **/
    distinct?: Enumerable<MemoryScalarFieldEnum>
  }

  /**
   * memory: findFirst
   */
  export interface memoryFindFirstArgs extends memoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * memory findMany
   */
  export type memoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * Filter, which memories to fetch.
     * 
    **/
    where?: memoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memories to fetch.
     * 
    **/
    orderBy?: Enumerable<memoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memories.
     * 
    **/
    cursor?: memoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MemoryScalarFieldEnum>
  }


  /**
   * memory create
   */
  export type memoryCreateArgs = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * The data needed to create a memory.
     * 
    **/
    data: XOR<memoryCreateInput, memoryUncheckedCreateInput>
  }


  /**
   * memory update
   */
  export type memoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * The data needed to update a memory.
     * 
    **/
    data: XOR<memoryUpdateInput, memoryUncheckedUpdateInput>
    /**
     * Choose, which memory to update.
     * 
    **/
    where: memoryWhereUniqueInput
  }


  /**
   * memory updateMany
   */
  export type memoryUpdateManyArgs = {
    /**
     * The data used to update memories.
     * 
    **/
    data: XOR<memoryUpdateManyMutationInput, memoryUncheckedUpdateManyInput>
    /**
     * Filter which memories to update
     * 
    **/
    where?: memoryWhereInput
  }


  /**
   * memory upsert
   */
  export type memoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * The filter to search for the memory to update in case it exists.
     * 
    **/
    where: memoryWhereUniqueInput
    /**
     * In case the memory found by the `where` argument doesn't exist, create a new memory with this data.
     * 
    **/
    create: XOR<memoryCreateInput, memoryUncheckedCreateInput>
    /**
     * In case the memory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<memoryUpdateInput, memoryUncheckedUpdateInput>
  }


  /**
   * memory delete
   */
  export type memoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
    /**
     * Filter which memory to delete.
     * 
    **/
    where: memoryWhereUniqueInput
  }


  /**
   * memory deleteMany
   */
  export type memoryDeleteManyArgs = {
    /**
     * Filter which memories to delete
     * 
    **/
    where?: memoryWhereInput
  }


  /**
   * memory: findUniqueOrThrow
   */
  export type memoryFindUniqueOrThrowArgs = memoryFindUniqueArgsBase
      

  /**
   * memory: findFirstOrThrow
   */
  export type memoryFindFirstOrThrowArgs = memoryFindFirstArgsBase
      

  /**
   * memory without action
   */
  export type memoryArgs = {
    /**
     * Select specific fields to fetch from the memory
     * 
    **/
    select?: memorySelect | null
  }



  /**
   * Model signed_chats
   */


  export type AggregateSigned_chats = {
    _count: Signed_chatsCountAggregateOutputType | null
    _min: Signed_chatsMinAggregateOutputType | null
    _max: Signed_chatsMaxAggregateOutputType | null
  }

  export type Signed_chatsMinAggregateOutputType = {
    chat_id: string | null
  }

  export type Signed_chatsMaxAggregateOutputType = {
    chat_id: string | null
  }

  export type Signed_chatsCountAggregateOutputType = {
    chat_id: number
    _all: number
  }


  export type Signed_chatsMinAggregateInputType = {
    chat_id?: true
  }

  export type Signed_chatsMaxAggregateInputType = {
    chat_id?: true
  }

  export type Signed_chatsCountAggregateInputType = {
    chat_id?: true
    _all?: true
  }

  export type Signed_chatsAggregateArgs = {
    /**
     * Filter which signed_chats to aggregate.
     * 
    **/
    where?: signed_chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of signed_chats to fetch.
     * 
    **/
    orderBy?: Enumerable<signed_chatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: signed_chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` signed_chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` signed_chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned signed_chats
    **/
    _count?: true | Signed_chatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Signed_chatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Signed_chatsMaxAggregateInputType
  }

  export type GetSigned_chatsAggregateType<T extends Signed_chatsAggregateArgs> = {
        [P in keyof T & keyof AggregateSigned_chats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSigned_chats[P]>
      : GetScalarType<T[P], AggregateSigned_chats[P]>
  }




  export type Signed_chatsGroupByArgs = {
    where?: signed_chatsWhereInput
    orderBy?: Enumerable<signed_chatsOrderByWithAggregationInput>
    by: Array<Signed_chatsScalarFieldEnum>
    having?: signed_chatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Signed_chatsCountAggregateInputType | true
    _min?: Signed_chatsMinAggregateInputType
    _max?: Signed_chatsMaxAggregateInputType
  }


  export type Signed_chatsGroupByOutputType = {
    chat_id: string
    _count: Signed_chatsCountAggregateOutputType | null
    _min: Signed_chatsMinAggregateOutputType | null
    _max: Signed_chatsMaxAggregateOutputType | null
  }

  type GetSigned_chatsGroupByPayload<T extends Signed_chatsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Signed_chatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Signed_chatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Signed_chatsGroupByOutputType[P]>
            : GetScalarType<T[P], Signed_chatsGroupByOutputType[P]>
        }
      >
    >


  export type signed_chatsSelect = {
    chat_id?: boolean
  }

  export type signed_chatsGetPayload<
    S extends boolean | null | undefined | signed_chatsArgs,
    U = keyof S
      > = S extends true
        ? signed_chats
    : S extends undefined
    ? never
    : S extends signed_chatsArgs | signed_chatsFindManyArgs
    ?'include' extends U
    ? signed_chats 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof signed_chats ? signed_chats[P] : never
  } 
    : signed_chats
  : signed_chats


  type signed_chatsCountArgs = Merge<
    Omit<signed_chatsFindManyArgs, 'select' | 'include'> & {
      select?: Signed_chatsCountAggregateInputType | true
    }
  >

  export interface signed_chatsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Signed_chats that matches the filter.
     * @param {signed_chatsFindUniqueArgs} args - Arguments to find a Signed_chats
     * @example
     * // Get one Signed_chats
     * const signed_chats = await prisma.signed_chats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends signed_chatsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, signed_chatsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'signed_chats'> extends True ? CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>> : CheckSelect<T, Prisma__signed_chatsClient<signed_chats | null >, Prisma__signed_chatsClient<signed_chatsGetPayload<T> | null >>

    /**
     * Find the first Signed_chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {signed_chatsFindFirstArgs} args - Arguments to find a Signed_chats
     * @example
     * // Get one Signed_chats
     * const signed_chats = await prisma.signed_chats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends signed_chatsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, signed_chatsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'signed_chats'> extends True ? CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>> : CheckSelect<T, Prisma__signed_chatsClient<signed_chats | null >, Prisma__signed_chatsClient<signed_chatsGetPayload<T> | null >>

    /**
     * Find zero or more Signed_chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {signed_chatsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signed_chats
     * const signed_chats = await prisma.signed_chats.findMany()
     * 
     * // Get first 10 Signed_chats
     * const signed_chats = await prisma.signed_chats.findMany({ take: 10 })
     * 
     * // Only select the `chat_id`
     * const signed_chatsWithChat_idOnly = await prisma.signed_chats.findMany({ select: { chat_id: true } })
     * 
    **/
    findMany<T extends signed_chatsFindManyArgs>(
      args?: SelectSubset<T, signed_chatsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<signed_chats>>, PrismaPromise<Array<signed_chatsGetPayload<T>>>>

    /**
     * Create a Signed_chats.
     * @param {signed_chatsCreateArgs} args - Arguments to create a Signed_chats.
     * @example
     * // Create one Signed_chats
     * const Signed_chats = await prisma.signed_chats.create({
     *   data: {
     *     // ... data to create a Signed_chats
     *   }
     * })
     * 
    **/
    create<T extends signed_chatsCreateArgs>(
      args: SelectSubset<T, signed_chatsCreateArgs>
    ): CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>>

    /**
     * Delete a Signed_chats.
     * @param {signed_chatsDeleteArgs} args - Arguments to delete one Signed_chats.
     * @example
     * // Delete one Signed_chats
     * const Signed_chats = await prisma.signed_chats.delete({
     *   where: {
     *     // ... filter to delete one Signed_chats
     *   }
     * })
     * 
    **/
    delete<T extends signed_chatsDeleteArgs>(
      args: SelectSubset<T, signed_chatsDeleteArgs>
    ): CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>>

    /**
     * Update one Signed_chats.
     * @param {signed_chatsUpdateArgs} args - Arguments to update one Signed_chats.
     * @example
     * // Update one Signed_chats
     * const signed_chats = await prisma.signed_chats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends signed_chatsUpdateArgs>(
      args: SelectSubset<T, signed_chatsUpdateArgs>
    ): CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>>

    /**
     * Delete zero or more Signed_chats.
     * @param {signed_chatsDeleteManyArgs} args - Arguments to filter Signed_chats to delete.
     * @example
     * // Delete a few Signed_chats
     * const { count } = await prisma.signed_chats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends signed_chatsDeleteManyArgs>(
      args?: SelectSubset<T, signed_chatsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signed_chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {signed_chatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signed_chats
     * const signed_chats = await prisma.signed_chats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends signed_chatsUpdateManyArgs>(
      args: SelectSubset<T, signed_chatsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Signed_chats.
     * @param {signed_chatsUpsertArgs} args - Arguments to update or create a Signed_chats.
     * @example
     * // Update or create a Signed_chats
     * const signed_chats = await prisma.signed_chats.upsert({
     *   create: {
     *     // ... data to create a Signed_chats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signed_chats we want to update
     *   }
     * })
    **/
    upsert<T extends signed_chatsUpsertArgs>(
      args: SelectSubset<T, signed_chatsUpsertArgs>
    ): CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>>

    /**
     * Find one Signed_chats that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {signed_chatsFindUniqueOrThrowArgs} args - Arguments to find a Signed_chats
     * @example
     * // Get one Signed_chats
     * const signed_chats = await prisma.signed_chats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends signed_chatsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, signed_chatsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>>

    /**
     * Find the first Signed_chats that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {signed_chatsFindFirstOrThrowArgs} args - Arguments to find a Signed_chats
     * @example
     * // Get one Signed_chats
     * const signed_chats = await prisma.signed_chats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends signed_chatsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, signed_chatsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__signed_chatsClient<signed_chats>, Prisma__signed_chatsClient<signed_chatsGetPayload<T>>>

    /**
     * Count the number of Signed_chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {signed_chatsCountArgs} args - Arguments to filter Signed_chats to count.
     * @example
     * // Count the number of Signed_chats
     * const count = await prisma.signed_chats.count({
     *   where: {
     *     // ... the filter for the Signed_chats we want to count
     *   }
     * })
    **/
    count<T extends signed_chatsCountArgs>(
      args?: Subset<T, signed_chatsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Signed_chatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signed_chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Signed_chatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Signed_chatsAggregateArgs>(args: Subset<T, Signed_chatsAggregateArgs>): PrismaPromise<GetSigned_chatsAggregateType<T>>

    /**
     * Group by Signed_chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Signed_chatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Signed_chatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Signed_chatsGroupByArgs['orderBy'] }
        : { orderBy?: Signed_chatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Signed_chatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSigned_chatsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for signed_chats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__signed_chatsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * signed_chats base type for findUnique actions
   */
  export type signed_chatsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * Filter, which signed_chats to fetch.
     * 
    **/
    where: signed_chatsWhereUniqueInput
  }

  /**
   * signed_chats: findUnique
   */
  export interface signed_chatsFindUniqueArgs extends signed_chatsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * signed_chats base type for findFirst actions
   */
  export type signed_chatsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * Filter, which signed_chats to fetch.
     * 
    **/
    where?: signed_chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of signed_chats to fetch.
     * 
    **/
    orderBy?: Enumerable<signed_chatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for signed_chats.
     * 
    **/
    cursor?: signed_chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` signed_chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` signed_chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of signed_chats.
     * 
    **/
    distinct?: Enumerable<Signed_chatsScalarFieldEnum>
  }

  /**
   * signed_chats: findFirst
   */
  export interface signed_chatsFindFirstArgs extends signed_chatsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * signed_chats findMany
   */
  export type signed_chatsFindManyArgs = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * Filter, which signed_chats to fetch.
     * 
    **/
    where?: signed_chatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of signed_chats to fetch.
     * 
    **/
    orderBy?: Enumerable<signed_chatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing signed_chats.
     * 
    **/
    cursor?: signed_chatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` signed_chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` signed_chats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Signed_chatsScalarFieldEnum>
  }


  /**
   * signed_chats create
   */
  export type signed_chatsCreateArgs = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * The data needed to create a signed_chats.
     * 
    **/
    data: XOR<signed_chatsCreateInput, signed_chatsUncheckedCreateInput>
  }


  /**
   * signed_chats update
   */
  export type signed_chatsUpdateArgs = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * The data needed to update a signed_chats.
     * 
    **/
    data: XOR<signed_chatsUpdateInput, signed_chatsUncheckedUpdateInput>
    /**
     * Choose, which signed_chats to update.
     * 
    **/
    where: signed_chatsWhereUniqueInput
  }


  /**
   * signed_chats updateMany
   */
  export type signed_chatsUpdateManyArgs = {
    /**
     * The data used to update signed_chats.
     * 
    **/
    data: XOR<signed_chatsUpdateManyMutationInput, signed_chatsUncheckedUpdateManyInput>
    /**
     * Filter which signed_chats to update
     * 
    **/
    where?: signed_chatsWhereInput
  }


  /**
   * signed_chats upsert
   */
  export type signed_chatsUpsertArgs = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * The filter to search for the signed_chats to update in case it exists.
     * 
    **/
    where: signed_chatsWhereUniqueInput
    /**
     * In case the signed_chats found by the `where` argument doesn't exist, create a new signed_chats with this data.
     * 
    **/
    create: XOR<signed_chatsCreateInput, signed_chatsUncheckedCreateInput>
    /**
     * In case the signed_chats was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<signed_chatsUpdateInput, signed_chatsUncheckedUpdateInput>
  }


  /**
   * signed_chats delete
   */
  export type signed_chatsDeleteArgs = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
    /**
     * Filter which signed_chats to delete.
     * 
    **/
    where: signed_chatsWhereUniqueInput
  }


  /**
   * signed_chats deleteMany
   */
  export type signed_chatsDeleteManyArgs = {
    /**
     * Filter which signed_chats to delete
     * 
    **/
    where?: signed_chatsWhereInput
  }


  /**
   * signed_chats: findUniqueOrThrow
   */
  export type signed_chatsFindUniqueOrThrowArgs = signed_chatsFindUniqueArgsBase
      

  /**
   * signed_chats: findFirstOrThrow
   */
  export type signed_chatsFindFirstOrThrowArgs = signed_chatsFindFirstArgsBase
      

  /**
   * signed_chats without action
   */
  export type signed_chatsArgs = {
    /**
     * Select specific fields to fetch from the signed_chats
     * 
    **/
    select?: signed_chatsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MemoryScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type MemoryScalarFieldEnum = (typeof MemoryScalarFieldEnum)[keyof typeof MemoryScalarFieldEnum]


  export const Signed_chatsScalarFieldEnum: {
    chat_id: 'chat_id'
  };

  export type Signed_chatsScalarFieldEnum = (typeof Signed_chatsScalarFieldEnum)[keyof typeof Signed_chatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type memoryWhereInput = {
    AND?: Enumerable<memoryWhereInput>
    OR?: Enumerable<memoryWhereInput>
    NOT?: Enumerable<memoryWhereInput>
    id?: IntFilter | number
    date?: StringNullableFilter | string | null
  }

  export type memoryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type memoryWhereUniqueInput = {
    id?: number
  }

  export type memoryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: memoryCountOrderByAggregateInput
    _avg?: memoryAvgOrderByAggregateInput
    _max?: memoryMaxOrderByAggregateInput
    _min?: memoryMinOrderByAggregateInput
    _sum?: memorySumOrderByAggregateInput
  }

  export type memoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<memoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<memoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<memoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    date?: StringNullableWithAggregatesFilter | string | null
  }

  export type signed_chatsWhereInput = {
    AND?: Enumerable<signed_chatsWhereInput>
    OR?: Enumerable<signed_chatsWhereInput>
    NOT?: Enumerable<signed_chatsWhereInput>
    chat_id?: StringFilter | string
  }

  export type signed_chatsOrderByWithRelationInput = {
    chat_id?: SortOrder
  }

  export type signed_chatsWhereUniqueInput = {
    chat_id?: string
  }

  export type signed_chatsOrderByWithAggregationInput = {
    chat_id?: SortOrder
    _count?: signed_chatsCountOrderByAggregateInput
    _max?: signed_chatsMaxOrderByAggregateInput
    _min?: signed_chatsMinOrderByAggregateInput
  }

  export type signed_chatsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<signed_chatsScalarWhereWithAggregatesInput>
    OR?: Enumerable<signed_chatsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<signed_chatsScalarWhereWithAggregatesInput>
    chat_id?: StringWithAggregatesFilter | string
  }

  export type memoryCreateInput = {
    date?: string | null
  }

  export type memoryUncheckedCreateInput = {
    id?: number
    date?: string | null
  }

  export type memoryUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memoryUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type memoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type signed_chatsCreateInput = {
    chat_id: string
  }

  export type signed_chatsUncheckedCreateInput = {
    chat_id: string
  }

  export type signed_chatsUpdateInput = {
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type signed_chatsUncheckedUpdateInput = {
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type signed_chatsUpdateManyMutationInput = {
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type signed_chatsUncheckedUpdateManyInput = {
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type memoryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type memoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type memoryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type memoryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type memorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type signed_chatsCountOrderByAggregateInput = {
    chat_id?: SortOrder
  }

  export type signed_chatsMaxOrderByAggregateInput = {
    chat_id?: SortOrder
  }

  export type signed_chatsMinOrderByAggregateInput = {
    chat_id?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}