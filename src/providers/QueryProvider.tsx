import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/lib/queryClient";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

/**
 * Provider 전역 컴포넌트
 * 파일명 규칙 : [Function]Provider.tsx
 */
export const QueryProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
