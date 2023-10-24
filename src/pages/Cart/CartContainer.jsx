import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const CartContainer = () => {
    const cartData = useLoaderData();
    const { userEmail } = useParams();
    const [reset, setReset] = useState(cartData);

    return (

        <div>
            <div className="px-20 text-center mt-10">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold">My Cart</h1>
                <p className="text-[#84a98c] mb-10">Gateway to endless options; explore, choose, and breeze through checkout.</p>
            </div>
            <div className="text-center mt-8 grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 lg:px-20 md:px-10 px-10 pb-20">
                {reset.length > 0 ? (
                    reset.map((cart) => (
                        <Cart key={cart._id} cart={cart} reset={reset} setReset={setReset}></Cart>
                    ))
                ) : (
                    <div className="space-y-4">
                        <img className="w-32 flex justify-center mx-auto" src="https://i.ibb.co/jGFMCF0/cart.png" alt="" />
                        <p className="text-xl font-bold">Your Cart is Empty</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartContainer;
