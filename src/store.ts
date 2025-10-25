import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer, { TodoState } from "./features/todolist";
import themeReducer from "./features/themeList";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

const rootReducer = combineReducers({
  todoList: todoReducer,
  themeList: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
