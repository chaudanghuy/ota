import React from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/reset-password";

const ResetPassword = () => {

    const {searchParams} = useSearchParams();
    let navigate = useNavigate();

    const id = searchParams.get("id");
    const token = searchParams.get("token");

    const handleResetPassword = async(e) => {
        e.preventDefault();
        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (newPassword !== confirmPassword) {
            toast.error('Password do not match');
        }

        const formData = {
            id: id,
            token: token,
            newPassword: newPassword
        }

        const res = await axios.post(URL, formData);
        const data = res.data;
        if (data.success === true) {
            toast.success(data.message);
            navigate("/login");
        } else {
            toast.error(data.message);
        }
    };

    return (
        <div className="w-full flex justify-center my-4">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <h5 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Reset Password
                </h5>
                <form 
                    className="w-full flex flex-col space-y-4 md:space-y-6"
                    onSubmit={handleResetPassword}
                >
                    <div>
                        <div className="mb-2 block">
                            <label htmlFor="newpassword" className="text-sm font-medium text-gray-900 dark:text-white">
                                New Password
                            </label>
                        </div>
                        <input
                            id="newpassword"
                            name="newpassword"
                            type="password"
                            placeholder="Enter your new password"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900 dark:text-white">
                                Confirm Password
                            </label>
                        </div>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your new password"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>
                    <div className="mt-2 block">
                        <button 
                            type="submit" 
                            className="w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-500">
                        Not yet registered?{" "}
                        <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">
                            Register Here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;