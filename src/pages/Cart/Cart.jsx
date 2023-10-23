

const Cart = ({ cart }) => {

    const { productImage, productName, brandName, price } = cart || {};
    const formattedBrandName =
        brandName.charAt(0).toUpperCase() + brandName.slice(1);
    return (
        
            <div className="shadow-xl grid grid-cols-5 items-center p-5 rounded-md gap-4 border-2">
                <div className="w-36">
                    <img className="rounded-md" src={productImage} alt="Image" />
                </div>

                
                    <div className="col-span-2">
                        <h2 className="text-xl font-bold">{productName}</h2>
                        <p className="font-medium">{formattedBrandName}</p>
                    </div>
                    <div className=" text-3xl font-extrabold">
                        <h3>$ {price}</h3>
                    </div>
                    <div className="">
                        <button className="bg-red-600 rounded-md text-white px-6 py-3 font-bold">Delete</button>
                    </div>
                
            </div>
        
    );
};

export default Cart;