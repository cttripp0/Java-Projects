import { useEffect, useState } from "react";
import "../css/Items.css";
import { toast } from "sonner";

function Items() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  function truncateText(input) {
    const maxLength = 60;
    const message =
      input.length > maxLength ? input.slice(0, maxLength) + "..." : input;
    return message;
  }

  function deleteItem(idToDelete, itemPrice, itemQuantity) {
    setCart(cart.filter((item) => idToDelete != item.id));
    setTotal(total - itemQuantity * itemPrice);
    toast.success("Item removed!");
  }

  return (
    <div className="wrapper">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="itemWrapper"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(255,255,255,0)), url(${item.image})`,

            }}
          >
            <div className="itemCategory">{item.category}</div>
            <div className="itemTitle">{item.title}</div>
            <div className="itemPrice">${item.price}</div>
            <button
              className="itemButton"
              onClick={() => {
                if (cart.some((cartItem) => cartItem.id == item.id)) {
                  setCart(
                    cart.map((cartItem) =>
                      cartItem.id == item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                    )
                  );
                } else {
                  setCart((prev) => [...prev, { ...item, quantity: 1 }]);
                }
                setTotal(total + item.price);
                console.log(cart);
                toast.success("Item added to cart!");
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <div className="cart">
          <h1 id="cartHeader">Cart</h1>
          {cart.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.image} className="cartImage" />
              <div className="cartText">
                <p className="cartItemTitle">{item.title}</p>
                <p className="cartItemCategory">{item.category}</p>
                <p className="cartItemPrice">${item.price}</p>
                <p className="quantity">x{item.quantity}</p>
                <button
                  onClick={() => deleteItem(item.id, item.price, item.quantity)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <p className="cartTotal">${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Items;
