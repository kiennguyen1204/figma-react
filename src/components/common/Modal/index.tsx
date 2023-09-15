import { ReactNode, memo } from 'react';

// style
import './index.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => (
  <>
    {isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <button className="modal-close-button" onClick={onClose} type="button">
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    )}
  </>
);

export default memo(Modal);
