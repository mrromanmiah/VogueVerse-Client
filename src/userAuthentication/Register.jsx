import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get('displayName');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        const termsAccepted = e.target.terms.checked;
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
        } else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError('Password must be at least 6 characters long, with at least one capital letter and one special character.')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long, with at least one capital letter and one special character.'
            })
            return;
        } else if (!termsAccepted) {
            setRegisterError('Please accept our terms and conditions')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please accept our terms and conditions'
            })
            return;
        }
        createUser(email, password, displayName, photoURL)
            .then(result => {
                console.log(result.user);
                setSuccess("Successfully registered")
                Swal.fire(
                    'Good job!',
                    'Successfully registered',
                    'success'
                )
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your email have already an account'
                })
            })
    }
    return (
        <div className="dark:bg-zinc-800">
            <div className="px-20 text-center pt-10 mb-10">
                <h1 className="text-4xl text-[#2f3e46] font-extrabold dark:text-white">Register</h1>
            </div>
            <form onSubmit={handleRegister} className="space-y-4 mb-10">
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Name<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" type="text" name="displayName" id="" placeholder="Your name" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">E-mail<span className="text-[#d82148]">*</span></h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" type="email" name="email" id="" placeholder="Your email" required />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Photo URL</h3>
                    <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" type="url" name="photoURL" id="" placeholder="Your photo URL" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-bold dark:text-white">Password<span className="text-[#d82148]">*</span></h3>
                    <div className="relative">
                        <input className="rounded-md border-2 py-2 px-6 lg:w-1/3" type={showPassword ? "text" : "password"} name="password" id="" placeholder="Password" required />
                        <span className="absolute top-4 -ml-10" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <input type="checkbox" name="terms" id="" />
                    <label className="dark:text-white" htmlFor="terms">Accept our <a className="text-blue-700 hover:underline" href="#">terms</a> and <a className="text-blue-700 hover:underline" href="#">conditions</a></label>
                </div>
                <input className="flex items-center mx-auto bg-[#2f3e46] text-white font-bold rounded-md px-6 py-2 hover:bg-[#52796f]" type="submit" value="Register" />
            </form>
            <p className="text-center pb-20 dark:text-white">Already have an account? <Link className="text-[#588157] hover:underline" to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;