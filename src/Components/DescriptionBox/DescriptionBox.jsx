import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigation">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rem
          asperiores voluptatem neque molestias minima autem quasi aspernatur
          corporis eaque, assumenda saepe temporibus natus atque architecto
          deleniti hic dolorum quaerat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          exercitationem sequi explicabo reprehenderit pariatur numquam!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
