import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/allbeers", Component: AllBeers },
      { path: "/allbeers/:id", Component: BeerDetails },
    ],
  },
]);

function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
