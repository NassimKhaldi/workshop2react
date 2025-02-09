import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.counter}>Compteur : {count}</h1>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => setCount(count + 1)}>+{count}</button>
        <button style={styles.button} onClick={() => setCount(count - 1)}>-{count}</button>
        <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px",
    margin: "auto",
    backgroundColor: "#f9f9f9"
  },
  counter: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white"
  }
};

export default Counter;
