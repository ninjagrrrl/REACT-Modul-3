import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Deon from "./pages/Deon";
import Jeson from "./pages/Jeson";
import Krisha from "./pages/Krisha";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/categories", Component: Categories },
      { path: "/products", Component: Products },
      { path: "/products/krisha", Component: Krisha },
      { path: "/products/jeson", Component: Jeson },
      { path: "/products/deon", Component: Deon },
    ],
  },
]);

function Layout() {
  return (
    <main>
      <header>
        <Navigation />
      </header>

      <Outlet />
      <Footer />
    </main>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
