"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./auth/AuthProvider";
import BootstrapClient from "./components/BootstrapClient";
import FavoritosProvider from "./components/FavoritosProvider/FavoritosProvider";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="pt-br">
        <body>
          <AuthProvider>
            <FavoritosProvider>
              <Navbar />
              {children}
              <BootstrapClient />
            </FavoritosProvider>
          </AuthProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
