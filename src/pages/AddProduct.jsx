import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const productImage = form.productImageURL.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.productPrice.value;
        const rating = form.productRating.value;
        const description = form.description.value;

        const newProduct = { productImage, productName, brandName, productType, price, rating, description }
        console.log(newProduct);

        fetch('https://b8a10-brandshop-server-side-mrromanmiah-md01v71sm.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then (res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'You added this product successfully!',
                    'success'
                  )
                  form.reset();
            }
        })

    }
    return (
        <div className="dark:text-white">
            <div className="px-20 text-center pt-10 mb-10">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold dark:text-white">Add Product</h1>
            </div>
            <form onSubmit={handleAddProduct} className="space-y-4 pb-10">
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Product Image URL<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" type="url" name="productImageURL" id="" placeholder="Product Image URL" required/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Product Name<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" type="text" name="productName" id="" placeholder="Product Name" required/>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Brand Name<span className="text-[#d82148]">*</span></h3>
                    <select className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" name="brandName" id="" required>
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
                    <h3 className="font-bold">Product Type<span className="text-[#d82148]">*</span></h3>
                    <select className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" name="productType" id="" required>
                        <option value="">Select Type</option>
                        <option value="clothing">Clothing</option>
                        <option value="footwear">Footwear</option>
                        <option value="accessories">Accessories</option>
                        <option value="lifestyle">Lifestyle Products</option>
                    </select>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Product Price<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" type="number" min={0} name="productPrice" id="" placeholder="Product Price" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Product Rating<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" type="number" step={0.1} max={5} min={0} name="productRating" id="" placeholder="Product Rating (Out of 5)" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Product Description<span className="text-[#d82148]">*</span></h3>
                    <textarea className="rounded-md border-2 py-2 px-6 lg:w-1/3 dark:text-black" name="description" id="" cols="30" rows="5" placeholder="Write a short description..." required></textarea>
                </div>
                <input className="flex items-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;