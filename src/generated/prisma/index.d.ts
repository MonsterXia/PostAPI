
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BattleGroupScores
 * 
 */
export type BattleGroupScores = $Result.DefaultSelection<Prisma.$BattleGroupScoresPayload>
/**
 * Model LayerAcceptance
 * 
 */
export type LayerAcceptance = $Result.DefaultSelection<Prisma.$LayerAcceptancePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BattleGroupScores
 * const battleGroupScores = await prisma.battleGroupScores.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BattleGroupScores
   * const battleGroupScores = await prisma.battleGroupScores.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.battleGroupScores`: Exposes CRUD operations for the **BattleGroupScores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BattleGroupScores
    * const battleGroupScores = await prisma.battleGroupScores.findMany()
    * ```
    */
  get battleGroupScores(): Prisma.BattleGroupScoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layerAcceptance`: Exposes CRUD operations for the **LayerAcceptance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayerAcceptances
    * const layerAcceptances = await prisma.layerAcceptance.findMany()
    * ```
    */
  get layerAcceptance(): Prisma.LayerAcceptanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BattleGroupScores: 'BattleGroupScores',
    LayerAcceptance: 'LayerAcceptance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "battleGroupScores" | "layerAcceptance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BattleGroupScores: {
        payload: Prisma.$BattleGroupScoresPayload<ExtArgs>
        fields: Prisma.BattleGroupScoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleGroupScoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleGroupScoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>
          }
          findFirst: {
            args: Prisma.BattleGroupScoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleGroupScoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>
          }
          findMany: {
            args: Prisma.BattleGroupScoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>[]
          }
          create: {
            args: Prisma.BattleGroupScoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>
          }
          createMany: {
            args: Prisma.BattleGroupScoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BattleGroupScoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>[]
          }
          delete: {
            args: Prisma.BattleGroupScoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>
          }
          update: {
            args: Prisma.BattleGroupScoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>
          }
          deleteMany: {
            args: Prisma.BattleGroupScoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleGroupScoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BattleGroupScoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>[]
          }
          upsert: {
            args: Prisma.BattleGroupScoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleGroupScoresPayload>
          }
          aggregate: {
            args: Prisma.BattleGroupScoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattleGroupScores>
          }
          groupBy: {
            args: Prisma.BattleGroupScoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupScoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleGroupScoresCountArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupScoresCountAggregateOutputType> | number
          }
        }
      }
      LayerAcceptance: {
        payload: Prisma.$LayerAcceptancePayload<ExtArgs>
        fields: Prisma.LayerAcceptanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerAcceptanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerAcceptanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>
          }
          findFirst: {
            args: Prisma.LayerAcceptanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerAcceptanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>
          }
          findMany: {
            args: Prisma.LayerAcceptanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>[]
          }
          create: {
            args: Prisma.LayerAcceptanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>
          }
          createMany: {
            args: Prisma.LayerAcceptanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayerAcceptanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>[]
          }
          delete: {
            args: Prisma.LayerAcceptanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>
          }
          update: {
            args: Prisma.LayerAcceptanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>
          }
          deleteMany: {
            args: Prisma.LayerAcceptanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerAcceptanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayerAcceptanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>[]
          }
          upsert: {
            args: Prisma.LayerAcceptanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerAcceptancePayload>
          }
          aggregate: {
            args: Prisma.LayerAcceptanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayerAcceptance>
          }
          groupBy: {
            args: Prisma.LayerAcceptanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerAcceptanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayerAcceptanceCountArgs<ExtArgs>
            result: $Utils.Optional<LayerAcceptanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    battleGroupScores?: BattleGroupScoresOmit
    layerAcceptance?: LayerAcceptanceOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
   * Model BattleGroupScores
   */

  export type AggregateBattleGroupScores = {
    _count: BattleGroupScoresCountAggregateOutputType | null
    _avg: BattleGroupScoresAvgAggregateOutputType | null
    _sum: BattleGroupScoresSumAggregateOutputType | null
    _min: BattleGroupScoresMinAggregateOutputType | null
    _max: BattleGroupScoresMaxAggregateOutputType | null
  }

  export type BattleGroupScoresAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type BattleGroupScoresSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type BattleGroupScoresMinAggregateOutputType = {
    id: number | null
    country: string | null
    battle_group: string | null
    score: number | null
  }

  export type BattleGroupScoresMaxAggregateOutputType = {
    id: number | null
    country: string | null
    battle_group: string | null
    score: number | null
  }

  export type BattleGroupScoresCountAggregateOutputType = {
    id: number
    country: number
    battle_group: number
    score: number
    _all: number
  }


  export type BattleGroupScoresAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type BattleGroupScoresSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type BattleGroupScoresMinAggregateInputType = {
    id?: true
    country?: true
    battle_group?: true
    score?: true
  }

  export type BattleGroupScoresMaxAggregateInputType = {
    id?: true
    country?: true
    battle_group?: true
    score?: true
  }

  export type BattleGroupScoresCountAggregateInputType = {
    id?: true
    country?: true
    battle_group?: true
    score?: true
    _all?: true
  }

  export type BattleGroupScoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleGroupScores to aggregate.
     */
    where?: BattleGroupScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleGroupScores to fetch.
     */
    orderBy?: BattleGroupScoresOrderByWithRelationInput | BattleGroupScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleGroupScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleGroupScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleGroupScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BattleGroupScores
    **/
    _count?: true | BattleGroupScoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleGroupScoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleGroupScoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleGroupScoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleGroupScoresMaxAggregateInputType
  }

  export type GetBattleGroupScoresAggregateType<T extends BattleGroupScoresAggregateArgs> = {
        [P in keyof T & keyof AggregateBattleGroupScores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattleGroupScores[P]>
      : GetScalarType<T[P], AggregateBattleGroupScores[P]>
  }




  export type BattleGroupScoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleGroupScoresWhereInput
    orderBy?: BattleGroupScoresOrderByWithAggregationInput | BattleGroupScoresOrderByWithAggregationInput[]
    by: BattleGroupScoresScalarFieldEnum[] | BattleGroupScoresScalarFieldEnum
    having?: BattleGroupScoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleGroupScoresCountAggregateInputType | true
    _avg?: BattleGroupScoresAvgAggregateInputType
    _sum?: BattleGroupScoresSumAggregateInputType
    _min?: BattleGroupScoresMinAggregateInputType
    _max?: BattleGroupScoresMaxAggregateInputType
  }

  export type BattleGroupScoresGroupByOutputType = {
    id: number
    country: string
    battle_group: string
    score: number
    _count: BattleGroupScoresCountAggregateOutputType | null
    _avg: BattleGroupScoresAvgAggregateOutputType | null
    _sum: BattleGroupScoresSumAggregateOutputType | null
    _min: BattleGroupScoresMinAggregateOutputType | null
    _max: BattleGroupScoresMaxAggregateOutputType | null
  }

  type GetBattleGroupScoresGroupByPayload<T extends BattleGroupScoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleGroupScoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleGroupScoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleGroupScoresGroupByOutputType[P]>
            : GetScalarType<T[P], BattleGroupScoresGroupByOutputType[P]>
        }
      >
    >


  export type BattleGroupScoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    battle_group?: boolean
    score?: boolean
  }, ExtArgs["result"]["battleGroupScores"]>

  export type BattleGroupScoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    battle_group?: boolean
    score?: boolean
  }, ExtArgs["result"]["battleGroupScores"]>

  export type BattleGroupScoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    battle_group?: boolean
    score?: boolean
  }, ExtArgs["result"]["battleGroupScores"]>

  export type BattleGroupScoresSelectScalar = {
    id?: boolean
    country?: boolean
    battle_group?: boolean
    score?: boolean
  }

  export type BattleGroupScoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "battle_group" | "score", ExtArgs["result"]["battleGroupScores"]>

  export type $BattleGroupScoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BattleGroupScores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string
      battle_group: string
      score: number
    }, ExtArgs["result"]["battleGroupScores"]>
    composites: {}
  }

  type BattleGroupScoresGetPayload<S extends boolean | null | undefined | BattleGroupScoresDefaultArgs> = $Result.GetResult<Prisma.$BattleGroupScoresPayload, S>

  type BattleGroupScoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleGroupScoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleGroupScoresCountAggregateInputType | true
    }

  export interface BattleGroupScoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BattleGroupScores'], meta: { name: 'BattleGroupScores' } }
    /**
     * Find zero or one BattleGroupScores that matches the filter.
     * @param {BattleGroupScoresFindUniqueArgs} args - Arguments to find a BattleGroupScores
     * @example
     * // Get one BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleGroupScoresFindUniqueArgs>(args: SelectSubset<T, BattleGroupScoresFindUniqueArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BattleGroupScores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleGroupScoresFindUniqueOrThrowArgs} args - Arguments to find a BattleGroupScores
     * @example
     * // Get one BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleGroupScoresFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleGroupScoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleGroupScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresFindFirstArgs} args - Arguments to find a BattleGroupScores
     * @example
     * // Get one BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleGroupScoresFindFirstArgs>(args?: SelectSubset<T, BattleGroupScoresFindFirstArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleGroupScores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresFindFirstOrThrowArgs} args - Arguments to find a BattleGroupScores
     * @example
     * // Get one BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleGroupScoresFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleGroupScoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BattleGroupScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.findMany()
     * 
     * // Get first 10 BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleGroupScoresWithIdOnly = await prisma.battleGroupScores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleGroupScoresFindManyArgs>(args?: SelectSubset<T, BattleGroupScoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BattleGroupScores.
     * @param {BattleGroupScoresCreateArgs} args - Arguments to create a BattleGroupScores.
     * @example
     * // Create one BattleGroupScores
     * const BattleGroupScores = await prisma.battleGroupScores.create({
     *   data: {
     *     // ... data to create a BattleGroupScores
     *   }
     * })
     * 
     */
    create<T extends BattleGroupScoresCreateArgs>(args: SelectSubset<T, BattleGroupScoresCreateArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BattleGroupScores.
     * @param {BattleGroupScoresCreateManyArgs} args - Arguments to create many BattleGroupScores.
     * @example
     * // Create many BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleGroupScoresCreateManyArgs>(args?: SelectSubset<T, BattleGroupScoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BattleGroupScores and returns the data saved in the database.
     * @param {BattleGroupScoresCreateManyAndReturnArgs} args - Arguments to create many BattleGroupScores.
     * @example
     * // Create many BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BattleGroupScores and only return the `id`
     * const battleGroupScoresWithIdOnly = await prisma.battleGroupScores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BattleGroupScoresCreateManyAndReturnArgs>(args?: SelectSubset<T, BattleGroupScoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BattleGroupScores.
     * @param {BattleGroupScoresDeleteArgs} args - Arguments to delete one BattleGroupScores.
     * @example
     * // Delete one BattleGroupScores
     * const BattleGroupScores = await prisma.battleGroupScores.delete({
     *   where: {
     *     // ... filter to delete one BattleGroupScores
     *   }
     * })
     * 
     */
    delete<T extends BattleGroupScoresDeleteArgs>(args: SelectSubset<T, BattleGroupScoresDeleteArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BattleGroupScores.
     * @param {BattleGroupScoresUpdateArgs} args - Arguments to update one BattleGroupScores.
     * @example
     * // Update one BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleGroupScoresUpdateArgs>(args: SelectSubset<T, BattleGroupScoresUpdateArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BattleGroupScores.
     * @param {BattleGroupScoresDeleteManyArgs} args - Arguments to filter BattleGroupScores to delete.
     * @example
     * // Delete a few BattleGroupScores
     * const { count } = await prisma.battleGroupScores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleGroupScoresDeleteManyArgs>(args?: SelectSubset<T, BattleGroupScoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BattleGroupScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleGroupScoresUpdateManyArgs>(args: SelectSubset<T, BattleGroupScoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BattleGroupScores and returns the data updated in the database.
     * @param {BattleGroupScoresUpdateManyAndReturnArgs} args - Arguments to update many BattleGroupScores.
     * @example
     * // Update many BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BattleGroupScores and only return the `id`
     * const battleGroupScoresWithIdOnly = await prisma.battleGroupScores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BattleGroupScoresUpdateManyAndReturnArgs>(args: SelectSubset<T, BattleGroupScoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BattleGroupScores.
     * @param {BattleGroupScoresUpsertArgs} args - Arguments to update or create a BattleGroupScores.
     * @example
     * // Update or create a BattleGroupScores
     * const battleGroupScores = await prisma.battleGroupScores.upsert({
     *   create: {
     *     // ... data to create a BattleGroupScores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BattleGroupScores we want to update
     *   }
     * })
     */
    upsert<T extends BattleGroupScoresUpsertArgs>(args: SelectSubset<T, BattleGroupScoresUpsertArgs<ExtArgs>>): Prisma__BattleGroupScoresClient<$Result.GetResult<Prisma.$BattleGroupScoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BattleGroupScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresCountArgs} args - Arguments to filter BattleGroupScores to count.
     * @example
     * // Count the number of BattleGroupScores
     * const count = await prisma.battleGroupScores.count({
     *   where: {
     *     // ... the filter for the BattleGroupScores we want to count
     *   }
     * })
    **/
    count<T extends BattleGroupScoresCountArgs>(
      args?: Subset<T, BattleGroupScoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleGroupScoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BattleGroupScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattleGroupScoresAggregateArgs>(args: Subset<T, BattleGroupScoresAggregateArgs>): Prisma.PrismaPromise<GetBattleGroupScoresAggregateType<T>>

    /**
     * Group by BattleGroupScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupScoresGroupByArgs} args - Group by arguments.
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
      T extends BattleGroupScoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleGroupScoresGroupByArgs['orderBy'] }
        : { orderBy?: BattleGroupScoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BattleGroupScoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupScoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BattleGroupScores model
   */
  readonly fields: BattleGroupScoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BattleGroupScores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleGroupScoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BattleGroupScores model
   */
  interface BattleGroupScoresFieldRefs {
    readonly id: FieldRef<"BattleGroupScores", 'Int'>
    readonly country: FieldRef<"BattleGroupScores", 'String'>
    readonly battle_group: FieldRef<"BattleGroupScores", 'String'>
    readonly score: FieldRef<"BattleGroupScores", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BattleGroupScores findUnique
   */
  export type BattleGroupScoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * Filter, which BattleGroupScores to fetch.
     */
    where: BattleGroupScoresWhereUniqueInput
  }

  /**
   * BattleGroupScores findUniqueOrThrow
   */
  export type BattleGroupScoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * Filter, which BattleGroupScores to fetch.
     */
    where: BattleGroupScoresWhereUniqueInput
  }

  /**
   * BattleGroupScores findFirst
   */
  export type BattleGroupScoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * Filter, which BattleGroupScores to fetch.
     */
    where?: BattleGroupScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleGroupScores to fetch.
     */
    orderBy?: BattleGroupScoresOrderByWithRelationInput | BattleGroupScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleGroupScores.
     */
    cursor?: BattleGroupScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleGroupScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleGroupScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleGroupScores.
     */
    distinct?: BattleGroupScoresScalarFieldEnum | BattleGroupScoresScalarFieldEnum[]
  }

  /**
   * BattleGroupScores findFirstOrThrow
   */
  export type BattleGroupScoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * Filter, which BattleGroupScores to fetch.
     */
    where?: BattleGroupScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleGroupScores to fetch.
     */
    orderBy?: BattleGroupScoresOrderByWithRelationInput | BattleGroupScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleGroupScores.
     */
    cursor?: BattleGroupScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleGroupScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleGroupScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleGroupScores.
     */
    distinct?: BattleGroupScoresScalarFieldEnum | BattleGroupScoresScalarFieldEnum[]
  }

  /**
   * BattleGroupScores findMany
   */
  export type BattleGroupScoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * Filter, which BattleGroupScores to fetch.
     */
    where?: BattleGroupScoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleGroupScores to fetch.
     */
    orderBy?: BattleGroupScoresOrderByWithRelationInput | BattleGroupScoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BattleGroupScores.
     */
    cursor?: BattleGroupScoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleGroupScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleGroupScores.
     */
    skip?: number
    distinct?: BattleGroupScoresScalarFieldEnum | BattleGroupScoresScalarFieldEnum[]
  }

  /**
   * BattleGroupScores create
   */
  export type BattleGroupScoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * The data needed to create a BattleGroupScores.
     */
    data: XOR<BattleGroupScoresCreateInput, BattleGroupScoresUncheckedCreateInput>
  }

  /**
   * BattleGroupScores createMany
   */
  export type BattleGroupScoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BattleGroupScores.
     */
    data: BattleGroupScoresCreateManyInput | BattleGroupScoresCreateManyInput[]
  }

  /**
   * BattleGroupScores createManyAndReturn
   */
  export type BattleGroupScoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * The data used to create many BattleGroupScores.
     */
    data: BattleGroupScoresCreateManyInput | BattleGroupScoresCreateManyInput[]
  }

  /**
   * BattleGroupScores update
   */
  export type BattleGroupScoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * The data needed to update a BattleGroupScores.
     */
    data: XOR<BattleGroupScoresUpdateInput, BattleGroupScoresUncheckedUpdateInput>
    /**
     * Choose, which BattleGroupScores to update.
     */
    where: BattleGroupScoresWhereUniqueInput
  }

  /**
   * BattleGroupScores updateMany
   */
  export type BattleGroupScoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BattleGroupScores.
     */
    data: XOR<BattleGroupScoresUpdateManyMutationInput, BattleGroupScoresUncheckedUpdateManyInput>
    /**
     * Filter which BattleGroupScores to update
     */
    where?: BattleGroupScoresWhereInput
    /**
     * Limit how many BattleGroupScores to update.
     */
    limit?: number
  }

  /**
   * BattleGroupScores updateManyAndReturn
   */
  export type BattleGroupScoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * The data used to update BattleGroupScores.
     */
    data: XOR<BattleGroupScoresUpdateManyMutationInput, BattleGroupScoresUncheckedUpdateManyInput>
    /**
     * Filter which BattleGroupScores to update
     */
    where?: BattleGroupScoresWhereInput
    /**
     * Limit how many BattleGroupScores to update.
     */
    limit?: number
  }

  /**
   * BattleGroupScores upsert
   */
  export type BattleGroupScoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * The filter to search for the BattleGroupScores to update in case it exists.
     */
    where: BattleGroupScoresWhereUniqueInput
    /**
     * In case the BattleGroupScores found by the `where` argument doesn't exist, create a new BattleGroupScores with this data.
     */
    create: XOR<BattleGroupScoresCreateInput, BattleGroupScoresUncheckedCreateInput>
    /**
     * In case the BattleGroupScores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleGroupScoresUpdateInput, BattleGroupScoresUncheckedUpdateInput>
  }

  /**
   * BattleGroupScores delete
   */
  export type BattleGroupScoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
    /**
     * Filter which BattleGroupScores to delete.
     */
    where: BattleGroupScoresWhereUniqueInput
  }

  /**
   * BattleGroupScores deleteMany
   */
  export type BattleGroupScoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleGroupScores to delete
     */
    where?: BattleGroupScoresWhereInput
    /**
     * Limit how many BattleGroupScores to delete.
     */
    limit?: number
  }

  /**
   * BattleGroupScores without action
   */
  export type BattleGroupScoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleGroupScores
     */
    select?: BattleGroupScoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleGroupScores
     */
    omit?: BattleGroupScoresOmit<ExtArgs> | null
  }


  /**
   * Model LayerAcceptance
   */

  export type AggregateLayerAcceptance = {
    _count: LayerAcceptanceCountAggregateOutputType | null
    _avg: LayerAcceptanceAvgAggregateOutputType | null
    _sum: LayerAcceptanceSumAggregateOutputType | null
    _min: LayerAcceptanceMinAggregateOutputType | null
    _max: LayerAcceptanceMaxAggregateOutputType | null
  }

  export type LayerAcceptanceAvgAggregateOutputType = {
    id: number | null
    acceptance: number | null
  }

  export type LayerAcceptanceSumAggregateOutputType = {
    id: number | null
    acceptance: number | null
  }

  export type LayerAcceptanceMinAggregateOutputType = {
    id: number | null
    country_1: string | null
    battle_group_1: string | null
    country_2: string | null
    battle_group_2: string | null
    acceptance: number | null
  }

  export type LayerAcceptanceMaxAggregateOutputType = {
    id: number | null
    country_1: string | null
    battle_group_1: string | null
    country_2: string | null
    battle_group_2: string | null
    acceptance: number | null
  }

  export type LayerAcceptanceCountAggregateOutputType = {
    id: number
    country_1: number
    battle_group_1: number
    country_2: number
    battle_group_2: number
    acceptance: number
    _all: number
  }


  export type LayerAcceptanceAvgAggregateInputType = {
    id?: true
    acceptance?: true
  }

  export type LayerAcceptanceSumAggregateInputType = {
    id?: true
    acceptance?: true
  }

  export type LayerAcceptanceMinAggregateInputType = {
    id?: true
    country_1?: true
    battle_group_1?: true
    country_2?: true
    battle_group_2?: true
    acceptance?: true
  }

  export type LayerAcceptanceMaxAggregateInputType = {
    id?: true
    country_1?: true
    battle_group_1?: true
    country_2?: true
    battle_group_2?: true
    acceptance?: true
  }

  export type LayerAcceptanceCountAggregateInputType = {
    id?: true
    country_1?: true
    battle_group_1?: true
    country_2?: true
    battle_group_2?: true
    acceptance?: true
    _all?: true
  }

  export type LayerAcceptanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerAcceptance to aggregate.
     */
    where?: LayerAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerAcceptances to fetch.
     */
    orderBy?: LayerAcceptanceOrderByWithRelationInput | LayerAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerAcceptances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayerAcceptances
    **/
    _count?: true | LayerAcceptanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayerAcceptanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayerAcceptanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerAcceptanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerAcceptanceMaxAggregateInputType
  }

  export type GetLayerAcceptanceAggregateType<T extends LayerAcceptanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLayerAcceptance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayerAcceptance[P]>
      : GetScalarType<T[P], AggregateLayerAcceptance[P]>
  }




  export type LayerAcceptanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerAcceptanceWhereInput
    orderBy?: LayerAcceptanceOrderByWithAggregationInput | LayerAcceptanceOrderByWithAggregationInput[]
    by: LayerAcceptanceScalarFieldEnum[] | LayerAcceptanceScalarFieldEnum
    having?: LayerAcceptanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerAcceptanceCountAggregateInputType | true
    _avg?: LayerAcceptanceAvgAggregateInputType
    _sum?: LayerAcceptanceSumAggregateInputType
    _min?: LayerAcceptanceMinAggregateInputType
    _max?: LayerAcceptanceMaxAggregateInputType
  }

  export type LayerAcceptanceGroupByOutputType = {
    id: number
    country_1: string
    battle_group_1: string
    country_2: string
    battle_group_2: string
    acceptance: number
    _count: LayerAcceptanceCountAggregateOutputType | null
    _avg: LayerAcceptanceAvgAggregateOutputType | null
    _sum: LayerAcceptanceSumAggregateOutputType | null
    _min: LayerAcceptanceMinAggregateOutputType | null
    _max: LayerAcceptanceMaxAggregateOutputType | null
  }

  type GetLayerAcceptanceGroupByPayload<T extends LayerAcceptanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerAcceptanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerAcceptanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerAcceptanceGroupByOutputType[P]>
            : GetScalarType<T[P], LayerAcceptanceGroupByOutputType[P]>
        }
      >
    >


  export type LayerAcceptanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_1?: boolean
    battle_group_1?: boolean
    country_2?: boolean
    battle_group_2?: boolean
    acceptance?: boolean
  }, ExtArgs["result"]["layerAcceptance"]>

  export type LayerAcceptanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_1?: boolean
    battle_group_1?: boolean
    country_2?: boolean
    battle_group_2?: boolean
    acceptance?: boolean
  }, ExtArgs["result"]["layerAcceptance"]>

  export type LayerAcceptanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_1?: boolean
    battle_group_1?: boolean
    country_2?: boolean
    battle_group_2?: boolean
    acceptance?: boolean
  }, ExtArgs["result"]["layerAcceptance"]>

  export type LayerAcceptanceSelectScalar = {
    id?: boolean
    country_1?: boolean
    battle_group_1?: boolean
    country_2?: boolean
    battle_group_2?: boolean
    acceptance?: boolean
  }

  export type LayerAcceptanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country_1" | "battle_group_1" | "country_2" | "battle_group_2" | "acceptance", ExtArgs["result"]["layerAcceptance"]>

  export type $LayerAcceptancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayerAcceptance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country_1: string
      battle_group_1: string
      country_2: string
      battle_group_2: string
      acceptance: number
    }, ExtArgs["result"]["layerAcceptance"]>
    composites: {}
  }

  type LayerAcceptanceGetPayload<S extends boolean | null | undefined | LayerAcceptanceDefaultArgs> = $Result.GetResult<Prisma.$LayerAcceptancePayload, S>

  type LayerAcceptanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayerAcceptanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayerAcceptanceCountAggregateInputType | true
    }

  export interface LayerAcceptanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayerAcceptance'], meta: { name: 'LayerAcceptance' } }
    /**
     * Find zero or one LayerAcceptance that matches the filter.
     * @param {LayerAcceptanceFindUniqueArgs} args - Arguments to find a LayerAcceptance
     * @example
     * // Get one LayerAcceptance
     * const layerAcceptance = await prisma.layerAcceptance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerAcceptanceFindUniqueArgs>(args: SelectSubset<T, LayerAcceptanceFindUniqueArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LayerAcceptance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayerAcceptanceFindUniqueOrThrowArgs} args - Arguments to find a LayerAcceptance
     * @example
     * // Get one LayerAcceptance
     * const layerAcceptance = await prisma.layerAcceptance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerAcceptanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerAcceptanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayerAcceptance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceFindFirstArgs} args - Arguments to find a LayerAcceptance
     * @example
     * // Get one LayerAcceptance
     * const layerAcceptance = await prisma.layerAcceptance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerAcceptanceFindFirstArgs>(args?: SelectSubset<T, LayerAcceptanceFindFirstArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayerAcceptance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceFindFirstOrThrowArgs} args - Arguments to find a LayerAcceptance
     * @example
     * // Get one LayerAcceptance
     * const layerAcceptance = await prisma.layerAcceptance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerAcceptanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerAcceptanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayerAcceptances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayerAcceptances
     * const layerAcceptances = await prisma.layerAcceptance.findMany()
     * 
     * // Get first 10 LayerAcceptances
     * const layerAcceptances = await prisma.layerAcceptance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerAcceptanceWithIdOnly = await prisma.layerAcceptance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerAcceptanceFindManyArgs>(args?: SelectSubset<T, LayerAcceptanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LayerAcceptance.
     * @param {LayerAcceptanceCreateArgs} args - Arguments to create a LayerAcceptance.
     * @example
     * // Create one LayerAcceptance
     * const LayerAcceptance = await prisma.layerAcceptance.create({
     *   data: {
     *     // ... data to create a LayerAcceptance
     *   }
     * })
     * 
     */
    create<T extends LayerAcceptanceCreateArgs>(args: SelectSubset<T, LayerAcceptanceCreateArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LayerAcceptances.
     * @param {LayerAcceptanceCreateManyArgs} args - Arguments to create many LayerAcceptances.
     * @example
     * // Create many LayerAcceptances
     * const layerAcceptance = await prisma.layerAcceptance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerAcceptanceCreateManyArgs>(args?: SelectSubset<T, LayerAcceptanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LayerAcceptances and returns the data saved in the database.
     * @param {LayerAcceptanceCreateManyAndReturnArgs} args - Arguments to create many LayerAcceptances.
     * @example
     * // Create many LayerAcceptances
     * const layerAcceptance = await prisma.layerAcceptance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LayerAcceptances and only return the `id`
     * const layerAcceptanceWithIdOnly = await prisma.layerAcceptance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayerAcceptanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LayerAcceptanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LayerAcceptance.
     * @param {LayerAcceptanceDeleteArgs} args - Arguments to delete one LayerAcceptance.
     * @example
     * // Delete one LayerAcceptance
     * const LayerAcceptance = await prisma.layerAcceptance.delete({
     *   where: {
     *     // ... filter to delete one LayerAcceptance
     *   }
     * })
     * 
     */
    delete<T extends LayerAcceptanceDeleteArgs>(args: SelectSubset<T, LayerAcceptanceDeleteArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LayerAcceptance.
     * @param {LayerAcceptanceUpdateArgs} args - Arguments to update one LayerAcceptance.
     * @example
     * // Update one LayerAcceptance
     * const layerAcceptance = await prisma.layerAcceptance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerAcceptanceUpdateArgs>(args: SelectSubset<T, LayerAcceptanceUpdateArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LayerAcceptances.
     * @param {LayerAcceptanceDeleteManyArgs} args - Arguments to filter LayerAcceptances to delete.
     * @example
     * // Delete a few LayerAcceptances
     * const { count } = await prisma.layerAcceptance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerAcceptanceDeleteManyArgs>(args?: SelectSubset<T, LayerAcceptanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerAcceptances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayerAcceptances
     * const layerAcceptance = await prisma.layerAcceptance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerAcceptanceUpdateManyArgs>(args: SelectSubset<T, LayerAcceptanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayerAcceptances and returns the data updated in the database.
     * @param {LayerAcceptanceUpdateManyAndReturnArgs} args - Arguments to update many LayerAcceptances.
     * @example
     * // Update many LayerAcceptances
     * const layerAcceptance = await prisma.layerAcceptance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LayerAcceptances and only return the `id`
     * const layerAcceptanceWithIdOnly = await prisma.layerAcceptance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LayerAcceptanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LayerAcceptanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LayerAcceptance.
     * @param {LayerAcceptanceUpsertArgs} args - Arguments to update or create a LayerAcceptance.
     * @example
     * // Update or create a LayerAcceptance
     * const layerAcceptance = await prisma.layerAcceptance.upsert({
     *   create: {
     *     // ... data to create a LayerAcceptance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayerAcceptance we want to update
     *   }
     * })
     */
    upsert<T extends LayerAcceptanceUpsertArgs>(args: SelectSubset<T, LayerAcceptanceUpsertArgs<ExtArgs>>): Prisma__LayerAcceptanceClient<$Result.GetResult<Prisma.$LayerAcceptancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LayerAcceptances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceCountArgs} args - Arguments to filter LayerAcceptances to count.
     * @example
     * // Count the number of LayerAcceptances
     * const count = await prisma.layerAcceptance.count({
     *   where: {
     *     // ... the filter for the LayerAcceptances we want to count
     *   }
     * })
    **/
    count<T extends LayerAcceptanceCountArgs>(
      args?: Subset<T, LayerAcceptanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerAcceptanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayerAcceptance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayerAcceptanceAggregateArgs>(args: Subset<T, LayerAcceptanceAggregateArgs>): Prisma.PrismaPromise<GetLayerAcceptanceAggregateType<T>>

    /**
     * Group by LayerAcceptance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAcceptanceGroupByArgs} args - Group by arguments.
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
      T extends LayerAcceptanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerAcceptanceGroupByArgs['orderBy'] }
        : { orderBy?: LayerAcceptanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LayerAcceptanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerAcceptanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayerAcceptance model
   */
  readonly fields: LayerAcceptanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayerAcceptance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerAcceptanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LayerAcceptance model
   */
  interface LayerAcceptanceFieldRefs {
    readonly id: FieldRef<"LayerAcceptance", 'Int'>
    readonly country_1: FieldRef<"LayerAcceptance", 'String'>
    readonly battle_group_1: FieldRef<"LayerAcceptance", 'String'>
    readonly country_2: FieldRef<"LayerAcceptance", 'String'>
    readonly battle_group_2: FieldRef<"LayerAcceptance", 'String'>
    readonly acceptance: FieldRef<"LayerAcceptance", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * LayerAcceptance findUnique
   */
  export type LayerAcceptanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * Filter, which LayerAcceptance to fetch.
     */
    where: LayerAcceptanceWhereUniqueInput
  }

  /**
   * LayerAcceptance findUniqueOrThrow
   */
  export type LayerAcceptanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * Filter, which LayerAcceptance to fetch.
     */
    where: LayerAcceptanceWhereUniqueInput
  }

  /**
   * LayerAcceptance findFirst
   */
  export type LayerAcceptanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * Filter, which LayerAcceptance to fetch.
     */
    where?: LayerAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerAcceptances to fetch.
     */
    orderBy?: LayerAcceptanceOrderByWithRelationInput | LayerAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerAcceptances.
     */
    cursor?: LayerAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerAcceptances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerAcceptances.
     */
    distinct?: LayerAcceptanceScalarFieldEnum | LayerAcceptanceScalarFieldEnum[]
  }

  /**
   * LayerAcceptance findFirstOrThrow
   */
  export type LayerAcceptanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * Filter, which LayerAcceptance to fetch.
     */
    where?: LayerAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerAcceptances to fetch.
     */
    orderBy?: LayerAcceptanceOrderByWithRelationInput | LayerAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayerAcceptances.
     */
    cursor?: LayerAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerAcceptances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayerAcceptances.
     */
    distinct?: LayerAcceptanceScalarFieldEnum | LayerAcceptanceScalarFieldEnum[]
  }

  /**
   * LayerAcceptance findMany
   */
  export type LayerAcceptanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * Filter, which LayerAcceptances to fetch.
     */
    where?: LayerAcceptanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayerAcceptances to fetch.
     */
    orderBy?: LayerAcceptanceOrderByWithRelationInput | LayerAcceptanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayerAcceptances.
     */
    cursor?: LayerAcceptanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayerAcceptances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayerAcceptances.
     */
    skip?: number
    distinct?: LayerAcceptanceScalarFieldEnum | LayerAcceptanceScalarFieldEnum[]
  }

  /**
   * LayerAcceptance create
   */
  export type LayerAcceptanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * The data needed to create a LayerAcceptance.
     */
    data: XOR<LayerAcceptanceCreateInput, LayerAcceptanceUncheckedCreateInput>
  }

  /**
   * LayerAcceptance createMany
   */
  export type LayerAcceptanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayerAcceptances.
     */
    data: LayerAcceptanceCreateManyInput | LayerAcceptanceCreateManyInput[]
  }

  /**
   * LayerAcceptance createManyAndReturn
   */
  export type LayerAcceptanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * The data used to create many LayerAcceptances.
     */
    data: LayerAcceptanceCreateManyInput | LayerAcceptanceCreateManyInput[]
  }

  /**
   * LayerAcceptance update
   */
  export type LayerAcceptanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * The data needed to update a LayerAcceptance.
     */
    data: XOR<LayerAcceptanceUpdateInput, LayerAcceptanceUncheckedUpdateInput>
    /**
     * Choose, which LayerAcceptance to update.
     */
    where: LayerAcceptanceWhereUniqueInput
  }

  /**
   * LayerAcceptance updateMany
   */
  export type LayerAcceptanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayerAcceptances.
     */
    data: XOR<LayerAcceptanceUpdateManyMutationInput, LayerAcceptanceUncheckedUpdateManyInput>
    /**
     * Filter which LayerAcceptances to update
     */
    where?: LayerAcceptanceWhereInput
    /**
     * Limit how many LayerAcceptances to update.
     */
    limit?: number
  }

  /**
   * LayerAcceptance updateManyAndReturn
   */
  export type LayerAcceptanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * The data used to update LayerAcceptances.
     */
    data: XOR<LayerAcceptanceUpdateManyMutationInput, LayerAcceptanceUncheckedUpdateManyInput>
    /**
     * Filter which LayerAcceptances to update
     */
    where?: LayerAcceptanceWhereInput
    /**
     * Limit how many LayerAcceptances to update.
     */
    limit?: number
  }

  /**
   * LayerAcceptance upsert
   */
  export type LayerAcceptanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * The filter to search for the LayerAcceptance to update in case it exists.
     */
    where: LayerAcceptanceWhereUniqueInput
    /**
     * In case the LayerAcceptance found by the `where` argument doesn't exist, create a new LayerAcceptance with this data.
     */
    create: XOR<LayerAcceptanceCreateInput, LayerAcceptanceUncheckedCreateInput>
    /**
     * In case the LayerAcceptance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerAcceptanceUpdateInput, LayerAcceptanceUncheckedUpdateInput>
  }

  /**
   * LayerAcceptance delete
   */
  export type LayerAcceptanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
    /**
     * Filter which LayerAcceptance to delete.
     */
    where: LayerAcceptanceWhereUniqueInput
  }

  /**
   * LayerAcceptance deleteMany
   */
  export type LayerAcceptanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayerAcceptances to delete
     */
    where?: LayerAcceptanceWhereInput
    /**
     * Limit how many LayerAcceptances to delete.
     */
    limit?: number
  }

  /**
   * LayerAcceptance without action
   */
  export type LayerAcceptanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayerAcceptance
     */
    select?: LayerAcceptanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayerAcceptance
     */
    omit?: LayerAcceptanceOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BattleGroupScoresScalarFieldEnum: {
    id: 'id',
    country: 'country',
    battle_group: 'battle_group',
    score: 'score'
  };

  export type BattleGroupScoresScalarFieldEnum = (typeof BattleGroupScoresScalarFieldEnum)[keyof typeof BattleGroupScoresScalarFieldEnum]


  export const LayerAcceptanceScalarFieldEnum: {
    id: 'id',
    country_1: 'country_1',
    battle_group_1: 'battle_group_1',
    country_2: 'country_2',
    battle_group_2: 'battle_group_2',
    acceptance: 'acceptance'
  };

  export type LayerAcceptanceScalarFieldEnum = (typeof LayerAcceptanceScalarFieldEnum)[keyof typeof LayerAcceptanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BattleGroupScoresWhereInput = {
    AND?: BattleGroupScoresWhereInput | BattleGroupScoresWhereInput[]
    OR?: BattleGroupScoresWhereInput[]
    NOT?: BattleGroupScoresWhereInput | BattleGroupScoresWhereInput[]
    id?: IntFilter<"BattleGroupScores"> | number
    country?: StringFilter<"BattleGroupScores"> | string
    battle_group?: StringFilter<"BattleGroupScores"> | string
    score?: FloatFilter<"BattleGroupScores"> | number
  }

  export type BattleGroupScoresOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    battle_group?: SortOrder
    score?: SortOrder
  }

  export type BattleGroupScoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BattleGroupScoresWhereInput | BattleGroupScoresWhereInput[]
    OR?: BattleGroupScoresWhereInput[]
    NOT?: BattleGroupScoresWhereInput | BattleGroupScoresWhereInput[]
    country?: StringFilter<"BattleGroupScores"> | string
    battle_group?: StringFilter<"BattleGroupScores"> | string
    score?: FloatFilter<"BattleGroupScores"> | number
  }, "id">

  export type BattleGroupScoresOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    battle_group?: SortOrder
    score?: SortOrder
    _count?: BattleGroupScoresCountOrderByAggregateInput
    _avg?: BattleGroupScoresAvgOrderByAggregateInput
    _max?: BattleGroupScoresMaxOrderByAggregateInput
    _min?: BattleGroupScoresMinOrderByAggregateInput
    _sum?: BattleGroupScoresSumOrderByAggregateInput
  }

  export type BattleGroupScoresScalarWhereWithAggregatesInput = {
    AND?: BattleGroupScoresScalarWhereWithAggregatesInput | BattleGroupScoresScalarWhereWithAggregatesInput[]
    OR?: BattleGroupScoresScalarWhereWithAggregatesInput[]
    NOT?: BattleGroupScoresScalarWhereWithAggregatesInput | BattleGroupScoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BattleGroupScores"> | number
    country?: StringWithAggregatesFilter<"BattleGroupScores"> | string
    battle_group?: StringWithAggregatesFilter<"BattleGroupScores"> | string
    score?: FloatWithAggregatesFilter<"BattleGroupScores"> | number
  }

  export type LayerAcceptanceWhereInput = {
    AND?: LayerAcceptanceWhereInput | LayerAcceptanceWhereInput[]
    OR?: LayerAcceptanceWhereInput[]
    NOT?: LayerAcceptanceWhereInput | LayerAcceptanceWhereInput[]
    id?: IntFilter<"LayerAcceptance"> | number
    country_1?: StringFilter<"LayerAcceptance"> | string
    battle_group_1?: StringFilter<"LayerAcceptance"> | string
    country_2?: StringFilter<"LayerAcceptance"> | string
    battle_group_2?: StringFilter<"LayerAcceptance"> | string
    acceptance?: FloatFilter<"LayerAcceptance"> | number
  }

  export type LayerAcceptanceOrderByWithRelationInput = {
    id?: SortOrder
    country_1?: SortOrder
    battle_group_1?: SortOrder
    country_2?: SortOrder
    battle_group_2?: SortOrder
    acceptance?: SortOrder
  }

  export type LayerAcceptanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LayerAcceptanceWhereInput | LayerAcceptanceWhereInput[]
    OR?: LayerAcceptanceWhereInput[]
    NOT?: LayerAcceptanceWhereInput | LayerAcceptanceWhereInput[]
    country_1?: StringFilter<"LayerAcceptance"> | string
    battle_group_1?: StringFilter<"LayerAcceptance"> | string
    country_2?: StringFilter<"LayerAcceptance"> | string
    battle_group_2?: StringFilter<"LayerAcceptance"> | string
    acceptance?: FloatFilter<"LayerAcceptance"> | number
  }, "id">

  export type LayerAcceptanceOrderByWithAggregationInput = {
    id?: SortOrder
    country_1?: SortOrder
    battle_group_1?: SortOrder
    country_2?: SortOrder
    battle_group_2?: SortOrder
    acceptance?: SortOrder
    _count?: LayerAcceptanceCountOrderByAggregateInput
    _avg?: LayerAcceptanceAvgOrderByAggregateInput
    _max?: LayerAcceptanceMaxOrderByAggregateInput
    _min?: LayerAcceptanceMinOrderByAggregateInput
    _sum?: LayerAcceptanceSumOrderByAggregateInput
  }

  export type LayerAcceptanceScalarWhereWithAggregatesInput = {
    AND?: LayerAcceptanceScalarWhereWithAggregatesInput | LayerAcceptanceScalarWhereWithAggregatesInput[]
    OR?: LayerAcceptanceScalarWhereWithAggregatesInput[]
    NOT?: LayerAcceptanceScalarWhereWithAggregatesInput | LayerAcceptanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LayerAcceptance"> | number
    country_1?: StringWithAggregatesFilter<"LayerAcceptance"> | string
    battle_group_1?: StringWithAggregatesFilter<"LayerAcceptance"> | string
    country_2?: StringWithAggregatesFilter<"LayerAcceptance"> | string
    battle_group_2?: StringWithAggregatesFilter<"LayerAcceptance"> | string
    acceptance?: FloatWithAggregatesFilter<"LayerAcceptance"> | number
  }

  export type BattleGroupScoresCreateInput = {
    country: string
    battle_group: string
    score: number
  }

  export type BattleGroupScoresUncheckedCreateInput = {
    id?: number
    country: string
    battle_group: string
    score: number
  }

  export type BattleGroupScoresUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    battle_group?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type BattleGroupScoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    battle_group?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type BattleGroupScoresCreateManyInput = {
    id?: number
    country: string
    battle_group: string
    score: number
  }

  export type BattleGroupScoresUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    battle_group?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type BattleGroupScoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    battle_group?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type LayerAcceptanceCreateInput = {
    country_1: string
    battle_group_1: string
    country_2: string
    battle_group_2: string
    acceptance: number
  }

  export type LayerAcceptanceUncheckedCreateInput = {
    id?: number
    country_1: string
    battle_group_1: string
    country_2: string
    battle_group_2: string
    acceptance: number
  }

  export type LayerAcceptanceUpdateInput = {
    country_1?: StringFieldUpdateOperationsInput | string
    battle_group_1?: StringFieldUpdateOperationsInput | string
    country_2?: StringFieldUpdateOperationsInput | string
    battle_group_2?: StringFieldUpdateOperationsInput | string
    acceptance?: FloatFieldUpdateOperationsInput | number
  }

  export type LayerAcceptanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_1?: StringFieldUpdateOperationsInput | string
    battle_group_1?: StringFieldUpdateOperationsInput | string
    country_2?: StringFieldUpdateOperationsInput | string
    battle_group_2?: StringFieldUpdateOperationsInput | string
    acceptance?: FloatFieldUpdateOperationsInput | number
  }

  export type LayerAcceptanceCreateManyInput = {
    id?: number
    country_1: string
    battle_group_1: string
    country_2: string
    battle_group_2: string
    acceptance: number
  }

  export type LayerAcceptanceUpdateManyMutationInput = {
    country_1?: StringFieldUpdateOperationsInput | string
    battle_group_1?: StringFieldUpdateOperationsInput | string
    country_2?: StringFieldUpdateOperationsInput | string
    battle_group_2?: StringFieldUpdateOperationsInput | string
    acceptance?: FloatFieldUpdateOperationsInput | number
  }

  export type LayerAcceptanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_1?: StringFieldUpdateOperationsInput | string
    battle_group_1?: StringFieldUpdateOperationsInput | string
    country_2?: StringFieldUpdateOperationsInput | string
    battle_group_2?: StringFieldUpdateOperationsInput | string
    acceptance?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BattleGroupScoresCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    battle_group?: SortOrder
    score?: SortOrder
  }

  export type BattleGroupScoresAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type BattleGroupScoresMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    battle_group?: SortOrder
    score?: SortOrder
  }

  export type BattleGroupScoresMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    battle_group?: SortOrder
    score?: SortOrder
  }

  export type BattleGroupScoresSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LayerAcceptanceCountOrderByAggregateInput = {
    id?: SortOrder
    country_1?: SortOrder
    battle_group_1?: SortOrder
    country_2?: SortOrder
    battle_group_2?: SortOrder
    acceptance?: SortOrder
  }

  export type LayerAcceptanceAvgOrderByAggregateInput = {
    id?: SortOrder
    acceptance?: SortOrder
  }

  export type LayerAcceptanceMaxOrderByAggregateInput = {
    id?: SortOrder
    country_1?: SortOrder
    battle_group_1?: SortOrder
    country_2?: SortOrder
    battle_group_2?: SortOrder
    acceptance?: SortOrder
  }

  export type LayerAcceptanceMinOrderByAggregateInput = {
    id?: SortOrder
    country_1?: SortOrder
    battle_group_1?: SortOrder
    country_2?: SortOrder
    battle_group_2?: SortOrder
    acceptance?: SortOrder
  }

  export type LayerAcceptanceSumOrderByAggregateInput = {
    id?: SortOrder
    acceptance?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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