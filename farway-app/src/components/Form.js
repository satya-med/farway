import { useState } from "react";

const Form = ({ onAddItems }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!description) return;
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      onAddItems(newItem);
      setDescription("");
      setQuantity(1);
    };
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What to need for your 😍 trip ?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
        </select>
        <input
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    );
  };

export default Form;
  