import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const [entries, setEntries] = useState([]);
  console.log(entries);

  const handleNewEntry = (newEntry) => {
    setEntries([{ ...newEntry }, ...entries]);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleChange = (id, thoughts) => {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) return { ...entry, thoughts };
        return entry;
      })
    );
  };

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

    data.map((entry) =>
      handleNewEntry({
        name: entry.name,
        thoughts: entry.text,
        id: entry.id,
        edit: false,
      })
    );
  }
  useEffect(() => {
    getQuestions();
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
