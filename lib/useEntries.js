import { useState } from "react";

export default function useEntries(url) {
  const [entries, setEntries] = useState([]);

  const handleNewEntry = (newEntry) => {
    setEntries([...entries, { ...newEntry }]);
  };

  async function handleDelete(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
    await fetch(url + id, {
      method: "DELETE",
    });
  }

  async function handleChange(id, thoughts) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, thoughts };
        return entry;
      })
    );
    await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: thoughts }),
    });
  }

  const handleEdit = (id) => {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, edit: !entry.edit };
        return entry;
      })
    );
  };

  return {
    entries,
    setEntries,
    handleChange,
    handleEdit,
    handleNewEntry,
    handleDelete,
  };
}

//Codeschnipsel für stoppen des timers

//   const editOn = entries.find((entry) => entry.edit === true);
//  console.log(editOn);
