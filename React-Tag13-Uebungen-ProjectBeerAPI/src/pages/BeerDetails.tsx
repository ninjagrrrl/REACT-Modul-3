import { useParams } from "react-router";

function BeerDetails() {
  // const wasInDerUrlSteht = useParams();
  // console.log(wasInDerUrlSteht);

  // const id = wasInDerUrlSteht.id

  const { id } = useParams();
  console.log(id);
  // to do: API fetchen und in useState speichern
  return <div></div>;
}

export default BeerDetails;
