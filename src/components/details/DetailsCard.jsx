/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const DetailsCard = ({ details }) => {
    const { user } = useContext(AuthContext);

    const { productImage, productName, brandName, productType, price, rating, description } = details || {};
    const formattedBrandName =
        brandName.charAt(0).toUpperCase() + brandName.slice(1);
    const formattedProductType =
        productType.charAt(0).toUpperCase() + productType.slice(1); 


        const handleCart = event => {
            event.preventDefault();
            const cartProduct = { 
                productImage, 
                productName, 
                brandName, 
                productType, 
                price, 
                rating, 
                description,
                userEmail: user?.email }
    
            fetch('https://b8a10-brandshop-server-side-mrromanmiah-md01v71sm.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartProduct)
            })
            .then (res => res.json())
            .then (data => {
                if(data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Your product added to cart successfully!',
                        'success'
                      )
                }
            })
    
        }

    return (
        <form onSubmit={handleCart}>
            <div className="flex justify-center items-center mx-auto">
            <div className="lg:w-1/2 lg:mx-20 md:mx-16 mx-8 mb-20 lg:mt-20 md:mt-10 mt-5 border-2 shadow-xl rounded-lg">
                <figure className="px-10 pt-10">
                    <img src={productImage} alt="Product" className="rounded-lg" />
                </figure>
                <div className="items-center text-center px-10 pt-3 pb-10 space-y-3">
                    <h2 className="text-3xl font-bold dark:text-white">{productName}</h2>
                    <p className="text-sm text-gray-500 dark:text-[#84a98c]">{description}</p>
                    <div className="flex justify-between font-semibold text-gray-500 dark:text-[#84a98c]">
                        <p>Brand: {formattedBrandName}</p>
                        <p>Type: {formattedProductType}</p>
                    </div>
                    <div className="flex justify-between font-semibold text-gray-500 dark:text-[#84a98c]">
                        <p>Price: $ {price}</p>
                        <p className="flex items-center gap-3"><Rating name="half-rating-read" value={rating} precision={0.5} readOnly></Rating>{rating}</p>
                    </div>
                    <div className="">
                        <input className="flex items-center w-full justify-center text-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]" type="submit" value="Add to Cart" />
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
};

export default DetailsCard;
