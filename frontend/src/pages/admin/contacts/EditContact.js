import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const EditContact = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    phone: '',
    email: '',
    content: '',
    send_date: '',
    is_seen: false,
    is_reply: false,
  });

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/contacts/${id}/`);
      const data = response.data;
      setFormData({
        title: data.title,
        name: data.name,
        phone: data.phone,
        email: data.email,
        content: data.content,
        send_date: moment(data.send_date).format('YYYY-MM-DDTHH:mm'),
        is_seen: data.is_seen,
        is_reply: data.is_reply,
      });
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BACKEND_URL}/api/contacts/${id}/`, formData);      
      navigate('/admin/contacts');
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Contact</h2>
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

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={3}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSendDate">
          <Form.Label>Send Date</Form.Label>
          <Form.Control
            type="datetime-local"
            name="send_date"
            value={formData.send_date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formIsSeen">
          <Form.Check
            type="checkbox"
            label="Seen"
            name="is_seen"
            checked={formData.is_seen}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formIsReply">
          <Form.Check
            type="checkbox"
            label="Reply"
            name="is_reply"
            checked={formData.is_reply}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditContact;
