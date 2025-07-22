import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

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
  const [internalPage, setInternalPage] = useState<number>(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? Math.max(1, Number(pageParam)) : initialPage;
  });

  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  // Validate and correct page number
  const currentPage = Math.max(1, Math.min(internalPage, totalPages));

  // Sync with URL
  useEffect(() => {
    // Only update if different
    if (Number(searchParams.get("page")) !== currentPage) {
      setSearchParams(prev => {
        prev.set("page", currentPage.toString());
        return prev;
      }, { replace: true }); // Important: replace instead of push
    }
  }, [currentPage, searchParams, setSearchParams]);

  // Handle external URL changes
  useEffect(() => {
    const handleUrlChange = () => {
      const newPage = Number(searchParams.get("page"));
      if (!isNaN(newPage) && newPage !== currentPage) {
        setInternalPage(newPage);
      }
    };
    
    // Set up event listener for back/forward navigation
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [searchParams, currentPage]);

  const setPage = useCallback((page: number) => {
    const newPage = Math.max(1, Math.min(page, totalPages));
    if (newPage !== currentPage) {
      setInternalPage(newPage); // Update internal state first
      setSearchParams(prev => {
        prev.set("page", newPage.toString());
        return prev;
      }, { replace: true });
    }
  }, [currentPage, totalPages, setSearchParams]);

  return {
    currentPage,
    setPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};