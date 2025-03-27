type ShopProductProps = {
  productTitle: string;
  productPrice: number;
  productImage: string;
};

const Product = (props: ShopProductProps) => {
  console.log(props);

  return (
    <div className="product-card">
      <img src={props.productImage} alt={props.productTitle} />
      <p>{props.productTitle}</p>
      <p>${props.productPrice}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;
