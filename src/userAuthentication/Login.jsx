
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";


import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";




const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters'

            })
            return;
        } if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError('Password must be at least 6 characters long, with at least one capital letter and one special character.')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long, with at least one capital letter and one special character.'
            })
            return;
        }

        signInUser(email, password)
            .then(result => {
                console.log(result);
                setSuccess("Successfully logged in")
                Swal.fire(
                    'Good job!',
                    'Successfully logged in',
                    'success'
                )
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have entered wrong email or password'
                })
            })
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                setSuccess("Successfully logged in")
                Swal.fire(
                    'Good job!',
                    'Successfully logged in',
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have entered wrong credentials. Please try again'
                })
            })
    }

    return (
        <div>
            <div className="px-20 text-center mt-10 mb-10">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold">Login</h1>
            </div>
            <form onSubmit={handleLogin} className="space-y-4 mb-6 ">
                <div className="text-center space-y-2">
                    <h3 className="font-bold">E-mail<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-3 px-6 lg:w-1/3" type="email" name="email" id="" placeholder="E-mail" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold">Password<span className="text-[#d82148]">*</span></h3>
                    <div className="relative">
                        <input className="rounded-md border-2 py-3 px-6 lg:w-1/3" type={showPassword ? "text" : "password"} name="password" id="" placeholder="Password" required />
                        <span className="absolute top-4 -ml-10" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <input className="flex items-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-3 hover:bg-[#52796f]" type="submit" value="Login" />
            </form>
            <div className="space-y-4 mb-10">
                <button onClick={handleGoogleLogin} className="btn btn-circle p-1 flex items-center mx-auto"><img src={'https://i.ibb.co/vVdgSTt/google-1.png'} alt="" /></button>
                <p className="text-center">Don't have an account? <Link className="text-[#588157] hover:underline" to='/register'>Register</Link></p>
            </div>


        </div>
    );
};

export default Login;