import { ChangeEvent, ReactElement, memo } from 'react';

// constants
import { INPUT_SIZE, INPUT_TYPE, INPUT_VARIANT } from 'constants/enums';

// styles
import './index.css';

export interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  title?: string;
  variant?: INPUT_VARIANT;
  type?: INPUT_TYPE;
  size?: INPUT_SIZE;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  value,
  placeholder,
  title,
  variant = INPUT_VARIANT.DEFAULT,
  type = INPUT_TYPE.TEXT,
  size = INPUT_SIZE.MEDIUM,
  onChange
}: InputProps): ReactElement => (
  <>
    {title ? (
      <div className="text-wrapper">
        <label>{title}</label>
        <input
          className={`text-input text-input-${variant} input-${size}`}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    ) : (
      <input
        className={`text-input text-input-${variant} input-${size}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    )}
  </>
);

export default memo(Input);
