import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AddPage = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        seo_meta_title: '',
        seo_meta_description: '',
        seo_meta_keywords: '',
        is_visibility: false,
        image: null,
    });

    // Function to convert title to a slug
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')    // Replace non-alphanumeric characters with hyphens
            .replace(/(^-+|-+$)/g, '');     // Remove leading and trailing hyphens
    };

    useEffect(() => {
        if (localStorage.getItem('user_id') == null) {
            navigate("/login");
        }

        if (formData.title) {
            setFormData((prevData) => ({
                ...prevData,
                slug: generateSlug(prevData.title),
            }));
        }
    }, [formData.title]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleImageChange = (acceptedFiles) => {
        setFormData({ ...formData, image: acceptedFiles[0] });
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedFormData = new FormData();

        for (const key in formData) {
            if (formData[key]) {
                if (key === 'image' && formData[key]) {
                    updatedFormData.append('image', formData[key]);
                } else {
                    updatedFormData.append(key, formData[key]);
                }
            }
        }

        try {
            const response = await axios.post(BACKEND_URL + '/api/pages', updatedFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Handle successful submission (e.g., redirect or show a success message)            
            navigate('/admin/pages');
        } catch (error) {
            console.error('Error adding page:', error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Button variant="primary" onClick={() => { window.location.href = '/admin/pages' }} className="ms-auto float-end">
                        Back to Pages
                    </Button>
                    <h2>Add Page</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSlug">
                            <Form.Label>Slug</Form.Label>
                            <Form.Control
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>                        

                        <Form.Group controlId="formSEOSeoMetaTitle">
                            <Form.Label>SEO Meta Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_meta_title"
                                value={formData.seo_meta_title}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSEOSeoMetaDescription">
                            <Form.Label>SEO Meta Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="seo_meta_description"
                                value={formData.seo_meta_description}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSEOSeoMetaKeywords">
                            <Form.Label>SEO Meta Keywords</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_meta_keywords"
                                value={formData.seo_meta_keywords}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formVisibility">
                            <Form.Check
                                type="checkbox"
                                label="Visibility"
                                name="is_visibility"
                                checked={formData.is_visibility}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Dropzone onDrop={handleImageChange} multiple={false}>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone">
                                        <input {...getInputProps()} />
                                        {formData.image ? (
                                            <img
                                                src={URL.createObjectURL(formData.image)}
                                                alt="Preview"
                                                style={{ maxWidth: '200px', marginTop: '10px' }}
                                            />
                                        ) : (
                                            <p>Drag 'n' drop an image here, or click to select file</p>
                                        )}
                                    </div>
                                )}
                            </Dropzone>
                        </Form.Group>

                        <div className='flex justify-center'>
                            <Button variant="primary" type="submit" className='mb-10'>
                                Add Page
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddPage;
