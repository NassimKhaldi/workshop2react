import React, { useState } from "react";

const ListManager = ({ initialItems, placeholder }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
      setItems([...items, newItem]);
      setNewItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Liste :</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button style={styles.button} onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addItem}>Ajouter</button>
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
    width: "300px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ListManager;
