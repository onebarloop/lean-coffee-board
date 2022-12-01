import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Lean Coffee Board</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--blue);
  color: var(--yellow);
  padding: 2.5rem;
`;
