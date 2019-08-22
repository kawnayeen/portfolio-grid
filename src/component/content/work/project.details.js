import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import ModalFooter from "reactstrap/es/ModalFooter";
import Button from "reactstrap/es/Button";

const ProjectDetails = () => {
    return ReactDOM.createPortal(
        <Modal isOpen={true}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>Hello body</ModalBody>
            <ModalFooter>
                <Button color="primary">Do Something</Button>
            </ModalFooter>
        </Modal>,
        document.getElementById('modal')
    );
};

export default ProjectDetails;
