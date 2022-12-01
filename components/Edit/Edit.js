import styled from "styled-components";

export default function Edit({ thoughts, id, edit, onChange, onEdit }) {
  const handleEdit = (event) => {
    event.preventDefault();
    onChange(id, event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    onEdit(id, edit);
  };

  return (
    <StyledEdit onSubmit={save}>
      <label htmlFor="edit">Edit your entry</label>
      <textarea
        name="edit"
        id="edit"
        onChange={handleEdit}
        value={thoughts}
      ></textarea>
      <button>Save</button>
    </StyledEdit>
  );
}

const StyledEdit = styled.form`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  background-color: black;
  color: var(--yellow);
  padding: 0.5rem;
  border-radius: 0.6em;

  button {
    align-self: flex-end;
    border: none;
    color: var(--yellow);
    background-color: #e74c3c;
    padding: 0.5rem;

    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    color: #e74c3c;
    cursor: pointer;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1;

    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      color: #fff;
      outline: 0;
      box-shadow: 0 0 40px 40px #e74c3c inset;
    }
  }
`;
