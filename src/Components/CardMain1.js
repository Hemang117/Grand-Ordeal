import React from "react";

function CardMain1({ imgSrc, title }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" className="card_main_img" />
      <div className="card_main_name">
        <h2>{title}</h2>

      </div>

     

      <div className="card_main_button">
        <a href="#" className="button btn">
          Check Now
        </a>
 
      </div>
    </div>
  );
}

export default CardMain1;
