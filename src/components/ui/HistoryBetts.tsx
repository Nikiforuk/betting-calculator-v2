import styles from './HistoryBetts.module.scss';

interface HistoryProps {
  stake: string;
  coefficient: string;
  gameType: string;
  potentialWin: string;
}

interface HistoryBettsProps {
  history: HistoryProps[];
}

export default function HistoryBetts({ history }: HistoryBettsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Last 5 bets</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Bet</th>
            <th>Coefficient</th>
            <th>Game</th>
            <th>Win</th>
          </tr>
        </thead>
        <tbody>
          {history.length === 0 ? (
            <tr>
              <td colSpan={4} className={styles.empty}>
                No saved bets yet
              </td>
            </tr>
          ) : (
            history.map((item, i) => (
              <tr key={i}>
                <td>{item.stake}</td>
                <td>{item.coefficient}</td>
                <td>{item.gameType}</td>
                <td>{item.potentialWin}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
