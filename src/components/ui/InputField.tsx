import styles from './InputField.module.scss';

interface InputFieldProps {
  label?: boolean;
  labelText?: string;
  htmlFor?: string;
  typeField?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  idError?: string;
  errorText?: string;
}

export default function InputField({
  label = true,
  labelText,
  htmlFor,
  typeField = 'number',
  id,
  name,
  placeholder,
  // idError,
  // errorText,
}: InputFieldProps) {
  return (
    <>
      {label ? <label className={styles.label} htmlFor={htmlFor}>{labelText}</label> : null}
      <input
        className={styles.input}
        type={typeField}
        min="1"
        id={id}
        name={name}
        placeholder={placeholder}
        required
      />
      {/* <span id={idError} className={styles.errorText}>{errorText}</span> */}
    </>
  )
}
