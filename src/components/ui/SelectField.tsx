import styles from './SelectField.module.scss';

interface SelectFieldProps {
  label?: boolean;
  labelText?: string;
  htmlFor: string;
  id: string;
  name: string;

  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label = true,
  labelText,
  htmlFor,
  id,
  name,
  handleChange,
}: SelectFieldProps) {
  return (
    <>
      {label ? (
        <label className={styles.label} htmlFor={htmlFor}>
          {labelText}
        </label>
      ) : null}
      <select
        onChange={handleChange}
        className={styles.select}
        id={id}
        name={name}
      >
        <option value="football">Football ⚽️</option>
        <option value="slots">Slots 🎰</option>
        <option value="poker">Poker ♠️</option>
      </select>
    </>
  );
}
