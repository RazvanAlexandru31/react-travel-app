import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [allItems, setAllitems] = useState([]);

  const getData = (data) => {
    console.log(data);
    setAllitems((prevItem) => [...prevItem, data]);
  };

  const deleteData = (id) => {
    setAllitems((prevItem) => prevItem.filter((item) => id !== item.id));
  };

  const toggleItem = (id) => {
    setAllitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) {
      setAllitems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form getData={getData} />
      <PackingList
        data={allItems}
        deleteData={deleteData}
        toggleItem={toggleItem}
        clearList={clearList}
      />
      <Stats allItems={allItems} />
    </div>
  );
}

export default App;
