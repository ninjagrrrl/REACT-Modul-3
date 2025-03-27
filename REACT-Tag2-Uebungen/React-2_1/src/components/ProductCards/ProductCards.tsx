import CocooilImg from "../../assets/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg";
import CameraImg from "../../assets/polaroid.avif";
import MauiImg from "../../assets/maui.webp";
import Product from "../Product/Product";

type shopProduct = {
  name: string;
  price: number;
  imgUrl: string;
};

const shopProductArray: shopProduct[] = [
  {
    name: "Cocooil",
    price: 30,
    imgUrl: CocooilImg,
  },
  {
    name: "Kamera",
    price: 60,
    imgUrl: CameraImg,
  },
  {
    name: "Maui Moisture",
    price: 20,
    imgUrl: MauiImg,
  },
];

const ProductCards = () => {
  return (
    <>
      {shopProductArray.map((singleShopProduct) => (
        <Product
          key={singleShopProduct.name} //# nicht vergessen: eindeutiges Key Prop hinzufügen. da jeder name verschieden ist, kann man den namen nehmen
          productTitle={singleShopProduct.name}
          productPrice={singleShopProduct.price}
          productImage={singleShopProduct.imgUrl}
        />
      ))}
    </>
  );
};

export default ProductCards;
