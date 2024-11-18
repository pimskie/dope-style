import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from "react";

import { usePathname } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

interface Props {
  perPage?: number;
  itemsCount: number;
  currentPage: number;
}

const DopePagination = ({
  perPage = 5,
  itemsCount,
  currentPage = 1,
}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalPages = useMemo(
    () => Math.ceil(itemsCount / perPage),
    [itemsCount, perPage]
  );

  const getPageUrl = useMemo(() => {
    return (page: number) => {
      const urlSearchParams = new URLSearchParams(searchParams.toString());
      urlSearchParams.set("page", `${page}`);
      return `${pathname}?${urlSearchParams.toString()}#results`;
    };
  }, [pathname, searchParams]);

  const nextPage = useMemo(
    () => Math.min(currentPage + 1, totalPages),
    [currentPage, totalPages]
  );
  const previousPage = useMemo(
    () => Math.max(1, currentPage - 1),
    [currentPage]
  );

  const nextPagePath = useMemo(
    () => getPageUrl(nextPage),
    [nextPage, getPageUrl]
  );
  const previousPagePath = useMemo(
    () => getPageUrl(previousPage),
    [previousPage, getPageUrl]
  );

  const hasNextPage = nextPage < totalPages;
  const hasPreviousPage = previousPage > 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!hasPreviousPage}
            tabIndex={hasPreviousPage ? 0 : -1}
            href={previousPagePath}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            aria-disabled={!hasNextPage}
            tabIndex={hasNextPage ? 0 : -1}
            href={nextPagePath}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default DopePagination;
