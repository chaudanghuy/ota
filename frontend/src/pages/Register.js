import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_BACKEND_URL + "/api";

const Register = (props) => {
    const { isLoggedIn, setIsLoggedIn, setName, setEmail} = props;
    const [roles, setRoles] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate("/admin/posts");

        async function fetchRoles() {
            const {data} = await axios.get(URL + "/roles");
            const results = []
            data.forEach(value => {
                results.push({
                    key: value.name,
                    value: value.id
                })
            });

            setRoles(results);
        }

        fetchRoles();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        const phone = e.target.phone.value;
        const role = e.target.role.value;

        if (password !== confirmpassword) {
            toast.error("Passwords do not match");
        } else {
            const formData = {
                name: name,
                email: email,
                password: password,                
                phone: phone,
                role: role
            };

            try {
                const res = await axios.post(URL + '/register', formData);
                const data = res.data;
                if (data.success === true) {
                    toast.success(data.message);
                    setIsLoggedIn(true);
                    setName(name);
                    setEmail(email);
                    navigate("/admin/posts");
                } else {
                    toast.error(data.message);
                }
            } catch (err) {
                console.log("Error occured", err);
            }
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form
                        className="space-y-4 md:space-y-"
                        action="POST"
                        onSubmit={handleRegister}
                    >
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="name" className="text-sm font-medium required">
                                    Name
                                </label>
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email" className="text-sm font-medium required">
                                    Email
                                </label>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your email"
                                required
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="role" className="text-sm font-medium required">
                                    Role
                                </label>
                            </div>
                            <select
                                name="role"
                                id="role"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {roles.map((role) => (
                                    <option value={role.value}>{role.key}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium required"
                                    >
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your password"
                                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <label
                                        htmlFor="confirmpassword"
                                        className="text-sm font-medium required"
                                    >
                                        Confirm Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    id="confirmpassword"
                                    placeholder="Re-enter Password"
                                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="max-w-xl">
                            <div className="mb-2 block">
                                <label htmlFor="phone" className="text-sm font-medium required">
                                    Phone Number
                                </label>
                            </div>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                maxLength={20}
                                pattern="^[84][0-9]{10}"
                                placeholder="Your phone number"
                                aria-errormessage="Phone number must start with 84"
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required
                                    aria-describedby="terms"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="terms"
                                    className="font-light text-gray-500 dark:text-gray-300"
                                >
                                    I accept the{" "}
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#"
                                    >
                                        Term and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-3 py-4 text-white bg-indigo-600 rounded-md focus:bg-indigo-700 focus:outline-none"
                        >
                            Create an account
                        </button>
                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <a
                                href="login"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Login Here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;