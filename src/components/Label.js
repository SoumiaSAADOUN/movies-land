import React from "react";
const Label = (props) => {

  return (
    <div className="flex items-center border rounded border-GREY max-w-fit">
      <div
        className={`${props.color} w-[40px] h-[40px] grid place-items-center rounded-l`}
      >
        <img src={props.icon} alt={props.info} />
      </div>

      <span className="px-2 text-WHITE">{props.info}</span>
    </div>
  );
};
export default Label;
