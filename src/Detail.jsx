import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Detail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log("The match");
    console.log(match);
  }, []);
  const [item, setItem] = useState([]);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.github.com/users/${match.params.userId}`
    );
    const item = await fetchItem.json();
    setItem(item);

    console.log(item);
  };

  return (
    <div className="center">
      <p>{item.name}</p>
      <p>{item.login}</p>
      <p>{item.location}</p>
      <p>
        <img src={item.avatar_url} className="pics" />
      </p>
    </div>
  );
}
