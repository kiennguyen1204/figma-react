import { MouseEvent } from 'react';

// constants
import { STATUS } from 'constants/enums';

// style
import './index.css';

interface Props {
  status: string;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<Props> = ({ status, message, onClose }) => {
  const handleButtonCloseClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    onClose();
  };

  const toastClass = status === STATUS.SUCCESS ? 'success' : 'error';

  return (
    <div className={`toast ${toastClass}`}>
      <div className="notification">
        {status === STATUS.SUCCESS ? (
          <span className="material-symbols-outlined">done</span>
        ) : (
          <span className="material-symbols-outlined">warning</span>
        )}
        <div className="message">
          <p className="content">{message}</p>
        </div>
        <button
          onClick={handleButtonCloseClick}
          type="button"
          className="btn-close"
          aria-label="Close"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Toast;
