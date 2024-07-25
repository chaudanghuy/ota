import axios from "axios";
import { toast } from "react-toastify";

const URL = process.env.BACKEND_URL + "/api/forgot-password";

const ForgotPassword = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const formData = {email: email};
        const res = await axios.post(URL, formData);
        const data = res.data;

        if (data.success == true) {
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }            
    }

    return (
        <div className="flex items-center justify-center">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <h5
                    className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                >
                    Forgot Password
                </h5>
                <form
                    className="flex flex-col space-y-4 md:space-y-6"
                >
                    <div>
                        <div
                            className="mb-2 block"
                        >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                        </div>
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>                                
                    <div
                        className="mt-2 block"
                    >
                        <button
                            type="submit"
                            className="w-full focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                        >
                            Submit
                        </button>
                    </div>
                    <p
                        className="text-sm font-light text-gray-500 dark:text-gray-400"
                    >
                        Remember your password?{" "}
                        <a
                            href="login"
                            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Login Here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;