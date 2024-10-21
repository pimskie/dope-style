"use client";

import { StoreService } from "@/services/store";
import { useState } from "react";

const Foobar = async () => {
  const [bar, setBar] = useState(0);

  const category = await StoreService.category.getById("sweaters");

  const clickHandler = () => {
    setBar(bar + 1);
  };
  return (
    <div>
      <h1>Foobar, yo</h1>
      {bar}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
export default Foobar;
