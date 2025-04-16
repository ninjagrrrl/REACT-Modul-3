import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to my simple Blog</h1>
      <NavLink to="/blog" className={styles.button}>
        Go to articles
      </NavLink>
    </div>
  );
}

export default Home;
