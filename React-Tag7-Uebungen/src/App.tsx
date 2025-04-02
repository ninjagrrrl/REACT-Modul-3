import { useEffect, useState } from "react";

type shopItem = {
  id: 0;
  title: "string";
  price: 0.1;
  description: "string";
  category: "string";
  image: "http://example.com";
};


function App() {
  const [shopItems, setShopItems] = useState<shopItem>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> 
    setLoading(true);
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setShopItems(data);
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage("Sorry, there was an error while loading");
    })
    .finally(() => {
      setLoading(false);
    });
}, []); 
      

  return <div></div>;
}

export default App;
