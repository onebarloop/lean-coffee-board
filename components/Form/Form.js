export default function Form({ onNewEntry }) {
  const submit = (event) => {
    event.preventDefault();
    onNewEntry({
      name: event.target.elements.name.value,
      thoughts: event.target.elements.thoughts.value,
    });
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="thoughts">Your Thoughts</label>
      <textarea id="thoughts" name="thoughts"></textarea>
      <label htmlFor="name" name="name">
        Your Name
      </label>
      <input id="name" name="name>"></input>
      <button>Submit</button>
    </form>
  );
}
