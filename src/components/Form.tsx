interface Props {
  handler: (value: number) => void;
  amount: number;
}

export const Form: React.FC<Props> = ({ handler, amount }) => {
  return (
    <div>
      <button type="button" onClick={() => handler(amount - 1)} disabled={amount === 1}>
        -
      </button>
      <input type="number" value={String(amount)} onChange={e => handler(Number(e.target.value))} />
      <button type="button" onClick={() => handler(amount + 1)} disabled={amount === 500}>
        +
      </button>
    </div>
  );
};
