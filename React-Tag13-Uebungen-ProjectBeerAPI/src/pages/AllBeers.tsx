import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Beer } from "../types/Beer";

function AllBeers() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log("Die Komponente ist geladen!");
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Keine Netzwerkantwort");
        }
        return res.json();
      })
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error while loading:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {error && <p>{error}</p>}
      {loading && <p>Is loading...</p>}
      {!loading &&
        beers.map((beer) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.name}</p>
            <Link to={`/allbeers/${beer._id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default AllBeers;
