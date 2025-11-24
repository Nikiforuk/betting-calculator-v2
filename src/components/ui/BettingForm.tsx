import SelectField from './SelectField';
import ButtonAction from './ButtonAction';
import InputField from './InputField';
import logoImg from '../../assets/images/logo.png';
import styles from './BettingForm.module.scss';


export default function BettingForm() {
  return (
    <form className={styles.container}>
      <img className={styles.logo} src={logoImg} alt="logo-image" />
      <div className={styles.form_box}>
        <InputField
          labelText='Bet amount:'
          htmlFor='stake'
          id='stake'
          name='stake'
          placeholder='Enter the amount'
          idError='first-error'
          errorText='Please enter a bid here'
        />
      </div>
      <div className={styles.form_box}>
        <InputField
          labelText='Coefficient:'
          htmlFor='odds'
          id='odds'
          name='odds'
          placeholder='For example, 2.5'
          idError='second-error'
          errorText='Please enter a coefficient here'
        />
      </div>
      <div className={styles.form_box}>
        <SelectField
          labelText='Game type:'
          htmlFor='gameType'
          id='gameType'
          name='gameType'
          selectText='type'
        />
      </div>
      <div className={styles.form_box}>
        <ButtonAction />
      </div>
      <div className={styles.form_result}>
        <p className={styles.form_result_text}>Potential Win:</p>
        <span className={styles.form_result_value}>0.00</span>
      </div>
    </form>
  )
}
