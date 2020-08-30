import React from "react";
import styled from "styled-components";

import { ReactComponent as DeleteLogo } from "assets/trash.svg";

interface Props {
  text: string;
  onDelete: () => void;
}

export const ListItem: React.FC<Props> = ({ text, onDelete }) => {
  return (
    <Item>
      <div>{text}</div>
      <button onClick={onDelete}>
        <DeleteLogo />
      </button>
    </Item>
  );
};

const Item = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem 1rem;
  background: var(--white);
  margin-bottom: 1rem;
  max-width: 400px;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    flex: 1;
  }

  button {
    margin: 0 0.5rem;
    border: none;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
