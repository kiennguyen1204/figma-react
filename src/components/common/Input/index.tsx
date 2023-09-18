import { ChangeEvent, ReactElement, memo } from 'react';

// constants
import { INPUT_SIZE, INPUT_TYPE, INPUT_VARIANT } from 'constants/enums';

// styles
import './index.css';

export interface InputProps {
  name?: string;
  inputClass?: string;
  value?: string;
  placeholder?: string;
  title?: string;
  variant?: INPUT_VARIANT;
  type?: INPUT_TYPE;
  size?: INPUT_SIZE;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  inputClass,
  value,
  placeholder,
  title,
  variant = INPUT_VARIANT.DEFAULT,
  type = INPUT_TYPE.TEXT,
  size = INPUT_SIZE.MEDIUM,
  onChange
}: InputProps | any): ReactElement | any => (
  <>
    {title ? (
      <div className="text-wrapper">
        <label>{title}</label>
        <input
          className={`form-control text-input-default ${inputClass ? inputClass : ''} ${variant ? `text-input input-${variant}` : ''} ${size ? `input-${size}` : ''}`}
          type={type ? type : INPUT_TYPE.TEXT}
          name={name && name}
          value={value && value}
          placeholder={placeholder && placeholder}
          onChange={onChange ?? undefined}
        />
      </div>
    ) : (
      value ? (
        <input
          className={`form-control text-input-default ${inputClass && inputClass} ${variant && `text-input input-${variant}`} ${size && `input-${size}`}`}
          type={type ? type : INPUT_TYPE.TEXT}
          name={name && name}
          value={value && value}
          onChange={onChange ?? undefined}
        />
        ) : (
          <input
            className={`form-control text-input-default ${inputClass && inputClass} ${variant && `text-input input-${variant}`} ${size && `input-${size}`}`}
            type={type ? type : INPUT_TYPE.TEXT}
            name={name && name}
            placeholder={placeholder && placeholder}
            onChange={onChange ?? undefined}
          />
      )
    )}
  </>
);

export default memo(Input);
