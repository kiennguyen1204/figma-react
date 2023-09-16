import { ChangeEvent, ReactElement, memo } from 'react';

// constants
import { INPUT_SIZE, INPUT_TYPE, INPUT_VARIANT } from 'constants/enums';

// styles
import './index.css';

export interface InputProps {
  name: string | undefined;
  value: string | undefined;
  placeholder?: string | undefined;
  title?: string | undefined;
  variant?: INPUT_VARIANT;
  type?: INPUT_TYPE | undefined;
  size?: INPUT_SIZE | undefined;
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
}: InputProps | any): ReactElement => (
  <>
    {title ? (
      <div className="text-wrapper">
        <label>{title}</label>
        <input
          className={`form-control text-input ${variant ? `input-${variant}` : ''} ${size ? `input-${size}` : ''}`}
          type={type ? type : INPUT_TYPE.TEXT}
          name={name ? name : ''}
          value={value ? value : ''}
          placeholder={placeholder ? placeholder : ''}
          onChange={onChange ?? undefined}
        />
      </div>
    ) : (
      <input
        className={`form-control text-input ${variant ? `input-${variant}` : ''} ${size ? `input-${size}` : ''}`}
        type={type ? type : INPUT_TYPE.TEXT}
        name={name ? name : ''}
        value={value ? value : ''}
        placeholder={placeholder ? placeholder : ''}
        onChange={onChange ?? undefined}
      />
    )}
  </>
);

export default memo(Input);
