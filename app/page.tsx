"use client";
import { ApiProvider } from "@/src/context/ApiContext";
import { GradeConverterContextProvider } from "@/src/context/GradeConverterContext";
import { Home as HomeScreen } from "@/src/infrastructure/screens/home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function App() {
  return (
    <ApiProvider>
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                gcTime: 1000 * 60 * 60 * 24,
              },
            },
          })
        }
      >
        <GradeConverterContextProvider>
          <HomeScreen />
        </GradeConverterContextProvider>
      </QueryClientProvider>
    </ApiProvider>
  );
}
