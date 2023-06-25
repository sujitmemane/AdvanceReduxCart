import "./App.css";
import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceAction } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
let initialTime = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendingCartData = async () => {
      dispatch(
        uiSliceAction.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending Data to Cart",
        })
      );
      const response = await fetch(
        "https://advanceredux-87236-default-rtdb.firebaseio.com/cart.json",
        {
          method: "POST",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Data to Cart Failed");
      }
      dispatch(
        uiSliceAction.showNotification({
          status: "success",
          title: "Data Sent Successfully!",
          message: "The data is sent Sucessfully!",
        })
      );
      console.log(notification);
    };

    if (initialTime) {
      initialTime = false;
      return;
    }
    sendingCartData().catch((error) => {
      uiSliceAction.showNotification({
        status: "error",
        title: "Data Sent Failed!",
        message: error.message,
      });
    });
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
