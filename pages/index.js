import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import useEntries from "../lib/useEntries";
import Footer from "../components/Footer/Footer";
import useFetch from "../lib/usefetch";

export default function HomePage() {
  const {
    entries,
    setEntries,
    handleChange,
    handleEdit,
    handleNewEntry,
    handleDelete,
  } = useEntries(
    "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/"
  );

  useFetch(
    setEntries,
    "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
  );

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
