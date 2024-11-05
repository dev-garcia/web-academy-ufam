import { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Loja WA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
