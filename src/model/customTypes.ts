export type SizedTuple<
  Type,
  Size extends number,
  Result extends Type[] = [],
> = Result["length"] extends Size
  ? Result
  : SizedTuple<Type, Size, [...Result, Type]>;
