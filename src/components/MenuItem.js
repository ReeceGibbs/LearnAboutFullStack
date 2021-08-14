import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

//our menu item component
const MenuItem = ({ logo, label, body, modalType, headerLogo}) => {

    const [hover, setHover] = useState(false);

    const toggleHover = () => setHover(!hover);

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`animate__animated ${hover ? "animate__tada" : ""} p-2 bd-highlight menu-item`}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={handleShow}>
                <img src={logo} alt="logo" />
                <br />
                {label}
            </div>
            <Modal show={showModal} onHide={handleClose} className={modalType}>
                <Modal.Header>
                    <Modal.Title><img className="header-logo" src={headerLogo}/>{label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

//we define our default properties in the event an argument is not passed
MenuItem.defaultProps = {
    text: 'this is a menu item',
    body: 'this is a body',
    modalType: 'normal-modal' 
}

export default MenuItem
