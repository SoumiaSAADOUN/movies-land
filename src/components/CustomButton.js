import React from "react";

const CustomButton = (props) => {
  return (
    <button
    onClick={props.onClick}
      className={`pr-[16px] h-[40px] w-fit rounded border-GREY flex justify-start items-center border bg-${props.mainColor} ${props.favorite? "text-WHITE": "text-LIGHT_GREY"}`}
    >
      <img
        src={props.icon}
        className="w-[16px] h-[16px] mx-[12px]"
        alt={props.title}
      />
      <span>{props.title}</span>
    </button>
  );
};

export default CustomButton;
