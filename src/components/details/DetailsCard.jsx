import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';

const DetailsCard = ({ details }) => {

    const { productImage, productName, brandName, productType, price, rating, description } = details || {};
    const formattedBrandName =
        brandName.charAt(0).toUpperCase() + brandName.slice(1);
    const formattedProductType =
        productType.charAt(0).toUpperCase() + productType.slice(1);
    return (
        <div className="flex justify-center items-center mx-auto">
            <div className=" w-1/2 mx-20 mb-20 bg-base-100 shadow-xl rounded-lg">
                <figure className="px-10 pt-10">
                    <img src={productImage} alt="Product" className="rounded-lg" />
                </figure>
                <div className="items-center text-center px-10 pt-3 pb-10 space-y-3">
                    <h2 className="text-3xl font-bold">{productName}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                    <div className="flex justify-between font-semibold text-gray-500">
                        <p>Brand: {formattedBrandName}</p>
                        <p>Type: {formattedProductType}</p>
                    </div>
                    <div className="flex justify-between font-semibold text-gray-500">
                        <p>Price: $ {price}</p>
                        <p className="flex items-center gap-3"><Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly></Rating>{rating}</p>
                    </div>
                    <div className="">
                        <Link><button className="flex items-center w-full justify-center text-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]">Add to Cart <BsCart4 className="inline-flex ml-2">
                                    </BsCart4></button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;
