import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes";
import { AuthProvider } from "../features/auth/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./provider";

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
