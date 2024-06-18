import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setName(json));
    console.log(name);
  }, []);

  return <></>;
}
