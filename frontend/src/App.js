import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import axios from "axios";
import Helmet from "react-helmet";

/**
 * Admin
 */

// Posts
import Posts from "./pages/admin/posts/Posts";
import AddPost from "./pages/admin/posts/AddPost";
import EditPost from "./pages/admin/posts/EditPost";
import PostImages from "./pages/admin/posts/PostImages";

// Categories
import Categories from "./pages/admin/categories/Categories";
import AddCategory from "./pages/admin/categories/AddCategory";

// Pages
import Pages from "./pages/admin/pages/Pages";
import AddPage from "./pages/admin/pages/AddPage";
import EditPage from "./pages/admin/pages/EditPage";

// Contacts
import Contacts from "./pages/admin/contacts/Contacts";

import Setting from "./pages/admin/Setting";
import Slider from "./pages/admin/Slider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [setting, setSetting] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [categories, setCategories] = useState([]);

    const getSetting = async () => {
        try {
            const response = await axios.get(BACKEND_URL + '/api/setting');
            setSetting(response.data);
        } catch (error) {
            console.error('Error fetching setting:', error);
        }
    };

    const getCategories = async () => {
        try {
            const response = await axios.get(BACKEND_URL + '/api/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null && localStorage.getItem('user_id') !== null) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }

        getSetting();
        getCategories();
    }, [isLoggedIn]);

    return (
        <div id="wrapper">

            <BrowserRouter>
                <ToastContainer />
                <Header
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    setting={setting}
                    categories={categories}
                />
                <Routes>
                    <Route path="/" exact
                        element={
                            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                        }
                    />
                    <Route path="/register" exact
                        element={
                            <Register
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                setName={setName}
                                setEmail={setEmail}
                            />
                        }
                    />
                    <Route path="/login" exact
                        element={
                            <Login
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                setName={setName}
                                setEmail={setEmail}
                            />
                        }
                    />
                    <Route path="/forgot-password" exact element={<ForgotPassword isLoggedIn={isLoggedIn} />} />
                    <Route path="/reset-password" exact element={<ResetPassword isLoggedIn={isLoggedIn} />} />
                    <Route path="/projects/:status" exact element={<Projects />} />
                    <Route path="/project/:slug" exact element={<Project />} />
                    <Route path="/about-us" exact element={<About />} />
                    <Route path="/contact" exact element={<Contact />} />

                    {/* Admin */}
                    <Route path="/admin/posts" exact element={<Posts isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/posts/add" exact element={<AddPost isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/posts/edit/:id" exact element={<EditPost isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/posts/images/:id" exact element={<PostImages isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/pages" exact element={<Pages isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/pages/add" exact element={<AddPage isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/pages/edit/:id" exact element={<EditPage isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/setting" exact element={<Setting isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/contacts" exact element={<Contacts isLoggedIn={isLoggedIn} />} />
                    <Route path="/admin/slider" exact element={<Slider />} />
                </Routes>
                <Footer
                    setting={setting}
                />
            </BrowserRouter>
        </div>
    );
};

export default App;