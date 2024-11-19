"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar"; 
import ReactQueryProvider from "./components/ReactQueryClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="pt-BR">
        <body>
          <Navbar />
          {children}
          <ToastContainer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
