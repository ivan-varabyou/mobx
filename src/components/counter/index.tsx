import { observer } from "mobx-react-lite";
import counterStore from "../../stores/counter-store";

const Counter = observer(() => {
  // const [count, setCount] = useState(0);
  const { count, decrement, increment, total } = counterStore;

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
});

export default Counter;
