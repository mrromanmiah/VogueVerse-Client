

const ProductCard = ({product}) => {

    const { productImage, productName, brandName, productType, price, rating, description } = product || {};

    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl">
  <figure className="px-5 pt-5">
    <img src={productImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;