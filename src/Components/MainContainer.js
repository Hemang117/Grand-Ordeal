import React from "react";
import "./MainContainer.css";
import Banner from "../img/back.jpg";
import CardMain1 from "./CardMain1";
import CardMain2 from "./CardMain2";
import CardMain3 from "./CardMain3";
import CardMain4 from "./CardMain4";
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
            <CardMain1 imgSrc={Card1} title={"Verification Status"}/>
            <CardMain2 imgSrc={Card2} title={"SOS Reports"}/>
            <CardMain3 imgSrc={Card3} title={"Location Sharing"}/>
            <CardMain4 imgSrc={Card4} title={"Dashcam Feed"}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
