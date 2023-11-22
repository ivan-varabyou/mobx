import { observer } from "mobx-react-lite";
import { CounterStore } from "../../stores/counter-store";
import Counter from "../counter";

const counter1 = new CounterStore();
const counter2 = new CounterStore();

const Wrapper = observer(() => {
  return (
    <>
      <Counter {...counter1} total={counter1.total} />
      <Counter {...counter2} total={counter2.total} />
    </>
  );
});

export default Wrapper;
