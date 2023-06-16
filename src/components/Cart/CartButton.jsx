import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalCartProducts = useSelector((state) => state.cart.items).length;
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartProducts}</span>
    </button>
  );
};

export default CartButton;
