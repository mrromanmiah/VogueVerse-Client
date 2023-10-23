import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";

const CartContainer = () => {
    const cartData = useLoaderData();
    const { userEmail } = useParams();

    return (
        
        <div>
            <div className="px-20 text-center mt-10">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold">My Cart</h1>
                <p className="text-[#84a98c] mb-10">Your gateway to a world of possibilities! <br /> Explore, select, and prepare for a seamless checkout experience.</p>
            </div>
            <div className="text-center mt-8 grid grid-cols-1 gap-6 px-20 pb-20">
            {cartData.length > 0 ? (
                cartData.map((cart) => (
                    <Cart key={cart._id} cart={cart}></Cart>
                ))
            ) : (
                <p className="text-lg text-gray-500">No product added to the cart</p>
            )}
        </div>
        </div>
    );
};

export default CartContainer;
