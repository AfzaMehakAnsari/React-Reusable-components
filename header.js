import logo from "../assets/logo.png";
import cart from "../assets/online-shopping.png";
import wishlist from "../assets/heart.png";
import buy from "../assets/shopping-bag.png";

function Header() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        margin: 0,
        color: "white",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "120px",
            width: "auto",
            display: "block",
          }}
        />
      </div>

      <div style={{ flexGrow: "1", marginBottom: "20px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-start",
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={{ marginRight: "40px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </a>
          </li>
          <li style={{ marginRight: "40px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
              About
            </a>
          </li>
          <li style={{ marginRight: "40px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
              Products
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div style={{ marginRight: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#703424",
            color: "#f6e4ca",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Get in Touch
        </button>
        <img
          src={cart}
          alt="cart"
          style={{ width: "20px", marginLeft: "10px" }}
        />
        <img
          src={wishlist}
          alt="wishlist"
          style={{ width: "20px", marginLeft: "10px" }}
        />
        <img src={buy} alt="buy" style={{ width: "22px", marginLeft: "8px" }} />
      </div>
    </div>
  );
}

export { Header };
