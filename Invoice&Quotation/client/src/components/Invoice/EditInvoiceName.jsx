


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditInvoiceName = () => {
    const { id } = useParams();
    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newpaymentMode, setNewpaymentMode] = useState('');
    const [newadavacePayment, setNewadavacePayment] = useState('');
    const [newGST_or_Pan, setNewGST_or_Pan] = useState('');
    const [newcompany_type, setNewcompany_type] = useState('');
    const [showModal, setShowModal] = useState(true);
  
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuotationName = async () => {
            try {
                const response = await axios.get(`https://quotation.queuemanagementsystemdg.com/api/invoice-name/${id}`);
                if (response.data && response.data.length > 0) {
             
                    setNewName(response.data[0].invoice_name); // Set default value for input
                    setNewAddress(response.data[0].invoice_address)
                    setNewpaymentMode(response.data[0].payment_mode)
                    setNewGST_or_Pan(response.data[0].client_gst_or_pan	)
                    setNewcompany_type(response.data[0].company_type)
                    
                    // setNewadavacePayment(response.data[0].advance_payment)
                }
            } catch (error) {
                console.error('Error fetching quotation name:', error);
            }
        };
        fetchQuotationName();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(newcompany_type);
            const response = await axios.put(`https://quotation.queuemanagementsystemdg.com/api/invoice-data/${id}`, { newName,newAddress,newpaymentMode, newGST_or_Pan , newcompany_type });
            if (response.status === 200) {
                setMessage(response.data.message);
                navigate('/invoicelist');
            } else {
                setMessage(response.data.error || 'Failed to update Invoice name');
            }
        } catch (error) {
            console.error('Error updating Invoice name:', error);
            setMessage('Internal Server Error');
        }

        // Close the modal after saving
        setShowModal(false);
    };

    const handleClose = () => {
        setShowModal(false);
        navigate('/invoicelist');
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Invoice Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNewName">
                        <Form.Label>New Invoice Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter new Invoice name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                        <Form.Label className='mt-3'>New Invoice Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter new Invoice Address" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
                        <Form.Label  className='mt-3'>New Invoice Payment Mode</Form.Label>
                        <Form.Control type="text" placeholder="Enter new Invoice Payment mode" value={newpaymentMode} onChange={(e) => setNewpaymentMode(e.target.value)} />
                        <Form.Label  className='mt-3'>New Invoice GST_or_Pan</Form.Label>
                        <Form.Control type="text" placeholder="Enter new Invoice Payment mode" value={newGST_or_Pan} onChange={(e) => setNewGST_or_Pan(e.target.value)} />
                        <Form.Label  className='mt-3'>New Invoice Company</Form.Label>
                        <Form.Control type="text" placeholder="Enter new Invoice Payment mode" value={newcompany_type} onChange={(e) => setNewcompany_type(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-3'>
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            {message && <p>{message}</p>}
        </Modal>
    );
};

export default EditInvoiceName;

