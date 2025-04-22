import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import SingleBeerPage from "./pages/SingleBeerPage";
import RandomBeerPage from "./components/RandomBeerPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/allbeers", Component: AllBeers },
      { path: "/allbeers/:id", Component: SingleBeerPage },
      { path: "/random/", Component: RandomBeerPage },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
