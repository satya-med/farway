import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleRemoveItems = (id) => {
    setItems((items) => items.filter((item) => id !== item.id));
  };

  const handleToggleItem = (id) => {
    setItems((items) => items.map(item => item.id === id ? {...item,packed : !item.packed} : item));
  }

  const handleClearItems = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onRemoveItems={handleRemoveItems} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Stats items = {items}/>
    </div>
  );
}


export default App;
