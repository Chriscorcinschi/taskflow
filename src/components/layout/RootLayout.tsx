import React from "react";
import { Link, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
