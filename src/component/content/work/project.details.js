import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "reactstrap/es/Modal";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import ModalFooter from "reactstrap/es/ModalFooter";
import Button from "reactstrap/es/Button";

const ProjectDetails = ({onClose, project}) => {
    return ReactDOM.createPortal(
        <Modal isOpen={true}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>{project.getDetailsUrl()}</ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => onClose()}>Close</Button>
            </ModalFooter>
        </Modal>,
        document.getElementById('modal')
    );
};

export default ProjectDetails;
