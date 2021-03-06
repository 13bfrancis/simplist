import styled from "styled-components";

export const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem 4rem;
  font-size: 1.1rem;
  color: var(--white);
  background: var(--primary);
  border: none;
  outline-color: var(--primary);
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
