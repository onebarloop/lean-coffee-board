import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useState } from "react";

export default function HomePage() {
  const [entries, setEntries] = useState([{ name: "", entry: "" }]);

  const handleNewEntry = (newEntry) => {
    setEntries([{ ...newEntry }, ...entries]);
  };

  console.log(entries);

  return (
    <>
      <Header />
      <Card entries={entries} />
      <Form onNewEntry={handleNewEntry} />
    </>
  );
}

// function handleCreateEntry(data) {
//   const newEntry = data;
//   setEntries([
//     { isFavourite: false, id: nanoid(), date: actualDate, ...newEntry },
//     ...entries,
//   ]);
// }
