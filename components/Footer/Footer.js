import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h1>Lean Coffee Board</h1>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: var(--blue);
  color: var(--yellow);
  padding: 2rem;
  margin-top: 2rem;
  text-align: end;
`;
