import CartButton from "../Cart/CartButton";
import { useDispatch } from "react-redux";
import { uiSliceAction } from "../../store/ui-slice";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const showCartToggler = () => {
    dispatch(uiSliceAction.toggle());
  };
  return (
    <header className={classes.header}>
      <h1>Advance Redux Cart</h1>
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
