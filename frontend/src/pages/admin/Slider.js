import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import getCSRFToken from './csrf.js'; // Import the CSRF token utility
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Slider = () => {
  let navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const fetchUploadedImages = async () => {
    try {
      const response = await axios.get(BACKEND_URL + '/api/slider');
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
      await axios.delete(`${BACKEND_URL}/api/slider/${imageId}`, {
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
      await axios.post(BACKEND_URL + '/api/slider', formData, {
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
    <Container>
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
                <Button variant="primary" type="submit" className="mt-3">
                  Upload Images
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
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
    </Container>
  );
};

export default Slider;
