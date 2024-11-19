"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="pt-BR">
        <body>
          <Navbar />
          {children}
          <BootstrapClient />
          <ToastContainer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
