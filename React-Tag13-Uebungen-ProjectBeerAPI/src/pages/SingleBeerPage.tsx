import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Beer } from "../types/Beer";

function SingleBeerPage() {
  const { id } = useParams();
  console.log(id);
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API-Antwort:", data);
        setBeer(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!beer) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First brewed:{beer.first_brewed}</p>
      <p>Attentuation level{beer.attentuation_level}:</p>
      <p>{beer.description}</p>
    </div>
  );
}

export default SingleBeerPage;
