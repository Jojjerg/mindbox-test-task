import React from "react";

const Header = () => {
  return (
    <header data-testid="header">
      <h1
        data-testid="header-text"
        className="font-light text-[64px] text-white"
      >
        todos
      </h1>
    </header>
  );
};

export default Header;
