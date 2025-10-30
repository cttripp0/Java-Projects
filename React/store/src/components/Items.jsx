import { useEffect, useState } from "react";
import "../css/Items.css";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      });
  }, []);

  function truncateText(input) {
    const maxLength = 60;
    const message =
      input.length > maxLength ? input.slice(0, maxLength) + "..." : input;
    return message;
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
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="itemCategory">{item.category}</div>
            <div className="itemTitle">{item.title}</div>
            <div className="itemPrice">${item.price}</div>
            <button className="itemButton">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
