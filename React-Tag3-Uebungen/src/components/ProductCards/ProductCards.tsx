import FrikadellenImg from "../../assets/frikadellen.jpeg";
import PizzaImg from "../../assets/pizza.jpeg";
import Pizza2Img from "../../assets/pizza2.jpeg";
import SalatImg from "../../assets/salat.jpeg";
import ScampiImg from "../../assets/scampi.jpeg";
import SpaghettiImg from "../../assets/spagetthi.jpeg";
import TellerImg from "../../assets/teller.jpeg";
import GlassImg from "../../assets/glass.jpeg";
import Product from "../Product/Product";

type shopProduct = {
  name: string;
  description: string;
  price: number;
  imgUrl: string;
};

const shopProductArray: shopProduct[] = [
  {
    name: "Frikadellen",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 30,
    imgUrl: FrikadellenImg,
  },
  {
    name: "Pizza Vege",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 60,
    imgUrl: PizzaImg,
  },
  {
    name: "Pizza",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 20,
    imgUrl: Pizza2Img,
  },
  {
    name: "Salat",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 20,
    imgUrl: SalatImg,
  },
  {
    name: "Scampi",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 20,
    imgUrl: ScampiImg,
  },
  {
    name: "Spaghetti",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 20,
    imgUrl: SpaghettiImg,
  },
  {
    name: "Teller",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 20,
    imgUrl: TellerImg,
  },
  {
    name: "Glass",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum.",
    price: 20,
    imgUrl: GlassImg,
  },
];

const ProductCards = () => {
  return (
    <>
      {shopProductArray.map((singleShopProduct) => (
        <Product
          key={singleShopProduct.name} //# nicht vergessen: eindeutiges Key Prop hinzufügen. da jeder name verschieden ist, kann man den namen nehmen
          productTitle={singleShopProduct.name}
          productDescription={singleShopProduct.description}
          productPrice={singleShopProduct.price}
          productImage={singleShopProduct.imgUrl}
        />
      ))}
    </>
  );
};

export default ProductCards;
