import { useEffect, useState } from 'react';

import BettingForm from '../components/ui/BettingForm';
import HistoryBetts from '../components/ui/HistoryBetts';

import styles from './Home.module.scss';

export interface SaveBetProps {
  stake: string;
  coefficient: string;
  gameType: string;
  potentialWin: string;
}

export default function Home() {
  const [history, setHistory] = useState<SaveBetProps[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('historyBetts') || '[]');
    setHistory(saved.slice(-5));
  }, []);

  return (
    <section className={styles.content}>
      <HistoryBetts history={history} />
      <BettingForm setData={setHistory} />
    </section>
  );
}
