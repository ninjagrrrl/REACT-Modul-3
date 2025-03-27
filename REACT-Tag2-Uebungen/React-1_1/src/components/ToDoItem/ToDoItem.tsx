type toDoItemProps = {
  task: string;
};

const ToDoItem = (props: toDoItemProps) => {
  console.log(props);

  return (
    <div>
      <p>{props.task}</p>
    </div>
  );
};

export default ToDoItem;
