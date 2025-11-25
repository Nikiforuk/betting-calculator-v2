import styles from './InputField.module.scss';

interface InputFieldProps {
  label?: boolean;
  labelText?: string;
  value: string;
  htmlFor: string;
  typeField?: string;
  id: string;
  name: string;
  placeholder: string;
  idError?: string;
  errorText: string;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label = true,
  labelText,
  htmlFor,
  typeField = 'number',
  value,
  id,
  name,
  placeholder,
  idError,
  errorText,
  handleChange,
}: InputFieldProps) {
  return (
    <>
      {label ? (
        <label className={styles.label} htmlFor={htmlFor}>
          {labelText}
        </label>
      ) : null}
      <input
        className={styles.input}
        type={typeField}
        min="1"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required
        onChange={handleChange}
      />
      <span id={idError} className={styles.errorText}>
        {errorText}
      </span>
    </>
  );
}
