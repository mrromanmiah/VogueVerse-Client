import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const update = useLoaderData();
    const { _id,productImage, productName, brandName, productType, price, rating, description } = update || {};

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;

        const productImage = form.productImageURL.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.productPrice.value;
        const rating = form.productRating.value;
        const description = form.description.value;

        const updateProduct = {productImage, productName, brandName, productType, price, rating, description }
        console.log(updateProduct);

        fetch(`https://b8a10-brandshop-server-side-mrromanmiah-4x1k0fdgu.vercel.app/updateProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then (res => res.json())
        .then (data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                Swal.fire(
                    'Good job!',
                    'You updated this product successfully!',
                    'success'
                  )
            }
            else {
                Swal.fire(
                    'Oops!',
                    'No changes were made. Please make sure to modify the product.',
                    'error'
                );
            }
        })

    }


    return (
        <div className="dark:bg-zinc-800">
            <div className="px-20 text-center pt-10 mb-10">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold dark:text-white">Update Product</h1>
            </div>
            <form onSubmit={handleUpdateProduct} className="space-y-4 pb-10">
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Product Image URL<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={productImage} type="url" name="productImageURL" id="" placeholder="Product Image URL" required/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Product Name<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={productName} type="text" name="productName" id="" placeholder="Product Name" required/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Brand Name<span className="text-[#d82148]">*</span></h3>
                    <select className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={brandName} name="brandName" id="" required>
                        <option value="">Select Brand</option>
                        <option value="adidas">Adidas</option>
                        <option value="prada">Prada</option>
                        <option value="gucci">Gucci</option>
                        <option value="louisVuitton">Louis Vuitton</option>
                        <option value="nike">Nike</option>
                        <option value="zara">Zara</option>
                    </select>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Product Type<span className="text-[#d82148]">*</span></h3>
                    <select className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={productType} name="productType" id="" required>
                        <option value="">Select Type</option>
                        <option value="clothing">Clothing</option>
                        <option value="footwear">Footwear</option>
                        <option value="accessories">Accessories</option>
                        <option value="lifestyle">Lifestyle Products</option>
                    </select>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Product Price<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={price} type="number" min={0} name="productPrice" id="" placeholder="Product Price" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Product Rating<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={rating} type="number" step={0.1} max={5} min={0} name="productRating" id="" placeholder="Product Rating (Out of 5)" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Product Description<span className="text-[#d82148]">*</span></h3>
                    <textarea className="rounded-md border-2 py-2 px-6 lg:w-1/3" defaultValue={description} name="description" id="" cols="30" rows="5" placeholder="Write a short description..." required></textarea>
                </div>
                <input className="flex items-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;