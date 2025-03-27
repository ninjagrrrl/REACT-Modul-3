// - Erstelle eine Produktkomponente, die die Produktkarten ausgibt.
// - Dabei werden Preis, Name und Bild des Produkts über props (img, Product, Price) übergeben.
// - Programmiere eine Komponente, die drei Produktkarten rendert. Gib jeder Karte eigene props.

import ProductCards from "../components/ProductCards/ProductCards";

const Home = () => {
  return (
    <>
      <ProductCards />
    </>
  );
};
export default Home;
