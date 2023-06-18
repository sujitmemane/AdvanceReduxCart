import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, amount, id } = props.item;
  const addProduct = () => {
    dispatch(cartActions.addOneItem(id));
  };
  const removeProduct = () => {
    dispatch(cartActions.removeOneItem(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>Rs {amount}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProduct}>-</button>
          <button onClick={addProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
