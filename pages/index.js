import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useState } from "react";

export default function HomePage() {
  const [entries, setEntries] = useState([]);

  const handleNewEntry = (newEntry) => {
    setEntries([{ ...newEntry }, ...entries]);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  console.log(entries);

  return (
    <>
      <Header />
      <Card entries={entries} onDelete={handleDelete} />
      <Form onNewEntry={handleNewEntry} />
    </>
  );
}
