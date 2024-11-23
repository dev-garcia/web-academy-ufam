"use client";

import { AuthContext } from "@/app/auth/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import { useFavoritosContext } from "../FavoritosProvider/useFavoritosContext";

export default function Navbar() {
  const { favoritos } = useFavoritosContext();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext não foi inicializado");
  }

  const { email, logout } = auth;

  return (
    <nav className="navbar navbar-expand-md bg-light border-bottom border-body sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Loja WA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/favoritos">
                Lista de Favoritos ({favoritos.length})
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            {email ? (
              <>
                <span className="p-2">{email}</span>
                <button onClick={logout} className="btn btn-secondary">
                  Sair
                </button>
              </>
            ) : (
              <Link href="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
