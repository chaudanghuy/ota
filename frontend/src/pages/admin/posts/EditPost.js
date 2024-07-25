import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';
import { toast } from 'react-toastify';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const EditPost = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        address: '',
        area: '',
        completed_year: '',
        content: '',
        category: '',
        status: '',
        seo_meta_title: '',
        seo_meta_keywords: '',
        seo_meta_description: '',
        image: null,
        images: []
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [imagesPreview, setImagesPreview] = useState([]);

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
        fetchPost();
        fetchCategories();
        fetchStatuses();

        if (formData.title) {
            setFormData((prevData) => ({
                ...prevData,
                slug: generateSlug(prevData.title),
            }));
        }
    }, [formData.title]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchStatuses = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/status`);
            setStatuses(response.data);
        } catch (error) {
            console.error('Error fetching statuses:', error);
        }
    };

    const fetchPost = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/articles/${id}`);
            setFormData(response.data);
            setImagePreview(response.data.image ? `http://localhost:8000${response.data.image}` : null);
            setImagesPreview(response.data.images ? response.data.images.map(image => `http://localhost:8000${image.image}`) : null);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContentChange = (value) => {
        setFormData({ ...formData, content: value });
    };

    const handleImageChange = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFormData({ ...formData, image: file });
        setImagePreview(URL.createObjectURL(file));
    };

    const handleImagesChange = (acceptedFiles) => {
        setFormData({ ...formData, images: acceptedFiles });
        setImagesPreview(acceptedFiles.map(file => URL.createObjectURL(file)));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFormData = new FormData();

        for (const key in formData) {
            if (key === 'images') {
                formData[key].forEach((image) => {
                    updatedFormData.append('images', image);
                });
            } else {
                updatedFormData.append(key, formData[key]);
            }
        }
        try {
            await axios.put(`${BACKEND_URL}/api/articles/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });            
            navigate('/admin/posts');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Button variant="primary" onClick={() => { window.location.href = '/admin/posts' }} className="ms-auto float-end">
                        Back to Posts
                    </Button>
                    <h2>Edit Post</h2>
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
                                    <option key={category.id} value={category.id} selected={formData.category === category.id}>{category.name}</option>
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
                                    <option key={status.id} value={status.id} selected={formData.status === status.id}>{status.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Dropzone onDrop={handleImageChange} multiple={false}>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone">
                                        <input {...getInputProps()} />
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
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

                        <Form.Group controlId="formImages">
                            <Form.Label>Images</Form.Label>
                            <Dropzone onDrop={handleImagesChange} multiple>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone">
                                        <input {...getInputProps()} />
                                        {imagesPreview.length > 0 ? (
                                            <div>
                                                <p>{imagesPreview.length} files selected</p>
                                                {imagesPreview.map((src, index) => (
                                                    <img
                                                        key={index}
                                                        src={src}
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

                        <div className='flex justify-center mt-3 mb-10'>
                            <Button variant="primary" type="submit" className='mb-10 justify-center'>
                                Update Post
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
