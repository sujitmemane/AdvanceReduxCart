import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const products = [
  {
    id: 1,
    title: "Test 1",
    price: 50,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Test 2",
    price: 150,
    description: "This is a second product - amazing!",
  },
  {
    id: 3,
    title: "Test 3",
    price: 250,
    description: "This is a third product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
