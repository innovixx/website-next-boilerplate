type GetKey<T> = T extends Record<string, unknown> ? keyof T : never;
type Singularize<T extends string> =
  T extends `${infer Prefix}ies` ? `${Prefix}y` :
  T extends `${infer Prefix}s` ? Prefix :
  T extends `${infer Prefix}es` ? Prefix :
  T;

export type ExtractLayoutType<T, LayoutType extends string> = Extract<
  // @ts-expect-error - This is a hack to get around the fact that the type system can't handle the complexity of the query
  NonNullable<Extract<Extract<NonNullable<Extract<T[GetKey<T>], { __typename?: GetKey<T> }>['docs']>[0], { __typename?: Singularize<GetKey<T>> }>['layout'], { __typename?: `${Singularize<GetKey<T>>}_Layout` }>['blocks']>[0],
  { __typename?: LayoutType }
>;
