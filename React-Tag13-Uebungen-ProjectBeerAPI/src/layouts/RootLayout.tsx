import { Outlet } from "react-router";
import HomeLinkBar from "./HomeLinkBar";

export default function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <HomeLinkBar />
      </footer>
    </>
  );
}
