import { Rating } from "@mui/material";
import { Link } from "react-router-dom";



const ProductCard = ({product}) => {

    const {_id, productImage, productName, brandName, productType, price, rating } = product || {};
    const formattedBrandName =
    brandName.charAt(0).toUpperCase() + brandName.slice(1);
    const formattedProductType =
    productType.charAt(0).toUpperCase() + productType.slice(1);
    return (
        <div>
            <div className=" w-auto border-2 shadow-xl rounded-lg">
  <figure className="px-5 pt-5">
    <img src={productImage} alt="Product" className="rounded-lg" />
  </figure>
  <div className="items-center text-center p-5 space-y-3">
    <h2 className="text-lg font-bold dark:text-white">{productName}</h2>
    <div className="flex justify-between font-semibold text-gray-500">
      <p className="dark:text-[#84a98c]">Brand: {formattedBrandName}</p>
      <p className="dark:text-[#84a98c]">Type: {formattedProductType}</p>
    </div>
    <div className="flex justify-between font-semibold text-gray-500">
      <p className="dark:text-[#84a98c]">Price: $ {price}</p>
<p className="flex items-center gap-3 dark:text-[#84a98c]"><Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly></Rating>{rating}</p>
    </div>
    <div className="flex justify-between pt-4">
      <Link to={`/details/${_id}`}><button className="flex items-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]">Details</button></Link>
      <Link to={`/updateProduct/${_id}`}><button className="flex items-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]">Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;