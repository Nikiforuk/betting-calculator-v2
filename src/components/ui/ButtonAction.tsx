import styles from './ButtonAction.module.scss';

interface ButtonActionProps {
  text: string;
  handleClick: () => void;
}

export default function ButtonAction({ text, handleClick }: ButtonActionProps) {
  return (
    <>
      <button type="button" className={styles.button} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
