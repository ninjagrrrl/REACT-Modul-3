import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <main>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </header>
    </main>
  );
}

export default Navigation;
