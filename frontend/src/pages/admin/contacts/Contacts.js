import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Table, Button, Pagination, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { FaCheckCircle, FaTimesCircle, FaReply, FaEnvelopeOpen } from 'react-icons/fa';

const URL = process.env.REACT_APP_BACKEND_URL;

const Contacts = (props) => {
    const { isLoggedIn, name, email } = props;

    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 10;

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    useEffect(() => {
        if (isLoggedIn === false) redirect("/");

        fetch(URL + "/api/contacts")
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/contacts/${contactToDelete.id}`);
            setContacts(contacts.filter(contact => contact.id !== contactToDelete.id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const handleShowDeleteModal = (contact) => {
        setContactToDelete(contact);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const indexOfLastPage = currentPage * contactsPerPage;
    const indexOfFistPage = indexOfLastPage - contactsPerPage;
    const currentContacts = contacts.slice(indexOfFistPage, indexOfLastPage);
    console.log(currentContacts);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                        Contacts
                    </h1>
                    <div className="clearfix" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Content</th>
                                <th>Send Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentContacts.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.title}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.content}</td>
                                    <td>{moment(contact.send_date).format('YYYY-MM-DD HH:mm')}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            as={Link}
                                            to={`mailto:${contact.email}`}>
                                            Mail To <FaEnvelopeOpen />
                                        </Button>{' '}                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination>
                        {Array.from({ length: Math.ceil(contacts.length / contactsPerPage) }, (_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </div>

            <Modal show={showDeleteModal} centered={true} style={{ opacity: 1 }} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the page "{contactToDelete?.title}"?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Contacts;