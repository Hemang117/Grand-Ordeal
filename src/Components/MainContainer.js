import React from "react";
import "./MainContainer.css";
import Banner from "../img/back.jpg";
import Back from "../img/back.jpg";
import CardMain from "./CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";


function MainContainer() {
  return (
    <div className="maincontainer"      >
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
        </div>

        <div className="cards">
          <main>
            <CardMain imgSrc={Card1} title={"Verification Status"}/>
            <CardMain imgSrc={Card2} title={"SOS Reports"}/>
            <CardMain imgSrc={Card3} title={"Locator"}/>
            <CardMain imgSrc={Card4} title={"Dash Feed"}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
