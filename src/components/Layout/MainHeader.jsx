import CartButton from "../Cart/CartButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const showCartToggler = () => {
    dispatch(cartActions.showCartToggle());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={showCartToggler}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
