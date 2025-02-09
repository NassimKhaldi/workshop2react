import React, { useState } from "react";

const ColorBox = ({ initialColor, colorOptions }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, backgroundColor: color }}></div>
      <button style={styles.button} onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  box: {
    width: "100px",
    height: "100px",
    border: "2px solid black",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ColorBox;
