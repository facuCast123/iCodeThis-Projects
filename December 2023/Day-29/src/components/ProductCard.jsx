import { useState } from "react";
import ProfileCard from "./ProfileCard";

const ProductCard = () => {
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [btnSolid1, setBtnSolid1] = useState(false);
  const [btnSolid2, setBtnSolid2] = useState(false);

  function toggleSolid1() {
    setBtnSolid1((prevState1) => !prevState1);
  }

  function toggleSolid2() {
    setBtnSolid2((prevState2) => !prevState2);
  }

  return (
    <>
      <div className="product-card">
        <div className="product-options">
          <h1 className="product-title">Collin Font</h1>
          <button>
            <box-icon name="share-alt"></box-icon>
          </button>
          <button onClick={toggleSolid1}>
            <box-icon
              type={btnSolid1 ? "solid" : "regular"}
              name="like"
            ></box-icon>
          </button>
          <button onClick={toggleSolid2}>
            <box-icon
              type={btnSolid2 ? "solid" : "regular"}
              name="bookmark"
            ></box-icon>
          </button>
        </div>
        <span className="product-author">
          Created by{" "}
          <a
            href="#"
            onClick={() => {
              setShowProfileCard((prevState) => !prevState);
              console.log(showProfileCard);
            }}
          >
            John Doe
          </a>
        </span>
        <fieldset className="license-container">
          <h3>License Type</h3>
          <label>
            <input type="radio" name="license" />
            <span>Desktop</span>
            <span className="pricing">$13</span>
          </label>
          <label>
            <input type="radio" name="license" />
            <span>E-pub</span>
            <span className="pricing">$24</span>
          </label>
          <label>
            <input type="radio" name="license" />
            <span>App</span>
            <span className="pricing">$110</span>
          </label>
          <label>
            <input type="radio" name="license" />
            <span>Webfont</span>
            <span className="pricing dimmed">Starting at $8</span>
          </label>
          <a className="license-link" href="#">
            Learn more about licenses
          </a>
        </fieldset>
        <button className="cart-button">Add to Cart</button>
      </div>

      {showProfileCard && <ProfileCard setShow={setShowProfileCard} />}
    </>
  );
};

export default ProductCard;
