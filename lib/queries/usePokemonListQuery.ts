import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../requests/fetchPokemonList";

export const usePokemonListQuery = () =>
  useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: async ({ pageParam }) => {
      return fetchPokemonList(pageParam);
    },
    initialPageParam: "offset=0&limit=20",
    getPreviousPageParam: (firstPage) => {
      const param = new URL(firstPage.next).searchParams;
      return param.toString() ?? undefined;
    },
    getNextPageParam: (lastPage) => {
      const param = new URL(lastPage.next).searchParams;
      return param.toString() ?? undefined;
    },
  });
