import { ToDo } from "../../models/todo-item";
import "./ToDoList.scss";
import { ToDoContainer } from "./ToDoList.styled";
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

export const ToDoList = (props: {
  todoes: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todoes
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const uncheckedList = () => {
    return props.todoes
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <ToDoContainer>
      <ul className="todo-list failed">{checkedList()}</ul>
      <ul className="todo-list completed">{uncheckedList()}</ul>
    </ToDoContainer>
  );
};
