import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Form({ onNewEntry }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewEntry({
      name: event.target.elements.name.value,
      thoughts: event.target.elements.thoughts.value,
      id: nanoid(),
      edit: false,
    });
    event.target.reset();
  };

  return (
    <StyledFieldset>
      <legend>
        <b>Submit your ideas</b>
      </legend>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="thoughts">Your Thoughts</label>
        <textarea id="thoughts" name="thoughts" required></textarea>
        <label htmlFor="name" name="name">
          Your Name
        </label>
        <input id="name" name="name" required maxLength={15}></input>
        <StyledSubmitBtn>Submit</StyledSubmitBtn>
      </StyledForm>
    </StyledFieldset>
  );
}

const StyledFieldset = styled.fieldset`
  padding: 2rem;
  width: 40%;
  margin: auto;
  border: 2px dotted black;
  position: static;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 30%;
  }
`;

const StyledSubmitBtn = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;

  padding: 1.2em 2.8em;
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
`;
