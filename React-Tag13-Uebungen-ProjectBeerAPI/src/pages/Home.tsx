import { Link } from "react-router";

function Home() {
  return (
    <div>
      <Link to="/allbeers">All Beers</Link>
      <Link to="/allbeers/random">Random Beer</Link>
    </div>
  );
}

export default Home;
