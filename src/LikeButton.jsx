import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    console.log("render");
    console.log(`count is ${count}`);
    document.getElementById("counter").addEventListener("click", countUp);
    if (count >= 10) {
      counter(0);
    }
    console.log(`count is ${count}`);
    return () => {
      console.log("unmounting");
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  }, [limit]);

  return (
    <>
      <button id="counter">いいね数: {count}</button>
      <button onClick={() => release(!limit)}>もっといいねする</button>
    </>
  );
};

export default LikeButton;
