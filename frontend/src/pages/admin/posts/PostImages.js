import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import getCSRFToken from './../csrf.js'; // Import the CSRF token utility
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const PostImages = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);

    const fetchUploadedImages = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/article/images/${id}`);
            setUploadedImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('user_id') == null) {
            navigate("/login");
        }

        fetchUploadedImages();
    }, []);

    const onDrop = (acceptedFiles) => {
        setImages((prevImages) => [
            ...prevImages,
            ...acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            ),
        ]);
    };

    const handleDelete = async (imageId, index) => {
        try {
            const csrfToken = getCSRFToken();
            await axios.delete(`${BACKEND_URL}/api/article/images/delete/${imageId}`, {
                headers: { 'X-CSRFToken': csrfToken },
            });
            setUploadedImages((prevImages) => prevImages.filter((image) => image.id !== imageId));
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const csrfToken = getCSRFToken();
            await axios.post(`${BACKEND_URL}/api/article/images/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': csrfToken,
                },
            });
            setImages([]);
            fetchUploadedImages();
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Button variant="danger" onClick={() => { window.location.href = '/admin/posts' }} className="ms-auto float-end">
                        Back to Project
                    </Button>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                        Upload Images
                    </h1>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>Upload Images</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <div {...getRootProps({ className: 'dropzone' })} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </div>
                                        <Row>
                                            {images.map((file, index) => (
                                                <Col key={index} xs={6} md={4} lg={3}>
                                                    <Card className="mt-3">
                                                        <Card.Img variant="top" src={file.preview} />
                                                        <Card.Body>
                                                            <Button variant="danger" onClick={() => setImages((prevImages) => prevImages.filter((_, i) => i !== index))}>
                                                                Delete
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                        <div className='flex justify-center mt-3 mb-10'>
                                            <Button variant="primary" type="submit" className="mt-3">
                                                Upload Images
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mb-20'>
                        {uploadedImages.map((image) => (
                            <Col key={image.id} xs={6} md={4} lg={3}>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src={BACKEND_URL + image.image} />
                                    <Card.Body>
                                        <Button variant="danger" onClick={() => handleDelete(image.id)}>
                                            Delete
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default PostImages;
