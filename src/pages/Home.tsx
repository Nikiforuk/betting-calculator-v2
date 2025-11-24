import BettingForm from '../components/ui/BettingForm';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <section className={styles.content}>
      <BettingForm />
    </section>
  )
}
