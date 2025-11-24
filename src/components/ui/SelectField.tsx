import styles from './SelectField.module.scss';

interface SelectFieldProps {
  label?: boolean;
  labelText?: string;
  htmlFor?: string;
  id?: string;
  name?: string;
  value?: string;
  selectText?: string;
}

export default function SelectField({
  label = true,
  labelText,
  htmlFor,
  id,
  name,
  value = 'Football ⚽️',
  selectText,
}: SelectFieldProps) {
  return (
    <>
      {label ? <label className={styles.label} htmlFor={htmlFor}>{labelText}</label> : null}
      <select className={styles.select} id={id} name={name}>
        <option value={value}>{selectText}</option>
        <option value={value}>{selectText}</option>
        <option value={value}>{selectText}</option>
      </select>
    </>
  )
}
