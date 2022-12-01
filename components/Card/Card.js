import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

import Edit from "../Edit/Edit";

export default function Card({ entries, onDelete, onChange, onEdit }) {
  return (
    <StyledList>
      {entries.map((entry) => (
        <StyledCard key={entry.id}>
          <StyledListItem>
            <p>
              by <b>{entry.name}</b>
            </p>
            <button onClick={() => onDelete(entry.id)}>
              <FaTrashAlt />
            </button>
            <button onClick={() => onEdit(entry.id, entry.edit)}>Edit</button>
            <p className="thoughts">{entry.thoughts}</p>
          </StyledListItem>
          {entry.edit ? (
            <Edit
              thoughts={entry.thoughts}
              id={entry.id}
              onChange={onChange}
              onEdit={onEdit}
              edit={entry.edit}
            />
          ) : null}
        </StyledCard>
      ))}
    </StyledList>
  );
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5rem;
  list-style: none;
  padding: 5rem;
  margin: auto;
  align-items: start;
`;

const StyledListItem = styled.li`
  border: 3px solid black;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 3fr 1fr 1fr;

  .thoughts {
    margin-top: 2rem;
    grid-column-start: 1;
    grid-column-end: 4;
  }

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
