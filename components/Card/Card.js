import styled from "styled-components";

import { nanoid } from "nanoid";
export default function Card({ entries }) {
  return (
    <StyledList>
      {entries.map((entry) => (
        <StyledListItem key={nanoid()}>
          {" "}
          <p>{entry.thoughts}</p>
          <p>{entry.name}</p>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5rem;
  list-style: none;
  padding: 5rem;
  margin: auto;
`;

const StyledListItem = styled.li`
  border: 3px solid black;
  padding: 1rem;
`;
