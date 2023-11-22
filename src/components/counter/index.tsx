type Props = {
  increment: (value: number) => void;
  decrement: (value: number) => void;
  count: number;
  total: number;
};

const Counter = ({ count, decrement, increment, total }: Props) => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        count {count}, total {total}
      </h1>
      <div className="card">
        <button onClick={() => decrement(1)}>-</button>

        <button onClick={() => increment(1)}>+</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Counter;
