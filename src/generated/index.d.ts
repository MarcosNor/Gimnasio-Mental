
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model actividad
 * 
 */
export type actividad = $Result.DefaultSelection<Prisma.$actividadPayload>
/**
 * Model cat_categoria
 * 
 */
export type cat_categoria = $Result.DefaultSelection<Prisma.$cat_categoriaPayload>
/**
 * Model stat_usuario
 * 
 */
export type stat_usuario = $Result.DefaultSelection<Prisma.$stat_usuarioPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model item
 * 
 */
export type item = $Result.DefaultSelection<Prisma.$itemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const item_dificultad: {
  FACIL: 'FACIL',
  MEDIO: 'MEDIO',
  DIFICIL: 'DIFICIL'
};

export type item_dificultad = (typeof item_dificultad)[keyof typeof item_dificultad]

}

export type item_dificultad = $Enums.item_dificultad

export const item_dificultad: typeof $Enums.item_dificultad

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actividads
 * const actividads = await prisma.actividad.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Actividads
   * const actividads = await prisma.actividad.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.actividad`: Exposes CRUD operations for the **actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actividads
    * const actividads = await prisma.actividad.findMany()
    * ```
    */
  get actividad(): Prisma.actividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cat_categoria`: Exposes CRUD operations for the **cat_categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cat_categorias
    * const cat_categorias = await prisma.cat_categoria.findMany()
    * ```
    */
  get cat_categoria(): Prisma.cat_categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stat_usuario`: Exposes CRUD operations for the **stat_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stat_usuarios
    * const stat_usuarios = await prisma.stat_usuario.findMany()
    * ```
    */
  get stat_usuario(): Prisma.stat_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.itemDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    actividad: 'actividad',
    cat_categoria: 'cat_categoria',
    stat_usuario: 'stat_usuario',
    usuario: 'usuario',
    item: 'item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "actividad" | "cat_categoria" | "stat_usuario" | "usuario" | "item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      actividad: {
        payload: Prisma.$actividadPayload<ExtArgs>
        fields: Prisma.actividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          findFirst: {
            args: Prisma.actividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          findMany: {
            args: Prisma.actividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>[]
          }
          create: {
            args: Prisma.actividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          createMany: {
            args: Prisma.actividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.actividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          update: {
            args: Prisma.actividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          deleteMany: {
            args: Prisma.actividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.actividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          aggregate: {
            args: Prisma.ActividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActividad>
          }
          groupBy: {
            args: Prisma.actividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.actividadCountArgs<ExtArgs>
            result: $Utils.Optional<ActividadCountAggregateOutputType> | number
          }
        }
      }
      cat_categoria: {
        payload: Prisma.$cat_categoriaPayload<ExtArgs>
        fields: Prisma.cat_categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cat_categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cat_categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>
          }
          findFirst: {
            args: Prisma.cat_categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cat_categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>
          }
          findMany: {
            args: Prisma.cat_categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>[]
          }
          create: {
            args: Prisma.cat_categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>
          }
          createMany: {
            args: Prisma.cat_categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cat_categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>
          }
          update: {
            args: Prisma.cat_categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>
          }
          deleteMany: {
            args: Prisma.cat_categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cat_categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cat_categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cat_categoriaPayload>
          }
          aggregate: {
            args: Prisma.Cat_categoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCat_categoria>
          }
          groupBy: {
            args: Prisma.cat_categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cat_categoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cat_categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<Cat_categoriaCountAggregateOutputType> | number
          }
        }
      }
      stat_usuario: {
        payload: Prisma.$stat_usuarioPayload<ExtArgs>
        fields: Prisma.stat_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stat_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stat_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>
          }
          findFirst: {
            args: Prisma.stat_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stat_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>
          }
          findMany: {
            args: Prisma.stat_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>[]
          }
          create: {
            args: Prisma.stat_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>
          }
          createMany: {
            args: Prisma.stat_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stat_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>
          }
          update: {
            args: Prisma.stat_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.stat_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stat_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stat_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stat_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Stat_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStat_usuario>
          }
          groupBy: {
            args: Prisma.stat_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stat_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.stat_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Stat_usuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      item: {
        payload: Prisma.$itemPayload<ExtArgs>
        fields: Prisma.itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findFirst: {
            args: Prisma.itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findMany: {
            args: Prisma.itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          create: {
            args: Prisma.itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          createMany: {
            args: Prisma.itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          update: {
            args: Prisma.itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          deleteMany: {
            args: Prisma.itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    actividad?: actividadOmit
    cat_categoria?: cat_categoriaOmit
    stat_usuario?: stat_usuarioOmit
    usuario?: usuarioOmit
    item?: itemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ActividadCountOutputType
   */

  export type ActividadCountOutputType = {
    item: number
    stat_usuario: number
  }

  export type ActividadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ActividadCountOutputTypeCountItemArgs
    stat_usuario?: boolean | ActividadCountOutputTypeCountStat_usuarioArgs
  }

  // Custom InputTypes
  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActividadCountOutputType
     */
    select?: ActividadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }

  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeCountStat_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stat_usuarioWhereInput
  }


  /**
   * Count Type Cat_categoriaCountOutputType
   */

  export type Cat_categoriaCountOutputType = {
    actividad: number
  }

  export type Cat_categoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | Cat_categoriaCountOutputTypeCountActividadArgs
  }

  // Custom InputTypes
  /**
   * Cat_categoriaCountOutputType without action
   */
  export type Cat_categoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cat_categoriaCountOutputType
     */
    select?: Cat_categoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cat_categoriaCountOutputType without action
   */
  export type Cat_categoriaCountOutputTypeCountActividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actividadWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    stat_usuario: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stat_usuario?: boolean | UsuarioCountOutputTypeCountStat_usuarioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountStat_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stat_usuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model actividad
   */

  export type AggregateActividad = {
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  export type ActividadAvgAggregateOutputType = {
    id_actividad: number | null
    id_categoria: number | null
    tiempoLimite: number | null
  }

  export type ActividadSumAggregateOutputType = {
    id_actividad: number | null
    id_categoria: number | null
    tiempoLimite: number | null
  }

  export type ActividadMinAggregateOutputType = {
    id_actividad: number | null
    id_categoria: number | null
    nombre: string | null
    explicacion: string | null
    tiempoLimite: number | null
    estatus_actividad: boolean | null
  }

  export type ActividadMaxAggregateOutputType = {
    id_actividad: number | null
    id_categoria: number | null
    nombre: string | null
    explicacion: string | null
    tiempoLimite: number | null
    estatus_actividad: boolean | null
  }

  export type ActividadCountAggregateOutputType = {
    id_actividad: number
    id_categoria: number
    nombre: number
    explicacion: number
    tiempoLimite: number
    estatus_actividad: number
    _all: number
  }


  export type ActividadAvgAggregateInputType = {
    id_actividad?: true
    id_categoria?: true
    tiempoLimite?: true
  }

  export type ActividadSumAggregateInputType = {
    id_actividad?: true
    id_categoria?: true
    tiempoLimite?: true
  }

  export type ActividadMinAggregateInputType = {
    id_actividad?: true
    id_categoria?: true
    nombre?: true
    explicacion?: true
    tiempoLimite?: true
    estatus_actividad?: true
  }

  export type ActividadMaxAggregateInputType = {
    id_actividad?: true
    id_categoria?: true
    nombre?: true
    explicacion?: true
    tiempoLimite?: true
    estatus_actividad?: true
  }

  export type ActividadCountAggregateInputType = {
    id_actividad?: true
    id_categoria?: true
    nombre?: true
    explicacion?: true
    tiempoLimite?: true
    estatus_actividad?: true
    _all?: true
  }

  export type ActividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actividad to aggregate.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actividads
    **/
    _count?: true | ActividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActividadMaxAggregateInputType
  }

  export type GetActividadAggregateType<T extends ActividadAggregateArgs> = {
        [P in keyof T & keyof AggregateActividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActividad[P]>
      : GetScalarType<T[P], AggregateActividad[P]>
  }




  export type actividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actividadWhereInput
    orderBy?: actividadOrderByWithAggregationInput | actividadOrderByWithAggregationInput[]
    by: ActividadScalarFieldEnum[] | ActividadScalarFieldEnum
    having?: actividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActividadCountAggregateInputType | true
    _avg?: ActividadAvgAggregateInputType
    _sum?: ActividadSumAggregateInputType
    _min?: ActividadMinAggregateInputType
    _max?: ActividadMaxAggregateInputType
  }

  export type ActividadGroupByOutputType = {
    id_actividad: number
    id_categoria: number
    nombre: string
    explicacion: string | null
    tiempoLimite: number | null
    estatus_actividad: boolean | null
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  type GetActividadGroupByPayload<T extends actividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActividadGroupByOutputType[P]>
            : GetScalarType<T[P], ActividadGroupByOutputType[P]>
        }
      >
    >


  export type actividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_actividad?: boolean
    id_categoria?: boolean
    nombre?: boolean
    explicacion?: boolean
    tiempoLimite?: boolean
    estatus_actividad?: boolean
    cat_categoria?: boolean | cat_categoriaDefaultArgs<ExtArgs>
    item?: boolean | actividad$itemArgs<ExtArgs>
    stat_usuario?: boolean | actividad$stat_usuarioArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividad"]>



  export type actividadSelectScalar = {
    id_actividad?: boolean
    id_categoria?: boolean
    nombre?: boolean
    explicacion?: boolean
    tiempoLimite?: boolean
    estatus_actividad?: boolean
  }

  export type actividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_actividad" | "id_categoria" | "nombre" | "explicacion" | "tiempoLimite" | "estatus_actividad", ExtArgs["result"]["actividad"]>
  export type actividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat_categoria?: boolean | cat_categoriaDefaultArgs<ExtArgs>
    item?: boolean | actividad$itemArgs<ExtArgs>
    stat_usuario?: boolean | actividad$stat_usuarioArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $actividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actividad"
    objects: {
      cat_categoria: Prisma.$cat_categoriaPayload<ExtArgs>
      item: Prisma.$itemPayload<ExtArgs>[]
      stat_usuario: Prisma.$stat_usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_actividad: number
      id_categoria: number
      nombre: string
      explicacion: string | null
      tiempoLimite: number | null
      estatus_actividad: boolean | null
    }, ExtArgs["result"]["actividad"]>
    composites: {}
  }

  type actividadGetPayload<S extends boolean | null | undefined | actividadDefaultArgs> = $Result.GetResult<Prisma.$actividadPayload, S>

  type actividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActividadCountAggregateInputType | true
    }

  export interface actividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actividad'], meta: { name: 'actividad' } }
    /**
     * Find zero or one Actividad that matches the filter.
     * @param {actividadFindUniqueArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actividadFindUniqueArgs>(args: SelectSubset<T, actividadFindUniqueArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actividadFindUniqueOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actividadFindUniqueOrThrowArgs>(args: SelectSubset<T, actividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadFindFirstArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actividadFindFirstArgs>(args?: SelectSubset<T, actividadFindFirstArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadFindFirstOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actividadFindFirstOrThrowArgs>(args?: SelectSubset<T, actividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actividads
     * const actividads = await prisma.actividad.findMany()
     * 
     * // Get first 10 Actividads
     * const actividads = await prisma.actividad.findMany({ take: 10 })
     * 
     * // Only select the `id_actividad`
     * const actividadWithId_actividadOnly = await prisma.actividad.findMany({ select: { id_actividad: true } })
     * 
     */
    findMany<T extends actividadFindManyArgs>(args?: SelectSubset<T, actividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actividad.
     * @param {actividadCreateArgs} args - Arguments to create a Actividad.
     * @example
     * // Create one Actividad
     * const Actividad = await prisma.actividad.create({
     *   data: {
     *     // ... data to create a Actividad
     *   }
     * })
     * 
     */
    create<T extends actividadCreateArgs>(args: SelectSubset<T, actividadCreateArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actividads.
     * @param {actividadCreateManyArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actividadCreateManyArgs>(args?: SelectSubset<T, actividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actividad.
     * @param {actividadDeleteArgs} args - Arguments to delete one Actividad.
     * @example
     * // Delete one Actividad
     * const Actividad = await prisma.actividad.delete({
     *   where: {
     *     // ... filter to delete one Actividad
     *   }
     * })
     * 
     */
    delete<T extends actividadDeleteArgs>(args: SelectSubset<T, actividadDeleteArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actividad.
     * @param {actividadUpdateArgs} args - Arguments to update one Actividad.
     * @example
     * // Update one Actividad
     * const actividad = await prisma.actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actividadUpdateArgs>(args: SelectSubset<T, actividadUpdateArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actividads.
     * @param {actividadDeleteManyArgs} args - Arguments to filter Actividads to delete.
     * @example
     * // Delete a few Actividads
     * const { count } = await prisma.actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actividadDeleteManyArgs>(args?: SelectSubset<T, actividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actividadUpdateManyArgs>(args: SelectSubset<T, actividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actividad.
     * @param {actividadUpsertArgs} args - Arguments to update or create a Actividad.
     * @example
     * // Update or create a Actividad
     * const actividad = await prisma.actividad.upsert({
     *   create: {
     *     // ... data to create a Actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actividad we want to update
     *   }
     * })
     */
    upsert<T extends actividadUpsertArgs>(args: SelectSubset<T, actividadUpsertArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadCountArgs} args - Arguments to filter Actividads to count.
     * @example
     * // Count the number of Actividads
     * const count = await prisma.actividad.count({
     *   where: {
     *     // ... the filter for the Actividads we want to count
     *   }
     * })
    **/
    count<T extends actividadCountArgs>(
      args?: Subset<T, actividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActividadAggregateArgs>(args: Subset<T, ActividadAggregateArgs>): Prisma.PrismaPromise<GetActividadAggregateType<T>>

    /**
     * Group by Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadGroupByArgs} args - Group by arguments.
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
      T extends actividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actividadGroupByArgs['orderBy'] }
        : { orderBy?: actividadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, actividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actividad model
   */
  readonly fields: actividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cat_categoria<T extends cat_categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cat_categoriaDefaultArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends actividad$itemArgs<ExtArgs> = {}>(args?: Subset<T, actividad$itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stat_usuario<T extends actividad$stat_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, actividad$stat_usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the actividad model
   */
  interface actividadFieldRefs {
    readonly id_actividad: FieldRef<"actividad", 'Int'>
    readonly id_categoria: FieldRef<"actividad", 'Int'>
    readonly nombre: FieldRef<"actividad", 'String'>
    readonly explicacion: FieldRef<"actividad", 'String'>
    readonly tiempoLimite: FieldRef<"actividad", 'Int'>
    readonly estatus_actividad: FieldRef<"actividad", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * actividad findUnique
   */
  export type actividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad findUniqueOrThrow
   */
  export type actividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad findFirst
   */
  export type actividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actividads.
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * actividad findFirstOrThrow
   */
  export type actividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actividads.
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * actividad findMany
   */
  export type actividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividads to fetch.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actividads.
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * actividad create
   */
  export type actividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * The data needed to create a actividad.
     */
    data: XOR<actividadCreateInput, actividadUncheckedCreateInput>
  }

  /**
   * actividad createMany
   */
  export type actividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actividads.
     */
    data: actividadCreateManyInput | actividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actividad update
   */
  export type actividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * The data needed to update a actividad.
     */
    data: XOR<actividadUpdateInput, actividadUncheckedUpdateInput>
    /**
     * Choose, which actividad to update.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad updateMany
   */
  export type actividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actividads.
     */
    data: XOR<actividadUpdateManyMutationInput, actividadUncheckedUpdateManyInput>
    /**
     * Filter which actividads to update
     */
    where?: actividadWhereInput
    /**
     * Limit how many actividads to update.
     */
    limit?: number
  }

  /**
   * actividad upsert
   */
  export type actividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * The filter to search for the actividad to update in case it exists.
     */
    where: actividadWhereUniqueInput
    /**
     * In case the actividad found by the `where` argument doesn't exist, create a new actividad with this data.
     */
    create: XOR<actividadCreateInput, actividadUncheckedCreateInput>
    /**
     * In case the actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actividadUpdateInput, actividadUncheckedUpdateInput>
  }

  /**
   * actividad delete
   */
  export type actividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter which actividad to delete.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad deleteMany
   */
  export type actividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actividads to delete
     */
    where?: actividadWhereInput
    /**
     * Limit how many actividads to delete.
     */
    limit?: number
  }

  /**
   * actividad.item
   */
  export type actividad$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * actividad.stat_usuario
   */
  export type actividad$stat_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    where?: stat_usuarioWhereInput
    orderBy?: stat_usuarioOrderByWithRelationInput | stat_usuarioOrderByWithRelationInput[]
    cursor?: stat_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stat_usuarioScalarFieldEnum | Stat_usuarioScalarFieldEnum[]
  }

  /**
   * actividad without action
   */
  export type actividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
  }


  /**
   * Model cat_categoria
   */

  export type AggregateCat_categoria = {
    _count: Cat_categoriaCountAggregateOutputType | null
    _avg: Cat_categoriaAvgAggregateOutputType | null
    _sum: Cat_categoriaSumAggregateOutputType | null
    _min: Cat_categoriaMinAggregateOutputType | null
    _max: Cat_categoriaMaxAggregateOutputType | null
  }

  export type Cat_categoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type Cat_categoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type Cat_categoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
    beneficios: string | null
  }

  export type Cat_categoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
    beneficios: string | null
  }

  export type Cat_categoriaCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    beneficios: number
    _all: number
  }


  export type Cat_categoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type Cat_categoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type Cat_categoriaMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
    beneficios?: true
  }

  export type Cat_categoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
    beneficios?: true
  }

  export type Cat_categoriaCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    beneficios?: true
    _all?: true
  }

  export type Cat_categoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cat_categoria to aggregate.
     */
    where?: cat_categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_categorias to fetch.
     */
    orderBy?: cat_categoriaOrderByWithRelationInput | cat_categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cat_categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cat_categorias
    **/
    _count?: true | Cat_categoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cat_categoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cat_categoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cat_categoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cat_categoriaMaxAggregateInputType
  }

  export type GetCat_categoriaAggregateType<T extends Cat_categoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCat_categoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCat_categoria[P]>
      : GetScalarType<T[P], AggregateCat_categoria[P]>
  }




  export type cat_categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cat_categoriaWhereInput
    orderBy?: cat_categoriaOrderByWithAggregationInput | cat_categoriaOrderByWithAggregationInput[]
    by: Cat_categoriaScalarFieldEnum[] | Cat_categoriaScalarFieldEnum
    having?: cat_categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cat_categoriaCountAggregateInputType | true
    _avg?: Cat_categoriaAvgAggregateInputType
    _sum?: Cat_categoriaSumAggregateInputType
    _min?: Cat_categoriaMinAggregateInputType
    _max?: Cat_categoriaMaxAggregateInputType
  }

  export type Cat_categoriaGroupByOutputType = {
    id_categoria: number
    nombre: string
    beneficios: string | null
    _count: Cat_categoriaCountAggregateOutputType | null
    _avg: Cat_categoriaAvgAggregateOutputType | null
    _sum: Cat_categoriaSumAggregateOutputType | null
    _min: Cat_categoriaMinAggregateOutputType | null
    _max: Cat_categoriaMaxAggregateOutputType | null
  }

  type GetCat_categoriaGroupByPayload<T extends cat_categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cat_categoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cat_categoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cat_categoriaGroupByOutputType[P]>
            : GetScalarType<T[P], Cat_categoriaGroupByOutputType[P]>
        }
      >
    >


  export type cat_categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    beneficios?: boolean
    actividad?: boolean | cat_categoria$actividadArgs<ExtArgs>
    _count?: boolean | Cat_categoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cat_categoria"]>



  export type cat_categoriaSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
    beneficios?: boolean
  }

  export type cat_categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre" | "beneficios", ExtArgs["result"]["cat_categoria"]>
  export type cat_categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | cat_categoria$actividadArgs<ExtArgs>
    _count?: boolean | Cat_categoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cat_categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cat_categoria"
    objects: {
      actividad: Prisma.$actividadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre: string
      beneficios: string | null
    }, ExtArgs["result"]["cat_categoria"]>
    composites: {}
  }

  type cat_categoriaGetPayload<S extends boolean | null | undefined | cat_categoriaDefaultArgs> = $Result.GetResult<Prisma.$cat_categoriaPayload, S>

  type cat_categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cat_categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cat_categoriaCountAggregateInputType | true
    }

  export interface cat_categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cat_categoria'], meta: { name: 'cat_categoria' } }
    /**
     * Find zero or one Cat_categoria that matches the filter.
     * @param {cat_categoriaFindUniqueArgs} args - Arguments to find a Cat_categoria
     * @example
     * // Get one Cat_categoria
     * const cat_categoria = await prisma.cat_categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cat_categoriaFindUniqueArgs>(args: SelectSubset<T, cat_categoriaFindUniqueArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cat_categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cat_categoriaFindUniqueOrThrowArgs} args - Arguments to find a Cat_categoria
     * @example
     * // Get one Cat_categoria
     * const cat_categoria = await prisma.cat_categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cat_categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, cat_categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cat_categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_categoriaFindFirstArgs} args - Arguments to find a Cat_categoria
     * @example
     * // Get one Cat_categoria
     * const cat_categoria = await prisma.cat_categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cat_categoriaFindFirstArgs>(args?: SelectSubset<T, cat_categoriaFindFirstArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cat_categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_categoriaFindFirstOrThrowArgs} args - Arguments to find a Cat_categoria
     * @example
     * // Get one Cat_categoria
     * const cat_categoria = await prisma.cat_categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cat_categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, cat_categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cat_categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cat_categorias
     * const cat_categorias = await prisma.cat_categoria.findMany()
     * 
     * // Get first 10 Cat_categorias
     * const cat_categorias = await prisma.cat_categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const cat_categoriaWithId_categoriaOnly = await prisma.cat_categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends cat_categoriaFindManyArgs>(args?: SelectSubset<T, cat_categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cat_categoria.
     * @param {cat_categoriaCreateArgs} args - Arguments to create a Cat_categoria.
     * @example
     * // Create one Cat_categoria
     * const Cat_categoria = await prisma.cat_categoria.create({
     *   data: {
     *     // ... data to create a Cat_categoria
     *   }
     * })
     * 
     */
    create<T extends cat_categoriaCreateArgs>(args: SelectSubset<T, cat_categoriaCreateArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cat_categorias.
     * @param {cat_categoriaCreateManyArgs} args - Arguments to create many Cat_categorias.
     * @example
     * // Create many Cat_categorias
     * const cat_categoria = await prisma.cat_categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cat_categoriaCreateManyArgs>(args?: SelectSubset<T, cat_categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cat_categoria.
     * @param {cat_categoriaDeleteArgs} args - Arguments to delete one Cat_categoria.
     * @example
     * // Delete one Cat_categoria
     * const Cat_categoria = await prisma.cat_categoria.delete({
     *   where: {
     *     // ... filter to delete one Cat_categoria
     *   }
     * })
     * 
     */
    delete<T extends cat_categoriaDeleteArgs>(args: SelectSubset<T, cat_categoriaDeleteArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cat_categoria.
     * @param {cat_categoriaUpdateArgs} args - Arguments to update one Cat_categoria.
     * @example
     * // Update one Cat_categoria
     * const cat_categoria = await prisma.cat_categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cat_categoriaUpdateArgs>(args: SelectSubset<T, cat_categoriaUpdateArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cat_categorias.
     * @param {cat_categoriaDeleteManyArgs} args - Arguments to filter Cat_categorias to delete.
     * @example
     * // Delete a few Cat_categorias
     * const { count } = await prisma.cat_categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cat_categoriaDeleteManyArgs>(args?: SelectSubset<T, cat_categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cat_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cat_categorias
     * const cat_categoria = await prisma.cat_categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cat_categoriaUpdateManyArgs>(args: SelectSubset<T, cat_categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cat_categoria.
     * @param {cat_categoriaUpsertArgs} args - Arguments to update or create a Cat_categoria.
     * @example
     * // Update or create a Cat_categoria
     * const cat_categoria = await prisma.cat_categoria.upsert({
     *   create: {
     *     // ... data to create a Cat_categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cat_categoria we want to update
     *   }
     * })
     */
    upsert<T extends cat_categoriaUpsertArgs>(args: SelectSubset<T, cat_categoriaUpsertArgs<ExtArgs>>): Prisma__cat_categoriaClient<$Result.GetResult<Prisma.$cat_categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cat_categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_categoriaCountArgs} args - Arguments to filter Cat_categorias to count.
     * @example
     * // Count the number of Cat_categorias
     * const count = await prisma.cat_categoria.count({
     *   where: {
     *     // ... the filter for the Cat_categorias we want to count
     *   }
     * })
    **/
    count<T extends cat_categoriaCountArgs>(
      args?: Subset<T, cat_categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cat_categoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cat_categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cat_categoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cat_categoriaAggregateArgs>(args: Subset<T, Cat_categoriaAggregateArgs>): Prisma.PrismaPromise<GetCat_categoriaAggregateType<T>>

    /**
     * Group by Cat_categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_categoriaGroupByArgs} args - Group by arguments.
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
      T extends cat_categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cat_categoriaGroupByArgs['orderBy'] }
        : { orderBy?: cat_categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cat_categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCat_categoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cat_categoria model
   */
  readonly fields: cat_categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cat_categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cat_categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividad<T extends cat_categoria$actividadArgs<ExtArgs> = {}>(args?: Subset<T, cat_categoria$actividadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cat_categoria model
   */
  interface cat_categoriaFieldRefs {
    readonly id_categoria: FieldRef<"cat_categoria", 'Int'>
    readonly nombre: FieldRef<"cat_categoria", 'String'>
    readonly beneficios: FieldRef<"cat_categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cat_categoria findUnique
   */
  export type cat_categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * Filter, which cat_categoria to fetch.
     */
    where: cat_categoriaWhereUniqueInput
  }

  /**
   * cat_categoria findUniqueOrThrow
   */
  export type cat_categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * Filter, which cat_categoria to fetch.
     */
    where: cat_categoriaWhereUniqueInput
  }

  /**
   * cat_categoria findFirst
   */
  export type cat_categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * Filter, which cat_categoria to fetch.
     */
    where?: cat_categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_categorias to fetch.
     */
    orderBy?: cat_categoriaOrderByWithRelationInput | cat_categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cat_categorias.
     */
    cursor?: cat_categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cat_categorias.
     */
    distinct?: Cat_categoriaScalarFieldEnum | Cat_categoriaScalarFieldEnum[]
  }

  /**
   * cat_categoria findFirstOrThrow
   */
  export type cat_categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * Filter, which cat_categoria to fetch.
     */
    where?: cat_categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_categorias to fetch.
     */
    orderBy?: cat_categoriaOrderByWithRelationInput | cat_categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cat_categorias.
     */
    cursor?: cat_categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cat_categorias.
     */
    distinct?: Cat_categoriaScalarFieldEnum | Cat_categoriaScalarFieldEnum[]
  }

  /**
   * cat_categoria findMany
   */
  export type cat_categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * Filter, which cat_categorias to fetch.
     */
    where?: cat_categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_categorias to fetch.
     */
    orderBy?: cat_categoriaOrderByWithRelationInput | cat_categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cat_categorias.
     */
    cursor?: cat_categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_categorias.
     */
    skip?: number
    distinct?: Cat_categoriaScalarFieldEnum | Cat_categoriaScalarFieldEnum[]
  }

  /**
   * cat_categoria create
   */
  export type cat_categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a cat_categoria.
     */
    data: XOR<cat_categoriaCreateInput, cat_categoriaUncheckedCreateInput>
  }

  /**
   * cat_categoria createMany
   */
  export type cat_categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cat_categorias.
     */
    data: cat_categoriaCreateManyInput | cat_categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cat_categoria update
   */
  export type cat_categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a cat_categoria.
     */
    data: XOR<cat_categoriaUpdateInput, cat_categoriaUncheckedUpdateInput>
    /**
     * Choose, which cat_categoria to update.
     */
    where: cat_categoriaWhereUniqueInput
  }

  /**
   * cat_categoria updateMany
   */
  export type cat_categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cat_categorias.
     */
    data: XOR<cat_categoriaUpdateManyMutationInput, cat_categoriaUncheckedUpdateManyInput>
    /**
     * Filter which cat_categorias to update
     */
    where?: cat_categoriaWhereInput
    /**
     * Limit how many cat_categorias to update.
     */
    limit?: number
  }

  /**
   * cat_categoria upsert
   */
  export type cat_categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the cat_categoria to update in case it exists.
     */
    where: cat_categoriaWhereUniqueInput
    /**
     * In case the cat_categoria found by the `where` argument doesn't exist, create a new cat_categoria with this data.
     */
    create: XOR<cat_categoriaCreateInput, cat_categoriaUncheckedCreateInput>
    /**
     * In case the cat_categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cat_categoriaUpdateInput, cat_categoriaUncheckedUpdateInput>
  }

  /**
   * cat_categoria delete
   */
  export type cat_categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
    /**
     * Filter which cat_categoria to delete.
     */
    where: cat_categoriaWhereUniqueInput
  }

  /**
   * cat_categoria deleteMany
   */
  export type cat_categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cat_categorias to delete
     */
    where?: cat_categoriaWhereInput
    /**
     * Limit how many cat_categorias to delete.
     */
    limit?: number
  }

  /**
   * cat_categoria.actividad
   */
  export type cat_categoria$actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    where?: actividadWhereInput
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    cursor?: actividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * cat_categoria without action
   */
  export type cat_categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_categoria
     */
    select?: cat_categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cat_categoria
     */
    omit?: cat_categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cat_categoriaInclude<ExtArgs> | null
  }


  /**
   * Model stat_usuario
   */

  export type AggregateStat_usuario = {
    _count: Stat_usuarioCountAggregateOutputType | null
    _avg: Stat_usuarioAvgAggregateOutputType | null
    _sum: Stat_usuarioSumAggregateOutputType | null
    _min: Stat_usuarioMinAggregateOutputType | null
    _max: Stat_usuarioMaxAggregateOutputType | null
  }

  export type Stat_usuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_actividad: number | null
    record_personal: number | null
    total_partidas: number | null
  }

  export type Stat_usuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_actividad: number | null
    record_personal: number | null
    total_partidas: number | null
  }

  export type Stat_usuarioMinAggregateOutputType = {
    id_usuario: number | null
    id_actividad: number | null
    record_personal: number | null
    total_partidas: number | null
  }

  export type Stat_usuarioMaxAggregateOutputType = {
    id_usuario: number | null
    id_actividad: number | null
    record_personal: number | null
    total_partidas: number | null
  }

  export type Stat_usuarioCountAggregateOutputType = {
    id_usuario: number
    id_actividad: number
    record_personal: number
    total_partidas: number
    _all: number
  }


  export type Stat_usuarioAvgAggregateInputType = {
    id_usuario?: true
    id_actividad?: true
    record_personal?: true
    total_partidas?: true
  }

  export type Stat_usuarioSumAggregateInputType = {
    id_usuario?: true
    id_actividad?: true
    record_personal?: true
    total_partidas?: true
  }

  export type Stat_usuarioMinAggregateInputType = {
    id_usuario?: true
    id_actividad?: true
    record_personal?: true
    total_partidas?: true
  }

  export type Stat_usuarioMaxAggregateInputType = {
    id_usuario?: true
    id_actividad?: true
    record_personal?: true
    total_partidas?: true
  }

  export type Stat_usuarioCountAggregateInputType = {
    id_usuario?: true
    id_actividad?: true
    record_personal?: true
    total_partidas?: true
    _all?: true
  }

  export type Stat_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stat_usuario to aggregate.
     */
    where?: stat_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_usuarios to fetch.
     */
    orderBy?: stat_usuarioOrderByWithRelationInput | stat_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stat_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stat_usuarios
    **/
    _count?: true | Stat_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stat_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stat_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stat_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stat_usuarioMaxAggregateInputType
  }

  export type GetStat_usuarioAggregateType<T extends Stat_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateStat_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStat_usuario[P]>
      : GetScalarType<T[P], AggregateStat_usuario[P]>
  }




  export type stat_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stat_usuarioWhereInput
    orderBy?: stat_usuarioOrderByWithAggregationInput | stat_usuarioOrderByWithAggregationInput[]
    by: Stat_usuarioScalarFieldEnum[] | Stat_usuarioScalarFieldEnum
    having?: stat_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stat_usuarioCountAggregateInputType | true
    _avg?: Stat_usuarioAvgAggregateInputType
    _sum?: Stat_usuarioSumAggregateInputType
    _min?: Stat_usuarioMinAggregateInputType
    _max?: Stat_usuarioMaxAggregateInputType
  }

  export type Stat_usuarioGroupByOutputType = {
    id_usuario: number
    id_actividad: number
    record_personal: number | null
    total_partidas: number | null
    _count: Stat_usuarioCountAggregateOutputType | null
    _avg: Stat_usuarioAvgAggregateOutputType | null
    _sum: Stat_usuarioSumAggregateOutputType | null
    _min: Stat_usuarioMinAggregateOutputType | null
    _max: Stat_usuarioMaxAggregateOutputType | null
  }

  type GetStat_usuarioGroupByPayload<T extends stat_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stat_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stat_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stat_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Stat_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type stat_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_actividad?: boolean
    record_personal?: boolean
    total_partidas?: boolean
    actividad?: boolean | actividadDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stat_usuario"]>



  export type stat_usuarioSelectScalar = {
    id_usuario?: boolean
    id_actividad?: boolean
    record_personal?: boolean
    total_partidas?: boolean
  }

  export type stat_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_actividad" | "record_personal" | "total_partidas", ExtArgs["result"]["stat_usuario"]>
  export type stat_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | actividadDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $stat_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stat_usuario"
    objects: {
      actividad: Prisma.$actividadPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_actividad: number
      record_personal: number | null
      total_partidas: number | null
    }, ExtArgs["result"]["stat_usuario"]>
    composites: {}
  }

  type stat_usuarioGetPayload<S extends boolean | null | undefined | stat_usuarioDefaultArgs> = $Result.GetResult<Prisma.$stat_usuarioPayload, S>

  type stat_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stat_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stat_usuarioCountAggregateInputType | true
    }

  export interface stat_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stat_usuario'], meta: { name: 'stat_usuario' } }
    /**
     * Find zero or one Stat_usuario that matches the filter.
     * @param {stat_usuarioFindUniqueArgs} args - Arguments to find a Stat_usuario
     * @example
     * // Get one Stat_usuario
     * const stat_usuario = await prisma.stat_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stat_usuarioFindUniqueArgs>(args: SelectSubset<T, stat_usuarioFindUniqueArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stat_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stat_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Stat_usuario
     * @example
     * // Get one Stat_usuario
     * const stat_usuario = await prisma.stat_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stat_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, stat_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_usuarioFindFirstArgs} args - Arguments to find a Stat_usuario
     * @example
     * // Get one Stat_usuario
     * const stat_usuario = await prisma.stat_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stat_usuarioFindFirstArgs>(args?: SelectSubset<T, stat_usuarioFindFirstArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_usuarioFindFirstOrThrowArgs} args - Arguments to find a Stat_usuario
     * @example
     * // Get one Stat_usuario
     * const stat_usuario = await prisma.stat_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stat_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, stat_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stat_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stat_usuarios
     * const stat_usuarios = await prisma.stat_usuario.findMany()
     * 
     * // Get first 10 Stat_usuarios
     * const stat_usuarios = await prisma.stat_usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const stat_usuarioWithId_usuarioOnly = await prisma.stat_usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends stat_usuarioFindManyArgs>(args?: SelectSubset<T, stat_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stat_usuario.
     * @param {stat_usuarioCreateArgs} args - Arguments to create a Stat_usuario.
     * @example
     * // Create one Stat_usuario
     * const Stat_usuario = await prisma.stat_usuario.create({
     *   data: {
     *     // ... data to create a Stat_usuario
     *   }
     * })
     * 
     */
    create<T extends stat_usuarioCreateArgs>(args: SelectSubset<T, stat_usuarioCreateArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stat_usuarios.
     * @param {stat_usuarioCreateManyArgs} args - Arguments to create many Stat_usuarios.
     * @example
     * // Create many Stat_usuarios
     * const stat_usuario = await prisma.stat_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stat_usuarioCreateManyArgs>(args?: SelectSubset<T, stat_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stat_usuario.
     * @param {stat_usuarioDeleteArgs} args - Arguments to delete one Stat_usuario.
     * @example
     * // Delete one Stat_usuario
     * const Stat_usuario = await prisma.stat_usuario.delete({
     *   where: {
     *     // ... filter to delete one Stat_usuario
     *   }
     * })
     * 
     */
    delete<T extends stat_usuarioDeleteArgs>(args: SelectSubset<T, stat_usuarioDeleteArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stat_usuario.
     * @param {stat_usuarioUpdateArgs} args - Arguments to update one Stat_usuario.
     * @example
     * // Update one Stat_usuario
     * const stat_usuario = await prisma.stat_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stat_usuarioUpdateArgs>(args: SelectSubset<T, stat_usuarioUpdateArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stat_usuarios.
     * @param {stat_usuarioDeleteManyArgs} args - Arguments to filter Stat_usuarios to delete.
     * @example
     * // Delete a few Stat_usuarios
     * const { count } = await prisma.stat_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stat_usuarioDeleteManyArgs>(args?: SelectSubset<T, stat_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stat_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stat_usuarios
     * const stat_usuario = await prisma.stat_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stat_usuarioUpdateManyArgs>(args: SelectSubset<T, stat_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stat_usuario.
     * @param {stat_usuarioUpsertArgs} args - Arguments to update or create a Stat_usuario.
     * @example
     * // Update or create a Stat_usuario
     * const stat_usuario = await prisma.stat_usuario.upsert({
     *   create: {
     *     // ... data to create a Stat_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stat_usuario we want to update
     *   }
     * })
     */
    upsert<T extends stat_usuarioUpsertArgs>(args: SelectSubset<T, stat_usuarioUpsertArgs<ExtArgs>>): Prisma__stat_usuarioClient<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stat_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_usuarioCountArgs} args - Arguments to filter Stat_usuarios to count.
     * @example
     * // Count the number of Stat_usuarios
     * const count = await prisma.stat_usuario.count({
     *   where: {
     *     // ... the filter for the Stat_usuarios we want to count
     *   }
     * })
    **/
    count<T extends stat_usuarioCountArgs>(
      args?: Subset<T, stat_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stat_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stat_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stat_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stat_usuarioAggregateArgs>(args: Subset<T, Stat_usuarioAggregateArgs>): Prisma.PrismaPromise<GetStat_usuarioAggregateType<T>>

    /**
     * Group by Stat_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stat_usuarioGroupByArgs} args - Group by arguments.
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
      T extends stat_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stat_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: stat_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stat_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStat_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stat_usuario model
   */
  readonly fields: stat_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stat_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stat_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividad<T extends actividadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, actividadDefaultArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the stat_usuario model
   */
  interface stat_usuarioFieldRefs {
    readonly id_usuario: FieldRef<"stat_usuario", 'Int'>
    readonly id_actividad: FieldRef<"stat_usuario", 'Int'>
    readonly record_personal: FieldRef<"stat_usuario", 'Int'>
    readonly total_partidas: FieldRef<"stat_usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stat_usuario findUnique
   */
  export type stat_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which stat_usuario to fetch.
     */
    where: stat_usuarioWhereUniqueInput
  }

  /**
   * stat_usuario findUniqueOrThrow
   */
  export type stat_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which stat_usuario to fetch.
     */
    where: stat_usuarioWhereUniqueInput
  }

  /**
   * stat_usuario findFirst
   */
  export type stat_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which stat_usuario to fetch.
     */
    where?: stat_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_usuarios to fetch.
     */
    orderBy?: stat_usuarioOrderByWithRelationInput | stat_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stat_usuarios.
     */
    cursor?: stat_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stat_usuarios.
     */
    distinct?: Stat_usuarioScalarFieldEnum | Stat_usuarioScalarFieldEnum[]
  }

  /**
   * stat_usuario findFirstOrThrow
   */
  export type stat_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which stat_usuario to fetch.
     */
    where?: stat_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_usuarios to fetch.
     */
    orderBy?: stat_usuarioOrderByWithRelationInput | stat_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stat_usuarios.
     */
    cursor?: stat_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stat_usuarios.
     */
    distinct?: Stat_usuarioScalarFieldEnum | Stat_usuarioScalarFieldEnum[]
  }

  /**
   * stat_usuario findMany
   */
  export type stat_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which stat_usuarios to fetch.
     */
    where?: stat_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stat_usuarios to fetch.
     */
    orderBy?: stat_usuarioOrderByWithRelationInput | stat_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stat_usuarios.
     */
    cursor?: stat_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stat_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stat_usuarios.
     */
    skip?: number
    distinct?: Stat_usuarioScalarFieldEnum | Stat_usuarioScalarFieldEnum[]
  }

  /**
   * stat_usuario create
   */
  export type stat_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a stat_usuario.
     */
    data: XOR<stat_usuarioCreateInput, stat_usuarioUncheckedCreateInput>
  }

  /**
   * stat_usuario createMany
   */
  export type stat_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stat_usuarios.
     */
    data: stat_usuarioCreateManyInput | stat_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stat_usuario update
   */
  export type stat_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a stat_usuario.
     */
    data: XOR<stat_usuarioUpdateInput, stat_usuarioUncheckedUpdateInput>
    /**
     * Choose, which stat_usuario to update.
     */
    where: stat_usuarioWhereUniqueInput
  }

  /**
   * stat_usuario updateMany
   */
  export type stat_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stat_usuarios.
     */
    data: XOR<stat_usuarioUpdateManyMutationInput, stat_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which stat_usuarios to update
     */
    where?: stat_usuarioWhereInput
    /**
     * Limit how many stat_usuarios to update.
     */
    limit?: number
  }

  /**
   * stat_usuario upsert
   */
  export type stat_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the stat_usuario to update in case it exists.
     */
    where: stat_usuarioWhereUniqueInput
    /**
     * In case the stat_usuario found by the `where` argument doesn't exist, create a new stat_usuario with this data.
     */
    create: XOR<stat_usuarioCreateInput, stat_usuarioUncheckedCreateInput>
    /**
     * In case the stat_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stat_usuarioUpdateInput, stat_usuarioUncheckedUpdateInput>
  }

  /**
   * stat_usuario delete
   */
  export type stat_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    /**
     * Filter which stat_usuario to delete.
     */
    where: stat_usuarioWhereUniqueInput
  }

  /**
   * stat_usuario deleteMany
   */
  export type stat_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stat_usuarios to delete
     */
    where?: stat_usuarioWhereInput
    /**
     * Limit how many stat_usuarios to delete.
     */
    limit?: number
  }

  /**
   * stat_usuario without action
   */
  export type stat_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    num_cta: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    num_cta: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    num_cta: number | null
    email: string | null
    fecha_nacimiento: Date | null
    password: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    num_cta: number | null
    email: string | null
    fecha_nacimiento: Date | null
    password: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    num_cta: number
    email: number
    fecha_nacimiento: number
    password: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    num_cta?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    num_cta?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    num_cta?: true
    email?: true
    fecha_nacimiento?: true
    password?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    num_cta?: true
    email?: true
    fecha_nacimiento?: true
    password?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    num_cta?: true
    email?: true
    fecha_nacimiento?: true
    password?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    num_cta: number
    email: string
    fecha_nacimiento: Date
    password: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    num_cta?: boolean
    email?: boolean
    fecha_nacimiento?: boolean
    password?: boolean
    stat_usuario?: boolean | usuario$stat_usuarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id_usuario?: boolean
    num_cta?: boolean
    email?: boolean
    fecha_nacimiento?: boolean
    password?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "num_cta" | "email" | "fecha_nacimiento" | "password", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stat_usuario?: boolean | usuario$stat_usuarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      stat_usuario: Prisma.$stat_usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      num_cta: number
      email: string
      fecha_nacimiento: Date
      password: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stat_usuario<T extends usuario$stat_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, usuario$stat_usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stat_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly num_cta: FieldRef<"usuario", 'Int'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly fecha_nacimiento: FieldRef<"usuario", 'DateTime'>
    readonly password: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.stat_usuario
   */
  export type usuario$stat_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stat_usuario
     */
    select?: stat_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stat_usuario
     */
    omit?: stat_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stat_usuarioInclude<ExtArgs> | null
    where?: stat_usuarioWhereInput
    orderBy?: stat_usuarioOrderByWithRelationInput | stat_usuarioOrderByWithRelationInput[]
    cursor?: stat_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stat_usuarioScalarFieldEnum | Stat_usuarioScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id_item: number | null
    id_actividad: number | null
  }

  export type ItemSumAggregateOutputType = {
    id_item: number | null
    id_actividad: number | null
  }

  export type ItemMinAggregateOutputType = {
    id_item: number | null
    id_actividad: number | null
    pregunta: string | null
    estatus_activo: boolean | null
    respuesta_c: string | null
    respuestas_i: string | null
    dificultad: $Enums.item_dificultad | null
  }

  export type ItemMaxAggregateOutputType = {
    id_item: number | null
    id_actividad: number | null
    pregunta: string | null
    estatus_activo: boolean | null
    respuesta_c: string | null
    respuestas_i: string | null
    dificultad: $Enums.item_dificultad | null
  }

  export type ItemCountAggregateOutputType = {
    id_item: number
    id_actividad: number
    pregunta: number
    estatus_activo: number
    respuesta_c: number
    respuestas_i: number
    dificultad: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id_item?: true
    id_actividad?: true
  }

  export type ItemSumAggregateInputType = {
    id_item?: true
    id_actividad?: true
  }

  export type ItemMinAggregateInputType = {
    id_item?: true
    id_actividad?: true
    pregunta?: true
    estatus_activo?: true
    respuesta_c?: true
    respuestas_i?: true
    dificultad?: true
  }

  export type ItemMaxAggregateInputType = {
    id_item?: true
    id_actividad?: true
    pregunta?: true
    estatus_activo?: true
    respuesta_c?: true
    respuestas_i?: true
    dificultad?: true
  }

  export type ItemCountAggregateInputType = {
    id_item?: true
    id_actividad?: true
    pregunta?: true
    estatus_activo?: true
    respuesta_c?: true
    respuestas_i?: true
    dificultad?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item to aggregate.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
    orderBy?: itemOrderByWithAggregationInput | itemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id_item: number
    id_actividad: number
    pregunta: string
    estatus_activo: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    id_actividad?: boolean
    pregunta?: boolean
    estatus_activo?: boolean
    respuesta_c?: boolean
    respuestas_i?: boolean
    dificultad?: boolean
    actividad?: boolean | actividadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type itemSelectScalar = {
    id_item?: boolean
    id_actividad?: boolean
    pregunta?: boolean
    estatus_activo?: boolean
    respuesta_c?: boolean
    respuestas_i?: boolean
    dificultad?: boolean
  }

  export type itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "id_actividad" | "pregunta" | "estatus_activo" | "respuesta_c" | "respuestas_i" | "dificultad", ExtArgs["result"]["item"]>
  export type itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | actividadDefaultArgs<ExtArgs>
  }

  export type $itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item"
    objects: {
      actividad: Prisma.$actividadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      id_actividad: number
      pregunta: string
      estatus_activo: boolean | null
      respuesta_c: string
      respuestas_i: string
      dificultad: $Enums.item_dificultad
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type itemGetPayload<S extends boolean | null | undefined | itemDefaultArgs> = $Result.GetResult<Prisma.$itemPayload, S>

  type itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item'], meta: { name: 'item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {itemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemFindUniqueArgs>(args: SelectSubset<T, itemFindUniqueArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemFindUniqueOrThrowArgs>(args: SelectSubset<T, itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemFindFirstArgs>(args?: SelectSubset<T, itemFindFirstArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemFindFirstOrThrowArgs>(args?: SelectSubset<T, itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const itemWithId_itemOnly = await prisma.item.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends itemFindManyArgs>(args?: SelectSubset<T, itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {itemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends itemCreateArgs>(args: SelectSubset<T, itemCreateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemCreateManyArgs>(args?: SelectSubset<T, itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {itemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends itemDeleteArgs>(args: SelectSubset<T, itemDeleteArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {itemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemUpdateArgs>(args: SelectSubset<T, itemUpdateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemDeleteManyArgs>(args?: SelectSubset<T, itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemUpdateManyArgs>(args: SelectSubset<T, itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {itemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends itemUpsertArgs>(args: SelectSubset<T, itemUpsertArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemCountArgs>(
      args?: Subset<T, itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemGroupByArgs} args - Group by arguments.
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
      T extends itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemGroupByArgs['orderBy'] }
        : { orderBy?: itemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item model
   */
  readonly fields: itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividad<T extends actividadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, actividadDefaultArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the item model
   */
  interface itemFieldRefs {
    readonly id_item: FieldRef<"item", 'Int'>
    readonly id_actividad: FieldRef<"item", 'Int'>
    readonly pregunta: FieldRef<"item", 'String'>
    readonly estatus_activo: FieldRef<"item", 'Boolean'>
    readonly respuesta_c: FieldRef<"item", 'String'>
    readonly respuestas_i: FieldRef<"item", 'String'>
    readonly dificultad: FieldRef<"item", 'item_dificultad'>
  }
    

  // Custom InputTypes
  /**
   * item findUnique
   */
  export type itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findUniqueOrThrow
   */
  export type itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findFirst
   */
  export type itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findFirstOrThrow
   */
  export type itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findMany
   */
  export type itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item create
   */
  export type itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to create a item.
     */
    data: XOR<itemCreateInput, itemUncheckedCreateInput>
  }

  /**
   * item createMany
   */
  export type itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item update
   */
  export type itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to update a item.
     */
    data: XOR<itemUpdateInput, itemUncheckedUpdateInput>
    /**
     * Choose, which item to update.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item updateMany
   */
  export type itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * item upsert
   */
  export type itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The filter to search for the item to update in case it exists.
     */
    where: itemWhereUniqueInput
    /**
     * In case the item found by the `where` argument doesn't exist, create a new item with this data.
     */
    create: XOR<itemCreateInput, itemUncheckedCreateInput>
    /**
     * In case the item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemUpdateInput, itemUncheckedUpdateInput>
  }

  /**
   * item delete
   */
  export type itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter which item to delete.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item deleteMany
   */
  export type itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * item without action
   */
  export type itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActividadScalarFieldEnum: {
    id_actividad: 'id_actividad',
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    explicacion: 'explicacion',
    tiempoLimite: 'tiempoLimite',
    estatus_actividad: 'estatus_actividad'
  };

  export type ActividadScalarFieldEnum = (typeof ActividadScalarFieldEnum)[keyof typeof ActividadScalarFieldEnum]


  export const Cat_categoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    beneficios: 'beneficios'
  };

  export type Cat_categoriaScalarFieldEnum = (typeof Cat_categoriaScalarFieldEnum)[keyof typeof Cat_categoriaScalarFieldEnum]


  export const Stat_usuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_actividad: 'id_actividad',
    record_personal: 'record_personal',
    total_partidas: 'total_partidas'
  };

  export type Stat_usuarioScalarFieldEnum = (typeof Stat_usuarioScalarFieldEnum)[keyof typeof Stat_usuarioScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    num_cta: 'num_cta',
    email: 'email',
    fecha_nacimiento: 'fecha_nacimiento',
    password: 'password'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id_item: 'id_item',
    id_actividad: 'id_actividad',
    pregunta: 'pregunta',
    estatus_activo: 'estatus_activo',
    respuesta_c: 'respuesta_c',
    respuestas_i: 'respuestas_i',
    dificultad: 'dificultad'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const actividadOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    explicacion: 'explicacion'
  };

  export type actividadOrderByRelevanceFieldEnum = (typeof actividadOrderByRelevanceFieldEnum)[keyof typeof actividadOrderByRelevanceFieldEnum]


  export const cat_categoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    beneficios: 'beneficios'
  };

  export type cat_categoriaOrderByRelevanceFieldEnum = (typeof cat_categoriaOrderByRelevanceFieldEnum)[keyof typeof cat_categoriaOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  export const itemOrderByRelevanceFieldEnum: {
    pregunta: 'pregunta',
    respuesta_c: 'respuesta_c',
    respuestas_i: 'respuestas_i'
  };

  export type itemOrderByRelevanceFieldEnum = (typeof itemOrderByRelevanceFieldEnum)[keyof typeof itemOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'item_dificultad'
   */
  export type Enumitem_dificultadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'item_dificultad'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type actividadWhereInput = {
    AND?: actividadWhereInput | actividadWhereInput[]
    OR?: actividadWhereInput[]
    NOT?: actividadWhereInput | actividadWhereInput[]
    id_actividad?: IntFilter<"actividad"> | number
    id_categoria?: IntFilter<"actividad"> | number
    nombre?: StringFilter<"actividad"> | string
    explicacion?: StringNullableFilter<"actividad"> | string | null
    tiempoLimite?: IntNullableFilter<"actividad"> | number | null
    estatus_actividad?: BoolNullableFilter<"actividad"> | boolean | null
    cat_categoria?: XOR<Cat_categoriaScalarRelationFilter, cat_categoriaWhereInput>
    item?: ItemListRelationFilter
    stat_usuario?: Stat_usuarioListRelationFilter
  }

  export type actividadOrderByWithRelationInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    explicacion?: SortOrderInput | SortOrder
    tiempoLimite?: SortOrderInput | SortOrder
    estatus_actividad?: SortOrderInput | SortOrder
    cat_categoria?: cat_categoriaOrderByWithRelationInput
    item?: itemOrderByRelationAggregateInput
    stat_usuario?: stat_usuarioOrderByRelationAggregateInput
    _relevance?: actividadOrderByRelevanceInput
  }

  export type actividadWhereUniqueInput = Prisma.AtLeast<{
    id_actividad?: number
    nombre?: string
    AND?: actividadWhereInput | actividadWhereInput[]
    OR?: actividadWhereInput[]
    NOT?: actividadWhereInput | actividadWhereInput[]
    id_categoria?: IntFilter<"actividad"> | number
    explicacion?: StringNullableFilter<"actividad"> | string | null
    tiempoLimite?: IntNullableFilter<"actividad"> | number | null
    estatus_actividad?: BoolNullableFilter<"actividad"> | boolean | null
    cat_categoria?: XOR<Cat_categoriaScalarRelationFilter, cat_categoriaWhereInput>
    item?: ItemListRelationFilter
    stat_usuario?: Stat_usuarioListRelationFilter
  }, "id_actividad" | "nombre">

  export type actividadOrderByWithAggregationInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    explicacion?: SortOrderInput | SortOrder
    tiempoLimite?: SortOrderInput | SortOrder
    estatus_actividad?: SortOrderInput | SortOrder
    _count?: actividadCountOrderByAggregateInput
    _avg?: actividadAvgOrderByAggregateInput
    _max?: actividadMaxOrderByAggregateInput
    _min?: actividadMinOrderByAggregateInput
    _sum?: actividadSumOrderByAggregateInput
  }

  export type actividadScalarWhereWithAggregatesInput = {
    AND?: actividadScalarWhereWithAggregatesInput | actividadScalarWhereWithAggregatesInput[]
    OR?: actividadScalarWhereWithAggregatesInput[]
    NOT?: actividadScalarWhereWithAggregatesInput | actividadScalarWhereWithAggregatesInput[]
    id_actividad?: IntWithAggregatesFilter<"actividad"> | number
    id_categoria?: IntWithAggregatesFilter<"actividad"> | number
    nombre?: StringWithAggregatesFilter<"actividad"> | string
    explicacion?: StringNullableWithAggregatesFilter<"actividad"> | string | null
    tiempoLimite?: IntNullableWithAggregatesFilter<"actividad"> | number | null
    estatus_actividad?: BoolNullableWithAggregatesFilter<"actividad"> | boolean | null
  }

  export type cat_categoriaWhereInput = {
    AND?: cat_categoriaWhereInput | cat_categoriaWhereInput[]
    OR?: cat_categoriaWhereInput[]
    NOT?: cat_categoriaWhereInput | cat_categoriaWhereInput[]
    id_categoria?: IntFilter<"cat_categoria"> | number
    nombre?: StringFilter<"cat_categoria"> | string
    beneficios?: StringNullableFilter<"cat_categoria"> | string | null
    actividad?: ActividadListRelationFilter
  }

  export type cat_categoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    beneficios?: SortOrderInput | SortOrder
    actividad?: actividadOrderByRelationAggregateInput
    _relevance?: cat_categoriaOrderByRelevanceInput
  }

  export type cat_categoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    nombre?: string
    AND?: cat_categoriaWhereInput | cat_categoriaWhereInput[]
    OR?: cat_categoriaWhereInput[]
    NOT?: cat_categoriaWhereInput | cat_categoriaWhereInput[]
    beneficios?: StringNullableFilter<"cat_categoria"> | string | null
    actividad?: ActividadListRelationFilter
  }, "id_categoria" | "nombre">

  export type cat_categoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    beneficios?: SortOrderInput | SortOrder
    _count?: cat_categoriaCountOrderByAggregateInput
    _avg?: cat_categoriaAvgOrderByAggregateInput
    _max?: cat_categoriaMaxOrderByAggregateInput
    _min?: cat_categoriaMinOrderByAggregateInput
    _sum?: cat_categoriaSumOrderByAggregateInput
  }

  export type cat_categoriaScalarWhereWithAggregatesInput = {
    AND?: cat_categoriaScalarWhereWithAggregatesInput | cat_categoriaScalarWhereWithAggregatesInput[]
    OR?: cat_categoriaScalarWhereWithAggregatesInput[]
    NOT?: cat_categoriaScalarWhereWithAggregatesInput | cat_categoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"cat_categoria"> | number
    nombre?: StringWithAggregatesFilter<"cat_categoria"> | string
    beneficios?: StringNullableWithAggregatesFilter<"cat_categoria"> | string | null
  }

  export type stat_usuarioWhereInput = {
    AND?: stat_usuarioWhereInput | stat_usuarioWhereInput[]
    OR?: stat_usuarioWhereInput[]
    NOT?: stat_usuarioWhereInput | stat_usuarioWhereInput[]
    id_usuario?: IntFilter<"stat_usuario"> | number
    id_actividad?: IntFilter<"stat_usuario"> | number
    record_personal?: IntNullableFilter<"stat_usuario"> | number | null
    total_partidas?: IntNullableFilter<"stat_usuario"> | number | null
    actividad?: XOR<ActividadScalarRelationFilter, actividadWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type stat_usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrderInput | SortOrder
    total_partidas?: SortOrderInput | SortOrder
    actividad?: actividadOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type stat_usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_id_actividad?: stat_usuarioId_usuarioId_actividadCompoundUniqueInput
    AND?: stat_usuarioWhereInput | stat_usuarioWhereInput[]
    OR?: stat_usuarioWhereInput[]
    NOT?: stat_usuarioWhereInput | stat_usuarioWhereInput[]
    id_usuario?: IntFilter<"stat_usuario"> | number
    id_actividad?: IntFilter<"stat_usuario"> | number
    record_personal?: IntNullableFilter<"stat_usuario"> | number | null
    total_partidas?: IntNullableFilter<"stat_usuario"> | number | null
    actividad?: XOR<ActividadScalarRelationFilter, actividadWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_usuario_id_actividad">

  export type stat_usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrderInput | SortOrder
    total_partidas?: SortOrderInput | SortOrder
    _count?: stat_usuarioCountOrderByAggregateInput
    _avg?: stat_usuarioAvgOrderByAggregateInput
    _max?: stat_usuarioMaxOrderByAggregateInput
    _min?: stat_usuarioMinOrderByAggregateInput
    _sum?: stat_usuarioSumOrderByAggregateInput
  }

  export type stat_usuarioScalarWhereWithAggregatesInput = {
    AND?: stat_usuarioScalarWhereWithAggregatesInput | stat_usuarioScalarWhereWithAggregatesInput[]
    OR?: stat_usuarioScalarWhereWithAggregatesInput[]
    NOT?: stat_usuarioScalarWhereWithAggregatesInput | stat_usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"stat_usuario"> | number
    id_actividad?: IntWithAggregatesFilter<"stat_usuario"> | number
    record_personal?: IntNullableWithAggregatesFilter<"stat_usuario"> | number | null
    total_partidas?: IntNullableWithAggregatesFilter<"stat_usuario"> | number | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    num_cta?: IntFilter<"usuario"> | number
    email?: StringFilter<"usuario"> | string
    fecha_nacimiento?: DateTimeFilter<"usuario"> | Date | string
    password?: StringFilter<"usuario"> | string
    stat_usuario?: Stat_usuarioListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    password?: SortOrder
    stat_usuario?: stat_usuarioOrderByRelationAggregateInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    num_cta?: number
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    fecha_nacimiento?: DateTimeFilter<"usuario"> | Date | string
    password?: StringFilter<"usuario"> | string
    stat_usuario?: Stat_usuarioListRelationFilter
  }, "id_usuario" | "num_cta" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    password?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    num_cta?: IntWithAggregatesFilter<"usuario"> | number
    email?: StringWithAggregatesFilter<"usuario"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    password?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type itemWhereInput = {
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    id_item?: IntFilter<"item"> | number
    id_actividad?: IntFilter<"item"> | number
    pregunta?: StringFilter<"item"> | string
    estatus_activo?: BoolNullableFilter<"item"> | boolean | null
    respuesta_c?: StringFilter<"item"> | string
    respuestas_i?: StringFilter<"item"> | string
    dificultad?: Enumitem_dificultadFilter<"item"> | $Enums.item_dificultad
    actividad?: XOR<ActividadScalarRelationFilter, actividadWhereInput>
  }

  export type itemOrderByWithRelationInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
    pregunta?: SortOrder
    estatus_activo?: SortOrderInput | SortOrder
    respuesta_c?: SortOrder
    respuestas_i?: SortOrder
    dificultad?: SortOrder
    actividad?: actividadOrderByWithRelationInput
    _relevance?: itemOrderByRelevanceInput
  }

  export type itemWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    id_actividad?: IntFilter<"item"> | number
    pregunta?: StringFilter<"item"> | string
    estatus_activo?: BoolNullableFilter<"item"> | boolean | null
    respuesta_c?: StringFilter<"item"> | string
    respuestas_i?: StringFilter<"item"> | string
    dificultad?: Enumitem_dificultadFilter<"item"> | $Enums.item_dificultad
    actividad?: XOR<ActividadScalarRelationFilter, actividadWhereInput>
  }, "id_item">

  export type itemOrderByWithAggregationInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
    pregunta?: SortOrder
    estatus_activo?: SortOrderInput | SortOrder
    respuesta_c?: SortOrder
    respuestas_i?: SortOrder
    dificultad?: SortOrder
    _count?: itemCountOrderByAggregateInput
    _avg?: itemAvgOrderByAggregateInput
    _max?: itemMaxOrderByAggregateInput
    _min?: itemMinOrderByAggregateInput
    _sum?: itemSumOrderByAggregateInput
  }

  export type itemScalarWhereWithAggregatesInput = {
    AND?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    OR?: itemScalarWhereWithAggregatesInput[]
    NOT?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"item"> | number
    id_actividad?: IntWithAggregatesFilter<"item"> | number
    pregunta?: StringWithAggregatesFilter<"item"> | string
    estatus_activo?: BoolNullableWithAggregatesFilter<"item"> | boolean | null
    respuesta_c?: StringWithAggregatesFilter<"item"> | string
    respuestas_i?: StringWithAggregatesFilter<"item"> | string
    dificultad?: Enumitem_dificultadWithAggregatesFilter<"item"> | $Enums.item_dificultad
  }

  export type actividadCreateInput = {
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    cat_categoria: cat_categoriaCreateNestedOneWithoutActividadInput
    item?: itemCreateNestedManyWithoutActividadInput
    stat_usuario?: stat_usuarioCreateNestedManyWithoutActividadInput
  }

  export type actividadUncheckedCreateInput = {
    id_actividad?: number
    id_categoria: number
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    item?: itemUncheckedCreateNestedManyWithoutActividadInput
    stat_usuario?: stat_usuarioUncheckedCreateNestedManyWithoutActividadInput
  }

  export type actividadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cat_categoria?: cat_categoriaUpdateOneRequiredWithoutActividadNestedInput
    item?: itemUpdateManyWithoutActividadNestedInput
    stat_usuario?: stat_usuarioUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    item?: itemUncheckedUpdateManyWithoutActividadNestedInput
    stat_usuario?: stat_usuarioUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type actividadCreateManyInput = {
    id_actividad?: number
    id_categoria: number
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
  }

  export type actividadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type actividadUncheckedUpdateManyInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type cat_categoriaCreateInput = {
    nombre: string
    beneficios?: string | null
    actividad?: actividadCreateNestedManyWithoutCat_categoriaInput
  }

  export type cat_categoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre: string
    beneficios?: string | null
    actividad?: actividadUncheckedCreateNestedManyWithoutCat_categoriaInput
  }

  export type cat_categoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    actividad?: actividadUpdateManyWithoutCat_categoriaNestedInput
  }

  export type cat_categoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
    actividad?: actividadUncheckedUpdateManyWithoutCat_categoriaNestedInput
  }

  export type cat_categoriaCreateManyInput = {
    id_categoria?: number
    nombre: string
    beneficios?: string | null
  }

  export type cat_categoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cat_categoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stat_usuarioCreateInput = {
    record_personal?: number | null
    total_partidas?: number | null
    actividad: actividadCreateNestedOneWithoutStat_usuarioInput
    usuario: usuarioCreateNestedOneWithoutStat_usuarioInput
  }

  export type stat_usuarioUncheckedCreateInput = {
    id_usuario: number
    id_actividad: number
    record_personal?: number | null
    total_partidas?: number | null
  }

  export type stat_usuarioUpdateInput = {
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
    actividad?: actividadUpdateOneRequiredWithoutStat_usuarioNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutStat_usuarioNestedInput
  }

  export type stat_usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stat_usuarioCreateManyInput = {
    id_usuario: number
    id_actividad: number
    record_personal?: number | null
    total_partidas?: number | null
  }

  export type stat_usuarioUpdateManyMutationInput = {
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stat_usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioCreateInput = {
    num_cta: number
    email: string
    fecha_nacimiento: Date | string
    password: string
    stat_usuario?: stat_usuarioCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    num_cta: number
    email: string
    fecha_nacimiento: Date | string
    password: string
    stat_usuario?: stat_usuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    num_cta?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    stat_usuario?: stat_usuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cta?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    stat_usuario?: stat_usuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    num_cta: number
    email: string
    fecha_nacimiento: Date | string
    password: string
  }

  export type usuarioUpdateManyMutationInput = {
    num_cta?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cta?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateInput = {
    pregunta: string
    estatus_activo?: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
    actividad: actividadCreateNestedOneWithoutItemInput
  }

  export type itemUncheckedCreateInput = {
    id_item?: number
    id_actividad: number
    pregunta: string
    estatus_activo?: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
  }

  export type itemUpdateInput = {
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
    actividad?: actividadUpdateOneRequiredWithoutItemNestedInput
  }

  export type itemUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
  }

  export type itemCreateManyInput = {
    id_item?: number
    id_actividad: number
    pregunta: string
    estatus_activo?: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
  }

  export type itemUpdateManyMutationInput = {
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
  }

  export type itemUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Cat_categoriaScalarRelationFilter = {
    is?: cat_categoriaWhereInput
    isNot?: cat_categoriaWhereInput
  }

  export type ItemListRelationFilter = {
    every?: itemWhereInput
    some?: itemWhereInput
    none?: itemWhereInput
  }

  export type Stat_usuarioListRelationFilter = {
    every?: stat_usuarioWhereInput
    some?: stat_usuarioWhereInput
    none?: stat_usuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stat_usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type actividadOrderByRelevanceInput = {
    fields: actividadOrderByRelevanceFieldEnum | actividadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type actividadCountOrderByAggregateInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    explicacion?: SortOrder
    tiempoLimite?: SortOrder
    estatus_actividad?: SortOrder
  }

  export type actividadAvgOrderByAggregateInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    tiempoLimite?: SortOrder
  }

  export type actividadMaxOrderByAggregateInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    explicacion?: SortOrder
    tiempoLimite?: SortOrder
    estatus_actividad?: SortOrder
  }

  export type actividadMinOrderByAggregateInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    explicacion?: SortOrder
    tiempoLimite?: SortOrder
    estatus_actividad?: SortOrder
  }

  export type actividadSumOrderByAggregateInput = {
    id_actividad?: SortOrder
    id_categoria?: SortOrder
    tiempoLimite?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ActividadListRelationFilter = {
    every?: actividadWhereInput
    some?: actividadWhereInput
    none?: actividadWhereInput
  }

  export type actividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cat_categoriaOrderByRelevanceInput = {
    fields: cat_categoriaOrderByRelevanceFieldEnum | cat_categoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cat_categoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    beneficios?: SortOrder
  }

  export type cat_categoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type cat_categoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    beneficios?: SortOrder
  }

  export type cat_categoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    beneficios?: SortOrder
  }

  export type cat_categoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type ActividadScalarRelationFilter = {
    is?: actividadWhereInput
    isNot?: actividadWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type stat_usuarioId_usuarioId_actividadCompoundUniqueInput = {
    id_usuario: number
    id_actividad: number
  }

  export type stat_usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrder
    total_partidas?: SortOrder
  }

  export type stat_usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrder
    total_partidas?: SortOrder
  }

  export type stat_usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrder
    total_partidas?: SortOrder
  }

  export type stat_usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrder
    total_partidas?: SortOrder
  }

  export type stat_usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_actividad?: SortOrder
    record_personal?: SortOrder
    total_partidas?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    password?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    password?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    password?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cta?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumitem_dificultadFilter<$PrismaModel = never> = {
    equals?: $Enums.item_dificultad | Enumitem_dificultadFieldRefInput<$PrismaModel>
    in?: $Enums.item_dificultad[]
    notIn?: $Enums.item_dificultad[]
    not?: NestedEnumitem_dificultadFilter<$PrismaModel> | $Enums.item_dificultad
  }

  export type itemOrderByRelevanceInput = {
    fields: itemOrderByRelevanceFieldEnum | itemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type itemCountOrderByAggregateInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
    pregunta?: SortOrder
    estatus_activo?: SortOrder
    respuesta_c?: SortOrder
    respuestas_i?: SortOrder
    dificultad?: SortOrder
  }

  export type itemAvgOrderByAggregateInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
  }

  export type itemMaxOrderByAggregateInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
    pregunta?: SortOrder
    estatus_activo?: SortOrder
    respuesta_c?: SortOrder
    respuestas_i?: SortOrder
    dificultad?: SortOrder
  }

  export type itemMinOrderByAggregateInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
    pregunta?: SortOrder
    estatus_activo?: SortOrder
    respuesta_c?: SortOrder
    respuestas_i?: SortOrder
    dificultad?: SortOrder
  }

  export type itemSumOrderByAggregateInput = {
    id_item?: SortOrder
    id_actividad?: SortOrder
  }

  export type Enumitem_dificultadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.item_dificultad | Enumitem_dificultadFieldRefInput<$PrismaModel>
    in?: $Enums.item_dificultad[]
    notIn?: $Enums.item_dificultad[]
    not?: NestedEnumitem_dificultadWithAggregatesFilter<$PrismaModel> | $Enums.item_dificultad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumitem_dificultadFilter<$PrismaModel>
    _max?: NestedEnumitem_dificultadFilter<$PrismaModel>
  }

  export type cat_categoriaCreateNestedOneWithoutActividadInput = {
    create?: XOR<cat_categoriaCreateWithoutActividadInput, cat_categoriaUncheckedCreateWithoutActividadInput>
    connectOrCreate?: cat_categoriaCreateOrConnectWithoutActividadInput
    connect?: cat_categoriaWhereUniqueInput
  }

  export type itemCreateNestedManyWithoutActividadInput = {
    create?: XOR<itemCreateWithoutActividadInput, itemUncheckedCreateWithoutActividadInput> | itemCreateWithoutActividadInput[] | itemUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: itemCreateOrConnectWithoutActividadInput | itemCreateOrConnectWithoutActividadInput[]
    createMany?: itemCreateManyActividadInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type stat_usuarioCreateNestedManyWithoutActividadInput = {
    create?: XOR<stat_usuarioCreateWithoutActividadInput, stat_usuarioUncheckedCreateWithoutActividadInput> | stat_usuarioCreateWithoutActividadInput[] | stat_usuarioUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutActividadInput | stat_usuarioCreateOrConnectWithoutActividadInput[]
    createMany?: stat_usuarioCreateManyActividadInputEnvelope
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutActividadInput = {
    create?: XOR<itemCreateWithoutActividadInput, itemUncheckedCreateWithoutActividadInput> | itemCreateWithoutActividadInput[] | itemUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: itemCreateOrConnectWithoutActividadInput | itemCreateOrConnectWithoutActividadInput[]
    createMany?: itemCreateManyActividadInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type stat_usuarioUncheckedCreateNestedManyWithoutActividadInput = {
    create?: XOR<stat_usuarioCreateWithoutActividadInput, stat_usuarioUncheckedCreateWithoutActividadInput> | stat_usuarioCreateWithoutActividadInput[] | stat_usuarioUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutActividadInput | stat_usuarioCreateOrConnectWithoutActividadInput[]
    createMany?: stat_usuarioCreateManyActividadInputEnvelope
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type cat_categoriaUpdateOneRequiredWithoutActividadNestedInput = {
    create?: XOR<cat_categoriaCreateWithoutActividadInput, cat_categoriaUncheckedCreateWithoutActividadInput>
    connectOrCreate?: cat_categoriaCreateOrConnectWithoutActividadInput
    upsert?: cat_categoriaUpsertWithoutActividadInput
    connect?: cat_categoriaWhereUniqueInput
    update?: XOR<XOR<cat_categoriaUpdateToOneWithWhereWithoutActividadInput, cat_categoriaUpdateWithoutActividadInput>, cat_categoriaUncheckedUpdateWithoutActividadInput>
  }

  export type itemUpdateManyWithoutActividadNestedInput = {
    create?: XOR<itemCreateWithoutActividadInput, itemUncheckedCreateWithoutActividadInput> | itemCreateWithoutActividadInput[] | itemUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: itemCreateOrConnectWithoutActividadInput | itemCreateOrConnectWithoutActividadInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutActividadInput | itemUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: itemCreateManyActividadInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutActividadInput | itemUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: itemUpdateManyWithWhereWithoutActividadInput | itemUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type stat_usuarioUpdateManyWithoutActividadNestedInput = {
    create?: XOR<stat_usuarioCreateWithoutActividadInput, stat_usuarioUncheckedCreateWithoutActividadInput> | stat_usuarioCreateWithoutActividadInput[] | stat_usuarioUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutActividadInput | stat_usuarioCreateOrConnectWithoutActividadInput[]
    upsert?: stat_usuarioUpsertWithWhereUniqueWithoutActividadInput | stat_usuarioUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: stat_usuarioCreateManyActividadInputEnvelope
    set?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    disconnect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    delete?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    update?: stat_usuarioUpdateWithWhereUniqueWithoutActividadInput | stat_usuarioUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: stat_usuarioUpdateManyWithWhereWithoutActividadInput | stat_usuarioUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: stat_usuarioScalarWhereInput | stat_usuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itemUncheckedUpdateManyWithoutActividadNestedInput = {
    create?: XOR<itemCreateWithoutActividadInput, itemUncheckedCreateWithoutActividadInput> | itemCreateWithoutActividadInput[] | itemUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: itemCreateOrConnectWithoutActividadInput | itemCreateOrConnectWithoutActividadInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutActividadInput | itemUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: itemCreateManyActividadInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutActividadInput | itemUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: itemUpdateManyWithWhereWithoutActividadInput | itemUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type stat_usuarioUncheckedUpdateManyWithoutActividadNestedInput = {
    create?: XOR<stat_usuarioCreateWithoutActividadInput, stat_usuarioUncheckedCreateWithoutActividadInput> | stat_usuarioCreateWithoutActividadInput[] | stat_usuarioUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutActividadInput | stat_usuarioCreateOrConnectWithoutActividadInput[]
    upsert?: stat_usuarioUpsertWithWhereUniqueWithoutActividadInput | stat_usuarioUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: stat_usuarioCreateManyActividadInputEnvelope
    set?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    disconnect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    delete?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    update?: stat_usuarioUpdateWithWhereUniqueWithoutActividadInput | stat_usuarioUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: stat_usuarioUpdateManyWithWhereWithoutActividadInput | stat_usuarioUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: stat_usuarioScalarWhereInput | stat_usuarioScalarWhereInput[]
  }

  export type actividadCreateNestedManyWithoutCat_categoriaInput = {
    create?: XOR<actividadCreateWithoutCat_categoriaInput, actividadUncheckedCreateWithoutCat_categoriaInput> | actividadCreateWithoutCat_categoriaInput[] | actividadUncheckedCreateWithoutCat_categoriaInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutCat_categoriaInput | actividadCreateOrConnectWithoutCat_categoriaInput[]
    createMany?: actividadCreateManyCat_categoriaInputEnvelope
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
  }

  export type actividadUncheckedCreateNestedManyWithoutCat_categoriaInput = {
    create?: XOR<actividadCreateWithoutCat_categoriaInput, actividadUncheckedCreateWithoutCat_categoriaInput> | actividadCreateWithoutCat_categoriaInput[] | actividadUncheckedCreateWithoutCat_categoriaInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutCat_categoriaInput | actividadCreateOrConnectWithoutCat_categoriaInput[]
    createMany?: actividadCreateManyCat_categoriaInputEnvelope
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
  }

  export type actividadUpdateManyWithoutCat_categoriaNestedInput = {
    create?: XOR<actividadCreateWithoutCat_categoriaInput, actividadUncheckedCreateWithoutCat_categoriaInput> | actividadCreateWithoutCat_categoriaInput[] | actividadUncheckedCreateWithoutCat_categoriaInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutCat_categoriaInput | actividadCreateOrConnectWithoutCat_categoriaInput[]
    upsert?: actividadUpsertWithWhereUniqueWithoutCat_categoriaInput | actividadUpsertWithWhereUniqueWithoutCat_categoriaInput[]
    createMany?: actividadCreateManyCat_categoriaInputEnvelope
    set?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    disconnect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    delete?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    update?: actividadUpdateWithWhereUniqueWithoutCat_categoriaInput | actividadUpdateWithWhereUniqueWithoutCat_categoriaInput[]
    updateMany?: actividadUpdateManyWithWhereWithoutCat_categoriaInput | actividadUpdateManyWithWhereWithoutCat_categoriaInput[]
    deleteMany?: actividadScalarWhereInput | actividadScalarWhereInput[]
  }

  export type actividadUncheckedUpdateManyWithoutCat_categoriaNestedInput = {
    create?: XOR<actividadCreateWithoutCat_categoriaInput, actividadUncheckedCreateWithoutCat_categoriaInput> | actividadCreateWithoutCat_categoriaInput[] | actividadUncheckedCreateWithoutCat_categoriaInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutCat_categoriaInput | actividadCreateOrConnectWithoutCat_categoriaInput[]
    upsert?: actividadUpsertWithWhereUniqueWithoutCat_categoriaInput | actividadUpsertWithWhereUniqueWithoutCat_categoriaInput[]
    createMany?: actividadCreateManyCat_categoriaInputEnvelope
    set?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    disconnect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    delete?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    update?: actividadUpdateWithWhereUniqueWithoutCat_categoriaInput | actividadUpdateWithWhereUniqueWithoutCat_categoriaInput[]
    updateMany?: actividadUpdateManyWithWhereWithoutCat_categoriaInput | actividadUpdateManyWithWhereWithoutCat_categoriaInput[]
    deleteMany?: actividadScalarWhereInput | actividadScalarWhereInput[]
  }

  export type actividadCreateNestedOneWithoutStat_usuarioInput = {
    create?: XOR<actividadCreateWithoutStat_usuarioInput, actividadUncheckedCreateWithoutStat_usuarioInput>
    connectOrCreate?: actividadCreateOrConnectWithoutStat_usuarioInput
    connect?: actividadWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutStat_usuarioInput = {
    create?: XOR<usuarioCreateWithoutStat_usuarioInput, usuarioUncheckedCreateWithoutStat_usuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutStat_usuarioInput
    connect?: usuarioWhereUniqueInput
  }

  export type actividadUpdateOneRequiredWithoutStat_usuarioNestedInput = {
    create?: XOR<actividadCreateWithoutStat_usuarioInput, actividadUncheckedCreateWithoutStat_usuarioInput>
    connectOrCreate?: actividadCreateOrConnectWithoutStat_usuarioInput
    upsert?: actividadUpsertWithoutStat_usuarioInput
    connect?: actividadWhereUniqueInput
    update?: XOR<XOR<actividadUpdateToOneWithWhereWithoutStat_usuarioInput, actividadUpdateWithoutStat_usuarioInput>, actividadUncheckedUpdateWithoutStat_usuarioInput>
  }

  export type usuarioUpdateOneRequiredWithoutStat_usuarioNestedInput = {
    create?: XOR<usuarioCreateWithoutStat_usuarioInput, usuarioUncheckedCreateWithoutStat_usuarioInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutStat_usuarioInput
    upsert?: usuarioUpsertWithoutStat_usuarioInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutStat_usuarioInput, usuarioUpdateWithoutStat_usuarioInput>, usuarioUncheckedUpdateWithoutStat_usuarioInput>
  }

  export type stat_usuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<stat_usuarioCreateWithoutUsuarioInput, stat_usuarioUncheckedCreateWithoutUsuarioInput> | stat_usuarioCreateWithoutUsuarioInput[] | stat_usuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutUsuarioInput | stat_usuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: stat_usuarioCreateManyUsuarioInputEnvelope
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
  }

  export type stat_usuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<stat_usuarioCreateWithoutUsuarioInput, stat_usuarioUncheckedCreateWithoutUsuarioInput> | stat_usuarioCreateWithoutUsuarioInput[] | stat_usuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutUsuarioInput | stat_usuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: stat_usuarioCreateManyUsuarioInputEnvelope
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type stat_usuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<stat_usuarioCreateWithoutUsuarioInput, stat_usuarioUncheckedCreateWithoutUsuarioInput> | stat_usuarioCreateWithoutUsuarioInput[] | stat_usuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutUsuarioInput | stat_usuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: stat_usuarioUpsertWithWhereUniqueWithoutUsuarioInput | stat_usuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: stat_usuarioCreateManyUsuarioInputEnvelope
    set?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    disconnect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    delete?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    update?: stat_usuarioUpdateWithWhereUniqueWithoutUsuarioInput | stat_usuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: stat_usuarioUpdateManyWithWhereWithoutUsuarioInput | stat_usuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: stat_usuarioScalarWhereInput | stat_usuarioScalarWhereInput[]
  }

  export type stat_usuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<stat_usuarioCreateWithoutUsuarioInput, stat_usuarioUncheckedCreateWithoutUsuarioInput> | stat_usuarioCreateWithoutUsuarioInput[] | stat_usuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: stat_usuarioCreateOrConnectWithoutUsuarioInput | stat_usuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: stat_usuarioUpsertWithWhereUniqueWithoutUsuarioInput | stat_usuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: stat_usuarioCreateManyUsuarioInputEnvelope
    set?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    disconnect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    delete?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    connect?: stat_usuarioWhereUniqueInput | stat_usuarioWhereUniqueInput[]
    update?: stat_usuarioUpdateWithWhereUniqueWithoutUsuarioInput | stat_usuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: stat_usuarioUpdateManyWithWhereWithoutUsuarioInput | stat_usuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: stat_usuarioScalarWhereInput | stat_usuarioScalarWhereInput[]
  }

  export type actividadCreateNestedOneWithoutItemInput = {
    create?: XOR<actividadCreateWithoutItemInput, actividadUncheckedCreateWithoutItemInput>
    connectOrCreate?: actividadCreateOrConnectWithoutItemInput
    connect?: actividadWhereUniqueInput
  }

  export type Enumitem_dificultadFieldUpdateOperationsInput = {
    set?: $Enums.item_dificultad
  }

  export type actividadUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<actividadCreateWithoutItemInput, actividadUncheckedCreateWithoutItemInput>
    connectOrCreate?: actividadCreateOrConnectWithoutItemInput
    upsert?: actividadUpsertWithoutItemInput
    connect?: actividadWhereUniqueInput
    update?: XOR<XOR<actividadUpdateToOneWithWhereWithoutItemInput, actividadUpdateWithoutItemInput>, actividadUncheckedUpdateWithoutItemInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumitem_dificultadFilter<$PrismaModel = never> = {
    equals?: $Enums.item_dificultad | Enumitem_dificultadFieldRefInput<$PrismaModel>
    in?: $Enums.item_dificultad[]
    notIn?: $Enums.item_dificultad[]
    not?: NestedEnumitem_dificultadFilter<$PrismaModel> | $Enums.item_dificultad
  }

  export type NestedEnumitem_dificultadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.item_dificultad | Enumitem_dificultadFieldRefInput<$PrismaModel>
    in?: $Enums.item_dificultad[]
    notIn?: $Enums.item_dificultad[]
    not?: NestedEnumitem_dificultadWithAggregatesFilter<$PrismaModel> | $Enums.item_dificultad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumitem_dificultadFilter<$PrismaModel>
    _max?: NestedEnumitem_dificultadFilter<$PrismaModel>
  }

  export type cat_categoriaCreateWithoutActividadInput = {
    nombre: string
    beneficios?: string | null
  }

  export type cat_categoriaUncheckedCreateWithoutActividadInput = {
    id_categoria?: number
    nombre: string
    beneficios?: string | null
  }

  export type cat_categoriaCreateOrConnectWithoutActividadInput = {
    where: cat_categoriaWhereUniqueInput
    create: XOR<cat_categoriaCreateWithoutActividadInput, cat_categoriaUncheckedCreateWithoutActividadInput>
  }

  export type itemCreateWithoutActividadInput = {
    pregunta: string
    estatus_activo?: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
  }

  export type itemUncheckedCreateWithoutActividadInput = {
    id_item?: number
    pregunta: string
    estatus_activo?: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
  }

  export type itemCreateOrConnectWithoutActividadInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutActividadInput, itemUncheckedCreateWithoutActividadInput>
  }

  export type itemCreateManyActividadInputEnvelope = {
    data: itemCreateManyActividadInput | itemCreateManyActividadInput[]
    skipDuplicates?: boolean
  }

  export type stat_usuarioCreateWithoutActividadInput = {
    record_personal?: number | null
    total_partidas?: number | null
    usuario: usuarioCreateNestedOneWithoutStat_usuarioInput
  }

  export type stat_usuarioUncheckedCreateWithoutActividadInput = {
    id_usuario: number
    record_personal?: number | null
    total_partidas?: number | null
  }

  export type stat_usuarioCreateOrConnectWithoutActividadInput = {
    where: stat_usuarioWhereUniqueInput
    create: XOR<stat_usuarioCreateWithoutActividadInput, stat_usuarioUncheckedCreateWithoutActividadInput>
  }

  export type stat_usuarioCreateManyActividadInputEnvelope = {
    data: stat_usuarioCreateManyActividadInput | stat_usuarioCreateManyActividadInput[]
    skipDuplicates?: boolean
  }

  export type cat_categoriaUpsertWithoutActividadInput = {
    update: XOR<cat_categoriaUpdateWithoutActividadInput, cat_categoriaUncheckedUpdateWithoutActividadInput>
    create: XOR<cat_categoriaCreateWithoutActividadInput, cat_categoriaUncheckedCreateWithoutActividadInput>
    where?: cat_categoriaWhereInput
  }

  export type cat_categoriaUpdateToOneWithWhereWithoutActividadInput = {
    where?: cat_categoriaWhereInput
    data: XOR<cat_categoriaUpdateWithoutActividadInput, cat_categoriaUncheckedUpdateWithoutActividadInput>
  }

  export type cat_categoriaUpdateWithoutActividadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cat_categoriaUncheckedUpdateWithoutActividadInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    beneficios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemUpsertWithWhereUniqueWithoutActividadInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutActividadInput, itemUncheckedUpdateWithoutActividadInput>
    create: XOR<itemCreateWithoutActividadInput, itemUncheckedCreateWithoutActividadInput>
  }

  export type itemUpdateWithWhereUniqueWithoutActividadInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutActividadInput, itemUncheckedUpdateWithoutActividadInput>
  }

  export type itemUpdateManyWithWhereWithoutActividadInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutActividadInput>
  }

  export type itemScalarWhereInput = {
    AND?: itemScalarWhereInput | itemScalarWhereInput[]
    OR?: itemScalarWhereInput[]
    NOT?: itemScalarWhereInput | itemScalarWhereInput[]
    id_item?: IntFilter<"item"> | number
    id_actividad?: IntFilter<"item"> | number
    pregunta?: StringFilter<"item"> | string
    estatus_activo?: BoolNullableFilter<"item"> | boolean | null
    respuesta_c?: StringFilter<"item"> | string
    respuestas_i?: StringFilter<"item"> | string
    dificultad?: Enumitem_dificultadFilter<"item"> | $Enums.item_dificultad
  }

  export type stat_usuarioUpsertWithWhereUniqueWithoutActividadInput = {
    where: stat_usuarioWhereUniqueInput
    update: XOR<stat_usuarioUpdateWithoutActividadInput, stat_usuarioUncheckedUpdateWithoutActividadInput>
    create: XOR<stat_usuarioCreateWithoutActividadInput, stat_usuarioUncheckedCreateWithoutActividadInput>
  }

  export type stat_usuarioUpdateWithWhereUniqueWithoutActividadInput = {
    where: stat_usuarioWhereUniqueInput
    data: XOR<stat_usuarioUpdateWithoutActividadInput, stat_usuarioUncheckedUpdateWithoutActividadInput>
  }

  export type stat_usuarioUpdateManyWithWhereWithoutActividadInput = {
    where: stat_usuarioScalarWhereInput
    data: XOR<stat_usuarioUpdateManyMutationInput, stat_usuarioUncheckedUpdateManyWithoutActividadInput>
  }

  export type stat_usuarioScalarWhereInput = {
    AND?: stat_usuarioScalarWhereInput | stat_usuarioScalarWhereInput[]
    OR?: stat_usuarioScalarWhereInput[]
    NOT?: stat_usuarioScalarWhereInput | stat_usuarioScalarWhereInput[]
    id_usuario?: IntFilter<"stat_usuario"> | number
    id_actividad?: IntFilter<"stat_usuario"> | number
    record_personal?: IntNullableFilter<"stat_usuario"> | number | null
    total_partidas?: IntNullableFilter<"stat_usuario"> | number | null
  }

  export type actividadCreateWithoutCat_categoriaInput = {
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    item?: itemCreateNestedManyWithoutActividadInput
    stat_usuario?: stat_usuarioCreateNestedManyWithoutActividadInput
  }

  export type actividadUncheckedCreateWithoutCat_categoriaInput = {
    id_actividad?: number
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    item?: itemUncheckedCreateNestedManyWithoutActividadInput
    stat_usuario?: stat_usuarioUncheckedCreateNestedManyWithoutActividadInput
  }

  export type actividadCreateOrConnectWithoutCat_categoriaInput = {
    where: actividadWhereUniqueInput
    create: XOR<actividadCreateWithoutCat_categoriaInput, actividadUncheckedCreateWithoutCat_categoriaInput>
  }

  export type actividadCreateManyCat_categoriaInputEnvelope = {
    data: actividadCreateManyCat_categoriaInput | actividadCreateManyCat_categoriaInput[]
    skipDuplicates?: boolean
  }

  export type actividadUpsertWithWhereUniqueWithoutCat_categoriaInput = {
    where: actividadWhereUniqueInput
    update: XOR<actividadUpdateWithoutCat_categoriaInput, actividadUncheckedUpdateWithoutCat_categoriaInput>
    create: XOR<actividadCreateWithoutCat_categoriaInput, actividadUncheckedCreateWithoutCat_categoriaInput>
  }

  export type actividadUpdateWithWhereUniqueWithoutCat_categoriaInput = {
    where: actividadWhereUniqueInput
    data: XOR<actividadUpdateWithoutCat_categoriaInput, actividadUncheckedUpdateWithoutCat_categoriaInput>
  }

  export type actividadUpdateManyWithWhereWithoutCat_categoriaInput = {
    where: actividadScalarWhereInput
    data: XOR<actividadUpdateManyMutationInput, actividadUncheckedUpdateManyWithoutCat_categoriaInput>
  }

  export type actividadScalarWhereInput = {
    AND?: actividadScalarWhereInput | actividadScalarWhereInput[]
    OR?: actividadScalarWhereInput[]
    NOT?: actividadScalarWhereInput | actividadScalarWhereInput[]
    id_actividad?: IntFilter<"actividad"> | number
    id_categoria?: IntFilter<"actividad"> | number
    nombre?: StringFilter<"actividad"> | string
    explicacion?: StringNullableFilter<"actividad"> | string | null
    tiempoLimite?: IntNullableFilter<"actividad"> | number | null
    estatus_actividad?: BoolNullableFilter<"actividad"> | boolean | null
  }

  export type actividadCreateWithoutStat_usuarioInput = {
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    cat_categoria: cat_categoriaCreateNestedOneWithoutActividadInput
    item?: itemCreateNestedManyWithoutActividadInput
  }

  export type actividadUncheckedCreateWithoutStat_usuarioInput = {
    id_actividad?: number
    id_categoria: number
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    item?: itemUncheckedCreateNestedManyWithoutActividadInput
  }

  export type actividadCreateOrConnectWithoutStat_usuarioInput = {
    where: actividadWhereUniqueInput
    create: XOR<actividadCreateWithoutStat_usuarioInput, actividadUncheckedCreateWithoutStat_usuarioInput>
  }

  export type usuarioCreateWithoutStat_usuarioInput = {
    num_cta: number
    email: string
    fecha_nacimiento: Date | string
    password: string
  }

  export type usuarioUncheckedCreateWithoutStat_usuarioInput = {
    id_usuario?: number
    num_cta: number
    email: string
    fecha_nacimiento: Date | string
    password: string
  }

  export type usuarioCreateOrConnectWithoutStat_usuarioInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutStat_usuarioInput, usuarioUncheckedCreateWithoutStat_usuarioInput>
  }

  export type actividadUpsertWithoutStat_usuarioInput = {
    update: XOR<actividadUpdateWithoutStat_usuarioInput, actividadUncheckedUpdateWithoutStat_usuarioInput>
    create: XOR<actividadCreateWithoutStat_usuarioInput, actividadUncheckedCreateWithoutStat_usuarioInput>
    where?: actividadWhereInput
  }

  export type actividadUpdateToOneWithWhereWithoutStat_usuarioInput = {
    where?: actividadWhereInput
    data: XOR<actividadUpdateWithoutStat_usuarioInput, actividadUncheckedUpdateWithoutStat_usuarioInput>
  }

  export type actividadUpdateWithoutStat_usuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cat_categoria?: cat_categoriaUpdateOneRequiredWithoutActividadNestedInput
    item?: itemUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateWithoutStat_usuarioInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    item?: itemUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type usuarioUpsertWithoutStat_usuarioInput = {
    update: XOR<usuarioUpdateWithoutStat_usuarioInput, usuarioUncheckedUpdateWithoutStat_usuarioInput>
    create: XOR<usuarioCreateWithoutStat_usuarioInput, usuarioUncheckedCreateWithoutStat_usuarioInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutStat_usuarioInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutStat_usuarioInput, usuarioUncheckedUpdateWithoutStat_usuarioInput>
  }

  export type usuarioUpdateWithoutStat_usuarioInput = {
    num_cta?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateWithoutStat_usuarioInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cta?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type stat_usuarioCreateWithoutUsuarioInput = {
    record_personal?: number | null
    total_partidas?: number | null
    actividad: actividadCreateNestedOneWithoutStat_usuarioInput
  }

  export type stat_usuarioUncheckedCreateWithoutUsuarioInput = {
    id_actividad: number
    record_personal?: number | null
    total_partidas?: number | null
  }

  export type stat_usuarioCreateOrConnectWithoutUsuarioInput = {
    where: stat_usuarioWhereUniqueInput
    create: XOR<stat_usuarioCreateWithoutUsuarioInput, stat_usuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type stat_usuarioCreateManyUsuarioInputEnvelope = {
    data: stat_usuarioCreateManyUsuarioInput | stat_usuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type stat_usuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: stat_usuarioWhereUniqueInput
    update: XOR<stat_usuarioUpdateWithoutUsuarioInput, stat_usuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<stat_usuarioCreateWithoutUsuarioInput, stat_usuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type stat_usuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: stat_usuarioWhereUniqueInput
    data: XOR<stat_usuarioUpdateWithoutUsuarioInput, stat_usuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type stat_usuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: stat_usuarioScalarWhereInput
    data: XOR<stat_usuarioUpdateManyMutationInput, stat_usuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type actividadCreateWithoutItemInput = {
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    cat_categoria: cat_categoriaCreateNestedOneWithoutActividadInput
    stat_usuario?: stat_usuarioCreateNestedManyWithoutActividadInput
  }

  export type actividadUncheckedCreateWithoutItemInput = {
    id_actividad?: number
    id_categoria: number
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
    stat_usuario?: stat_usuarioUncheckedCreateNestedManyWithoutActividadInput
  }

  export type actividadCreateOrConnectWithoutItemInput = {
    where: actividadWhereUniqueInput
    create: XOR<actividadCreateWithoutItemInput, actividadUncheckedCreateWithoutItemInput>
  }

  export type actividadUpsertWithoutItemInput = {
    update: XOR<actividadUpdateWithoutItemInput, actividadUncheckedUpdateWithoutItemInput>
    create: XOR<actividadCreateWithoutItemInput, actividadUncheckedCreateWithoutItemInput>
    where?: actividadWhereInput
  }

  export type actividadUpdateToOneWithWhereWithoutItemInput = {
    where?: actividadWhereInput
    data: XOR<actividadUpdateWithoutItemInput, actividadUncheckedUpdateWithoutItemInput>
  }

  export type actividadUpdateWithoutItemInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cat_categoria?: cat_categoriaUpdateOneRequiredWithoutActividadNestedInput
    stat_usuario?: stat_usuarioUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateWithoutItemInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stat_usuario?: stat_usuarioUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type itemCreateManyActividadInput = {
    id_item?: number
    pregunta: string
    estatus_activo?: boolean | null
    respuesta_c: string
    respuestas_i: string
    dificultad: $Enums.item_dificultad
  }

  export type stat_usuarioCreateManyActividadInput = {
    id_usuario: number
    record_personal?: number | null
    total_partidas?: number | null
  }

  export type itemUpdateWithoutActividadInput = {
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
  }

  export type itemUncheckedUpdateWithoutActividadInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
  }

  export type itemUncheckedUpdateManyWithoutActividadInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    pregunta?: StringFieldUpdateOperationsInput | string
    estatus_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respuesta_c?: StringFieldUpdateOperationsInput | string
    respuestas_i?: StringFieldUpdateOperationsInput | string
    dificultad?: Enumitem_dificultadFieldUpdateOperationsInput | $Enums.item_dificultad
  }

  export type stat_usuarioUpdateWithoutActividadInput = {
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: usuarioUpdateOneRequiredWithoutStat_usuarioNestedInput
  }

  export type stat_usuarioUncheckedUpdateWithoutActividadInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stat_usuarioUncheckedUpdateManyWithoutActividadInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type actividadCreateManyCat_categoriaInput = {
    id_actividad?: number
    nombre: string
    explicacion?: string | null
    tiempoLimite?: number | null
    estatus_actividad?: boolean | null
  }

  export type actividadUpdateWithoutCat_categoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    item?: itemUpdateManyWithoutActividadNestedInput
    stat_usuario?: stat_usuarioUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateWithoutCat_categoriaInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    item?: itemUncheckedUpdateManyWithoutActividadNestedInput
    stat_usuario?: stat_usuarioUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateManyWithoutCat_categoriaInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tiempoLimite?: NullableIntFieldUpdateOperationsInput | number | null
    estatus_actividad?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type stat_usuarioCreateManyUsuarioInput = {
    id_actividad: number
    record_personal?: number | null
    total_partidas?: number | null
  }

  export type stat_usuarioUpdateWithoutUsuarioInput = {
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
    actividad?: actividadUpdateOneRequiredWithoutStat_usuarioNestedInput
  }

  export type stat_usuarioUncheckedUpdateWithoutUsuarioInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stat_usuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    record_personal?: NullableIntFieldUpdateOperationsInput | number | null
    total_partidas?: NullableIntFieldUpdateOperationsInput | number | null
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