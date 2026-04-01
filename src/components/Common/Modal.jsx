import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Modal.css';
import Button from './Button';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className = '',
}) => {
  const modalClass = `custom-modal modal-${size} ${className}`;

  return (
    <Popup
      open={isOpen}
      closeOnDocumentClick
      onClose={onClose}
      modal
      nested
      contentStyle={{}}
    >
      <div className={modalClass}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </Popup>
  );
};

export default Modal;
