import styles from './Form.module.scss';

interface Props {
  handler: (value: number) => void;
  amount: number;
}

export const Form: React.FC<Props> = ({ handler, amount }) => {
  return (
    <>
      <h1 className={styles.title}>Pay Alan</h1>
      <div className={styles.form}>
        <button type="button" onClick={() => handler(amount - 1)} disabled={amount === 1}>
          -
        </button>
        <p>£{String(amount)}</p>
        <button type="button" onClick={() => handler(amount + 1)} disabled={amount === 500}>
          +
        </button>
      </div>
    </>
  );
};
