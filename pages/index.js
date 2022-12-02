import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const [entries, setEntries] = useState([]);

  const handleNewEntry = (newEntry) => {
    setEntries([...entries, { ...newEntry }]);
  };

  async function handleDelete(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
  }

  async function handleChange(id, thoughts) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, thoughts };
        return entry;
      })
    );
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: thoughts }),
      }
    );
  }

  const handleEdit = (id) => {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, edit: !entry.edit };
        return entry;
      })
    );
  };

  async function getQuestions() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    const data = await response.json();

    const newContent = data.map((item) => ({
      name: item.name,
      thoughts: item.text,
      id: item.id,
      edit: false,
    }));
    console.log("GET");

    setEntries(newContent);
  }
  useEffect(() => {
    const interval = setInterval(getQuestions, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Header />

      <Card
        entries={entries}
        onDelete={handleDelete}
        onChange={handleChange}
        onEdit={handleEdit}
      />

      <Form onNewEntry={handleNewEntry} />
      <Footer />
    </>
  );
}
