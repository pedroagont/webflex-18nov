function Counter({ count, handleClickDecrement, handleClickIncrement }) {

  return (
    <section>
      <h3>My counter: { count }</h3>
      <button onClick={handleClickDecrement}>Decrement</button>
      <button onClick={handleClickIncrement}>Increment</button>
    </section>
  );
}

export default Counter;
