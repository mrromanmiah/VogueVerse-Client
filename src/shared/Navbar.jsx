import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { BsCart3, BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';



const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [mode, setMode] = useState("light")

    function changeTheme () {
        const html = document.documentElement
        if (mode === "light") {
            html.classList.remove("light")
            html.classList.add("dark")
            setMode("dark")
            localStorage.setItem("mode", "dark")
        }
        else {
            html.classList.remove("dark")
            html.classList.add("light")
            setMode("light")
            localStorage.setItem("mode", "light")
        }
    } 

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light"
        setMode(currentMode)
        document.documentElement.classList.add(currentMode)     
    }, [])
    

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Logged Out");
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (

        <div>
            <nav className="lg:flex space-y-4 lg:space-y-0 md:space-y-4 items-center justify-between py-6 px-16 text-center dark:bg-zinc-400">
                <div className="lg:flex items-center gap-3">
                    <img className="flex items-center mx-auto w-12" src={'https://i.ibb.co/M9yYcX9/logo-Black.png'} alt="" />
                    <h1 className="text-3xl lg:mb-0 md:mb-4 text-black font-extrabold">VogueVerse</h1>
                </div>

                <ul className="lg:flex items-center gap-8 lg:space-y-0 md:space-y-5 space-y-5 text-base font-semibold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#2f3e46] bg-[#cad2c5] py-2 px-3 rounded-md font-bold text-base" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#2f3e46] bg-[#cad2c5] py-2 px-3 rounded-md font-bold text-base" : ""
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    {user &&
                        <>
                            <li>
                                <NavLink
                                    to={`/cart/${user.email}`}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white bg-[#52796f] lg:py-3 md:py-2 py-2 lg:px-4 md:px-3 px-3 rounded-md font-bold text-base" : "text-white  bg-[#52796f] lg:py-3 md:py-2 py-2 lg:px-4 md:px-3 px-3 rounded-md font-bold text-base hover:bg-[#84a98c] hover:border"
                                    }
                                >
                                    My Cart <BsCart3 className="inline-flex ml-2">
                                    </BsCart3>
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
                <div className="flex items-center gap-4">
                    <div>
                        {
                            user ?
                                <div className="flex justify-center items-center lg:gap-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full bg-slate-500">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <span className="mr-4 lg:ml-0 ml-4 text-xs font-extrabold">{user.displayName}</span>
                                    <button onClick={handleSignOut} className="bg-[#2f3e46] text-white font-bold rounded-md lg:px-6 md:px-2 px-2 lg:py-3 md:py-1 py-1 hover:bg-[#52796f] ">Logout</button>
                                </div>
                                :
                                <div className="flex gap-4 justify-center">
                                    <Link to='/login'><button className="bg-[#2f3e46] text-white font-bold rounded-md lg:px-6 md:px-2 px-2 lg:py-3 md:py-1 py-1 hover:bg-[#52796f] ">Login</button></Link>
                                </div>
                        }
                        
                    </div>
                    <button onClick={changeTheme} className="bg-black text-white dark:bg-white dark:text-black px-3 py-3 rounded-full font-medium">
                        {
                            mode === "dark" ? <BsFillSunFill></BsFillSunFill> : <BsFillMoonFill></BsFillMoonFill>
                        }
                        </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar; 

