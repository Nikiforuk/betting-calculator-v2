import React from 'react';
import { useState } from 'react';

import styles from './BettingForm.module.scss';
import ButtonAction from './ButtonAction';
import InputField from './InputField';
import SelectField from './SelectField';
import logoImg from '../../assets/images/logo.png';
import type { SaveBetProps } from '../../pages/Home';

interface BettingFormProps {
  setData: React.Dispatch<React.SetStateAction<SaveBetProps[]>>;
}

export default function BettingForm({ setData }: BettingFormProps) {
  const [stake, setStake] = useState('');
  const [coefficient, setCoefficient] = useState('');
  const [gameType, setGameType] = useState('football');
  const [potentialWin, setPotentialWin] = useState('');
  const [firstError, setFirstError] = useState('');
  const [secondError, setSecondError] = useState('');

  const isValidValue = (value: string) => {
    return /^(\d+(\.\d+)?)$/.test(value) && Number(value) > 0;
  };

  const calculateWin = () => {
    if (isValidValue(stake) && isValidValue(coefficient)) {
      const win = parseFloat(stake) * parseFloat(coefficient);
      setPotentialWin(win.toFixed(2));
    } else {
      setPotentialWin('0.00');
    }
  };

  const handleChangeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStake(value);

    if (!isValidValue(value)) {
      setFirstError('Please enter a bid here');
      setPotentialWin('0.00');
    } else if (isValidValue(coefficient)) {
      setFirstError('');
      const win = parseFloat(value) * parseFloat(coefficient);
      setPotentialWin(win.toFixed(2));
    } else {
      setFirstError('');
      setPotentialWin('0.00');
    }
  };

  const handleChangeCoefficient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCoefficient(value);

    if (!isValidValue(value)) {
      setSecondError('Please enter a coefficient here');
      setPotentialWin('0.00');
    } else if (isValidValue(stake)) {
      setSecondError('');
      const win = parseFloat(stake) * parseFloat(value);
      setPotentialWin(win.toFixed(2));
    } else {
      setSecondError('');
      setPotentialWin('0.00');
    }
  };

  const handleChangeGameType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGameType(e.target.value);
  };

  const handleClickSave = () => {
    calculateWin();

    if (!stake || !coefficient || !potentialWin) {
      setFirstError('Please enter a bid here');
      setSecondError('Please enter a coefficient here');
      return;
    }

    const newBet: SaveBetProps = { stake, coefficient, gameType, potentialWin };

    setData((prev) => {
      const updated = [...prev, newBet].slice(-5);
      localStorage.setItem('historyBetts', JSON.stringify(updated));
      return updated;
    });

    setStake('');
    setCoefficient('');
    setGameType('football');
    setPotentialWin('0.00');
  };

  return (
    <form className={styles.container}>
      <img className={styles.logo} src={logoImg} alt="logo-image" />
      <div className={styles.form_box}>
        <InputField
          labelText="Bet amount:"
          htmlFor="stake"
          id="stake"
          name="stake"
          placeholder="Enter the amount"
          idError="first-error"
          errorText={firstError}
          value={stake}
          handleChange={handleChangeStake}
        />
      </div>
      <div className={styles.form_box}>
        <InputField
          labelText="Coefficient:"
          htmlFor="odds"
          id="odds"
          name="odds"
          placeholder="For example, 2.5"
          idError="second-error"
          errorText={secondError}
          value={coefficient}
          handleChange={handleChangeCoefficient}
        />
      </div>
      <div className={styles.form_box}>
        <SelectField
          labelText="Game type:"
          htmlFor="gameType"
          id="gameType"
          name="gameType"
          handleChange={handleChangeGameType}
        />
      </div>
      <div className={styles.form_box}>
        <ButtonAction handleClick={handleClickSave} text="Save your bet" />
      </div>
      <div className={styles.form_result}>
        <p className={styles.form_result_text}>Potential Win:</p>
        <span className={styles.form_result_value}>{potentialWin ? potentialWin : '0.00'}</span>
      </div>
    </form>
  );
}
