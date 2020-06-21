import React from 'react';

const Modal = props => {
    const { title, onClose, children } = props;

    return (
        <div className="overlay">
            <div className="modal">
                <div clasName="header">
                    <span className="title">{title}</span>
                    <button onClick={onClose}>&times;</button>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;