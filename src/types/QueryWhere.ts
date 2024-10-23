type QueryWhereOperator = "==" | "!=" | ">" | ">=" | "<" | "<=";

interface QueryWhere {
  field: string;
  operator: QueryWhereOperator;
  value: string;
}

export type { QueryWhere };
