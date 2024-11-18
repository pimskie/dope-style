import { useCallback } from "react";

// typescript generics
const usePaginatedResults = <T>(
  results: T[] | undefined,
  page: number = 1,
  perPage: number = 6
): (() => T[]) => {
  const callback = useCallback(() => {
    if (!results) {
      return [];
    }

    const startIndex = Math.max(page - 1);
    const endIndex = Math.min(startIndex + perPage, results.length);

    const subset = results.slice(startIndex, endIndex);

    return subset;
  }, [page, perPage, results]);

  return callback;
};

export { usePaginatedResults };
