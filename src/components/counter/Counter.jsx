import { useState } from "react";
import styles from "./counter.module.css";

function Counter({ title, initialNum }) {
  const [count, setCount] = useState(initialNum);
  const currentColor = count === 0 ? styles["counter__result--zero"] : count > 0 ? styles["counter__result--positive"] : styles["counter__result--negative"];

  const minusLimit = () => {
    // if (count === 0) {
    //   return;
    // }
    setCount(count - 1);
  };

  return (
    <div className={styles.counter}>
      <h2 className={styles.counter__title}>{title}</h2>
      <span className={`${styles.counter__result} ${currentColor}`}>{count}</span>
      <div className={styles.counter__edit}>
        <button className="btn btn--minus" onClick={minusLimit}>
          -
        </button>
        <button className="btn btn--reset" onClick={() => setCount(initialNum)}>
          reset
        </button>
        <button className="btn btn--plus" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
