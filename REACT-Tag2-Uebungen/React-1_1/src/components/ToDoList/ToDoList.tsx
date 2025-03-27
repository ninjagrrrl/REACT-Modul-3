import ToDoItem from "../ToDoItem/ToDoItem";

type toDoItem = {
  toDo: string;
};

const toDoItemsArray: toDoItem[] = [
  {
    toDo: "Buy Groceries",
  },
  {
    toDo: "Send Email",
  },
  {
    toDo: "Finish Assignment",
  },
  {
    toDo: "Write Blog",
  },
  {
    toDo: "Bake Cake",
  },
];

const ToDoList = () => {
  return (
    <>
      {toDoItemsArray.map((singleToDoItem) => (
        <ToDoItem task={singleToDoItem.toDo} />
      ))}
    </>
  );
};

export default ToDoList;
