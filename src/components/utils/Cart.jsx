import React, { useState } from 'react';
import { BsHandbag } from "react-icons/bs";

const Cart = () => {
  const [itemCount, setItemCount] = useState(1); // You can later make this dynamic

  return (
    <div className="relative cursor-pointer">
      <BsHandbag />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-0 bg-[#00b207] text-white text-[10px] px-1.5 rounded-full">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
