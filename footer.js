import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "#fff",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main Row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "40px",
        }}
      >
        {/* Column 1: Logo Section */}
        <div style={{ position: "relative", display: "inline-block" }}>
  <img
    src={logo}
    alt="Logo"
    style={{
      width: "150px",
      marginBottom: "10px",
      position: "relative",
    }}
  />
  <h1
    style={{
        position: "absolute",
        top: "30%", // Center vertically
        left: "100%", // Align to the right of the logo
        transform: "translateX(10px) translateY(-50%)", // Adjust the offset and vertical centering
        color: "#fff", // Adjust color for visibility
        fontSize: "30px", // Adjust font size

    }}
  >
    The Baked Box
  </h1>
</div>


        {/* Column 2: Navigation Links */}
        <div
          style={{
            flex: "1",
            minWidth: "200px",
            marginLeft: "180px"
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>Company Info</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
                About
              </a>
            </li>
            <li>
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

        {/* Column 3: Subscription Section */}
        <div
          style={{
            flex: "1",
            minWidth: "200px",
          }}
        >
          <h4>Don’t miss a bite</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <input
              type="email"
              placeholder="Enter Email"
              style={{
                flex: "1",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
              }}
            />
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
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          textAlign: "center",
          marginTop: "-40px",
          fontSize: "14px",
        }}
      >
        <p>Terms of Use - Privacy Policy ©2024 copyright thebakedbox.com</p>
      </div>
    </footer>
  );
}

export { Footer };
