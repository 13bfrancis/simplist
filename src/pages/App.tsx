import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { firebase, db } from "firebaseSetup/config";
import { Title } from "components/Title";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/plus.svg";
import { ListItem } from "components/ListItem";
import { AuthContext } from "context/AuthContext";

interface Todo {
  id: string;
  userId: string;
  item: string;
}

// need to break app out into smaller components
export const App = () => {
  const currentUser = useContext(AuthContext);
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (!currentUser) return;

    const cleanup = db
      .collection("todos")
      .where("userId", "==", currentUser.uid)
      .onSnapshot((querySnap) => {
        const todoList: Todo[] = [];

        querySnap.forEach((doc) => {
          todoList.push({
            id: doc.id,
            item: doc.data().todo,
            userId: currentUser?.uid,
          } as Todo);
        });

        setTodos([...todoList]);
      });

    return cleanup;
  }, [currentUser]);

  const handleDeleteItem = async (id: string) => {
    await db.collection("todos").doc(id).delete();
  };

  const handleSignOutClick = async () => {
    firebase.auth().signOut();
  };

  const handleAddButtonClick = async () => {
    await db
      .collection("todos")
      .add({ todo: newTodoText, userId: firebase.auth().currentUser?.uid });

    setNewTodoText("");
  };

  return (
    <>
      <header>
        <Nav>
          <NavItems>
            <li>
              <Title style={{ textAlign: "left" }}>Simplist</Title>
            </li>
            <li>
              <StyledLink to="/sign-in" onClick={handleSignOutClick}>
                Sign Out
              </StyledLink>
            </li>
          </NavItems>
        </Nav>
      </header>
      <AddSection>
        <AddButton onClick={handleAddButtonClick}>
          <Logo />
        </AddButton>
        <InputContainer>
          <AddInput
            type="text"
            placeholder="e.g. Get Milk"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
        </InputContainer>
      </AddSection>
      <MainContent>
        <ListContainer>
          {todos.length === 0 ? (
            <NoTodosText>Go ahead and add your first To Do Item</NoTodosText>
          ) : (
            <>
              {todos.map(({ id, item }) => (
                <ListItem
                  text={item}
                  key={id}
                  onDelete={() => handleDeleteItem(id)}
                />
              ))}
            </>
          )}
        </ListContainer>
      </MainContent>
    </>
  );
};

const Nav = styled.nav``;
const NoTodosText = styled.p`
  color: var(--white);
`;
const NavItems = styled.ul`
  margin-top: 0;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: var(--primary);
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const AddInput = styled.input`
  font-size: 1rem;
  padding: 1rem 0.5rem;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  border-radius: 1rem;
  border: none;
`;

const AddSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  padding: 1rem;
  box-sizing: border-box;
`;

const ListContainer = styled.ul`
  margin: 1rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  list-style: none;
`;
