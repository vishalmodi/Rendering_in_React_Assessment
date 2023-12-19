import React from "react";
import "./Header.css";

/*
  TODO: Complete the header
*/

function Header({name, birthday, imageSrc}) {
  return (
    <header>
      <div>
        <div>
          <img src={imageSrc} />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{birthday}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
