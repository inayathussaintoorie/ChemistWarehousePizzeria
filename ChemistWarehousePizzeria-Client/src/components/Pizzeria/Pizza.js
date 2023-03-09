import styles from "./PizzeriaList.module.css";

export default function Pizza(props) {
  const { pizzeria, pizza, orderPizza, toggleTopping} = props;

  return (
  <div className={`${styles.pizzaContainer}`}>
    <h4>{pizza.name}</h4>
    <p>{pizza.toppings}</p>
    <p>Price: ${pizza.price}</p>
    <div className="row">
      <div className="col-md-6">
        <button className="btn btn-primary" onClick={() => orderPizza(pizza)}>
          Add to Order
        </button>
      </div>
      <div className="col-md-6">
        Toppings will be charged $1 extra:
        {pizza.extraToppings.map((topping) => {
          return (
            <button
              key={topping.name}
              onClick={() => toggleTopping(pizzeria, pizza, topping)}
              className={"btn " + (topping.isSelected ? "btn-primary " : "btn-secondary ")}
              style={{marginLeft: "10px"}}
            >
              {topping.name}
            </button>
          );
        })}
      </div>
    </div>
  </div>
  );
}
