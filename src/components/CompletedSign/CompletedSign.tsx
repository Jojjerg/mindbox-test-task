import React from "react";
import ready from "../../assets/icons/check.png";

const CompletedSign = () => {
  return (
    <div data-testid="completed-sign">
      <img
        className="w-[30px] h-[30px]"
        src={ready}
        width={30}
        height={30}
        alt="ready"
      />
    </div>
  );
};

export default CompletedSign;
