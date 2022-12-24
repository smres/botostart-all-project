import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CardContext } from "../../context/CartContextProvider";

// Icons
import shopIcon from "../../assets/icons/online-shop-svgrepo-com.svg";

const Navbar = () => {
  const { state } = useContext(CardContext);

  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart">
            <img style={{ width: "40px" }} src={shopIcon} alt="shop" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
