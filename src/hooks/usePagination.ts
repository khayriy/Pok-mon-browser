import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

interface PaginationOptions {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: PaginationOptions) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get page from URL or fallback
  const pageParam = Number(searchParams.get("page"));
  const rawPage = !isNaN(pageParam) ? pageParam : initialPage;

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const currentPage = Math.max(1, Math.min(rawPage, totalPages));

  const setPage = useCallback(
    (page: number) => {
      const newPage = Math.max(1, Math.min(page, totalPages));
      setSearchParams((prev) => {
        prev.set("page", newPage.toString());
        return prev;
      }, { replace: true });
    },
    [setSearchParams, totalPages]
  );

  return {
    currentPage,
    setPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};
