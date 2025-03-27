// - Dieses Mal sollst du in React eine To-Do-Liste nachbauen.
// - Erstelle dir eine “Datenbank” (ein Array von Objekten).
// - Nutze props um den Text einzufügen!
// # ☝🏼 Hinweis
// - Erstelle eine Komponente TodoList & TodoItem, die ToDos werden mit props von der TodoList an die TodoItems weiter gegeben.

import ToDoList from "../components/ToDoList/ToDoList";

const Home = () => {
  return (
    <>
      <h1>MY TO-DOS</h1>
      <ToDoList />
    </>
  );
};
export default Home;
