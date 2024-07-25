import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Table, Button, Pagination, Modal } from 'react-bootstrap';

const URL = process.env.REACT_APP_BACKEND_URL;

const Pages = (props) => {
    const { isLoggedIn, name, email } = props;

    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pagesPerPage = 10;

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [pageToDelete, setPageToDelete] = useState(null);

    useEffect(() => {
        if (isLoggedIn === false) redirect("/");

        fetch(URL + "/api/pages")
            .then(response => response.json())
            .then(data => setPages(data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/articles/${pageToDelete.id}`);
            setPages(pages.filter(page => page.id !== pageToDelete.id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting page:', error);
        }
    };

    const handleShowDeleteModal = (page) => {
        setPageToDelete(page);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const indexOfLastPage = currentPage * pagesPerPage;
    const indexOfFistPage = indexOfLastPage - pagesPerPage;
    const currentPages = pages.slice(indexOfFistPage, indexOfLastPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xxl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Button variant="primary" onClick={() => { window.location.href = '/admin/pages/add' }} className="ms-auto float-end">Add page</Button>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                        pages
                    </h1>
                    <div className="clearfix" />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPages.map(page => (
                                <tr key={page.id}>
                                    <td>{page.id}</td>
                                    <td>{page.title}</td>
                                    <td><img className="img-fluid w-20 rounded-circld" src={URL + page.image} alt={page.title} /></td>
                                    <td>{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(page.created_at))}</td>
                                    <td>
                                        <Button variant="warning" as={Link} to={`/admin/pages/edit/${page.id}`}>Edit</Button>{' '}
                                        <Button
                                            variant="danger"
                                            onClick={() => handleShowDeleteModal(page)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination>
                        {Array.from({ length: Math.ceil(pages.length / pagesPerPage) }, (_, index) => (
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
                    Are you sure you want to delete the page "{pageToDelete?.title}"?
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

export default Pages;