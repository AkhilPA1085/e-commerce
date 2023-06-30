import React from "react";

const Button = ({children,className}) => {
  return (
    <button className={`bg-white text-black py-4 px-2 font-bold uppercase border-2 border-black tracking-wider ${className}`}>
      {children}
    </button>
  );
};

export default Button;
