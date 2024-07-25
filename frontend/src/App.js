import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

/**
 * Admin
 */

// Posts
import Posts from "./pages/admin/posts/Posts";
import AddPost from "./pages/admin/posts/AddPost";
import EditPost from "./pages/admin/posts/EditPost";

// Categories
import Categories from "./pages/admin/categories/Categories";
import AddCategory from "./pages/admin/categories/AddCategory";

// Pages
import Pages from "./pages/admin/pages/Pages";
import AddPage from "./pages/admin/pages/AddPage";
import EditPage from "./pages/admin/pages/EditPage";

import Contacts from "./pages/admin/Contacts";
import SEO from "./pages/admin/SEO";
import Setting from "./pages/admin/Setting";
import User from "./pages/admin/User";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    return (
        <div id = "wrapper">
            <BrowserRouter>
                <ToastContainer />
                <Header 
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                />
                <Routes>
                    <Route path="/" exact
                     element={
                        <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
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
                    <Route path="/forgot-password" exact element={<ForgotPassword isLoggedIn={isLoggedIn}/>} />
                    <Route path="/reset-password" exact element={<ResetPassword isLoggedIn={isLoggedIn}/>} />
                    <Route path="/project/:status" exact element={<Project />} />
                    <Route path="/about-us" exact element={<About />} />
                    <Route path="/contact" exact element={<Contact />} />
                    
                    {/* Admin */}
                    <Route path="/admin/posts" exact element={<Posts isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/posts/add" exact element={<AddPost isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/posts/edit/:id" exact element={<EditPost isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/categories/add" exact element={<AddCategory isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/categories" exact element={<Categories isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/pages" exact element={<Pages isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/pages/add" exact element={<AddPage isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/pages/edit/:id" exact element={<EditPage isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/seo" exact element={<SEO isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/setting" exact element={<Setting isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/user" exact element={<User isLoggedIn={isLoggedIn}/>} />
                    <Route path="/admin/contacts" exact element={<Contacts isLoggedIn={isLoggedIn}/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;