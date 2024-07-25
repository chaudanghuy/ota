import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { redirect } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEditPost = () => {
    let navigate = useNavigate();

    const currentUser = localStorage.getItem('user_id');    

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        user: currentUser,
        address: '',
        area: '',
        completed_year: '',
        content: '',
        category: '',
        status: '',
        image: null,
        images: [],
        seo_meta_title: '',
        seo_meta_keywords: '',
        seo_meta_description: '',
    });


    const [statuses, setStatuses] = useState([]);

    const [categories, setCategories] = useState([]);

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

        axios.get(process.env.REACT_APP_BACKEND_URL + "/api/status").then((response) => {
            setStatuses(response.data);
        });

        axios.get(process.env.REACT_APP_BACKEND_URL + "/api/categories").then((response) => {
            setCategories(response.data);
        });
    }, [formData.title]);    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContentChange = (value) => {
        setFormData({ ...formData, content: value });
    };

    const handleImageChange = (acceptedFiles) => {
        setFormData({ ...formData, image: acceptedFiles[0] });
    };

    const handleImagesChange = (acceptedFiles) => {
        setFormData({ ...formData, images: acceptedFiles });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = new FormData();
        postData.append('title', formData.title);
        postData.append('slug', formData.slug);
        postData.append('address', formData.address);
        postData.append('area', formData.area);
        postData.append('completed_year', formData.completed_year);
        postData.append('user', formData.user);
        postData.append('content', formData.content);
        postData.append('category', formData.category);
        postData.append('status', formData.status);
        postData.append('seo_meta_title', formData.seo_meta_title);
        postData.append('seo_meta_keywords', formData.seo_meta_keywords);
        postData.append('seo_meta_description', formData.seo_meta_description);
        if (formData.image) {
            postData.append('image', formData.image);
        }
        formData.images.forEach((image, index) => {
            postData.append(`images`, image);
        });

        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/articles', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });            
            navigate('/admin/posts');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Button variant="primary" onClick={() => { window.location.href = '/admin/posts' }} className="ms-auto float-end">
                        Back to Projects
                    </Button>
                    <h2>Add Project</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSlug">
                            <Form.Label>Slug</Form.Label>
                            <Form.Control
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formArea">
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                type="text"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCompletedYear">
                            <Form.Label>Completed Year</Form.Label>
                            <Form.Control
                                type="text"
                                name="completed_year"
                                value={formData.completed_year}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <ReactQuill
                                value={formData.content}
                                onChange={handleContentChange}
                                theme="snow"
                                rows={10}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="">Select Status</option>
                                {statuses.map((status) => (
                                    <option key={status.id} value={status.id}>{status.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Dropzone onDrop={handleImageChange} multiple={false}>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone">
                                        <input {...getInputProps()} />
                                        {formData.image ? (
                                            <div>
                                                <p>{formData.image.name}</p>
                                                <img
                                                    src={URL.createObjectURL(formData.image)}
                                                    alt="Preview"
                                                    style={{ maxWidth: '200px', marginTop: '10px' }}
                                                />
                                            </div>
                                        ) : (
                                            <p>Drag 'n' drop a single image here, or click to select one</p>
                                        )}
                                    </div>
                                )}
                            </Dropzone>
                        </Form.Group>

                        <Form.Group controlId="formImages">
                            <Form.Label>Images</Form.Label>
                            <Dropzone onDrop={handleImagesChange} multiple>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone">
                                        <input {...getInputProps()} />
                                        {formData.images.length > 0 ? (
                                            <div>
                                                <p>{formData.images.length} files selected</p>
                                                {formData.images.map((file, index) => (
                                                    <img
                                                        key={index}
                                                        src={URL.createObjectURL(file)}
                                                        alt={`Preview ${index}`}
                                                        style={{ maxWidth: '200px', marginTop: '10px', marginRight: '10px' }}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <p>Drag 'n' drop multiple images here, or click to select files</p>
                                        )}
                                    </div>
                                )}
                            </Dropzone>
                        </Form.Group>

                        <Form.Group controlId="formSEOMetaTitle">
                            <Form.Label>SEO Meta Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_meta_title"
                                value={formData.seo_meta_title}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSEOMetaKeywords">
                            <Form.Label>SEO Meta Keywords</Form.Label>
                            <Form.Control
                                type="text"
                                name="seo_meta_keywords"
                                value={formData.seo_meta_keywords}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSEOMetaDescription">
                            <Form.Label>SEO Meta Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="seo_meta_description"
                                value={formData.seo_meta_description}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className="flex justify-center  mt-3 mb-10">
                            <Button variant="btn btn-lg btn-primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AddEditPost;