"use client"
import React, { ReactNode } from "react";

import { QueryClientProvider, QueryClient } from "react-query";

const QueryClientProviderFC = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProviderFC;
