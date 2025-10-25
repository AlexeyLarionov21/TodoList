import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../features/themeList";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link;
  };

  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getActiveClass}>
          ToDo
        </NavLink>
        <NavLink to="/list" className={getActiveClass}>
          List
        </NavLink>
        <div className={classes.toggleButton}>
          <button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
        </div>
      </div>
    </header>
  );
};
