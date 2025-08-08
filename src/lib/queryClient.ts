import {QueryClient} from "@tanstack/react-query";

/**
 * React Query 전역 클라이언트
 *
 * 필요한 경우 defaultOptions를 수정해서 retry, staleTime 등을 설정하세요.
 */

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0,
      // gcTime: 0,
      // retry: 0,
      // refetchOnWindowFocus: false,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
    },
  },
});
