// pages/Login.js

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/login";

const Login = (props) => {
    let navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn, setName, setEmail} = props;

    useEffect(() => {
        if (isLoggedIn) navigate("/admin/posts");
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const formData = {email: email, password: password};

        const res = await axios.post(URL, formData);
        const data = res.data;

        if (data.success == true) {
            localStorage.setItem("user_id", data.user);
            localStorage.setItem("access_token", data.access);
            toast.success(data.message);            
            setIsLoggedIn(true);
            setEmail(email);
            navigate("/admin/posts");
        } else {
            toast.error(data.message);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Login to your account
                </h5>
                <form
                    className="w-full flex max-w-md flex-col gap-4"
                    onSubmit={handleLogin}
                >
                    <div>
                        <div className="mb-2 block">
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-900 dark:text-slate-800"
                            >
                                Email
                            </label>
                        </div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2 block">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-900 dark:text-slate-800"
                            >
                                Password
                            </label>                            
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Your password"
                            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required 
                        />                        
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <input
                            type="checkbox"
                            id="remember"
                            class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"                             
                            checked
                        />
                        <label 
                            htmlFor="remember" 
                            className="mt-3 text-sm font-medium text-gray-900 dark:text-slate-800"
                        >
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-500 dark:"
                    >
                        Submit
                    </button>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Not yet registered?{" "}
                        <a
                            href="register"
                            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Register here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;