import Swal from "sweetalert2";


const Cart = ({ cart, reset, setReset }) => {

    const { _id, productImage, productName, brandName, price } = cart || {};
    const formattedBrandName =
        brandName.charAt(0).toUpperCase() + brandName.slice(1);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a10-brandshop-server-side-mrromanmiah-4x1k0fdgu.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            
                                const remaining = reset.filter(del => del._id !== _id);
                                setReset(remaining);                          
                        }
                    })
            }
        })
    };

    return (

        <div className="shadow-xl lg:grid lg:grid-cols-5 items-center p-5 rounded-md gap-4 border-2 lg:space-y-0 md:space-y-3 space-y-3">
            <div className="w-36 lg:flex-none md:flex flex md:justify-center mx-auto">
                <img className="rounded-md" src={productImage} alt="Image" />
            </div>


            <div className="lg:col-span-2 lg:text-left">
                <h2 className="text-xl font-bold dark:text-white">{productName}</h2>
                <p className="font-medium dark:text-[#84a98c]">{formattedBrandName}</p>
            </div>
            <div className=" text-3xl font-extrabold">
                <h3 className="dark:text-white">$ {price}</h3>
            </div>
            <div>
                <button onClick={() => handleDelete(_id)} className="bg-red-600 rounded-md text-white px-6 py-3 font-bold">Delete</button>
            </div>

        </div>

    );
};

export default Cart;