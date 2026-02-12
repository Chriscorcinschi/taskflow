import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { AuthProvider } from "./features/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
   <Provider>
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <RouterProvider router={router} />
         </AuthProvider>
      </QueryClientProvider>
   </Provider>,
);
