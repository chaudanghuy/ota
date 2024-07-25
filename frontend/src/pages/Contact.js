import React, { Component, useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import GoogleMap from "../components/GoogleMap";
import axios from "axios";
import {toast} from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const About = () => {

    const [formData, setFormData] = useState({
        title: 'Contact Us',
        name: '',
        email: '',
        phone: '',
        content: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.phone) {
            errors.phone = 'Phone is required';
        }
        if (!formData.content) {
            errors.content = 'Content is required';
        }

        if (Object.keys(errors).length > 0) {
            setFormData({ ...formData, errors });
            return;
        }

        try {
            const res = axios.post(`${BACKEND_URL}/api/contact`, formData);

            if (res) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    content: '',
                })
                toast.success('Your message has been sent successfully!');
            }   
        } catch (error) {
            console.error(error); 
        }
    }

    return (
        <div id="contact" className="section">
            <div className="main clearfix">
                <div className="row clearfix">
                    <div className="half">
                        <div className="contact_info alignLeft">
                            <h4 className="featured_title">Contact Us</h4>
                            <Form onSubmit={handleSubmit} className="marginTop30">
                                <div className="form-controls">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <span />
                                </div>
                                <div className="form-controls">
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="Your phone number"
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                    <span />
                                </div>
                                <div className="form-controls">
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                    <span />
                                </div>
                                <div className="form-controls">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="content"
                                        placeholder="Your comment"
                                        onChange={handleChange}
                                        value={formData.content}
                                    />
                                    <span />
                                </div>
                                <div className="form-controls">
                                    <button type="submit" name="submit" onSubmit={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="half">
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;