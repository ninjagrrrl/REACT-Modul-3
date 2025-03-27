type ShopProductProps = {
  productTitle: string;
  productPrice: number;
  productDescription: string;
  productImage: string;
};

const Product = (props: ShopProductProps) => {
  console.log(props);

  return (
    <div className="product-card">
      <img src={props.productImage} alt={props.productTitle} />
      <p>{props.productTitle}</p>
      <p>{props.productDescription}</p>
      <p>${props.productPrice}</p>
    </div>
  );
};

export default Product;
