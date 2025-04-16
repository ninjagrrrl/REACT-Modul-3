import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navigation from "./components/Navigation";
import SingleBlogEntry from "./pages/SingleBlogEntry";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/blog", Component: Blog },
      { path: "/blog/:id", Component: SingleBlogEntry },
    ],
  },
]);

function Layout() {
  return (
    <body>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </body>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
