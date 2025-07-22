import { usePreviewMode } from "../../hooks/usePreviewMode";
import Pagination from "../../components/pagination";
import Header from "./view/header";
import PagePreviewControllers from "./view/page-preview-controllers";
import PokemeonList from "./view/pokemeon-list";
import { usePagination } from "../../hooks/usePagination";
import usePokemons from "./usePokemons";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Skeleton from "../../components/skeleton";

const ITEMS_PER_PAGE = 20;

const Pokemons = () => {
  const { previewMode } = usePreviewMode();
  const [searchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;

  // Get pokemon data based on preview mode
  const { data, totalCount, isLoading, fetchNextPage, hasNextPage } =
    usePokemons(initialPage, ITEMS_PER_PAGE, previewMode);

  // Initialize pagination (only used in pagination mode)
  const { currentPage, setPage, totalPages } = usePagination({
    totalItems: totalCount,
    itemsPerPage: ITEMS_PER_PAGE,
    initialPage,
  });

  // Infinite scroll trigger
  const loadMoreRef = useInfiniteScroll(fetchNextPage, hasNextPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  return (
    <div className="container mx-auto p-2">
      <Header />
      <PagePreviewControllers />
      <PokemeonList isLoading={isLoading} pokemons={data ?? []} />

      {/* Infinite scroll marker (only visible in infinite mode) */}
      {previewMode === "infinite" && (
        <div
          ref={loadMoreRef}
          className="h-10 flex items-center justify-center"
        >
          {isLoading && data && data?.length > 0 && <Skeleton />}
        </div>
      )}

      {/* Pagination controls (only visible in pagination mode) */}
      {previewMode === "pagination" && (
        <Pagination
          page={currentPage}
          total_pages={totalPages}
          handlePageChange={setPage}
        />
      )}
    </div>
  );
};

export default Pokemons;
