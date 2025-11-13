
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Spec
 * 
 */
export type Spec = $Result.DefaultSelection<Prisma.$SpecPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ProductBaseSpecs
 * 
 */
export type ProductBaseSpecs = $Result.DefaultSelection<Prisma.$ProductBaseSpecsPayload>
/**
 * Model ItemSpecs
 * 
 */
export type ItemSpecs = $Result.DefaultSelection<Prisma.$ItemSpecsPayload>
/**
 * Model Record
 * 
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>
/**
 * Model RecordItems
 * 
 */
export type RecordItems = $Result.DefaultSelection<Prisma.$RecordItemsPayload>
/**
 * Model RevokedToken
 * 
 */
export type RevokedToken = $Result.DefaultSelection<Prisma.$RevokedTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spec`: Exposes CRUD operations for the **Spec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specs
    * const specs = await prisma.spec.findMany()
    * ```
    */
  get spec(): Prisma.SpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productBaseSpecs`: Exposes CRUD operations for the **ProductBaseSpecs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductBaseSpecs
    * const productBaseSpecs = await prisma.productBaseSpecs.findMany()
    * ```
    */
  get productBaseSpecs(): Prisma.ProductBaseSpecsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemSpecs`: Exposes CRUD operations for the **ItemSpecs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemSpecs
    * const itemSpecs = await prisma.itemSpecs.findMany()
    * ```
    */
  get itemSpecs(): Prisma.ItemSpecsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recordItems`: Exposes CRUD operations for the **RecordItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecordItems
    * const recordItems = await prisma.recordItems.findMany()
    * ```
    */
  get recordItems(): Prisma.RecordItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revokedToken`: Exposes CRUD operations for the **RevokedToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevokedTokens
    * const revokedTokens = await prisma.revokedToken.findMany()
    * ```
    */
  get revokedToken(): Prisma.RevokedTokenDelegate<ExtArgs, ClientOptions>;
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
    Role: 'Role',
    User: 'User',
    Spec: 'Spec',
    Tag: 'Tag',
    Product: 'Product',
    Item: 'Item',
    ProductBaseSpecs: 'ProductBaseSpecs',
    ItemSpecs: 'ItemSpecs',
    Record: 'Record',
    RecordItems: 'RecordItems',
    RevokedToken: 'RevokedToken'
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
      modelProps: "role" | "user" | "spec" | "tag" | "product" | "item" | "productBaseSpecs" | "itemSpecs" | "record" | "recordItems" | "revokedToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Spec: {
        payload: Prisma.$SpecPayload<ExtArgs>
        fields: Prisma.SpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>
          }
          findFirst: {
            args: Prisma.SpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>
          }
          findMany: {
            args: Prisma.SpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>[]
          }
          create: {
            args: Prisma.SpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>
          }
          createMany: {
            args: Prisma.SpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>[]
          }
          delete: {
            args: Prisma.SpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>
          }
          update: {
            args: Prisma.SpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>
          }
          deleteMany: {
            args: Prisma.SpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>[]
          }
          upsert: {
            args: Prisma.SpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecPayload>
          }
          aggregate: {
            args: Prisma.SpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpec>
          }
          groupBy: {
            args: Prisma.SpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecCountArgs<ExtArgs>
            result: $Utils.Optional<SpecCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ProductBaseSpecs: {
        payload: Prisma.$ProductBaseSpecsPayload<ExtArgs>
        fields: Prisma.ProductBaseSpecsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductBaseSpecsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductBaseSpecsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>
          }
          findFirst: {
            args: Prisma.ProductBaseSpecsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductBaseSpecsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>
          }
          findMany: {
            args: Prisma.ProductBaseSpecsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>[]
          }
          create: {
            args: Prisma.ProductBaseSpecsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>
          }
          createMany: {
            args: Prisma.ProductBaseSpecsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductBaseSpecsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>[]
          }
          delete: {
            args: Prisma.ProductBaseSpecsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>
          }
          update: {
            args: Prisma.ProductBaseSpecsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>
          }
          deleteMany: {
            args: Prisma.ProductBaseSpecsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductBaseSpecsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductBaseSpecsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>[]
          }
          upsert: {
            args: Prisma.ProductBaseSpecsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBaseSpecsPayload>
          }
          aggregate: {
            args: Prisma.ProductBaseSpecsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductBaseSpecs>
          }
          groupBy: {
            args: Prisma.ProductBaseSpecsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductBaseSpecsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductBaseSpecsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductBaseSpecsCountAggregateOutputType> | number
          }
        }
      }
      ItemSpecs: {
        payload: Prisma.$ItemSpecsPayload<ExtArgs>
        fields: Prisma.ItemSpecsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemSpecsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemSpecsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>
          }
          findFirst: {
            args: Prisma.ItemSpecsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemSpecsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>
          }
          findMany: {
            args: Prisma.ItemSpecsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>[]
          }
          create: {
            args: Prisma.ItemSpecsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>
          }
          createMany: {
            args: Prisma.ItemSpecsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemSpecsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>[]
          }
          delete: {
            args: Prisma.ItemSpecsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>
          }
          update: {
            args: Prisma.ItemSpecsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>
          }
          deleteMany: {
            args: Prisma.ItemSpecsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemSpecsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemSpecsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>[]
          }
          upsert: {
            args: Prisma.ItemSpecsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSpecsPayload>
          }
          aggregate: {
            args: Prisma.ItemSpecsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemSpecs>
          }
          groupBy: {
            args: Prisma.ItemSpecsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemSpecsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemSpecsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemSpecsCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
      RecordItems: {
        payload: Prisma.$RecordItemsPayload<ExtArgs>
        fields: Prisma.RecordItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>
          }
          findFirst: {
            args: Prisma.RecordItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>
          }
          findMany: {
            args: Prisma.RecordItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>[]
          }
          create: {
            args: Prisma.RecordItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>
          }
          createMany: {
            args: Prisma.RecordItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>[]
          }
          delete: {
            args: Prisma.RecordItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>
          }
          update: {
            args: Prisma.RecordItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>
          }
          deleteMany: {
            args: Prisma.RecordItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>[]
          }
          upsert: {
            args: Prisma.RecordItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordItemsPayload>
          }
          aggregate: {
            args: Prisma.RecordItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecordItems>
          }
          groupBy: {
            args: Prisma.RecordItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordItemsCountArgs<ExtArgs>
            result: $Utils.Optional<RecordItemsCountAggregateOutputType> | number
          }
        }
      }
      RevokedToken: {
        payload: Prisma.$RevokedTokenPayload<ExtArgs>
        fields: Prisma.RevokedTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevokedTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevokedTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          findFirst: {
            args: Prisma.RevokedTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevokedTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          findMany: {
            args: Prisma.RevokedTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[]
          }
          create: {
            args: Prisma.RevokedTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          createMany: {
            args: Prisma.RevokedTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevokedTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[]
          }
          delete: {
            args: Prisma.RevokedTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          update: {
            args: Prisma.RevokedTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          deleteMany: {
            args: Prisma.RevokedTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevokedTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevokedTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[]
          }
          upsert: {
            args: Prisma.RevokedTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevokedTokenPayload>
          }
          aggregate: {
            args: Prisma.RevokedTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevokedToken>
          }
          groupBy: {
            args: Prisma.RevokedTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevokedTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevokedTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RevokedTokenCountAggregateOutputType> | number
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
    role?: RoleOmit
    user?: UserOmit
    spec?: SpecOmit
    tag?: TagOmit
    product?: ProductOmit
    item?: ItemOmit
    productBaseSpecs?: ProductBaseSpecsOmit
    itemSpecs?: ItemSpecsOmit
    record?: RecordOmit
    recordItems?: RecordItemsOmit
    revokedToken?: RevokedTokenOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    records: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | UserCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }


  /**
   * Count Type SpecCountOutputType
   */

  export type SpecCountOutputType = {
    products: number
    items: number
  }

  export type SpecCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SpecCountOutputTypeCountProductsArgs
    items?: boolean | SpecCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SpecCountOutputType without action
   */
  export type SpecCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecCountOutputType
     */
    select?: SpecCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecCountOutputType without action
   */
  export type SpecCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBaseSpecsWhereInput
  }

  /**
   * SpecCountOutputType without action
   */
  export type SpecCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSpecsWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    products: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | TagCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    tags: number
    baseSpecs: number
    items: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ProductCountOutputTypeCountTagsArgs
    baseSpecs?: boolean | ProductCountOutputTypeCountBaseSpecsArgs
    items?: boolean | ProductCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBaseSpecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBaseSpecsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    specs: number
    records: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specs?: boolean | ItemCountOutputTypeCountSpecsArgs
    records?: boolean | ItemCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountSpecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSpecsWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordItemsWhereInput
  }


  /**
   * Count Type RecordCountOutputType
   */

  export type RecordCountOutputType = {
    items: number
  }

  export type RecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RecordCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordCountOutputType
     */
    select?: RecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      records: Prisma.$RecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Spec
   */

  export type AggregateSpec = {
    _count: SpecCountAggregateOutputType | null
    _avg: SpecAvgAggregateOutputType | null
    _sum: SpecSumAggregateOutputType | null
    _min: SpecMinAggregateOutputType | null
    _max: SpecMaxAggregateOutputType | null
  }

  export type SpecAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecSumAggregateOutputType = {
    id: number | null
  }

  export type SpecMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SpecAvgAggregateInputType = {
    id?: true
  }

  export type SpecSumAggregateInputType = {
    id?: true
  }

  export type SpecMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spec to aggregate.
     */
    where?: SpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecOrderByWithRelationInput | SpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specs
    **/
    _count?: true | SpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecMaxAggregateInputType
  }

  export type GetSpecAggregateType<T extends SpecAggregateArgs> = {
        [P in keyof T & keyof AggregateSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpec[P]>
      : GetScalarType<T[P], AggregateSpec[P]>
  }




  export type SpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecWhereInput
    orderBy?: SpecOrderByWithAggregationInput | SpecOrderByWithAggregationInput[]
    by: SpecScalarFieldEnum[] | SpecScalarFieldEnum
    having?: SpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecCountAggregateInputType | true
    _avg?: SpecAvgAggregateInputType
    _sum?: SpecSumAggregateInputType
    _min?: SpecMinAggregateInputType
    _max?: SpecMaxAggregateInputType
  }

  export type SpecGroupByOutputType = {
    id: number
    name: string
    _count: SpecCountAggregateOutputType | null
    _avg: SpecAvgAggregateOutputType | null
    _sum: SpecSumAggregateOutputType | null
    _min: SpecMinAggregateOutputType | null
    _max: SpecMaxAggregateOutputType | null
  }

  type GetSpecGroupByPayload<T extends SpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecGroupByOutputType[P]>
            : GetScalarType<T[P], SpecGroupByOutputType[P]>
        }
      >
    >


  export type SpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Spec$productsArgs<ExtArgs>
    items?: boolean | Spec$itemsArgs<ExtArgs>
    _count?: boolean | SpecCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spec"]>

  export type SpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["spec"]>

  export type SpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["spec"]>

  export type SpecSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["spec"]>
  export type SpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Spec$productsArgs<ExtArgs>
    items?: boolean | Spec$itemsArgs<ExtArgs>
    _count?: boolean | SpecCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spec"
    objects: {
      products: Prisma.$ProductBaseSpecsPayload<ExtArgs>[]
      items: Prisma.$ItemSpecsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["spec"]>
    composites: {}
  }

  type SpecGetPayload<S extends boolean | null | undefined | SpecDefaultArgs> = $Result.GetResult<Prisma.$SpecPayload, S>

  type SpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecCountAggregateInputType | true
    }

  export interface SpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spec'], meta: { name: 'Spec' } }
    /**
     * Find zero or one Spec that matches the filter.
     * @param {SpecFindUniqueArgs} args - Arguments to find a Spec
     * @example
     * // Get one Spec
     * const spec = await prisma.spec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecFindUniqueArgs>(args: SelectSubset<T, SpecFindUniqueArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecFindUniqueOrThrowArgs} args - Arguments to find a Spec
     * @example
     * // Get one Spec
     * const spec = await prisma.spec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecFindFirstArgs} args - Arguments to find a Spec
     * @example
     * // Get one Spec
     * const spec = await prisma.spec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecFindFirstArgs>(args?: SelectSubset<T, SpecFindFirstArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecFindFirstOrThrowArgs} args - Arguments to find a Spec
     * @example
     * // Get one Spec
     * const spec = await prisma.spec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specs
     * const specs = await prisma.spec.findMany()
     * 
     * // Get first 10 Specs
     * const specs = await prisma.spec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specWithIdOnly = await prisma.spec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecFindManyArgs>(args?: SelectSubset<T, SpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spec.
     * @param {SpecCreateArgs} args - Arguments to create a Spec.
     * @example
     * // Create one Spec
     * const Spec = await prisma.spec.create({
     *   data: {
     *     // ... data to create a Spec
     *   }
     * })
     * 
     */
    create<T extends SpecCreateArgs>(args: SelectSubset<T, SpecCreateArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specs.
     * @param {SpecCreateManyArgs} args - Arguments to create many Specs.
     * @example
     * // Create many Specs
     * const spec = await prisma.spec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecCreateManyArgs>(args?: SelectSubset<T, SpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specs and returns the data saved in the database.
     * @param {SpecCreateManyAndReturnArgs} args - Arguments to create many Specs.
     * @example
     * // Create many Specs
     * const spec = await prisma.spec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specs and only return the `id`
     * const specWithIdOnly = await prisma.spec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spec.
     * @param {SpecDeleteArgs} args - Arguments to delete one Spec.
     * @example
     * // Delete one Spec
     * const Spec = await prisma.spec.delete({
     *   where: {
     *     // ... filter to delete one Spec
     *   }
     * })
     * 
     */
    delete<T extends SpecDeleteArgs>(args: SelectSubset<T, SpecDeleteArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spec.
     * @param {SpecUpdateArgs} args - Arguments to update one Spec.
     * @example
     * // Update one Spec
     * const spec = await prisma.spec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecUpdateArgs>(args: SelectSubset<T, SpecUpdateArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specs.
     * @param {SpecDeleteManyArgs} args - Arguments to filter Specs to delete.
     * @example
     * // Delete a few Specs
     * const { count } = await prisma.spec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecDeleteManyArgs>(args?: SelectSubset<T, SpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specs
     * const spec = await prisma.spec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecUpdateManyArgs>(args: SelectSubset<T, SpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specs and returns the data updated in the database.
     * @param {SpecUpdateManyAndReturnArgs} args - Arguments to update many Specs.
     * @example
     * // Update many Specs
     * const spec = await prisma.spec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specs and only return the `id`
     * const specWithIdOnly = await prisma.spec.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpecUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spec.
     * @param {SpecUpsertArgs} args - Arguments to update or create a Spec.
     * @example
     * // Update or create a Spec
     * const spec = await prisma.spec.upsert({
     *   create: {
     *     // ... data to create a Spec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spec we want to update
     *   }
     * })
     */
    upsert<T extends SpecUpsertArgs>(args: SelectSubset<T, SpecUpsertArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecCountArgs} args - Arguments to filter Specs to count.
     * @example
     * // Count the number of Specs
     * const count = await prisma.spec.count({
     *   where: {
     *     // ... the filter for the Specs we want to count
     *   }
     * })
    **/
    count<T extends SpecCountArgs>(
      args?: Subset<T, SpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecAggregateArgs>(args: Subset<T, SpecAggregateArgs>): Prisma.PrismaPromise<GetSpecAggregateType<T>>

    /**
     * Group by Spec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecGroupByArgs} args - Group by arguments.
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
      T extends SpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecGroupByArgs['orderBy'] }
        : { orderBy?: SpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spec model
   */
  readonly fields: SpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Spec$productsArgs<ExtArgs> = {}>(args?: Subset<T, Spec$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Spec$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Spec$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Spec model
   */
  interface SpecFieldRefs {
    readonly id: FieldRef<"Spec", 'Int'>
    readonly name: FieldRef<"Spec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Spec findUnique
   */
  export type SpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * Filter, which Spec to fetch.
     */
    where: SpecWhereUniqueInput
  }

  /**
   * Spec findUniqueOrThrow
   */
  export type SpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * Filter, which Spec to fetch.
     */
    where: SpecWhereUniqueInput
  }

  /**
   * Spec findFirst
   */
  export type SpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * Filter, which Spec to fetch.
     */
    where?: SpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecOrderByWithRelationInput | SpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specs.
     */
    cursor?: SpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specs.
     */
    distinct?: SpecScalarFieldEnum | SpecScalarFieldEnum[]
  }

  /**
   * Spec findFirstOrThrow
   */
  export type SpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * Filter, which Spec to fetch.
     */
    where?: SpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecOrderByWithRelationInput | SpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specs.
     */
    cursor?: SpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specs.
     */
    distinct?: SpecScalarFieldEnum | SpecScalarFieldEnum[]
  }

  /**
   * Spec findMany
   */
  export type SpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * Filter, which Specs to fetch.
     */
    where?: SpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specs to fetch.
     */
    orderBy?: SpecOrderByWithRelationInput | SpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specs.
     */
    cursor?: SpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specs.
     */
    skip?: number
    distinct?: SpecScalarFieldEnum | SpecScalarFieldEnum[]
  }

  /**
   * Spec create
   */
  export type SpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * The data needed to create a Spec.
     */
    data: XOR<SpecCreateInput, SpecUncheckedCreateInput>
  }

  /**
   * Spec createMany
   */
  export type SpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specs.
     */
    data: SpecCreateManyInput | SpecCreateManyInput[]
  }

  /**
   * Spec createManyAndReturn
   */
  export type SpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * The data used to create many Specs.
     */
    data: SpecCreateManyInput | SpecCreateManyInput[]
  }

  /**
   * Spec update
   */
  export type SpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * The data needed to update a Spec.
     */
    data: XOR<SpecUpdateInput, SpecUncheckedUpdateInput>
    /**
     * Choose, which Spec to update.
     */
    where: SpecWhereUniqueInput
  }

  /**
   * Spec updateMany
   */
  export type SpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specs.
     */
    data: XOR<SpecUpdateManyMutationInput, SpecUncheckedUpdateManyInput>
    /**
     * Filter which Specs to update
     */
    where?: SpecWhereInput
    /**
     * Limit how many Specs to update.
     */
    limit?: number
  }

  /**
   * Spec updateManyAndReturn
   */
  export type SpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * The data used to update Specs.
     */
    data: XOR<SpecUpdateManyMutationInput, SpecUncheckedUpdateManyInput>
    /**
     * Filter which Specs to update
     */
    where?: SpecWhereInput
    /**
     * Limit how many Specs to update.
     */
    limit?: number
  }

  /**
   * Spec upsert
   */
  export type SpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * The filter to search for the Spec to update in case it exists.
     */
    where: SpecWhereUniqueInput
    /**
     * In case the Spec found by the `where` argument doesn't exist, create a new Spec with this data.
     */
    create: XOR<SpecCreateInput, SpecUncheckedCreateInput>
    /**
     * In case the Spec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecUpdateInput, SpecUncheckedUpdateInput>
  }

  /**
   * Spec delete
   */
  export type SpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
    /**
     * Filter which Spec to delete.
     */
    where: SpecWhereUniqueInput
  }

  /**
   * Spec deleteMany
   */
  export type SpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specs to delete
     */
    where?: SpecWhereInput
    /**
     * Limit how many Specs to delete.
     */
    limit?: number
  }

  /**
   * Spec.products
   */
  export type Spec$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    where?: ProductBaseSpecsWhereInput
    orderBy?: ProductBaseSpecsOrderByWithRelationInput | ProductBaseSpecsOrderByWithRelationInput[]
    cursor?: ProductBaseSpecsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductBaseSpecsScalarFieldEnum | ProductBaseSpecsScalarFieldEnum[]
  }

  /**
   * Spec.items
   */
  export type Spec$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    where?: ItemSpecsWhereInput
    orderBy?: ItemSpecsOrderByWithRelationInput | ItemSpecsOrderByWithRelationInput[]
    cursor?: ItemSpecsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemSpecsScalarFieldEnum | ItemSpecsScalarFieldEnum[]
  }

  /**
   * Spec without action
   */
  export type SpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec
     */
    select?: SpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spec
     */
    omit?: SpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    products?: boolean | Tag$productsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Tag$productsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Tag$productsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.products
   */
  export type Tag$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    os: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    os: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    os: number
    category: number
    description: number
    createdAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    os?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    os?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    os?: true
    category?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description: string | null
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    os?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    tags?: boolean | Product$tagsArgs<ExtArgs>
    baseSpecs?: boolean | Product$baseSpecsArgs<ExtArgs>
    items?: boolean | Product$itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    os?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    os?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    os?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "os" | "category" | "description" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Product$tagsArgs<ExtArgs>
    baseSpecs?: boolean | Product$baseSpecsArgs<ExtArgs>
    items?: boolean | Product$itemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>[]
      baseSpecs: Prisma.$ProductBaseSpecsPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string
      os: string
      category: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends Product$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Product$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    baseSpecs<T extends Product$baseSpecsArgs<ExtArgs> = {}>(args?: Subset<T, Product$baseSpecsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Product$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly os: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.tags
   */
  export type Product$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Product.baseSpecs
   */
  export type Product$baseSpecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    where?: ProductBaseSpecsWhereInput
    orderBy?: ProductBaseSpecsOrderByWithRelationInput | ProductBaseSpecsOrderByWithRelationInput[]
    cursor?: ProductBaseSpecsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductBaseSpecsScalarFieldEnum | ProductBaseSpecsScalarFieldEnum[]
  }

  /**
   * Product.items
   */
  export type Product$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    productId: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    productId: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    price: number
    stock: number
    productId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    productId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    productId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    productId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
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




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    price: number
    stock: number
    productId: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
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


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    stock?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    specs?: boolean | Item$specsArgs<ExtArgs>
    records?: boolean | Item$recordsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    stock?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    stock?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    price?: boolean
    stock?: boolean
    productId?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "stock" | "productId", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    specs?: boolean | Item$specsArgs<ExtArgs>
    records?: boolean | Item$recordsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      specs: Prisma.$ItemSpecsPayload<ExtArgs>[]
      records: Prisma.$RecordItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      stock: number
      productId: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
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
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
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
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
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
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specs<T extends Item$specsArgs<ExtArgs> = {}>(args?: Subset<T, Item$specsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Item$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Item$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly price: FieldRef<"Item", 'Int'>
    readonly stock: FieldRef<"Item", 'Int'>
    readonly productId: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.specs
   */
  export type Item$specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    where?: ItemSpecsWhereInput
    orderBy?: ItemSpecsOrderByWithRelationInput | ItemSpecsOrderByWithRelationInput[]
    cursor?: ItemSpecsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemSpecsScalarFieldEnum | ItemSpecsScalarFieldEnum[]
  }

  /**
   * Item.records
   */
  export type Item$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    where?: RecordItemsWhereInput
    orderBy?: RecordItemsOrderByWithRelationInput | RecordItemsOrderByWithRelationInput[]
    cursor?: RecordItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordItemsScalarFieldEnum | RecordItemsScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ProductBaseSpecs
   */

  export type AggregateProductBaseSpecs = {
    _count: ProductBaseSpecsCountAggregateOutputType | null
    _avg: ProductBaseSpecsAvgAggregateOutputType | null
    _sum: ProductBaseSpecsSumAggregateOutputType | null
    _min: ProductBaseSpecsMinAggregateOutputType | null
    _max: ProductBaseSpecsMaxAggregateOutputType | null
  }

  export type ProductBaseSpecsAvgAggregateOutputType = {
    specId: number | null
  }

  export type ProductBaseSpecsSumAggregateOutputType = {
    specId: number | null
  }

  export type ProductBaseSpecsMinAggregateOutputType = {
    productId: string | null
    specId: number | null
    value: string | null
  }

  export type ProductBaseSpecsMaxAggregateOutputType = {
    productId: string | null
    specId: number | null
    value: string | null
  }

  export type ProductBaseSpecsCountAggregateOutputType = {
    productId: number
    specId: number
    value: number
    _all: number
  }


  export type ProductBaseSpecsAvgAggregateInputType = {
    specId?: true
  }

  export type ProductBaseSpecsSumAggregateInputType = {
    specId?: true
  }

  export type ProductBaseSpecsMinAggregateInputType = {
    productId?: true
    specId?: true
    value?: true
  }

  export type ProductBaseSpecsMaxAggregateInputType = {
    productId?: true
    specId?: true
    value?: true
  }

  export type ProductBaseSpecsCountAggregateInputType = {
    productId?: true
    specId?: true
    value?: true
    _all?: true
  }

  export type ProductBaseSpecsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBaseSpecs to aggregate.
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBaseSpecs to fetch.
     */
    orderBy?: ProductBaseSpecsOrderByWithRelationInput | ProductBaseSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductBaseSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBaseSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductBaseSpecs
    **/
    _count?: true | ProductBaseSpecsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductBaseSpecsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductBaseSpecsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductBaseSpecsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductBaseSpecsMaxAggregateInputType
  }

  export type GetProductBaseSpecsAggregateType<T extends ProductBaseSpecsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductBaseSpecs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductBaseSpecs[P]>
      : GetScalarType<T[P], AggregateProductBaseSpecs[P]>
  }




  export type ProductBaseSpecsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBaseSpecsWhereInput
    orderBy?: ProductBaseSpecsOrderByWithAggregationInput | ProductBaseSpecsOrderByWithAggregationInput[]
    by: ProductBaseSpecsScalarFieldEnum[] | ProductBaseSpecsScalarFieldEnum
    having?: ProductBaseSpecsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductBaseSpecsCountAggregateInputType | true
    _avg?: ProductBaseSpecsAvgAggregateInputType
    _sum?: ProductBaseSpecsSumAggregateInputType
    _min?: ProductBaseSpecsMinAggregateInputType
    _max?: ProductBaseSpecsMaxAggregateInputType
  }

  export type ProductBaseSpecsGroupByOutputType = {
    productId: string
    specId: number
    value: string
    _count: ProductBaseSpecsCountAggregateOutputType | null
    _avg: ProductBaseSpecsAvgAggregateOutputType | null
    _sum: ProductBaseSpecsSumAggregateOutputType | null
    _min: ProductBaseSpecsMinAggregateOutputType | null
    _max: ProductBaseSpecsMaxAggregateOutputType | null
  }

  type GetProductBaseSpecsGroupByPayload<T extends ProductBaseSpecsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductBaseSpecsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductBaseSpecsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductBaseSpecsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductBaseSpecsGroupByOutputType[P]>
        }
      >
    >


  export type ProductBaseSpecsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    specId?: boolean
    value?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBaseSpecs"]>

  export type ProductBaseSpecsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    specId?: boolean
    value?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBaseSpecs"]>

  export type ProductBaseSpecsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    specId?: boolean
    value?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBaseSpecs"]>

  export type ProductBaseSpecsSelectScalar = {
    productId?: boolean
    specId?: boolean
    value?: boolean
  }

  export type ProductBaseSpecsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "specId" | "value", ExtArgs["result"]["productBaseSpecs"]>
  export type ProductBaseSpecsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }
  export type ProductBaseSpecsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }
  export type ProductBaseSpecsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }

  export type $ProductBaseSpecsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductBaseSpecs"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      spec: Prisma.$SpecPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      specId: number
      value: string
    }, ExtArgs["result"]["productBaseSpecs"]>
    composites: {}
  }

  type ProductBaseSpecsGetPayload<S extends boolean | null | undefined | ProductBaseSpecsDefaultArgs> = $Result.GetResult<Prisma.$ProductBaseSpecsPayload, S>

  type ProductBaseSpecsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductBaseSpecsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductBaseSpecsCountAggregateInputType | true
    }

  export interface ProductBaseSpecsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductBaseSpecs'], meta: { name: 'ProductBaseSpecs' } }
    /**
     * Find zero or one ProductBaseSpecs that matches the filter.
     * @param {ProductBaseSpecsFindUniqueArgs} args - Arguments to find a ProductBaseSpecs
     * @example
     * // Get one ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductBaseSpecsFindUniqueArgs>(args: SelectSubset<T, ProductBaseSpecsFindUniqueArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductBaseSpecs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductBaseSpecsFindUniqueOrThrowArgs} args - Arguments to find a ProductBaseSpecs
     * @example
     * // Get one ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductBaseSpecsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductBaseSpecsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBaseSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsFindFirstArgs} args - Arguments to find a ProductBaseSpecs
     * @example
     * // Get one ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductBaseSpecsFindFirstArgs>(args?: SelectSubset<T, ProductBaseSpecsFindFirstArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBaseSpecs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsFindFirstOrThrowArgs} args - Arguments to find a ProductBaseSpecs
     * @example
     * // Get one ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductBaseSpecsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductBaseSpecsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductBaseSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.findMany()
     * 
     * // Get first 10 ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productBaseSpecsWithProductIdOnly = await prisma.productBaseSpecs.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductBaseSpecsFindManyArgs>(args?: SelectSubset<T, ProductBaseSpecsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductBaseSpecs.
     * @param {ProductBaseSpecsCreateArgs} args - Arguments to create a ProductBaseSpecs.
     * @example
     * // Create one ProductBaseSpecs
     * const ProductBaseSpecs = await prisma.productBaseSpecs.create({
     *   data: {
     *     // ... data to create a ProductBaseSpecs
     *   }
     * })
     * 
     */
    create<T extends ProductBaseSpecsCreateArgs>(args: SelectSubset<T, ProductBaseSpecsCreateArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductBaseSpecs.
     * @param {ProductBaseSpecsCreateManyArgs} args - Arguments to create many ProductBaseSpecs.
     * @example
     * // Create many ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductBaseSpecsCreateManyArgs>(args?: SelectSubset<T, ProductBaseSpecsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductBaseSpecs and returns the data saved in the database.
     * @param {ProductBaseSpecsCreateManyAndReturnArgs} args - Arguments to create many ProductBaseSpecs.
     * @example
     * // Create many ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductBaseSpecs and only return the `productId`
     * const productBaseSpecsWithProductIdOnly = await prisma.productBaseSpecs.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductBaseSpecsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductBaseSpecsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductBaseSpecs.
     * @param {ProductBaseSpecsDeleteArgs} args - Arguments to delete one ProductBaseSpecs.
     * @example
     * // Delete one ProductBaseSpecs
     * const ProductBaseSpecs = await prisma.productBaseSpecs.delete({
     *   where: {
     *     // ... filter to delete one ProductBaseSpecs
     *   }
     * })
     * 
     */
    delete<T extends ProductBaseSpecsDeleteArgs>(args: SelectSubset<T, ProductBaseSpecsDeleteArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductBaseSpecs.
     * @param {ProductBaseSpecsUpdateArgs} args - Arguments to update one ProductBaseSpecs.
     * @example
     * // Update one ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductBaseSpecsUpdateArgs>(args: SelectSubset<T, ProductBaseSpecsUpdateArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductBaseSpecs.
     * @param {ProductBaseSpecsDeleteManyArgs} args - Arguments to filter ProductBaseSpecs to delete.
     * @example
     * // Delete a few ProductBaseSpecs
     * const { count } = await prisma.productBaseSpecs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductBaseSpecsDeleteManyArgs>(args?: SelectSubset<T, ProductBaseSpecsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBaseSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductBaseSpecsUpdateManyArgs>(args: SelectSubset<T, ProductBaseSpecsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBaseSpecs and returns the data updated in the database.
     * @param {ProductBaseSpecsUpdateManyAndReturnArgs} args - Arguments to update many ProductBaseSpecs.
     * @example
     * // Update many ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductBaseSpecs and only return the `productId`
     * const productBaseSpecsWithProductIdOnly = await prisma.productBaseSpecs.updateManyAndReturn({
     *   select: { productId: true },
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
    updateManyAndReturn<T extends ProductBaseSpecsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductBaseSpecsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductBaseSpecs.
     * @param {ProductBaseSpecsUpsertArgs} args - Arguments to update or create a ProductBaseSpecs.
     * @example
     * // Update or create a ProductBaseSpecs
     * const productBaseSpecs = await prisma.productBaseSpecs.upsert({
     *   create: {
     *     // ... data to create a ProductBaseSpecs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductBaseSpecs we want to update
     *   }
     * })
     */
    upsert<T extends ProductBaseSpecsUpsertArgs>(args: SelectSubset<T, ProductBaseSpecsUpsertArgs<ExtArgs>>): Prisma__ProductBaseSpecsClient<$Result.GetResult<Prisma.$ProductBaseSpecsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductBaseSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsCountArgs} args - Arguments to filter ProductBaseSpecs to count.
     * @example
     * // Count the number of ProductBaseSpecs
     * const count = await prisma.productBaseSpecs.count({
     *   where: {
     *     // ... the filter for the ProductBaseSpecs we want to count
     *   }
     * })
    **/
    count<T extends ProductBaseSpecsCountArgs>(
      args?: Subset<T, ProductBaseSpecsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductBaseSpecsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductBaseSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductBaseSpecsAggregateArgs>(args: Subset<T, ProductBaseSpecsAggregateArgs>): Prisma.PrismaPromise<GetProductBaseSpecsAggregateType<T>>

    /**
     * Group by ProductBaseSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBaseSpecsGroupByArgs} args - Group by arguments.
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
      T extends ProductBaseSpecsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductBaseSpecsGroupByArgs['orderBy'] }
        : { orderBy?: ProductBaseSpecsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductBaseSpecsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductBaseSpecsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductBaseSpecs model
   */
  readonly fields: ProductBaseSpecsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductBaseSpecs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductBaseSpecsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spec<T extends SpecDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecDefaultArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductBaseSpecs model
   */
  interface ProductBaseSpecsFieldRefs {
    readonly productId: FieldRef<"ProductBaseSpecs", 'String'>
    readonly specId: FieldRef<"ProductBaseSpecs", 'Int'>
    readonly value: FieldRef<"ProductBaseSpecs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductBaseSpecs findUnique
   */
  export type ProductBaseSpecsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ProductBaseSpecs to fetch.
     */
    where: ProductBaseSpecsWhereUniqueInput
  }

  /**
   * ProductBaseSpecs findUniqueOrThrow
   */
  export type ProductBaseSpecsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ProductBaseSpecs to fetch.
     */
    where: ProductBaseSpecsWhereUniqueInput
  }

  /**
   * ProductBaseSpecs findFirst
   */
  export type ProductBaseSpecsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ProductBaseSpecs to fetch.
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBaseSpecs to fetch.
     */
    orderBy?: ProductBaseSpecsOrderByWithRelationInput | ProductBaseSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBaseSpecs.
     */
    cursor?: ProductBaseSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBaseSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBaseSpecs.
     */
    distinct?: ProductBaseSpecsScalarFieldEnum | ProductBaseSpecsScalarFieldEnum[]
  }

  /**
   * ProductBaseSpecs findFirstOrThrow
   */
  export type ProductBaseSpecsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ProductBaseSpecs to fetch.
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBaseSpecs to fetch.
     */
    orderBy?: ProductBaseSpecsOrderByWithRelationInput | ProductBaseSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBaseSpecs.
     */
    cursor?: ProductBaseSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBaseSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBaseSpecs.
     */
    distinct?: ProductBaseSpecsScalarFieldEnum | ProductBaseSpecsScalarFieldEnum[]
  }

  /**
   * ProductBaseSpecs findMany
   */
  export type ProductBaseSpecsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ProductBaseSpecs to fetch.
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBaseSpecs to fetch.
     */
    orderBy?: ProductBaseSpecsOrderByWithRelationInput | ProductBaseSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductBaseSpecs.
     */
    cursor?: ProductBaseSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBaseSpecs.
     */
    skip?: number
    distinct?: ProductBaseSpecsScalarFieldEnum | ProductBaseSpecsScalarFieldEnum[]
  }

  /**
   * ProductBaseSpecs create
   */
  export type ProductBaseSpecsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductBaseSpecs.
     */
    data: XOR<ProductBaseSpecsCreateInput, ProductBaseSpecsUncheckedCreateInput>
  }

  /**
   * ProductBaseSpecs createMany
   */
  export type ProductBaseSpecsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductBaseSpecs.
     */
    data: ProductBaseSpecsCreateManyInput | ProductBaseSpecsCreateManyInput[]
  }

  /**
   * ProductBaseSpecs createManyAndReturn
   */
  export type ProductBaseSpecsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * The data used to create many ProductBaseSpecs.
     */
    data: ProductBaseSpecsCreateManyInput | ProductBaseSpecsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBaseSpecs update
   */
  export type ProductBaseSpecsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductBaseSpecs.
     */
    data: XOR<ProductBaseSpecsUpdateInput, ProductBaseSpecsUncheckedUpdateInput>
    /**
     * Choose, which ProductBaseSpecs to update.
     */
    where: ProductBaseSpecsWhereUniqueInput
  }

  /**
   * ProductBaseSpecs updateMany
   */
  export type ProductBaseSpecsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductBaseSpecs.
     */
    data: XOR<ProductBaseSpecsUpdateManyMutationInput, ProductBaseSpecsUncheckedUpdateManyInput>
    /**
     * Filter which ProductBaseSpecs to update
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * Limit how many ProductBaseSpecs to update.
     */
    limit?: number
  }

  /**
   * ProductBaseSpecs updateManyAndReturn
   */
  export type ProductBaseSpecsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * The data used to update ProductBaseSpecs.
     */
    data: XOR<ProductBaseSpecsUpdateManyMutationInput, ProductBaseSpecsUncheckedUpdateManyInput>
    /**
     * Filter which ProductBaseSpecs to update
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * Limit how many ProductBaseSpecs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBaseSpecs upsert
   */
  export type ProductBaseSpecsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductBaseSpecs to update in case it exists.
     */
    where: ProductBaseSpecsWhereUniqueInput
    /**
     * In case the ProductBaseSpecs found by the `where` argument doesn't exist, create a new ProductBaseSpecs with this data.
     */
    create: XOR<ProductBaseSpecsCreateInput, ProductBaseSpecsUncheckedCreateInput>
    /**
     * In case the ProductBaseSpecs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductBaseSpecsUpdateInput, ProductBaseSpecsUncheckedUpdateInput>
  }

  /**
   * ProductBaseSpecs delete
   */
  export type ProductBaseSpecsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
    /**
     * Filter which ProductBaseSpecs to delete.
     */
    where: ProductBaseSpecsWhereUniqueInput
  }

  /**
   * ProductBaseSpecs deleteMany
   */
  export type ProductBaseSpecsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBaseSpecs to delete
     */
    where?: ProductBaseSpecsWhereInput
    /**
     * Limit how many ProductBaseSpecs to delete.
     */
    limit?: number
  }

  /**
   * ProductBaseSpecs without action
   */
  export type ProductBaseSpecsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBaseSpecs
     */
    select?: ProductBaseSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBaseSpecs
     */
    omit?: ProductBaseSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBaseSpecsInclude<ExtArgs> | null
  }


  /**
   * Model ItemSpecs
   */

  export type AggregateItemSpecs = {
    _count: ItemSpecsCountAggregateOutputType | null
    _avg: ItemSpecsAvgAggregateOutputType | null
    _sum: ItemSpecsSumAggregateOutputType | null
    _min: ItemSpecsMinAggregateOutputType | null
    _max: ItemSpecsMaxAggregateOutputType | null
  }

  export type ItemSpecsAvgAggregateOutputType = {
    itemId: number | null
    specId: number | null
  }

  export type ItemSpecsSumAggregateOutputType = {
    itemId: number | null
    specId: number | null
  }

  export type ItemSpecsMinAggregateOutputType = {
    itemId: number | null
    specId: number | null
    value: string | null
  }

  export type ItemSpecsMaxAggregateOutputType = {
    itemId: number | null
    specId: number | null
    value: string | null
  }

  export type ItemSpecsCountAggregateOutputType = {
    itemId: number
    specId: number
    value: number
    _all: number
  }


  export type ItemSpecsAvgAggregateInputType = {
    itemId?: true
    specId?: true
  }

  export type ItemSpecsSumAggregateInputType = {
    itemId?: true
    specId?: true
  }

  export type ItemSpecsMinAggregateInputType = {
    itemId?: true
    specId?: true
    value?: true
  }

  export type ItemSpecsMaxAggregateInputType = {
    itemId?: true
    specId?: true
    value?: true
  }

  export type ItemSpecsCountAggregateInputType = {
    itemId?: true
    specId?: true
    value?: true
    _all?: true
  }

  export type ItemSpecsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSpecs to aggregate.
     */
    where?: ItemSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSpecs to fetch.
     */
    orderBy?: ItemSpecsOrderByWithRelationInput | ItemSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemSpecs
    **/
    _count?: true | ItemSpecsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemSpecsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSpecsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemSpecsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemSpecsMaxAggregateInputType
  }

  export type GetItemSpecsAggregateType<T extends ItemSpecsAggregateArgs> = {
        [P in keyof T & keyof AggregateItemSpecs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemSpecs[P]>
      : GetScalarType<T[P], AggregateItemSpecs[P]>
  }




  export type ItemSpecsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSpecsWhereInput
    orderBy?: ItemSpecsOrderByWithAggregationInput | ItemSpecsOrderByWithAggregationInput[]
    by: ItemSpecsScalarFieldEnum[] | ItemSpecsScalarFieldEnum
    having?: ItemSpecsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemSpecsCountAggregateInputType | true
    _avg?: ItemSpecsAvgAggregateInputType
    _sum?: ItemSpecsSumAggregateInputType
    _min?: ItemSpecsMinAggregateInputType
    _max?: ItemSpecsMaxAggregateInputType
  }

  export type ItemSpecsGroupByOutputType = {
    itemId: number
    specId: number
    value: string
    _count: ItemSpecsCountAggregateOutputType | null
    _avg: ItemSpecsAvgAggregateOutputType | null
    _sum: ItemSpecsSumAggregateOutputType | null
    _min: ItemSpecsMinAggregateOutputType | null
    _max: ItemSpecsMaxAggregateOutputType | null
  }

  type GetItemSpecsGroupByPayload<T extends ItemSpecsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemSpecsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemSpecsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemSpecsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemSpecsGroupByOutputType[P]>
        }
      >
    >


  export type ItemSpecsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    specId?: boolean
    value?: boolean
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSpecs"]>

  export type ItemSpecsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    specId?: boolean
    value?: boolean
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSpecs"]>

  export type ItemSpecsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    specId?: boolean
    value?: boolean
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSpecs"]>

  export type ItemSpecsSelectScalar = {
    itemId?: boolean
    specId?: boolean
    value?: boolean
  }

  export type ItemSpecsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "specId" | "value", ExtArgs["result"]["itemSpecs"]>
  export type ItemSpecsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }
  export type ItemSpecsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }
  export type ItemSpecsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    spec?: boolean | SpecDefaultArgs<ExtArgs>
  }

  export type $ItemSpecsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemSpecs"
    objects: {
      Item: Prisma.$ItemPayload<ExtArgs>
      spec: Prisma.$SpecPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      specId: number
      value: string
    }, ExtArgs["result"]["itemSpecs"]>
    composites: {}
  }

  type ItemSpecsGetPayload<S extends boolean | null | undefined | ItemSpecsDefaultArgs> = $Result.GetResult<Prisma.$ItemSpecsPayload, S>

  type ItemSpecsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemSpecsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemSpecsCountAggregateInputType | true
    }

  export interface ItemSpecsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemSpecs'], meta: { name: 'ItemSpecs' } }
    /**
     * Find zero or one ItemSpecs that matches the filter.
     * @param {ItemSpecsFindUniqueArgs} args - Arguments to find a ItemSpecs
     * @example
     * // Get one ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemSpecsFindUniqueArgs>(args: SelectSubset<T, ItemSpecsFindUniqueArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemSpecs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemSpecsFindUniqueOrThrowArgs} args - Arguments to find a ItemSpecs
     * @example
     * // Get one ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemSpecsFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemSpecsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsFindFirstArgs} args - Arguments to find a ItemSpecs
     * @example
     * // Get one ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemSpecsFindFirstArgs>(args?: SelectSubset<T, ItemSpecsFindFirstArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSpecs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsFindFirstOrThrowArgs} args - Arguments to find a ItemSpecs
     * @example
     * // Get one ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemSpecsFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemSpecsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.findMany()
     * 
     * // Get first 10 ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemSpecsWithItemIdOnly = await prisma.itemSpecs.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemSpecsFindManyArgs>(args?: SelectSubset<T, ItemSpecsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemSpecs.
     * @param {ItemSpecsCreateArgs} args - Arguments to create a ItemSpecs.
     * @example
     * // Create one ItemSpecs
     * const ItemSpecs = await prisma.itemSpecs.create({
     *   data: {
     *     // ... data to create a ItemSpecs
     *   }
     * })
     * 
     */
    create<T extends ItemSpecsCreateArgs>(args: SelectSubset<T, ItemSpecsCreateArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemSpecs.
     * @param {ItemSpecsCreateManyArgs} args - Arguments to create many ItemSpecs.
     * @example
     * // Create many ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemSpecsCreateManyArgs>(args?: SelectSubset<T, ItemSpecsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemSpecs and returns the data saved in the database.
     * @param {ItemSpecsCreateManyAndReturnArgs} args - Arguments to create many ItemSpecs.
     * @example
     * // Create many ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemSpecs and only return the `itemId`
     * const itemSpecsWithItemIdOnly = await prisma.itemSpecs.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemSpecsCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemSpecsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemSpecs.
     * @param {ItemSpecsDeleteArgs} args - Arguments to delete one ItemSpecs.
     * @example
     * // Delete one ItemSpecs
     * const ItemSpecs = await prisma.itemSpecs.delete({
     *   where: {
     *     // ... filter to delete one ItemSpecs
     *   }
     * })
     * 
     */
    delete<T extends ItemSpecsDeleteArgs>(args: SelectSubset<T, ItemSpecsDeleteArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemSpecs.
     * @param {ItemSpecsUpdateArgs} args - Arguments to update one ItemSpecs.
     * @example
     * // Update one ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemSpecsUpdateArgs>(args: SelectSubset<T, ItemSpecsUpdateArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemSpecs.
     * @param {ItemSpecsDeleteManyArgs} args - Arguments to filter ItemSpecs to delete.
     * @example
     * // Delete a few ItemSpecs
     * const { count } = await prisma.itemSpecs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemSpecsDeleteManyArgs>(args?: SelectSubset<T, ItemSpecsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemSpecsUpdateManyArgs>(args: SelectSubset<T, ItemSpecsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSpecs and returns the data updated in the database.
     * @param {ItemSpecsUpdateManyAndReturnArgs} args - Arguments to update many ItemSpecs.
     * @example
     * // Update many ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemSpecs and only return the `itemId`
     * const itemSpecsWithItemIdOnly = await prisma.itemSpecs.updateManyAndReturn({
     *   select: { itemId: true },
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
    updateManyAndReturn<T extends ItemSpecsUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemSpecsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemSpecs.
     * @param {ItemSpecsUpsertArgs} args - Arguments to update or create a ItemSpecs.
     * @example
     * // Update or create a ItemSpecs
     * const itemSpecs = await prisma.itemSpecs.upsert({
     *   create: {
     *     // ... data to create a ItemSpecs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemSpecs we want to update
     *   }
     * })
     */
    upsert<T extends ItemSpecsUpsertArgs>(args: SelectSubset<T, ItemSpecsUpsertArgs<ExtArgs>>): Prisma__ItemSpecsClient<$Result.GetResult<Prisma.$ItemSpecsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsCountArgs} args - Arguments to filter ItemSpecs to count.
     * @example
     * // Count the number of ItemSpecs
     * const count = await prisma.itemSpecs.count({
     *   where: {
     *     // ... the filter for the ItemSpecs we want to count
     *   }
     * })
    **/
    count<T extends ItemSpecsCountArgs>(
      args?: Subset<T, ItemSpecsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemSpecsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemSpecsAggregateArgs>(args: Subset<T, ItemSpecsAggregateArgs>): Prisma.PrismaPromise<GetItemSpecsAggregateType<T>>

    /**
     * Group by ItemSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSpecsGroupByArgs} args - Group by arguments.
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
      T extends ItemSpecsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemSpecsGroupByArgs['orderBy'] }
        : { orderBy?: ItemSpecsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemSpecsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemSpecsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemSpecs model
   */
  readonly fields: ItemSpecsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemSpecs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemSpecsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spec<T extends SpecDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecDefaultArgs<ExtArgs>>): Prisma__SpecClient<$Result.GetResult<Prisma.$SpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemSpecs model
   */
  interface ItemSpecsFieldRefs {
    readonly itemId: FieldRef<"ItemSpecs", 'Int'>
    readonly specId: FieldRef<"ItemSpecs", 'Int'>
    readonly value: FieldRef<"ItemSpecs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemSpecs findUnique
   */
  export type ItemSpecsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ItemSpecs to fetch.
     */
    where: ItemSpecsWhereUniqueInput
  }

  /**
   * ItemSpecs findUniqueOrThrow
   */
  export type ItemSpecsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ItemSpecs to fetch.
     */
    where: ItemSpecsWhereUniqueInput
  }

  /**
   * ItemSpecs findFirst
   */
  export type ItemSpecsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ItemSpecs to fetch.
     */
    where?: ItemSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSpecs to fetch.
     */
    orderBy?: ItemSpecsOrderByWithRelationInput | ItemSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSpecs.
     */
    cursor?: ItemSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSpecs.
     */
    distinct?: ItemSpecsScalarFieldEnum | ItemSpecsScalarFieldEnum[]
  }

  /**
   * ItemSpecs findFirstOrThrow
   */
  export type ItemSpecsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ItemSpecs to fetch.
     */
    where?: ItemSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSpecs to fetch.
     */
    orderBy?: ItemSpecsOrderByWithRelationInput | ItemSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSpecs.
     */
    cursor?: ItemSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSpecs.
     */
    distinct?: ItemSpecsScalarFieldEnum | ItemSpecsScalarFieldEnum[]
  }

  /**
   * ItemSpecs findMany
   */
  export type ItemSpecsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * Filter, which ItemSpecs to fetch.
     */
    where?: ItemSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSpecs to fetch.
     */
    orderBy?: ItemSpecsOrderByWithRelationInput | ItemSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemSpecs.
     */
    cursor?: ItemSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSpecs.
     */
    skip?: number
    distinct?: ItemSpecsScalarFieldEnum | ItemSpecsScalarFieldEnum[]
  }

  /**
   * ItemSpecs create
   */
  export type ItemSpecsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemSpecs.
     */
    data: XOR<ItemSpecsCreateInput, ItemSpecsUncheckedCreateInput>
  }

  /**
   * ItemSpecs createMany
   */
  export type ItemSpecsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemSpecs.
     */
    data: ItemSpecsCreateManyInput | ItemSpecsCreateManyInput[]
  }

  /**
   * ItemSpecs createManyAndReturn
   */
  export type ItemSpecsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * The data used to create many ItemSpecs.
     */
    data: ItemSpecsCreateManyInput | ItemSpecsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSpecs update
   */
  export type ItemSpecsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemSpecs.
     */
    data: XOR<ItemSpecsUpdateInput, ItemSpecsUncheckedUpdateInput>
    /**
     * Choose, which ItemSpecs to update.
     */
    where: ItemSpecsWhereUniqueInput
  }

  /**
   * ItemSpecs updateMany
   */
  export type ItemSpecsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemSpecs.
     */
    data: XOR<ItemSpecsUpdateManyMutationInput, ItemSpecsUncheckedUpdateManyInput>
    /**
     * Filter which ItemSpecs to update
     */
    where?: ItemSpecsWhereInput
    /**
     * Limit how many ItemSpecs to update.
     */
    limit?: number
  }

  /**
   * ItemSpecs updateManyAndReturn
   */
  export type ItemSpecsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * The data used to update ItemSpecs.
     */
    data: XOR<ItemSpecsUpdateManyMutationInput, ItemSpecsUncheckedUpdateManyInput>
    /**
     * Filter which ItemSpecs to update
     */
    where?: ItemSpecsWhereInput
    /**
     * Limit how many ItemSpecs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSpecs upsert
   */
  export type ItemSpecsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemSpecs to update in case it exists.
     */
    where: ItemSpecsWhereUniqueInput
    /**
     * In case the ItemSpecs found by the `where` argument doesn't exist, create a new ItemSpecs with this data.
     */
    create: XOR<ItemSpecsCreateInput, ItemSpecsUncheckedCreateInput>
    /**
     * In case the ItemSpecs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemSpecsUpdateInput, ItemSpecsUncheckedUpdateInput>
  }

  /**
   * ItemSpecs delete
   */
  export type ItemSpecsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
    /**
     * Filter which ItemSpecs to delete.
     */
    where: ItemSpecsWhereUniqueInput
  }

  /**
   * ItemSpecs deleteMany
   */
  export type ItemSpecsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSpecs to delete
     */
    where?: ItemSpecsWhereInput
    /**
     * Limit how many ItemSpecs to delete.
     */
    limit?: number
  }

  /**
   * ItemSpecs without action
   */
  export type ItemSpecsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSpecs
     */
    select?: ItemSpecsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSpecs
     */
    omit?: ItemSpecsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemSpecsInclude<ExtArgs> | null
  }


  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    userId: number | null
    totalAmount: number | null
  }

  export type RecordSumAggregateOutputType = {
    userId: number | null
    totalAmount: bigint | null
  }

  export type RecordMinAggregateOutputType = {
    id: string | null
    userId: number | null
    createdAt: Date | null
    totalAmount: bigint | null
    status: string | null
    address: string | null
    phoneNumber: string | null
    recipientName: string | null
  }

  export type RecordMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    createdAt: Date | null
    totalAmount: bigint | null
    status: string | null
    address: string | null
    phoneNumber: string | null
    recipientName: string | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    vnpayParams: number
    totalAmount: number
    status: number
    address: number
    phoneNumber: number
    recipientName: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    userId?: true
    totalAmount?: true
  }

  export type RecordSumAggregateInputType = {
    userId?: true
    totalAmount?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    totalAmount?: true
    status?: true
    address?: true
    phoneNumber?: true
    recipientName?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    totalAmount?: true
    status?: true
    address?: true
    phoneNumber?: true
    recipientName?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    vnpayParams?: true
    totalAmount?: true
    status?: true
    address?: true
    phoneNumber?: true
    recipientName?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }

  export type RecordGroupByOutputType = {
    id: string
    userId: number
    createdAt: Date
    vnpayParams: JsonValue
    totalAmount: bigint
    status: string
    address: string
    phoneNumber: string
    recipientName: string
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    vnpayParams?: boolean
    totalAmount?: boolean
    status?: boolean
    address?: boolean
    phoneNumber?: boolean
    recipientName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Record$itemsArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    vnpayParams?: boolean
    totalAmount?: boolean
    status?: boolean
    address?: boolean
    phoneNumber?: boolean
    recipientName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    vnpayParams?: boolean
    totalAmount?: boolean
    status?: boolean
    address?: boolean
    phoneNumber?: boolean
    recipientName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    vnpayParams?: boolean
    totalAmount?: boolean
    status?: boolean
    address?: boolean
    phoneNumber?: boolean
    recipientName?: boolean
  }

  export type RecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "vnpayParams" | "totalAmount" | "status" | "address" | "phoneNumber" | "recipientName", ExtArgs["result"]["record"]>
  export type RecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Record$itemsArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Record"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$RecordItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      createdAt: Date
      vnpayParams: Prisma.JsonValue
      totalAmount: bigint
      status: string
      address: string
      phoneNumber: string
      recipientName: string
    }, ExtArgs["result"]["record"]>
    composites: {}
  }

  type RecordGetPayload<S extends boolean | null | undefined | RecordDefaultArgs> = $Result.GetResult<Prisma.$RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordFindManyArgs>(args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
     */
    create<T extends RecordCreateArgs>(args: SelectSubset<T, RecordCreateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordCreateManyArgs>(args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
     */
    delete<T extends RecordDeleteArgs>(args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordUpdateArgs>(args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordDeleteManyArgs>(args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordUpdateManyArgs>(args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecordUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
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
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Record$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Record$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'String'>
    readonly userId: FieldRef<"Record", 'Int'>
    readonly createdAt: FieldRef<"Record", 'DateTime'>
    readonly vnpayParams: FieldRef<"Record", 'Json'>
    readonly totalAmount: FieldRef<"Record", 'BigInt'>
    readonly status: FieldRef<"Record", 'String'>
    readonly address: FieldRef<"Record", 'String'>
    readonly phoneNumber: FieldRef<"Record", 'String'>
    readonly recipientName: FieldRef<"Record", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
  }

  /**
   * Record createManyAndReturn
   */
  export type RecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Record updateManyAndReturn
   */
  export type RecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }

  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Record.items
   */
  export type Record$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    where?: RecordItemsWhereInput
    orderBy?: RecordItemsOrderByWithRelationInput | RecordItemsOrderByWithRelationInput[]
    cursor?: RecordItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordItemsScalarFieldEnum | RecordItemsScalarFieldEnum[]
  }

  /**
   * Record without action
   */
  export type RecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
  }


  /**
   * Model RecordItems
   */

  export type AggregateRecordItems = {
    _count: RecordItemsCountAggregateOutputType | null
    _avg: RecordItemsAvgAggregateOutputType | null
    _sum: RecordItemsSumAggregateOutputType | null
    _min: RecordItemsMinAggregateOutputType | null
    _max: RecordItemsMaxAggregateOutputType | null
  }

  export type RecordItemsAvgAggregateOutputType = {
    itemId: number | null
    amount: number | null
  }

  export type RecordItemsSumAggregateOutputType = {
    itemId: number | null
    amount: number | null
  }

  export type RecordItemsMinAggregateOutputType = {
    recordId: string | null
    itemId: number | null
    amount: number | null
  }

  export type RecordItemsMaxAggregateOutputType = {
    recordId: string | null
    itemId: number | null
    amount: number | null
  }

  export type RecordItemsCountAggregateOutputType = {
    recordId: number
    itemId: number
    amount: number
    _all: number
  }


  export type RecordItemsAvgAggregateInputType = {
    itemId?: true
    amount?: true
  }

  export type RecordItemsSumAggregateInputType = {
    itemId?: true
    amount?: true
  }

  export type RecordItemsMinAggregateInputType = {
    recordId?: true
    itemId?: true
    amount?: true
  }

  export type RecordItemsMaxAggregateInputType = {
    recordId?: true
    itemId?: true
    amount?: true
  }

  export type RecordItemsCountAggregateInputType = {
    recordId?: true
    itemId?: true
    amount?: true
    _all?: true
  }

  export type RecordItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecordItems to aggregate.
     */
    where?: RecordItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordItems to fetch.
     */
    orderBy?: RecordItemsOrderByWithRelationInput | RecordItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecordItems
    **/
    _count?: true | RecordItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordItemsMaxAggregateInputType
  }

  export type GetRecordItemsAggregateType<T extends RecordItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecordItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecordItems[P]>
      : GetScalarType<T[P], AggregateRecordItems[P]>
  }




  export type RecordItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordItemsWhereInput
    orderBy?: RecordItemsOrderByWithAggregationInput | RecordItemsOrderByWithAggregationInput[]
    by: RecordItemsScalarFieldEnum[] | RecordItemsScalarFieldEnum
    having?: RecordItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordItemsCountAggregateInputType | true
    _avg?: RecordItemsAvgAggregateInputType
    _sum?: RecordItemsSumAggregateInputType
    _min?: RecordItemsMinAggregateInputType
    _max?: RecordItemsMaxAggregateInputType
  }

  export type RecordItemsGroupByOutputType = {
    recordId: string
    itemId: number
    amount: number
    _count: RecordItemsCountAggregateOutputType | null
    _avg: RecordItemsAvgAggregateOutputType | null
    _sum: RecordItemsSumAggregateOutputType | null
    _min: RecordItemsMinAggregateOutputType | null
    _max: RecordItemsMaxAggregateOutputType | null
  }

  type GetRecordItemsGroupByPayload<T extends RecordItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordItemsGroupByOutputType[P]>
            : GetScalarType<T[P], RecordItemsGroupByOutputType[P]>
        }
      >
    >


  export type RecordItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordId?: boolean
    itemId?: boolean
    amount?: boolean
    record?: boolean | RecordDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recordItems"]>

  export type RecordItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordId?: boolean
    itemId?: boolean
    amount?: boolean
    record?: boolean | RecordDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recordItems"]>

  export type RecordItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordId?: boolean
    itemId?: boolean
    amount?: boolean
    record?: boolean | RecordDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recordItems"]>

  export type RecordItemsSelectScalar = {
    recordId?: boolean
    itemId?: boolean
    amount?: boolean
  }

  export type RecordItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recordId" | "itemId" | "amount", ExtArgs["result"]["recordItems"]>
  export type RecordItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | RecordDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type RecordItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | RecordDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type RecordItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | RecordDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $RecordItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecordItems"
    objects: {
      record: Prisma.$RecordPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      recordId: string
      itemId: number
      amount: number
    }, ExtArgs["result"]["recordItems"]>
    composites: {}
  }

  type RecordItemsGetPayload<S extends boolean | null | undefined | RecordItemsDefaultArgs> = $Result.GetResult<Prisma.$RecordItemsPayload, S>

  type RecordItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordItemsCountAggregateInputType | true
    }

  export interface RecordItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecordItems'], meta: { name: 'RecordItems' } }
    /**
     * Find zero or one RecordItems that matches the filter.
     * @param {RecordItemsFindUniqueArgs} args - Arguments to find a RecordItems
     * @example
     * // Get one RecordItems
     * const recordItems = await prisma.recordItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordItemsFindUniqueArgs>(args: SelectSubset<T, RecordItemsFindUniqueArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecordItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordItemsFindUniqueOrThrowArgs} args - Arguments to find a RecordItems
     * @example
     * // Get one RecordItems
     * const recordItems = await prisma.recordItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecordItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsFindFirstArgs} args - Arguments to find a RecordItems
     * @example
     * // Get one RecordItems
     * const recordItems = await prisma.recordItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordItemsFindFirstArgs>(args?: SelectSubset<T, RecordItemsFindFirstArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecordItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsFindFirstOrThrowArgs} args - Arguments to find a RecordItems
     * @example
     * // Get one RecordItems
     * const recordItems = await prisma.recordItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecordItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecordItems
     * const recordItems = await prisma.recordItems.findMany()
     * 
     * // Get first 10 RecordItems
     * const recordItems = await prisma.recordItems.findMany({ take: 10 })
     * 
     * // Only select the `recordId`
     * const recordItemsWithRecordIdOnly = await prisma.recordItems.findMany({ select: { recordId: true } })
     * 
     */
    findMany<T extends RecordItemsFindManyArgs>(args?: SelectSubset<T, RecordItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecordItems.
     * @param {RecordItemsCreateArgs} args - Arguments to create a RecordItems.
     * @example
     * // Create one RecordItems
     * const RecordItems = await prisma.recordItems.create({
     *   data: {
     *     // ... data to create a RecordItems
     *   }
     * })
     * 
     */
    create<T extends RecordItemsCreateArgs>(args: SelectSubset<T, RecordItemsCreateArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecordItems.
     * @param {RecordItemsCreateManyArgs} args - Arguments to create many RecordItems.
     * @example
     * // Create many RecordItems
     * const recordItems = await prisma.recordItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordItemsCreateManyArgs>(args?: SelectSubset<T, RecordItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecordItems and returns the data saved in the database.
     * @param {RecordItemsCreateManyAndReturnArgs} args - Arguments to create many RecordItems.
     * @example
     * // Create many RecordItems
     * const recordItems = await prisma.recordItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecordItems and only return the `recordId`
     * const recordItemsWithRecordIdOnly = await prisma.recordItems.createManyAndReturn({
     *   select: { recordId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecordItems.
     * @param {RecordItemsDeleteArgs} args - Arguments to delete one RecordItems.
     * @example
     * // Delete one RecordItems
     * const RecordItems = await prisma.recordItems.delete({
     *   where: {
     *     // ... filter to delete one RecordItems
     *   }
     * })
     * 
     */
    delete<T extends RecordItemsDeleteArgs>(args: SelectSubset<T, RecordItemsDeleteArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecordItems.
     * @param {RecordItemsUpdateArgs} args - Arguments to update one RecordItems.
     * @example
     * // Update one RecordItems
     * const recordItems = await prisma.recordItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordItemsUpdateArgs>(args: SelectSubset<T, RecordItemsUpdateArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecordItems.
     * @param {RecordItemsDeleteManyArgs} args - Arguments to filter RecordItems to delete.
     * @example
     * // Delete a few RecordItems
     * const { count } = await prisma.recordItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordItemsDeleteManyArgs>(args?: SelectSubset<T, RecordItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecordItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecordItems
     * const recordItems = await prisma.recordItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordItemsUpdateManyArgs>(args: SelectSubset<T, RecordItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecordItems and returns the data updated in the database.
     * @param {RecordItemsUpdateManyAndReturnArgs} args - Arguments to update many RecordItems.
     * @example
     * // Update many RecordItems
     * const recordItems = await prisma.recordItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecordItems and only return the `recordId`
     * const recordItemsWithRecordIdOnly = await prisma.recordItems.updateManyAndReturn({
     *   select: { recordId: true },
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
    updateManyAndReturn<T extends RecordItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecordItems.
     * @param {RecordItemsUpsertArgs} args - Arguments to update or create a RecordItems.
     * @example
     * // Update or create a RecordItems
     * const recordItems = await prisma.recordItems.upsert({
     *   create: {
     *     // ... data to create a RecordItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecordItems we want to update
     *   }
     * })
     */
    upsert<T extends RecordItemsUpsertArgs>(args: SelectSubset<T, RecordItemsUpsertArgs<ExtArgs>>): Prisma__RecordItemsClient<$Result.GetResult<Prisma.$RecordItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecordItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsCountArgs} args - Arguments to filter RecordItems to count.
     * @example
     * // Count the number of RecordItems
     * const count = await prisma.recordItems.count({
     *   where: {
     *     // ... the filter for the RecordItems we want to count
     *   }
     * })
    **/
    count<T extends RecordItemsCountArgs>(
      args?: Subset<T, RecordItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecordItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordItemsAggregateArgs>(args: Subset<T, RecordItemsAggregateArgs>): Prisma.PrismaPromise<GetRecordItemsAggregateType<T>>

    /**
     * Group by RecordItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordItemsGroupByArgs} args - Group by arguments.
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
      T extends RecordItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordItemsGroupByArgs['orderBy'] }
        : { orderBy?: RecordItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecordItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecordItems model
   */
  readonly fields: RecordItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecordItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    record<T extends RecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecordDefaultArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecordItems model
   */
  interface RecordItemsFieldRefs {
    readonly recordId: FieldRef<"RecordItems", 'String'>
    readonly itemId: FieldRef<"RecordItems", 'Int'>
    readonly amount: FieldRef<"RecordItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RecordItems findUnique
   */
  export type RecordItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * Filter, which RecordItems to fetch.
     */
    where: RecordItemsWhereUniqueInput
  }

  /**
   * RecordItems findUniqueOrThrow
   */
  export type RecordItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * Filter, which RecordItems to fetch.
     */
    where: RecordItemsWhereUniqueInput
  }

  /**
   * RecordItems findFirst
   */
  export type RecordItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * Filter, which RecordItems to fetch.
     */
    where?: RecordItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordItems to fetch.
     */
    orderBy?: RecordItemsOrderByWithRelationInput | RecordItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordItems.
     */
    cursor?: RecordItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordItems.
     */
    distinct?: RecordItemsScalarFieldEnum | RecordItemsScalarFieldEnum[]
  }

  /**
   * RecordItems findFirstOrThrow
   */
  export type RecordItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * Filter, which RecordItems to fetch.
     */
    where?: RecordItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordItems to fetch.
     */
    orderBy?: RecordItemsOrderByWithRelationInput | RecordItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordItems.
     */
    cursor?: RecordItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordItems.
     */
    distinct?: RecordItemsScalarFieldEnum | RecordItemsScalarFieldEnum[]
  }

  /**
   * RecordItems findMany
   */
  export type RecordItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * Filter, which RecordItems to fetch.
     */
    where?: RecordItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordItems to fetch.
     */
    orderBy?: RecordItemsOrderByWithRelationInput | RecordItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecordItems.
     */
    cursor?: RecordItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordItems.
     */
    skip?: number
    distinct?: RecordItemsScalarFieldEnum | RecordItemsScalarFieldEnum[]
  }

  /**
   * RecordItems create
   */
  export type RecordItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a RecordItems.
     */
    data: XOR<RecordItemsCreateInput, RecordItemsUncheckedCreateInput>
  }

  /**
   * RecordItems createMany
   */
  export type RecordItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecordItems.
     */
    data: RecordItemsCreateManyInput | RecordItemsCreateManyInput[]
  }

  /**
   * RecordItems createManyAndReturn
   */
  export type RecordItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * The data used to create many RecordItems.
     */
    data: RecordItemsCreateManyInput | RecordItemsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecordItems update
   */
  export type RecordItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a RecordItems.
     */
    data: XOR<RecordItemsUpdateInput, RecordItemsUncheckedUpdateInput>
    /**
     * Choose, which RecordItems to update.
     */
    where: RecordItemsWhereUniqueInput
  }

  /**
   * RecordItems updateMany
   */
  export type RecordItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecordItems.
     */
    data: XOR<RecordItemsUpdateManyMutationInput, RecordItemsUncheckedUpdateManyInput>
    /**
     * Filter which RecordItems to update
     */
    where?: RecordItemsWhereInput
    /**
     * Limit how many RecordItems to update.
     */
    limit?: number
  }

  /**
   * RecordItems updateManyAndReturn
   */
  export type RecordItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * The data used to update RecordItems.
     */
    data: XOR<RecordItemsUpdateManyMutationInput, RecordItemsUncheckedUpdateManyInput>
    /**
     * Filter which RecordItems to update
     */
    where?: RecordItemsWhereInput
    /**
     * Limit how many RecordItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecordItems upsert
   */
  export type RecordItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the RecordItems to update in case it exists.
     */
    where: RecordItemsWhereUniqueInput
    /**
     * In case the RecordItems found by the `where` argument doesn't exist, create a new RecordItems with this data.
     */
    create: XOR<RecordItemsCreateInput, RecordItemsUncheckedCreateInput>
    /**
     * In case the RecordItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordItemsUpdateInput, RecordItemsUncheckedUpdateInput>
  }

  /**
   * RecordItems delete
   */
  export type RecordItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
    /**
     * Filter which RecordItems to delete.
     */
    where: RecordItemsWhereUniqueInput
  }

  /**
   * RecordItems deleteMany
   */
  export type RecordItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecordItems to delete
     */
    where?: RecordItemsWhereInput
    /**
     * Limit how many RecordItems to delete.
     */
    limit?: number
  }

  /**
   * RecordItems without action
   */
  export type RecordItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordItems
     */
    select?: RecordItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecordItems
     */
    omit?: RecordItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordItemsInclude<ExtArgs> | null
  }


  /**
   * Model RevokedToken
   */

  export type AggregateRevokedToken = {
    _count: RevokedTokenCountAggregateOutputType | null
    _min: RevokedTokenMinAggregateOutputType | null
    _max: RevokedTokenMaxAggregateOutputType | null
  }

  export type RevokedTokenMinAggregateOutputType = {
    jti: string | null
    expiresAt: Date | null
  }

  export type RevokedTokenMaxAggregateOutputType = {
    jti: string | null
    expiresAt: Date | null
  }

  export type RevokedTokenCountAggregateOutputType = {
    jti: number
    expiresAt: number
    _all: number
  }


  export type RevokedTokenMinAggregateInputType = {
    jti?: true
    expiresAt?: true
  }

  export type RevokedTokenMaxAggregateInputType = {
    jti?: true
    expiresAt?: true
  }

  export type RevokedTokenCountAggregateInputType = {
    jti?: true
    expiresAt?: true
    _all?: true
  }

  export type RevokedTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevokedToken to aggregate.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevokedTokens
    **/
    _count?: true | RevokedTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevokedTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevokedTokenMaxAggregateInputType
  }

  export type GetRevokedTokenAggregateType<T extends RevokedTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRevokedToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevokedToken[P]>
      : GetScalarType<T[P], AggregateRevokedToken[P]>
  }




  export type RevokedTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevokedTokenWhereInput
    orderBy?: RevokedTokenOrderByWithAggregationInput | RevokedTokenOrderByWithAggregationInput[]
    by: RevokedTokenScalarFieldEnum[] | RevokedTokenScalarFieldEnum
    having?: RevokedTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevokedTokenCountAggregateInputType | true
    _min?: RevokedTokenMinAggregateInputType
    _max?: RevokedTokenMaxAggregateInputType
  }

  export type RevokedTokenGroupByOutputType = {
    jti: string
    expiresAt: Date
    _count: RevokedTokenCountAggregateOutputType | null
    _min: RevokedTokenMinAggregateOutputType | null
    _max: RevokedTokenMaxAggregateOutputType | null
  }

  type GetRevokedTokenGroupByPayload<T extends RevokedTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevokedTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevokedTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>
        }
      >
    >


  export type RevokedTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jti?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["revokedToken"]>

  export type RevokedTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jti?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["revokedToken"]>

  export type RevokedTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jti?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["revokedToken"]>

  export type RevokedTokenSelectScalar = {
    jti?: boolean
    expiresAt?: boolean
  }

  export type RevokedTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jti" | "expiresAt", ExtArgs["result"]["revokedToken"]>

  export type $RevokedTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevokedToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      jti: string
      expiresAt: Date
    }, ExtArgs["result"]["revokedToken"]>
    composites: {}
  }

  type RevokedTokenGetPayload<S extends boolean | null | undefined | RevokedTokenDefaultArgs> = $Result.GetResult<Prisma.$RevokedTokenPayload, S>

  type RevokedTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevokedTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevokedTokenCountAggregateInputType | true
    }

  export interface RevokedTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevokedToken'], meta: { name: 'RevokedToken' } }
    /**
     * Find zero or one RevokedToken that matches the filter.
     * @param {RevokedTokenFindUniqueArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevokedTokenFindUniqueArgs>(args: SelectSubset<T, RevokedTokenFindUniqueArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevokedToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevokedTokenFindUniqueOrThrowArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevokedTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RevokedTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevokedToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenFindFirstArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevokedTokenFindFirstArgs>(args?: SelectSubset<T, RevokedTokenFindFirstArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevokedToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenFindFirstOrThrowArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevokedTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RevokedTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevokedTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevokedTokens
     * const revokedTokens = await prisma.revokedToken.findMany()
     * 
     * // Get first 10 RevokedTokens
     * const revokedTokens = await prisma.revokedToken.findMany({ take: 10 })
     * 
     * // Only select the `jti`
     * const revokedTokenWithJtiOnly = await prisma.revokedToken.findMany({ select: { jti: true } })
     * 
     */
    findMany<T extends RevokedTokenFindManyArgs>(args?: SelectSubset<T, RevokedTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevokedToken.
     * @param {RevokedTokenCreateArgs} args - Arguments to create a RevokedToken.
     * @example
     * // Create one RevokedToken
     * const RevokedToken = await prisma.revokedToken.create({
     *   data: {
     *     // ... data to create a RevokedToken
     *   }
     * })
     * 
     */
    create<T extends RevokedTokenCreateArgs>(args: SelectSubset<T, RevokedTokenCreateArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevokedTokens.
     * @param {RevokedTokenCreateManyArgs} args - Arguments to create many RevokedTokens.
     * @example
     * // Create many RevokedTokens
     * const revokedToken = await prisma.revokedToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevokedTokenCreateManyArgs>(args?: SelectSubset<T, RevokedTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevokedTokens and returns the data saved in the database.
     * @param {RevokedTokenCreateManyAndReturnArgs} args - Arguments to create many RevokedTokens.
     * @example
     * // Create many RevokedTokens
     * const revokedToken = await prisma.revokedToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevokedTokens and only return the `jti`
     * const revokedTokenWithJtiOnly = await prisma.revokedToken.createManyAndReturn({
     *   select: { jti: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevokedTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RevokedTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevokedToken.
     * @param {RevokedTokenDeleteArgs} args - Arguments to delete one RevokedToken.
     * @example
     * // Delete one RevokedToken
     * const RevokedToken = await prisma.revokedToken.delete({
     *   where: {
     *     // ... filter to delete one RevokedToken
     *   }
     * })
     * 
     */
    delete<T extends RevokedTokenDeleteArgs>(args: SelectSubset<T, RevokedTokenDeleteArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevokedToken.
     * @param {RevokedTokenUpdateArgs} args - Arguments to update one RevokedToken.
     * @example
     * // Update one RevokedToken
     * const revokedToken = await prisma.revokedToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevokedTokenUpdateArgs>(args: SelectSubset<T, RevokedTokenUpdateArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevokedTokens.
     * @param {RevokedTokenDeleteManyArgs} args - Arguments to filter RevokedTokens to delete.
     * @example
     * // Delete a few RevokedTokens
     * const { count } = await prisma.revokedToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevokedTokenDeleteManyArgs>(args?: SelectSubset<T, RevokedTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevokedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevokedTokens
     * const revokedToken = await prisma.revokedToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevokedTokenUpdateManyArgs>(args: SelectSubset<T, RevokedTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevokedTokens and returns the data updated in the database.
     * @param {RevokedTokenUpdateManyAndReturnArgs} args - Arguments to update many RevokedTokens.
     * @example
     * // Update many RevokedTokens
     * const revokedToken = await prisma.revokedToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevokedTokens and only return the `jti`
     * const revokedTokenWithJtiOnly = await prisma.revokedToken.updateManyAndReturn({
     *   select: { jti: true },
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
    updateManyAndReturn<T extends RevokedTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RevokedTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevokedToken.
     * @param {RevokedTokenUpsertArgs} args - Arguments to update or create a RevokedToken.
     * @example
     * // Update or create a RevokedToken
     * const revokedToken = await prisma.revokedToken.upsert({
     *   create: {
     *     // ... data to create a RevokedToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevokedToken we want to update
     *   }
     * })
     */
    upsert<T extends RevokedTokenUpsertArgs>(args: SelectSubset<T, RevokedTokenUpsertArgs<ExtArgs>>): Prisma__RevokedTokenClient<$Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevokedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenCountArgs} args - Arguments to filter RevokedTokens to count.
     * @example
     * // Count the number of RevokedTokens
     * const count = await prisma.revokedToken.count({
     *   where: {
     *     // ... the filter for the RevokedTokens we want to count
     *   }
     * })
    **/
    count<T extends RevokedTokenCountArgs>(
      args?: Subset<T, RevokedTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevokedTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevokedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevokedTokenAggregateArgs>(args: Subset<T, RevokedTokenAggregateArgs>): Prisma.PrismaPromise<GetRevokedTokenAggregateType<T>>

    /**
     * Group by RevokedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenGroupByArgs} args - Group by arguments.
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
      T extends RevokedTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevokedTokenGroupByArgs['orderBy'] }
        : { orderBy?: RevokedTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RevokedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevokedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevokedToken model
   */
  readonly fields: RevokedTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevokedToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevokedTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RevokedToken model
   */
  interface RevokedTokenFieldRefs {
    readonly jti: FieldRef<"RevokedToken", 'String'>
    readonly expiresAt: FieldRef<"RevokedToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevokedToken findUnique
   */
  export type RevokedTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken findUniqueOrThrow
   */
  export type RevokedTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken findFirst
   */
  export type RevokedTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevokedTokens.
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevokedTokens.
     */
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * RevokedToken findFirstOrThrow
   */
  export type RevokedTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedToken to fetch.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevokedTokens.
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevokedTokens.
     */
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * RevokedToken findMany
   */
  export type RevokedTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter, which RevokedTokens to fetch.
     */
    where?: RevokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevokedTokens to fetch.
     */
    orderBy?: RevokedTokenOrderByWithRelationInput | RevokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevokedTokens.
     */
    cursor?: RevokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevokedTokens.
     */
    skip?: number
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * RevokedToken create
   */
  export type RevokedTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a RevokedToken.
     */
    data: XOR<RevokedTokenCreateInput, RevokedTokenUncheckedCreateInput>
  }

  /**
   * RevokedToken createMany
   */
  export type RevokedTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevokedTokens.
     */
    data: RevokedTokenCreateManyInput | RevokedTokenCreateManyInput[]
  }

  /**
   * RevokedToken createManyAndReturn
   */
  export type RevokedTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RevokedTokens.
     */
    data: RevokedTokenCreateManyInput | RevokedTokenCreateManyInput[]
  }

  /**
   * RevokedToken update
   */
  export type RevokedTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a RevokedToken.
     */
    data: XOR<RevokedTokenUpdateInput, RevokedTokenUncheckedUpdateInput>
    /**
     * Choose, which RevokedToken to update.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken updateMany
   */
  export type RevokedTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevokedTokens.
     */
    data: XOR<RevokedTokenUpdateManyMutationInput, RevokedTokenUncheckedUpdateManyInput>
    /**
     * Filter which RevokedTokens to update
     */
    where?: RevokedTokenWhereInput
    /**
     * Limit how many RevokedTokens to update.
     */
    limit?: number
  }

  /**
   * RevokedToken updateManyAndReturn
   */
  export type RevokedTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The data used to update RevokedTokens.
     */
    data: XOR<RevokedTokenUpdateManyMutationInput, RevokedTokenUncheckedUpdateManyInput>
    /**
     * Filter which RevokedTokens to update
     */
    where?: RevokedTokenWhereInput
    /**
     * Limit how many RevokedTokens to update.
     */
    limit?: number
  }

  /**
   * RevokedToken upsert
   */
  export type RevokedTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the RevokedToken to update in case it exists.
     */
    where: RevokedTokenWhereUniqueInput
    /**
     * In case the RevokedToken found by the `where` argument doesn't exist, create a new RevokedToken with this data.
     */
    create: XOR<RevokedTokenCreateInput, RevokedTokenUncheckedCreateInput>
    /**
     * In case the RevokedToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevokedTokenUpdateInput, RevokedTokenUncheckedUpdateInput>
  }

  /**
   * RevokedToken delete
   */
  export type RevokedTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
    /**
     * Filter which RevokedToken to delete.
     */
    where: RevokedTokenWhereUniqueInput
  }

  /**
   * RevokedToken deleteMany
   */
  export type RevokedTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevokedTokens to delete
     */
    where?: RevokedTokenWhereInput
    /**
     * Limit how many RevokedTokens to delete.
     */
    limit?: number
  }

  /**
   * RevokedToken without action
   */
  export type RevokedTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevokedToken
     */
    select?: RevokedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevokedToken
     */
    omit?: RevokedTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpecScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SpecScalarFieldEnum = (typeof SpecScalarFieldEnum)[keyof typeof SpecScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    os: 'os',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    price: 'price',
    stock: 'stock',
    productId: 'productId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ProductBaseSpecsScalarFieldEnum: {
    productId: 'productId',
    specId: 'specId',
    value: 'value'
  };

  export type ProductBaseSpecsScalarFieldEnum = (typeof ProductBaseSpecsScalarFieldEnum)[keyof typeof ProductBaseSpecsScalarFieldEnum]


  export const ItemSpecsScalarFieldEnum: {
    itemId: 'itemId',
    specId: 'specId',
    value: 'value'
  };

  export type ItemSpecsScalarFieldEnum = (typeof ItemSpecsScalarFieldEnum)[keyof typeof ItemSpecsScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    vnpayParams: 'vnpayParams',
    totalAmount: 'totalAmount',
    status: 'status',
    address: 'address',
    phoneNumber: 'phoneNumber',
    recipientName: 'recipientName'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const RecordItemsScalarFieldEnum: {
    recordId: 'recordId',
    itemId: 'itemId',
    amount: 'amount'
  };

  export type RecordItemsScalarFieldEnum = (typeof RecordItemsScalarFieldEnum)[keyof typeof RecordItemsScalarFieldEnum]


  export const RevokedTokenScalarFieldEnum: {
    jti: 'jti',
    expiresAt: 'expiresAt'
  };

  export type RevokedTokenScalarFieldEnum = (typeof RevokedTokenScalarFieldEnum)[keyof typeof RevokedTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    records?: RecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    records?: RecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    records?: RecordListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type SpecWhereInput = {
    AND?: SpecWhereInput | SpecWhereInput[]
    OR?: SpecWhereInput[]
    NOT?: SpecWhereInput | SpecWhereInput[]
    id?: IntFilter<"Spec"> | number
    name?: StringFilter<"Spec"> | string
    products?: ProductBaseSpecsListRelationFilter
    items?: ItemSpecsListRelationFilter
  }

  export type SpecOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductBaseSpecsOrderByRelationAggregateInput
    items?: ItemSpecsOrderByRelationAggregateInput
  }

  export type SpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpecWhereInput | SpecWhereInput[]
    OR?: SpecWhereInput[]
    NOT?: SpecWhereInput | SpecWhereInput[]
    products?: ProductBaseSpecsListRelationFilter
    items?: ItemSpecsListRelationFilter
  }, "id" | "name">

  export type SpecOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SpecCountOrderByAggregateInput
    _avg?: SpecAvgOrderByAggregateInput
    _max?: SpecMaxOrderByAggregateInput
    _min?: SpecMinOrderByAggregateInput
    _sum?: SpecSumOrderByAggregateInput
  }

  export type SpecScalarWhereWithAggregatesInput = {
    AND?: SpecScalarWhereWithAggregatesInput | SpecScalarWhereWithAggregatesInput[]
    OR?: SpecScalarWhereWithAggregatesInput[]
    NOT?: SpecScalarWhereWithAggregatesInput | SpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Spec"> | number
    name?: StringWithAggregatesFilter<"Spec"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    products?: ProductListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    products?: ProductListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    os?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    tags?: TagListRelationFilter
    baseSpecs?: ProductBaseSpecsListRelationFilter
    items?: ItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tags?: TagOrderByRelationAggregateInput
    baseSpecs?: ProductBaseSpecsOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    brand?: StringFilter<"Product"> | string
    os?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    tags?: TagListRelationFilter
    baseSpecs?: ProductBaseSpecsListRelationFilter
    items?: ItemListRelationFilter
  }, "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    os?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    price?: IntFilter<"Item"> | number
    stock?: IntFilter<"Item"> | number
    productId?: StringFilter<"Item"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    specs?: ItemSpecsListRelationFilter
    records?: RecordItemsListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    specs?: ItemSpecsOrderByRelationAggregateInput
    records?: RecordItemsOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    price?: IntFilter<"Item"> | number
    stock?: IntFilter<"Item"> | number
    productId?: StringFilter<"Item"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    specs?: ItemSpecsListRelationFilter
    records?: RecordItemsListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    price?: IntWithAggregatesFilter<"Item"> | number
    stock?: IntWithAggregatesFilter<"Item"> | number
    productId?: StringWithAggregatesFilter<"Item"> | string
  }

  export type ProductBaseSpecsWhereInput = {
    AND?: ProductBaseSpecsWhereInput | ProductBaseSpecsWhereInput[]
    OR?: ProductBaseSpecsWhereInput[]
    NOT?: ProductBaseSpecsWhereInput | ProductBaseSpecsWhereInput[]
    productId?: StringFilter<"ProductBaseSpecs"> | string
    specId?: IntFilter<"ProductBaseSpecs"> | number
    value?: StringFilter<"ProductBaseSpecs"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    spec?: XOR<SpecScalarRelationFilter, SpecWhereInput>
  }

  export type ProductBaseSpecsOrderByWithRelationInput = {
    productId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
    product?: ProductOrderByWithRelationInput
    spec?: SpecOrderByWithRelationInput
  }

  export type ProductBaseSpecsWhereUniqueInput = Prisma.AtLeast<{
    productId_specId?: ProductBaseSpecsProductIdSpecIdCompoundUniqueInput
    AND?: ProductBaseSpecsWhereInput | ProductBaseSpecsWhereInput[]
    OR?: ProductBaseSpecsWhereInput[]
    NOT?: ProductBaseSpecsWhereInput | ProductBaseSpecsWhereInput[]
    productId?: StringFilter<"ProductBaseSpecs"> | string
    specId?: IntFilter<"ProductBaseSpecs"> | number
    value?: StringFilter<"ProductBaseSpecs"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    spec?: XOR<SpecScalarRelationFilter, SpecWhereInput>
  }, "productId_specId">

  export type ProductBaseSpecsOrderByWithAggregationInput = {
    productId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
    _count?: ProductBaseSpecsCountOrderByAggregateInput
    _avg?: ProductBaseSpecsAvgOrderByAggregateInput
    _max?: ProductBaseSpecsMaxOrderByAggregateInput
    _min?: ProductBaseSpecsMinOrderByAggregateInput
    _sum?: ProductBaseSpecsSumOrderByAggregateInput
  }

  export type ProductBaseSpecsScalarWhereWithAggregatesInput = {
    AND?: ProductBaseSpecsScalarWhereWithAggregatesInput | ProductBaseSpecsScalarWhereWithAggregatesInput[]
    OR?: ProductBaseSpecsScalarWhereWithAggregatesInput[]
    NOT?: ProductBaseSpecsScalarWhereWithAggregatesInput | ProductBaseSpecsScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"ProductBaseSpecs"> | string
    specId?: IntWithAggregatesFilter<"ProductBaseSpecs"> | number
    value?: StringWithAggregatesFilter<"ProductBaseSpecs"> | string
  }

  export type ItemSpecsWhereInput = {
    AND?: ItemSpecsWhereInput | ItemSpecsWhereInput[]
    OR?: ItemSpecsWhereInput[]
    NOT?: ItemSpecsWhereInput | ItemSpecsWhereInput[]
    itemId?: IntFilter<"ItemSpecs"> | number
    specId?: IntFilter<"ItemSpecs"> | number
    value?: StringFilter<"ItemSpecs"> | string
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    spec?: XOR<SpecScalarRelationFilter, SpecWhereInput>
  }

  export type ItemSpecsOrderByWithRelationInput = {
    itemId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
    Item?: ItemOrderByWithRelationInput
    spec?: SpecOrderByWithRelationInput
  }

  export type ItemSpecsWhereUniqueInput = Prisma.AtLeast<{
    itemId_specId?: ItemSpecsItemIdSpecIdCompoundUniqueInput
    AND?: ItemSpecsWhereInput | ItemSpecsWhereInput[]
    OR?: ItemSpecsWhereInput[]
    NOT?: ItemSpecsWhereInput | ItemSpecsWhereInput[]
    itemId?: IntFilter<"ItemSpecs"> | number
    specId?: IntFilter<"ItemSpecs"> | number
    value?: StringFilter<"ItemSpecs"> | string
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    spec?: XOR<SpecScalarRelationFilter, SpecWhereInput>
  }, "itemId_specId">

  export type ItemSpecsOrderByWithAggregationInput = {
    itemId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
    _count?: ItemSpecsCountOrderByAggregateInput
    _avg?: ItemSpecsAvgOrderByAggregateInput
    _max?: ItemSpecsMaxOrderByAggregateInput
    _min?: ItemSpecsMinOrderByAggregateInput
    _sum?: ItemSpecsSumOrderByAggregateInput
  }

  export type ItemSpecsScalarWhereWithAggregatesInput = {
    AND?: ItemSpecsScalarWhereWithAggregatesInput | ItemSpecsScalarWhereWithAggregatesInput[]
    OR?: ItemSpecsScalarWhereWithAggregatesInput[]
    NOT?: ItemSpecsScalarWhereWithAggregatesInput | ItemSpecsScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"ItemSpecs"> | number
    specId?: IntWithAggregatesFilter<"ItemSpecs"> | number
    value?: StringWithAggregatesFilter<"ItemSpecs"> | string
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: StringFilter<"Record"> | string
    userId?: IntFilter<"Record"> | number
    createdAt?: DateTimeFilter<"Record"> | Date | string
    vnpayParams?: JsonFilter<"Record">
    totalAmount?: BigIntFilter<"Record"> | bigint | number
    status?: StringFilter<"Record"> | string
    address?: StringFilter<"Record"> | string
    phoneNumber?: StringFilter<"Record"> | string
    recipientName?: StringFilter<"Record"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RecordItemsListRelationFilter
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    vnpayParams?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    recipientName?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: RecordItemsOrderByRelationAggregateInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    userId?: IntFilter<"Record"> | number
    createdAt?: DateTimeFilter<"Record"> | Date | string
    vnpayParams?: JsonFilter<"Record">
    totalAmount?: BigIntFilter<"Record"> | bigint | number
    status?: StringFilter<"Record"> | string
    address?: StringFilter<"Record"> | string
    phoneNumber?: StringFilter<"Record"> | string
    recipientName?: StringFilter<"Record"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RecordItemsListRelationFilter
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    vnpayParams?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    recipientName?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Record"> | string
    userId?: IntWithAggregatesFilter<"Record"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    vnpayParams?: JsonWithAggregatesFilter<"Record">
    totalAmount?: BigIntWithAggregatesFilter<"Record"> | bigint | number
    status?: StringWithAggregatesFilter<"Record"> | string
    address?: StringWithAggregatesFilter<"Record"> | string
    phoneNumber?: StringWithAggregatesFilter<"Record"> | string
    recipientName?: StringWithAggregatesFilter<"Record"> | string
  }

  export type RecordItemsWhereInput = {
    AND?: RecordItemsWhereInput | RecordItemsWhereInput[]
    OR?: RecordItemsWhereInput[]
    NOT?: RecordItemsWhereInput | RecordItemsWhereInput[]
    recordId?: StringFilter<"RecordItems"> | string
    itemId?: IntFilter<"RecordItems"> | number
    amount?: IntFilter<"RecordItems"> | number
    record?: XOR<RecordScalarRelationFilter, RecordWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type RecordItemsOrderByWithRelationInput = {
    recordId?: SortOrder
    itemId?: SortOrder
    amount?: SortOrder
    record?: RecordOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type RecordItemsWhereUniqueInput = Prisma.AtLeast<{
    recordId_itemId?: RecordItemsRecordIdItemIdCompoundUniqueInput
    AND?: RecordItemsWhereInput | RecordItemsWhereInput[]
    OR?: RecordItemsWhereInput[]
    NOT?: RecordItemsWhereInput | RecordItemsWhereInput[]
    recordId?: StringFilter<"RecordItems"> | string
    itemId?: IntFilter<"RecordItems"> | number
    amount?: IntFilter<"RecordItems"> | number
    record?: XOR<RecordScalarRelationFilter, RecordWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "recordId_itemId">

  export type RecordItemsOrderByWithAggregationInput = {
    recordId?: SortOrder
    itemId?: SortOrder
    amount?: SortOrder
    _count?: RecordItemsCountOrderByAggregateInput
    _avg?: RecordItemsAvgOrderByAggregateInput
    _max?: RecordItemsMaxOrderByAggregateInput
    _min?: RecordItemsMinOrderByAggregateInput
    _sum?: RecordItemsSumOrderByAggregateInput
  }

  export type RecordItemsScalarWhereWithAggregatesInput = {
    AND?: RecordItemsScalarWhereWithAggregatesInput | RecordItemsScalarWhereWithAggregatesInput[]
    OR?: RecordItemsScalarWhereWithAggregatesInput[]
    NOT?: RecordItemsScalarWhereWithAggregatesInput | RecordItemsScalarWhereWithAggregatesInput[]
    recordId?: StringWithAggregatesFilter<"RecordItems"> | string
    itemId?: IntWithAggregatesFilter<"RecordItems"> | number
    amount?: IntWithAggregatesFilter<"RecordItems"> | number
  }

  export type RevokedTokenWhereInput = {
    AND?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    OR?: RevokedTokenWhereInput[]
    NOT?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    jti?: StringFilter<"RevokedToken"> | string
    expiresAt?: DateTimeFilter<"RevokedToken"> | Date | string
  }

  export type RevokedTokenOrderByWithRelationInput = {
    jti?: SortOrder
    expiresAt?: SortOrder
  }

  export type RevokedTokenWhereUniqueInput = Prisma.AtLeast<{
    jti?: string
    AND?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    OR?: RevokedTokenWhereInput[]
    NOT?: RevokedTokenWhereInput | RevokedTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RevokedToken"> | Date | string
  }, "jti">

  export type RevokedTokenOrderByWithAggregationInput = {
    jti?: SortOrder
    expiresAt?: SortOrder
    _count?: RevokedTokenCountOrderByAggregateInput
    _max?: RevokedTokenMaxOrderByAggregateInput
    _min?: RevokedTokenMinOrderByAggregateInput
  }

  export type RevokedTokenScalarWhereWithAggregatesInput = {
    AND?: RevokedTokenScalarWhereWithAggregatesInput | RevokedTokenScalarWhereWithAggregatesInput[]
    OR?: RevokedTokenScalarWhereWithAggregatesInput[]
    NOT?: RevokedTokenScalarWhereWithAggregatesInput | RevokedTokenScalarWhereWithAggregatesInput[]
    jti?: StringWithAggregatesFilter<"RevokedToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RevokedToken"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: RoleCreateNestedOneWithoutUsersInput
    records?: RecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    roleId: number
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    records?: RecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecCreateInput = {
    name: string
    products?: ProductBaseSpecsCreateNestedManyWithoutSpecInput
    items?: ItemSpecsCreateNestedManyWithoutSpecInput
  }

  export type SpecUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductBaseSpecsUncheckedCreateNestedManyWithoutSpecInput
    items?: ItemSpecsUncheckedCreateNestedManyWithoutSpecInput
  }

  export type SpecUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductBaseSpecsUpdateManyWithoutSpecNestedInput
    items?: ItemSpecsUpdateManyWithoutSpecNestedInput
  }

  export type SpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductBaseSpecsUncheckedUpdateManyWithoutSpecNestedInput
    items?: ItemSpecsUncheckedUpdateManyWithoutSpecNestedInput
  }

  export type SpecCreateManyInput = {
    id?: number
    name: string
  }

  export type SpecUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id: string
    products?: ProductCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id: string
    products?: ProductUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    tags?: TagCreateNestedManyWithoutProductsInput
    baseSpecs?: ProductBaseSpecsCreateNestedManyWithoutProductInput
    items?: ItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProductsInput
    baseSpecs?: ProductBaseSpecsUncheckedCreateNestedManyWithoutProductInput
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProductsNestedInput
    baseSpecs?: ProductBaseSpecsUpdateManyWithoutProductNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProductsNestedInput
    baseSpecs?: ProductBaseSpecsUncheckedUpdateManyWithoutProductNestedInput
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    price: number
    stock?: number
    product: ProductCreateNestedOneWithoutItemsInput
    specs?: ItemSpecsCreateNestedManyWithoutItemInput
    records?: RecordItemsCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    price: number
    stock?: number
    productId: string
    specs?: ItemSpecsUncheckedCreateNestedManyWithoutItemInput
    records?: RecordItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
    specs?: ItemSpecsUpdateManyWithoutItemNestedInput
    records?: RecordItemsUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    specs?: ItemSpecsUncheckedUpdateManyWithoutItemNestedInput
    records?: RecordItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    price: number
    stock?: number
    productId: string
  }

  export type ItemUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsCreateInput = {
    value: string
    product: ProductCreateNestedOneWithoutBaseSpecsInput
    spec: SpecCreateNestedOneWithoutProductsInput
  }

  export type ProductBaseSpecsUncheckedCreateInput = {
    productId: string
    specId: number
    value: string
  }

  export type ProductBaseSpecsUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutBaseSpecsNestedInput
    spec?: SpecUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductBaseSpecsUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsCreateManyInput = {
    productId: string
    specId: number
    value: string
  }

  export type ProductBaseSpecsUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSpecsCreateInput = {
    value: string
    Item: ItemCreateNestedOneWithoutSpecsInput
    spec: SpecCreateNestedOneWithoutItemsInput
  }

  export type ItemSpecsUncheckedCreateInput = {
    itemId: number
    specId: number
    value: string
  }

  export type ItemSpecsUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    Item?: ItemUpdateOneRequiredWithoutSpecsNestedInput
    spec?: SpecUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemSpecsUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSpecsCreateManyInput = {
    itemId: number
    specId: number
    value: string
  }

  export type ItemSpecsUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSpecsUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateInput = {
    id: string
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
    user: UserCreateNestedOneWithoutRecordsInput
    items?: RecordItemsCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateInput = {
    id: string
    userId: number
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
    items?: RecordItemsUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
    items?: RecordItemsUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    items?: RecordItemsUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordCreateManyInput = {
    id: string
    userId: number
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
  }

  export type RecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
  }

  export type RecordItemsCreateInput = {
    amount: number
    record: RecordCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutRecordsInput
  }

  export type RecordItemsUncheckedCreateInput = {
    recordId: string
    itemId: number
    amount: number
  }

  export type RecordItemsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    record?: RecordUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordItemsUncheckedUpdateInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type RecordItemsCreateManyInput = {
    recordId: string
    itemId: number
    amount: number
  }

  export type RecordItemsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type RecordItemsUncheckedUpdateManyInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type RevokedTokenCreateInput = {
    jti: string
    expiresAt: Date | string
  }

  export type RevokedTokenUncheckedCreateInput = {
    jti: string
    expiresAt: Date | string
  }

  export type RevokedTokenUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenUncheckedUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenCreateManyInput = {
    jti: string
    expiresAt: Date | string
  }

  export type RevokedTokenUpdateManyMutationInput = {
    jti?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevokedTokenUncheckedUpdateManyInput = {
    jti?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type ProductBaseSpecsListRelationFilter = {
    every?: ProductBaseSpecsWhereInput
    some?: ProductBaseSpecsWhereInput
    none?: ProductBaseSpecsWhereInput
  }

  export type ItemSpecsListRelationFilter = {
    every?: ItemSpecsWhereInput
    some?: ItemSpecsWhereInput
    none?: ItemSpecsWhereInput
  }

  export type ProductBaseSpecsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemSpecsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    os?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type RecordItemsListRelationFilter = {
    every?: RecordItemsWhereInput
    some?: RecordItemsWhereInput
    none?: RecordItemsWhereInput
  }

  export type RecordItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type SpecScalarRelationFilter = {
    is?: SpecWhereInput
    isNot?: SpecWhereInput
  }

  export type ProductBaseSpecsProductIdSpecIdCompoundUniqueInput = {
    productId: string
    specId: number
  }

  export type ProductBaseSpecsCountOrderByAggregateInput = {
    productId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
  }

  export type ProductBaseSpecsAvgOrderByAggregateInput = {
    specId?: SortOrder
  }

  export type ProductBaseSpecsMaxOrderByAggregateInput = {
    productId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
  }

  export type ProductBaseSpecsMinOrderByAggregateInput = {
    productId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
  }

  export type ProductBaseSpecsSumOrderByAggregateInput = {
    specId?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemSpecsItemIdSpecIdCompoundUniqueInput = {
    itemId: number
    specId: number
  }

  export type ItemSpecsCountOrderByAggregateInput = {
    itemId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
  }

  export type ItemSpecsAvgOrderByAggregateInput = {
    itemId?: SortOrder
    specId?: SortOrder
  }

  export type ItemSpecsMaxOrderByAggregateInput = {
    itemId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
  }

  export type ItemSpecsMinOrderByAggregateInput = {
    itemId?: SortOrder
    specId?: SortOrder
    value?: SortOrder
  }

  export type ItemSpecsSumOrderByAggregateInput = {
    itemId?: SortOrder
    specId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    vnpayParams?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    recipientName?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    userId?: SortOrder
    totalAmount?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    recipientName?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    recipientName?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    userId?: SortOrder
    totalAmount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type RecordScalarRelationFilter = {
    is?: RecordWhereInput
    isNot?: RecordWhereInput
  }

  export type RecordItemsRecordIdItemIdCompoundUniqueInput = {
    recordId: string
    itemId: number
  }

  export type RecordItemsCountOrderByAggregateInput = {
    recordId?: SortOrder
    itemId?: SortOrder
    amount?: SortOrder
  }

  export type RecordItemsAvgOrderByAggregateInput = {
    itemId?: SortOrder
    amount?: SortOrder
  }

  export type RecordItemsMaxOrderByAggregateInput = {
    recordId?: SortOrder
    itemId?: SortOrder
    amount?: SortOrder
  }

  export type RecordItemsMinOrderByAggregateInput = {
    recordId?: SortOrder
    itemId?: SortOrder
    amount?: SortOrder
  }

  export type RecordItemsSumOrderByAggregateInput = {
    itemId?: SortOrder
    amount?: SortOrder
  }

  export type RevokedTokenCountOrderByAggregateInput = {
    jti?: SortOrder
    expiresAt?: SortOrder
  }

  export type RevokedTokenMaxOrderByAggregateInput = {
    jti?: SortOrder
    expiresAt?: SortOrder
  }

  export type RevokedTokenMinOrderByAggregateInput = {
    jti?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type RecordCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutUserInput | RecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutUserInput | RecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutUserInput | RecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutUserInput | RecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutUserInput | RecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutUserInput | RecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type ProductBaseSpecsCreateNestedManyWithoutSpecInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutSpecInput, ProductBaseSpecsUncheckedCreateWithoutSpecInput> | ProductBaseSpecsCreateWithoutSpecInput[] | ProductBaseSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutSpecInput | ProductBaseSpecsCreateOrConnectWithoutSpecInput[]
    createMany?: ProductBaseSpecsCreateManySpecInputEnvelope
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
  }

  export type ItemSpecsCreateNestedManyWithoutSpecInput = {
    create?: XOR<ItemSpecsCreateWithoutSpecInput, ItemSpecsUncheckedCreateWithoutSpecInput> | ItemSpecsCreateWithoutSpecInput[] | ItemSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutSpecInput | ItemSpecsCreateOrConnectWithoutSpecInput[]
    createMany?: ItemSpecsCreateManySpecInputEnvelope
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
  }

  export type ProductBaseSpecsUncheckedCreateNestedManyWithoutSpecInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutSpecInput, ProductBaseSpecsUncheckedCreateWithoutSpecInput> | ProductBaseSpecsCreateWithoutSpecInput[] | ProductBaseSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutSpecInput | ProductBaseSpecsCreateOrConnectWithoutSpecInput[]
    createMany?: ProductBaseSpecsCreateManySpecInputEnvelope
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
  }

  export type ItemSpecsUncheckedCreateNestedManyWithoutSpecInput = {
    create?: XOR<ItemSpecsCreateWithoutSpecInput, ItemSpecsUncheckedCreateWithoutSpecInput> | ItemSpecsCreateWithoutSpecInput[] | ItemSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutSpecInput | ItemSpecsCreateOrConnectWithoutSpecInput[]
    createMany?: ItemSpecsCreateManySpecInputEnvelope
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
  }

  export type ProductBaseSpecsUpdateManyWithoutSpecNestedInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutSpecInput, ProductBaseSpecsUncheckedCreateWithoutSpecInput> | ProductBaseSpecsCreateWithoutSpecInput[] | ProductBaseSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutSpecInput | ProductBaseSpecsCreateOrConnectWithoutSpecInput[]
    upsert?: ProductBaseSpecsUpsertWithWhereUniqueWithoutSpecInput | ProductBaseSpecsUpsertWithWhereUniqueWithoutSpecInput[]
    createMany?: ProductBaseSpecsCreateManySpecInputEnvelope
    set?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    disconnect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    delete?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    update?: ProductBaseSpecsUpdateWithWhereUniqueWithoutSpecInput | ProductBaseSpecsUpdateWithWhereUniqueWithoutSpecInput[]
    updateMany?: ProductBaseSpecsUpdateManyWithWhereWithoutSpecInput | ProductBaseSpecsUpdateManyWithWhereWithoutSpecInput[]
    deleteMany?: ProductBaseSpecsScalarWhereInput | ProductBaseSpecsScalarWhereInput[]
  }

  export type ItemSpecsUpdateManyWithoutSpecNestedInput = {
    create?: XOR<ItemSpecsCreateWithoutSpecInput, ItemSpecsUncheckedCreateWithoutSpecInput> | ItemSpecsCreateWithoutSpecInput[] | ItemSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutSpecInput | ItemSpecsCreateOrConnectWithoutSpecInput[]
    upsert?: ItemSpecsUpsertWithWhereUniqueWithoutSpecInput | ItemSpecsUpsertWithWhereUniqueWithoutSpecInput[]
    createMany?: ItemSpecsCreateManySpecInputEnvelope
    set?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    disconnect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    delete?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    update?: ItemSpecsUpdateWithWhereUniqueWithoutSpecInput | ItemSpecsUpdateWithWhereUniqueWithoutSpecInput[]
    updateMany?: ItemSpecsUpdateManyWithWhereWithoutSpecInput | ItemSpecsUpdateManyWithWhereWithoutSpecInput[]
    deleteMany?: ItemSpecsScalarWhereInput | ItemSpecsScalarWhereInput[]
  }

  export type ProductBaseSpecsUncheckedUpdateManyWithoutSpecNestedInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutSpecInput, ProductBaseSpecsUncheckedCreateWithoutSpecInput> | ProductBaseSpecsCreateWithoutSpecInput[] | ProductBaseSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutSpecInput | ProductBaseSpecsCreateOrConnectWithoutSpecInput[]
    upsert?: ProductBaseSpecsUpsertWithWhereUniqueWithoutSpecInput | ProductBaseSpecsUpsertWithWhereUniqueWithoutSpecInput[]
    createMany?: ProductBaseSpecsCreateManySpecInputEnvelope
    set?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    disconnect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    delete?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    update?: ProductBaseSpecsUpdateWithWhereUniqueWithoutSpecInput | ProductBaseSpecsUpdateWithWhereUniqueWithoutSpecInput[]
    updateMany?: ProductBaseSpecsUpdateManyWithWhereWithoutSpecInput | ProductBaseSpecsUpdateManyWithWhereWithoutSpecInput[]
    deleteMany?: ProductBaseSpecsScalarWhereInput | ProductBaseSpecsScalarWhereInput[]
  }

  export type ItemSpecsUncheckedUpdateManyWithoutSpecNestedInput = {
    create?: XOR<ItemSpecsCreateWithoutSpecInput, ItemSpecsUncheckedCreateWithoutSpecInput> | ItemSpecsCreateWithoutSpecInput[] | ItemSpecsUncheckedCreateWithoutSpecInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutSpecInput | ItemSpecsCreateOrConnectWithoutSpecInput[]
    upsert?: ItemSpecsUpsertWithWhereUniqueWithoutSpecInput | ItemSpecsUpsertWithWhereUniqueWithoutSpecInput[]
    createMany?: ItemSpecsCreateManySpecInputEnvelope
    set?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    disconnect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    delete?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    update?: ItemSpecsUpdateWithWhereUniqueWithoutSpecInput | ItemSpecsUpdateWithWhereUniqueWithoutSpecInput[]
    updateMany?: ItemSpecsUpdateManyWithWhereWithoutSpecInput | ItemSpecsUpdateManyWithWhereWithoutSpecInput[]
    deleteMany?: ItemSpecsScalarWhereInput | ItemSpecsScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTagsInput | ProductUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTagsInput | ProductUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTagsInput | ProductUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTagsInput | ProductUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTagsInput | ProductUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTagsInput | ProductUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutProductsInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ProductBaseSpecsCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutProductInput, ProductBaseSpecsUncheckedCreateWithoutProductInput> | ProductBaseSpecsCreateWithoutProductInput[] | ProductBaseSpecsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutProductInput | ProductBaseSpecsCreateOrConnectWithoutProductInput[]
    createMany?: ProductBaseSpecsCreateManyProductInputEnvelope
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ProductBaseSpecsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutProductInput, ProductBaseSpecsUncheckedCreateWithoutProductInput> | ProductBaseSpecsCreateWithoutProductInput[] | ProductBaseSpecsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutProductInput | ProductBaseSpecsCreateOrConnectWithoutProductInput[]
    createMany?: ProductBaseSpecsCreateManyProductInputEnvelope
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TagUpdateManyWithoutProductsNestedInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProductsInput | TagUpsertWithWhereUniqueWithoutProductsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProductsInput | TagUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProductsInput | TagUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ProductBaseSpecsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutProductInput, ProductBaseSpecsUncheckedCreateWithoutProductInput> | ProductBaseSpecsCreateWithoutProductInput[] | ProductBaseSpecsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutProductInput | ProductBaseSpecsCreateOrConnectWithoutProductInput[]
    upsert?: ProductBaseSpecsUpsertWithWhereUniqueWithoutProductInput | ProductBaseSpecsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBaseSpecsCreateManyProductInputEnvelope
    set?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    disconnect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    delete?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    update?: ProductBaseSpecsUpdateWithWhereUniqueWithoutProductInput | ProductBaseSpecsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBaseSpecsUpdateManyWithWhereWithoutProductInput | ProductBaseSpecsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBaseSpecsScalarWhereInput | ProductBaseSpecsScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProductInput | ItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProductInput | ItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProductInput | ItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProductsInput | TagUpsertWithWhereUniqueWithoutProductsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProductsInput | TagUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProductsInput | TagUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ProductBaseSpecsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBaseSpecsCreateWithoutProductInput, ProductBaseSpecsUncheckedCreateWithoutProductInput> | ProductBaseSpecsCreateWithoutProductInput[] | ProductBaseSpecsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBaseSpecsCreateOrConnectWithoutProductInput | ProductBaseSpecsCreateOrConnectWithoutProductInput[]
    upsert?: ProductBaseSpecsUpsertWithWhereUniqueWithoutProductInput | ProductBaseSpecsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBaseSpecsCreateManyProductInputEnvelope
    set?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    disconnect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    delete?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    connect?: ProductBaseSpecsWhereUniqueInput | ProductBaseSpecsWhereUniqueInput[]
    update?: ProductBaseSpecsUpdateWithWhereUniqueWithoutProductInput | ProductBaseSpecsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBaseSpecsUpdateManyWithWhereWithoutProductInput | ProductBaseSpecsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBaseSpecsScalarWhereInput | ProductBaseSpecsScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput> | ItemCreateWithoutProductInput[] | ItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProductInput | ItemCreateOrConnectWithoutProductInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProductInput | ItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ItemCreateManyProductInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProductInput | ItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProductInput | ItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ItemSpecsCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemSpecsCreateWithoutItemInput, ItemSpecsUncheckedCreateWithoutItemInput> | ItemSpecsCreateWithoutItemInput[] | ItemSpecsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutItemInput | ItemSpecsCreateOrConnectWithoutItemInput[]
    createMany?: ItemSpecsCreateManyItemInputEnvelope
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
  }

  export type RecordItemsCreateNestedManyWithoutItemInput = {
    create?: XOR<RecordItemsCreateWithoutItemInput, RecordItemsUncheckedCreateWithoutItemInput> | RecordItemsCreateWithoutItemInput[] | RecordItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutItemInput | RecordItemsCreateOrConnectWithoutItemInput[]
    createMany?: RecordItemsCreateManyItemInputEnvelope
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
  }

  export type ItemSpecsUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemSpecsCreateWithoutItemInput, ItemSpecsUncheckedCreateWithoutItemInput> | ItemSpecsCreateWithoutItemInput[] | ItemSpecsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutItemInput | ItemSpecsCreateOrConnectWithoutItemInput[]
    createMany?: ItemSpecsCreateManyItemInputEnvelope
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
  }

  export type RecordItemsUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<RecordItemsCreateWithoutItemInput, RecordItemsUncheckedCreateWithoutItemInput> | RecordItemsCreateWithoutItemInput[] | RecordItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutItemInput | RecordItemsCreateOrConnectWithoutItemInput[]
    createMany?: RecordItemsCreateManyItemInputEnvelope
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItemsInput
    upsert?: ProductUpsertWithoutItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutItemsInput, ProductUpdateWithoutItemsInput>, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type ItemSpecsUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemSpecsCreateWithoutItemInput, ItemSpecsUncheckedCreateWithoutItemInput> | ItemSpecsCreateWithoutItemInput[] | ItemSpecsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutItemInput | ItemSpecsCreateOrConnectWithoutItemInput[]
    upsert?: ItemSpecsUpsertWithWhereUniqueWithoutItemInput | ItemSpecsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemSpecsCreateManyItemInputEnvelope
    set?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    disconnect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    delete?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    update?: ItemSpecsUpdateWithWhereUniqueWithoutItemInput | ItemSpecsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemSpecsUpdateManyWithWhereWithoutItemInput | ItemSpecsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemSpecsScalarWhereInput | ItemSpecsScalarWhereInput[]
  }

  export type RecordItemsUpdateManyWithoutItemNestedInput = {
    create?: XOR<RecordItemsCreateWithoutItemInput, RecordItemsUncheckedCreateWithoutItemInput> | RecordItemsCreateWithoutItemInput[] | RecordItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutItemInput | RecordItemsCreateOrConnectWithoutItemInput[]
    upsert?: RecordItemsUpsertWithWhereUniqueWithoutItemInput | RecordItemsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RecordItemsCreateManyItemInputEnvelope
    set?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    disconnect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    delete?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    update?: RecordItemsUpdateWithWhereUniqueWithoutItemInput | RecordItemsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RecordItemsUpdateManyWithWhereWithoutItemInput | RecordItemsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RecordItemsScalarWhereInput | RecordItemsScalarWhereInput[]
  }

  export type ItemSpecsUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemSpecsCreateWithoutItemInput, ItemSpecsUncheckedCreateWithoutItemInput> | ItemSpecsCreateWithoutItemInput[] | ItemSpecsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemSpecsCreateOrConnectWithoutItemInput | ItemSpecsCreateOrConnectWithoutItemInput[]
    upsert?: ItemSpecsUpsertWithWhereUniqueWithoutItemInput | ItemSpecsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemSpecsCreateManyItemInputEnvelope
    set?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    disconnect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    delete?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    connect?: ItemSpecsWhereUniqueInput | ItemSpecsWhereUniqueInput[]
    update?: ItemSpecsUpdateWithWhereUniqueWithoutItemInput | ItemSpecsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemSpecsUpdateManyWithWhereWithoutItemInput | ItemSpecsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemSpecsScalarWhereInput | ItemSpecsScalarWhereInput[]
  }

  export type RecordItemsUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<RecordItemsCreateWithoutItemInput, RecordItemsUncheckedCreateWithoutItemInput> | RecordItemsCreateWithoutItemInput[] | RecordItemsUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutItemInput | RecordItemsCreateOrConnectWithoutItemInput[]
    upsert?: RecordItemsUpsertWithWhereUniqueWithoutItemInput | RecordItemsUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RecordItemsCreateManyItemInputEnvelope
    set?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    disconnect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    delete?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    update?: RecordItemsUpdateWithWhereUniqueWithoutItemInput | RecordItemsUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RecordItemsUpdateManyWithWhereWithoutItemInput | RecordItemsUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RecordItemsScalarWhereInput | RecordItemsScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBaseSpecsInput = {
    create?: XOR<ProductCreateWithoutBaseSpecsInput, ProductUncheckedCreateWithoutBaseSpecsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBaseSpecsInput
    connect?: ProductWhereUniqueInput
  }

  export type SpecCreateNestedOneWithoutProductsInput = {
    create?: XOR<SpecCreateWithoutProductsInput, SpecUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SpecCreateOrConnectWithoutProductsInput
    connect?: SpecWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutBaseSpecsNestedInput = {
    create?: XOR<ProductCreateWithoutBaseSpecsInput, ProductUncheckedCreateWithoutBaseSpecsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBaseSpecsInput
    upsert?: ProductUpsertWithoutBaseSpecsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBaseSpecsInput, ProductUpdateWithoutBaseSpecsInput>, ProductUncheckedUpdateWithoutBaseSpecsInput>
  }

  export type SpecUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SpecCreateWithoutProductsInput, SpecUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SpecCreateOrConnectWithoutProductsInput
    upsert?: SpecUpsertWithoutProductsInput
    connect?: SpecWhereUniqueInput
    update?: XOR<XOR<SpecUpdateToOneWithWhereWithoutProductsInput, SpecUpdateWithoutProductsInput>, SpecUncheckedUpdateWithoutProductsInput>
  }

  export type ItemCreateNestedOneWithoutSpecsInput = {
    create?: XOR<ItemCreateWithoutSpecsInput, ItemUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutSpecsInput
    connect?: ItemWhereUniqueInput
  }

  export type SpecCreateNestedOneWithoutItemsInput = {
    create?: XOR<SpecCreateWithoutItemsInput, SpecUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SpecCreateOrConnectWithoutItemsInput
    connect?: SpecWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutSpecsNestedInput = {
    create?: XOR<ItemCreateWithoutSpecsInput, ItemUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutSpecsInput
    upsert?: ItemUpsertWithoutSpecsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutSpecsInput, ItemUpdateWithoutSpecsInput>, ItemUncheckedUpdateWithoutSpecsInput>
  }

  export type SpecUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SpecCreateWithoutItemsInput, SpecUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SpecCreateOrConnectWithoutItemsInput
    upsert?: SpecUpsertWithoutItemsInput
    connect?: SpecWhereUniqueInput
    update?: XOR<XOR<SpecUpdateToOneWithWhereWithoutItemsInput, SpecUpdateWithoutItemsInput>, SpecUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type RecordItemsCreateNestedManyWithoutRecordInput = {
    create?: XOR<RecordItemsCreateWithoutRecordInput, RecordItemsUncheckedCreateWithoutRecordInput> | RecordItemsCreateWithoutRecordInput[] | RecordItemsUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutRecordInput | RecordItemsCreateOrConnectWithoutRecordInput[]
    createMany?: RecordItemsCreateManyRecordInputEnvelope
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
  }

  export type RecordItemsUncheckedCreateNestedManyWithoutRecordInput = {
    create?: XOR<RecordItemsCreateWithoutRecordInput, RecordItemsUncheckedCreateWithoutRecordInput> | RecordItemsCreateWithoutRecordInput[] | RecordItemsUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutRecordInput | RecordItemsCreateOrConnectWithoutRecordInput[]
    createMany?: RecordItemsCreateManyRecordInputEnvelope
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type RecordItemsUpdateManyWithoutRecordNestedInput = {
    create?: XOR<RecordItemsCreateWithoutRecordInput, RecordItemsUncheckedCreateWithoutRecordInput> | RecordItemsCreateWithoutRecordInput[] | RecordItemsUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutRecordInput | RecordItemsCreateOrConnectWithoutRecordInput[]
    upsert?: RecordItemsUpsertWithWhereUniqueWithoutRecordInput | RecordItemsUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: RecordItemsCreateManyRecordInputEnvelope
    set?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    disconnect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    delete?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    update?: RecordItemsUpdateWithWhereUniqueWithoutRecordInput | RecordItemsUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: RecordItemsUpdateManyWithWhereWithoutRecordInput | RecordItemsUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: RecordItemsScalarWhereInput | RecordItemsScalarWhereInput[]
  }

  export type RecordItemsUncheckedUpdateManyWithoutRecordNestedInput = {
    create?: XOR<RecordItemsCreateWithoutRecordInput, RecordItemsUncheckedCreateWithoutRecordInput> | RecordItemsCreateWithoutRecordInput[] | RecordItemsUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: RecordItemsCreateOrConnectWithoutRecordInput | RecordItemsCreateOrConnectWithoutRecordInput[]
    upsert?: RecordItemsUpsertWithWhereUniqueWithoutRecordInput | RecordItemsUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: RecordItemsCreateManyRecordInputEnvelope
    set?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    disconnect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    delete?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    connect?: RecordItemsWhereUniqueInput | RecordItemsWhereUniqueInput[]
    update?: RecordItemsUpdateWithWhereUniqueWithoutRecordInput | RecordItemsUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: RecordItemsUpdateManyWithWhereWithoutRecordInput | RecordItemsUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: RecordItemsScalarWhereInput | RecordItemsScalarWhereInput[]
  }

  export type RecordCreateNestedOneWithoutItemsInput = {
    create?: XOR<RecordCreateWithoutItemsInput, RecordUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RecordCreateOrConnectWithoutItemsInput
    connect?: RecordWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutRecordsInput = {
    create?: XOR<ItemCreateWithoutRecordsInput, ItemUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRecordsInput
    connect?: ItemWhereUniqueInput
  }

  export type RecordUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RecordCreateWithoutItemsInput, RecordUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RecordCreateOrConnectWithoutItemsInput
    upsert?: RecordUpsertWithoutItemsInput
    connect?: RecordWhereUniqueInput
    update?: XOR<XOR<RecordUpdateToOneWithWhereWithoutItemsInput, RecordUpdateWithoutItemsInput>, RecordUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<ItemCreateWithoutRecordsInput, ItemUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRecordsInput
    upsert?: ItemUpsertWithoutRecordsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutRecordsInput, ItemUpdateWithoutRecordsInput>, ItemUncheckedUpdateWithoutRecordsInput>
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    records?: RecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    records?: RecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RecordCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
    items?: RecordItemsCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
    items?: RecordItemsUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutUserInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput>
  }

  export type RecordCreateManyUserInputEnvelope = {
    data: RecordCreateManyUserInput | RecordCreateManyUserInput[]
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUpsertWithWhereUniqueWithoutUserInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutUserInput, RecordUncheckedUpdateWithoutUserInput>
    create: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutUserInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutUserInput, RecordUncheckedUpdateWithoutUserInput>
  }

  export type RecordUpdateManyWithWhereWithoutUserInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutUserInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: StringFilter<"Record"> | string
    userId?: IntFilter<"Record"> | number
    createdAt?: DateTimeFilter<"Record"> | Date | string
    vnpayParams?: JsonFilter<"Record">
    totalAmount?: BigIntFilter<"Record"> | bigint | number
    status?: StringFilter<"Record"> | string
    address?: StringFilter<"Record"> | string
    phoneNumber?: StringFilter<"Record"> | string
    recipientName?: StringFilter<"Record"> | string
  }

  export type ProductBaseSpecsCreateWithoutSpecInput = {
    value: string
    product: ProductCreateNestedOneWithoutBaseSpecsInput
  }

  export type ProductBaseSpecsUncheckedCreateWithoutSpecInput = {
    productId: string
    value: string
  }

  export type ProductBaseSpecsCreateOrConnectWithoutSpecInput = {
    where: ProductBaseSpecsWhereUniqueInput
    create: XOR<ProductBaseSpecsCreateWithoutSpecInput, ProductBaseSpecsUncheckedCreateWithoutSpecInput>
  }

  export type ProductBaseSpecsCreateManySpecInputEnvelope = {
    data: ProductBaseSpecsCreateManySpecInput | ProductBaseSpecsCreateManySpecInput[]
  }

  export type ItemSpecsCreateWithoutSpecInput = {
    value: string
    Item: ItemCreateNestedOneWithoutSpecsInput
  }

  export type ItemSpecsUncheckedCreateWithoutSpecInput = {
    itemId: number
    value: string
  }

  export type ItemSpecsCreateOrConnectWithoutSpecInput = {
    where: ItemSpecsWhereUniqueInput
    create: XOR<ItemSpecsCreateWithoutSpecInput, ItemSpecsUncheckedCreateWithoutSpecInput>
  }

  export type ItemSpecsCreateManySpecInputEnvelope = {
    data: ItemSpecsCreateManySpecInput | ItemSpecsCreateManySpecInput[]
  }

  export type ProductBaseSpecsUpsertWithWhereUniqueWithoutSpecInput = {
    where: ProductBaseSpecsWhereUniqueInput
    update: XOR<ProductBaseSpecsUpdateWithoutSpecInput, ProductBaseSpecsUncheckedUpdateWithoutSpecInput>
    create: XOR<ProductBaseSpecsCreateWithoutSpecInput, ProductBaseSpecsUncheckedCreateWithoutSpecInput>
  }

  export type ProductBaseSpecsUpdateWithWhereUniqueWithoutSpecInput = {
    where: ProductBaseSpecsWhereUniqueInput
    data: XOR<ProductBaseSpecsUpdateWithoutSpecInput, ProductBaseSpecsUncheckedUpdateWithoutSpecInput>
  }

  export type ProductBaseSpecsUpdateManyWithWhereWithoutSpecInput = {
    where: ProductBaseSpecsScalarWhereInput
    data: XOR<ProductBaseSpecsUpdateManyMutationInput, ProductBaseSpecsUncheckedUpdateManyWithoutSpecInput>
  }

  export type ProductBaseSpecsScalarWhereInput = {
    AND?: ProductBaseSpecsScalarWhereInput | ProductBaseSpecsScalarWhereInput[]
    OR?: ProductBaseSpecsScalarWhereInput[]
    NOT?: ProductBaseSpecsScalarWhereInput | ProductBaseSpecsScalarWhereInput[]
    productId?: StringFilter<"ProductBaseSpecs"> | string
    specId?: IntFilter<"ProductBaseSpecs"> | number
    value?: StringFilter<"ProductBaseSpecs"> | string
  }

  export type ItemSpecsUpsertWithWhereUniqueWithoutSpecInput = {
    where: ItemSpecsWhereUniqueInput
    update: XOR<ItemSpecsUpdateWithoutSpecInput, ItemSpecsUncheckedUpdateWithoutSpecInput>
    create: XOR<ItemSpecsCreateWithoutSpecInput, ItemSpecsUncheckedCreateWithoutSpecInput>
  }

  export type ItemSpecsUpdateWithWhereUniqueWithoutSpecInput = {
    where: ItemSpecsWhereUniqueInput
    data: XOR<ItemSpecsUpdateWithoutSpecInput, ItemSpecsUncheckedUpdateWithoutSpecInput>
  }

  export type ItemSpecsUpdateManyWithWhereWithoutSpecInput = {
    where: ItemSpecsScalarWhereInput
    data: XOR<ItemSpecsUpdateManyMutationInput, ItemSpecsUncheckedUpdateManyWithoutSpecInput>
  }

  export type ItemSpecsScalarWhereInput = {
    AND?: ItemSpecsScalarWhereInput | ItemSpecsScalarWhereInput[]
    OR?: ItemSpecsScalarWhereInput[]
    NOT?: ItemSpecsScalarWhereInput | ItemSpecsScalarWhereInput[]
    itemId?: IntFilter<"ItemSpecs"> | number
    specId?: IntFilter<"ItemSpecs"> | number
    value?: StringFilter<"ItemSpecs"> | string
  }

  export type ProductCreateWithoutTagsInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    baseSpecs?: ProductBaseSpecsCreateNestedManyWithoutProductInput
    items?: ItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTagsInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    baseSpecs?: ProductBaseSpecsUncheckedCreateNestedManyWithoutProductInput
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTagsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutTagsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTagsInput, ProductUncheckedUpdateWithoutTagsInput>
    create: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTagsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTagsInput, ProductUncheckedUpdateWithoutTagsInput>
  }

  export type ProductUpdateManyWithWhereWithoutTagsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTagsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    os?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type TagCreateWithoutProductsInput = {
    id: string
  }

  export type TagUncheckedCreateWithoutProductsInput = {
    id: string
  }

  export type TagCreateOrConnectWithoutProductsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput>
  }

  export type ProductBaseSpecsCreateWithoutProductInput = {
    value: string
    spec: SpecCreateNestedOneWithoutProductsInput
  }

  export type ProductBaseSpecsUncheckedCreateWithoutProductInput = {
    specId: number
    value: string
  }

  export type ProductBaseSpecsCreateOrConnectWithoutProductInput = {
    where: ProductBaseSpecsWhereUniqueInput
    create: XOR<ProductBaseSpecsCreateWithoutProductInput, ProductBaseSpecsUncheckedCreateWithoutProductInput>
  }

  export type ProductBaseSpecsCreateManyProductInputEnvelope = {
    data: ProductBaseSpecsCreateManyProductInput | ProductBaseSpecsCreateManyProductInput[]
  }

  export type ItemCreateWithoutProductInput = {
    price: number
    stock?: number
    specs?: ItemSpecsCreateNestedManyWithoutItemInput
    records?: RecordItemsCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutProductInput = {
    id?: number
    price: number
    stock?: number
    specs?: ItemSpecsUncheckedCreateNestedManyWithoutItemInput
    records?: RecordItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutProductInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput>
  }

  export type ItemCreateManyProductInputEnvelope = {
    data: ItemCreateManyProductInput | ItemCreateManyProductInput[]
  }

  export type TagUpsertWithWhereUniqueWithoutProductsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutProductsInput, TagUncheckedUpdateWithoutProductsInput>
    create: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutProductsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutProductsInput, TagUncheckedUpdateWithoutProductsInput>
  }

  export type TagUpdateManyWithWhereWithoutProductsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutProductsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
  }

  export type ProductBaseSpecsUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductBaseSpecsWhereUniqueInput
    update: XOR<ProductBaseSpecsUpdateWithoutProductInput, ProductBaseSpecsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductBaseSpecsCreateWithoutProductInput, ProductBaseSpecsUncheckedCreateWithoutProductInput>
  }

  export type ProductBaseSpecsUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductBaseSpecsWhereUniqueInput
    data: XOR<ProductBaseSpecsUpdateWithoutProductInput, ProductBaseSpecsUncheckedUpdateWithoutProductInput>
  }

  export type ProductBaseSpecsUpdateManyWithWhereWithoutProductInput = {
    where: ProductBaseSpecsScalarWhereInput
    data: XOR<ProductBaseSpecsUpdateManyMutationInput, ProductBaseSpecsUncheckedUpdateManyWithoutProductInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutProductInput, ItemUncheckedUpdateWithoutProductInput>
    create: XOR<ItemCreateWithoutProductInput, ItemUncheckedCreateWithoutProductInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutProductInput, ItemUncheckedUpdateWithoutProductInput>
  }

  export type ItemUpdateManyWithWhereWithoutProductInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    price?: IntFilter<"Item"> | number
    stock?: IntFilter<"Item"> | number
    productId?: StringFilter<"Item"> | string
  }

  export type ProductCreateWithoutItemsInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    tags?: TagCreateNestedManyWithoutProductsInput
    baseSpecs?: ProductBaseSpecsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutItemsInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProductsInput
    baseSpecs?: ProductBaseSpecsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
  }

  export type ItemSpecsCreateWithoutItemInput = {
    value: string
    spec: SpecCreateNestedOneWithoutItemsInput
  }

  export type ItemSpecsUncheckedCreateWithoutItemInput = {
    specId: number
    value: string
  }

  export type ItemSpecsCreateOrConnectWithoutItemInput = {
    where: ItemSpecsWhereUniqueInput
    create: XOR<ItemSpecsCreateWithoutItemInput, ItemSpecsUncheckedCreateWithoutItemInput>
  }

  export type ItemSpecsCreateManyItemInputEnvelope = {
    data: ItemSpecsCreateManyItemInput | ItemSpecsCreateManyItemInput[]
  }

  export type RecordItemsCreateWithoutItemInput = {
    amount: number
    record: RecordCreateNestedOneWithoutItemsInput
  }

  export type RecordItemsUncheckedCreateWithoutItemInput = {
    recordId: string
    amount: number
  }

  export type RecordItemsCreateOrConnectWithoutItemInput = {
    where: RecordItemsWhereUniqueInput
    create: XOR<RecordItemsCreateWithoutItemInput, RecordItemsUncheckedCreateWithoutItemInput>
  }

  export type RecordItemsCreateManyItemInputEnvelope = {
    data: RecordItemsCreateManyItemInput | RecordItemsCreateManyItemInput[]
  }

  export type ProductUpsertWithoutItemsInput = {
    update: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductCreateWithoutItemsInput, ProductUncheckedCreateWithoutItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutItemsInput, ProductUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProductsNestedInput
    baseSpecs?: ProductBaseSpecsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProductsNestedInput
    baseSpecs?: ProductBaseSpecsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ItemSpecsUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemSpecsWhereUniqueInput
    update: XOR<ItemSpecsUpdateWithoutItemInput, ItemSpecsUncheckedUpdateWithoutItemInput>
    create: XOR<ItemSpecsCreateWithoutItemInput, ItemSpecsUncheckedCreateWithoutItemInput>
  }

  export type ItemSpecsUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemSpecsWhereUniqueInput
    data: XOR<ItemSpecsUpdateWithoutItemInput, ItemSpecsUncheckedUpdateWithoutItemInput>
  }

  export type ItemSpecsUpdateManyWithWhereWithoutItemInput = {
    where: ItemSpecsScalarWhereInput
    data: XOR<ItemSpecsUpdateManyMutationInput, ItemSpecsUncheckedUpdateManyWithoutItemInput>
  }

  export type RecordItemsUpsertWithWhereUniqueWithoutItemInput = {
    where: RecordItemsWhereUniqueInput
    update: XOR<RecordItemsUpdateWithoutItemInput, RecordItemsUncheckedUpdateWithoutItemInput>
    create: XOR<RecordItemsCreateWithoutItemInput, RecordItemsUncheckedCreateWithoutItemInput>
  }

  export type RecordItemsUpdateWithWhereUniqueWithoutItemInput = {
    where: RecordItemsWhereUniqueInput
    data: XOR<RecordItemsUpdateWithoutItemInput, RecordItemsUncheckedUpdateWithoutItemInput>
  }

  export type RecordItemsUpdateManyWithWhereWithoutItemInput = {
    where: RecordItemsScalarWhereInput
    data: XOR<RecordItemsUpdateManyMutationInput, RecordItemsUncheckedUpdateManyWithoutItemInput>
  }

  export type RecordItemsScalarWhereInput = {
    AND?: RecordItemsScalarWhereInput | RecordItemsScalarWhereInput[]
    OR?: RecordItemsScalarWhereInput[]
    NOT?: RecordItemsScalarWhereInput | RecordItemsScalarWhereInput[]
    recordId?: StringFilter<"RecordItems"> | string
    itemId?: IntFilter<"RecordItems"> | number
    amount?: IntFilter<"RecordItems"> | number
  }

  export type ProductCreateWithoutBaseSpecsInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    tags?: TagCreateNestedManyWithoutProductsInput
    items?: ItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBaseSpecsInput = {
    id: string
    name: string
    brand: string
    os: string
    category: string
    description?: string | null
    createdAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProductsInput
    items?: ItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBaseSpecsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBaseSpecsInput, ProductUncheckedCreateWithoutBaseSpecsInput>
  }

  export type SpecCreateWithoutProductsInput = {
    name: string
    items?: ItemSpecsCreateNestedManyWithoutSpecInput
  }

  export type SpecUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    items?: ItemSpecsUncheckedCreateNestedManyWithoutSpecInput
  }

  export type SpecCreateOrConnectWithoutProductsInput = {
    where: SpecWhereUniqueInput
    create: XOR<SpecCreateWithoutProductsInput, SpecUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutBaseSpecsInput = {
    update: XOR<ProductUpdateWithoutBaseSpecsInput, ProductUncheckedUpdateWithoutBaseSpecsInput>
    create: XOR<ProductCreateWithoutBaseSpecsInput, ProductUncheckedCreateWithoutBaseSpecsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBaseSpecsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBaseSpecsInput, ProductUncheckedUpdateWithoutBaseSpecsInput>
  }

  export type ProductUpdateWithoutBaseSpecsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProductsNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBaseSpecsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProductsNestedInput
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SpecUpsertWithoutProductsInput = {
    update: XOR<SpecUpdateWithoutProductsInput, SpecUncheckedUpdateWithoutProductsInput>
    create: XOR<SpecCreateWithoutProductsInput, SpecUncheckedCreateWithoutProductsInput>
    where?: SpecWhereInput
  }

  export type SpecUpdateToOneWithWhereWithoutProductsInput = {
    where?: SpecWhereInput
    data: XOR<SpecUpdateWithoutProductsInput, SpecUncheckedUpdateWithoutProductsInput>
  }

  export type SpecUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    items?: ItemSpecsUpdateManyWithoutSpecNestedInput
  }

  export type SpecUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    items?: ItemSpecsUncheckedUpdateManyWithoutSpecNestedInput
  }

  export type ItemCreateWithoutSpecsInput = {
    price: number
    stock?: number
    product: ProductCreateNestedOneWithoutItemsInput
    records?: RecordItemsCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutSpecsInput = {
    id?: number
    price: number
    stock?: number
    productId: string
    records?: RecordItemsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutSpecsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutSpecsInput, ItemUncheckedCreateWithoutSpecsInput>
  }

  export type SpecCreateWithoutItemsInput = {
    name: string
    products?: ProductBaseSpecsCreateNestedManyWithoutSpecInput
  }

  export type SpecUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    products?: ProductBaseSpecsUncheckedCreateNestedManyWithoutSpecInput
  }

  export type SpecCreateOrConnectWithoutItemsInput = {
    where: SpecWhereUniqueInput
    create: XOR<SpecCreateWithoutItemsInput, SpecUncheckedCreateWithoutItemsInput>
  }

  export type ItemUpsertWithoutSpecsInput = {
    update: XOR<ItemUpdateWithoutSpecsInput, ItemUncheckedUpdateWithoutSpecsInput>
    create: XOR<ItemCreateWithoutSpecsInput, ItemUncheckedCreateWithoutSpecsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutSpecsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutSpecsInput, ItemUncheckedUpdateWithoutSpecsInput>
  }

  export type ItemUpdateWithoutSpecsInput = {
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
    records?: RecordItemsUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutSpecsInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    records?: RecordItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type SpecUpsertWithoutItemsInput = {
    update: XOR<SpecUpdateWithoutItemsInput, SpecUncheckedUpdateWithoutItemsInput>
    create: XOR<SpecCreateWithoutItemsInput, SpecUncheckedCreateWithoutItemsInput>
    where?: SpecWhereInput
  }

  export type SpecUpdateToOneWithWhereWithoutItemsInput = {
    where?: SpecWhereInput
    data: XOR<SpecUpdateWithoutItemsInput, SpecUncheckedUpdateWithoutItemsInput>
  }

  export type SpecUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductBaseSpecsUpdateManyWithoutSpecNestedInput
  }

  export type SpecUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductBaseSpecsUncheckedUpdateManyWithoutSpecNestedInput
  }

  export type UserCreateWithoutRecordsInput = {
    name: string
    email: string
    password: string
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: number
    name: string
    email: string
    password: string
    roleId: number
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type RecordItemsCreateWithoutRecordInput = {
    amount: number
    item: ItemCreateNestedOneWithoutRecordsInput
  }

  export type RecordItemsUncheckedCreateWithoutRecordInput = {
    itemId: number
    amount: number
  }

  export type RecordItemsCreateOrConnectWithoutRecordInput = {
    where: RecordItemsWhereUniqueInput
    create: XOR<RecordItemsCreateWithoutRecordInput, RecordItemsUncheckedCreateWithoutRecordInput>
  }

  export type RecordItemsCreateManyRecordInputEnvelope = {
    data: RecordItemsCreateManyRecordInput | RecordItemsCreateManyRecordInput[]
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordItemsUpsertWithWhereUniqueWithoutRecordInput = {
    where: RecordItemsWhereUniqueInput
    update: XOR<RecordItemsUpdateWithoutRecordInput, RecordItemsUncheckedUpdateWithoutRecordInput>
    create: XOR<RecordItemsCreateWithoutRecordInput, RecordItemsUncheckedCreateWithoutRecordInput>
  }

  export type RecordItemsUpdateWithWhereUniqueWithoutRecordInput = {
    where: RecordItemsWhereUniqueInput
    data: XOR<RecordItemsUpdateWithoutRecordInput, RecordItemsUncheckedUpdateWithoutRecordInput>
  }

  export type RecordItemsUpdateManyWithWhereWithoutRecordInput = {
    where: RecordItemsScalarWhereInput
    data: XOR<RecordItemsUpdateManyMutationInput, RecordItemsUncheckedUpdateManyWithoutRecordInput>
  }

  export type RecordCreateWithoutItemsInput = {
    id: string
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
    user: UserCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateWithoutItemsInput = {
    id: string
    userId: number
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
  }

  export type RecordCreateOrConnectWithoutItemsInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutItemsInput, RecordUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutRecordsInput = {
    price: number
    stock?: number
    product: ProductCreateNestedOneWithoutItemsInput
    specs?: ItemSpecsCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutRecordsInput = {
    id?: number
    price: number
    stock?: number
    productId: string
    specs?: ItemSpecsUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutRecordsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutRecordsInput, ItemUncheckedCreateWithoutRecordsInput>
  }

  export type RecordUpsertWithoutItemsInput = {
    update: XOR<RecordUpdateWithoutItemsInput, RecordUncheckedUpdateWithoutItemsInput>
    create: XOR<RecordCreateWithoutItemsInput, RecordUncheckedCreateWithoutItemsInput>
    where?: RecordWhereInput
  }

  export type RecordUpdateToOneWithWhereWithoutItemsInput = {
    where?: RecordWhereInput
    data: XOR<RecordUpdateWithoutItemsInput, RecordUncheckedUpdateWithoutItemsInput>
  }

  export type RecordUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithoutRecordsInput = {
    update: XOR<ItemUpdateWithoutRecordsInput, ItemUncheckedUpdateWithoutRecordsInput>
    create: XOR<ItemCreateWithoutRecordsInput, ItemUncheckedCreateWithoutRecordsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutRecordsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutRecordsInput, ItemUncheckedUpdateWithoutRecordsInput>
  }

  export type ItemUpdateWithoutRecordsInput = {
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItemsNestedInput
    specs?: ItemSpecsUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    specs?: ItemSpecsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    records?: RecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateManyUserInput = {
    id: string
    createdAt?: Date | string
    vnpayParams: JsonNullValueInput | InputJsonValue
    totalAmount: bigint | number
    status?: string
    address?: string
    phoneNumber?: string
    recipientName?: string
  }

  export type RecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    items?: RecordItemsUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    items?: RecordItemsUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vnpayParams?: JsonNullValueInput | InputJsonValue
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsCreateManySpecInput = {
    productId: string
    value: string
  }

  export type ItemSpecsCreateManySpecInput = {
    itemId: number
    value: string
  }

  export type ProductBaseSpecsUpdateWithoutSpecInput = {
    value?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutBaseSpecsNestedInput
  }

  export type ProductBaseSpecsUncheckedUpdateWithoutSpecInput = {
    productId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsUncheckedUpdateManyWithoutSpecInput = {
    productId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSpecsUpdateWithoutSpecInput = {
    value?: StringFieldUpdateOperationsInput | string
    Item?: ItemUpdateOneRequiredWithoutSpecsNestedInput
  }

  export type ItemSpecsUncheckedUpdateWithoutSpecInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSpecsUncheckedUpdateManyWithoutSpecInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseSpecs?: ProductBaseSpecsUpdateManyWithoutProductNestedInput
    items?: ItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseSpecs?: ProductBaseSpecsUncheckedUpdateManyWithoutProductNestedInput
    items?: ItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBaseSpecsCreateManyProductInput = {
    specId: number
    value: string
  }

  export type ItemCreateManyProductInput = {
    id?: number
    price: number
    stock?: number
  }

  export type TagUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsUpdateWithoutProductInput = {
    value?: StringFieldUpdateOperationsInput | string
    spec?: SpecUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductBaseSpecsUncheckedUpdateWithoutProductInput = {
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ProductBaseSpecsUncheckedUpdateManyWithoutProductInput = {
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpdateWithoutProductInput = {
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    specs?: ItemSpecsUpdateManyWithoutItemNestedInput
    records?: RecordItemsUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    specs?: ItemSpecsUncheckedUpdateManyWithoutItemNestedInput
    records?: RecordItemsUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ItemSpecsCreateManyItemInput = {
    specId: number
    value: string
  }

  export type RecordItemsCreateManyItemInput = {
    recordId: string
    amount: number
  }

  export type ItemSpecsUpdateWithoutItemInput = {
    value?: StringFieldUpdateOperationsInput | string
    spec?: SpecUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemSpecsUncheckedUpdateWithoutItemInput = {
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSpecsUncheckedUpdateManyWithoutItemInput = {
    specId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type RecordItemsUpdateWithoutItemInput = {
    amount?: IntFieldUpdateOperationsInput | number
    record?: RecordUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RecordItemsUncheckedUpdateWithoutItemInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type RecordItemsUncheckedUpdateManyWithoutItemInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type RecordItemsCreateManyRecordInput = {
    itemId: number
    amount: number
  }

  export type RecordItemsUpdateWithoutRecordInput = {
    amount?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordItemsUncheckedUpdateWithoutRecordInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type RecordItemsUncheckedUpdateManyWithoutRecordInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
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