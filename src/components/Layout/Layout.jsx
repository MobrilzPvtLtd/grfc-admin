import { Outlet } from "react-router-dom";
import Header from "../Header/Navigation";

export function Layout() {
  const authToken = localStorage.getItem("AuthToken");

  return (
    <div>
      {authToken && authToken.length > 0 && (
        <header className="pb-16 w-full">
          <Header />
        </header>
      )}
      <main className="h-full min-h-screen min-w-screen">
        <Outlet />
      </main>
    </div>
  );
}
