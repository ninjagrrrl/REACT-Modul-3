import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Beer } from "../types/Beer";

function AllBeers() {
  //// State für Bierliste
  const [beers, setBeers] = useState<Beer[]>([]);
  // console.log(beers);
  //// State für Ladezustand
  const [loading, setLoading] = useState(true);
  //// State für mögliche Fehler beim Laden
  const [error, setError] = useState<string | null>(null);

  //// Läuft nur beim ersten Rendern, lädt die Daten von Bier-API
  useEffect(() => {
    setLoading(true);
    setError(null); //// vorherigen Fehler zurücksetzen, falls vorhanden
    console.log("Die Komponente ist geladen!");
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Keine Netzwerkantwort");
        }
        return res.json();
      })
      .then((data) => {
        setBeers(data); //// API-Daten im State speichern
      })
      .catch((error) => {
        setError(error.message); //// Fehlermeldung speichern
        console.error("Error while loading:", error);
      })
      .finally(() => {
        setLoading(false); //// Ladevorgang beendet
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {/* Fehlermeldung anzeigen, falls Fehler */}
      {error && <p>{error}</p>}
      {/* Ladevorgang anzeigen, solange geladen wird */}
      {loading && <p>Is loading...</p>}
      {/* Bierlist anzeigen, wenn fertig geladen */}
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
