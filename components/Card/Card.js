import styled from "styled-components";

import Entry from "../Entry/Entry";

export default function Card({ entries, onDelete, onChange, onEdit }) {
  return (
    <StyledList>
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          onDelete={onDelete}
          onChange={onChange}
          onEdit={onEdit}
          {...entry}
        />
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5rem;
  list-style: none;

  margin: auto;
  align-items: start;
`;
