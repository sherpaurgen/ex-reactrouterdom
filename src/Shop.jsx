import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://api.github.com/users");
    const items = await data.json();
    setItems(items);
  };

  return (
    <div>
      <p>Hire/Shop Experts Page </p>
      {items.map((x) => (
        <div key={x.login}>
          <Link to={`/shop/${x.login}`}>
            <li>
              {x.login} <img src={x.avatar_url} className="pics" />
            </li>
          </Link>
        </div>
      ))}
    </div>
  );
}
