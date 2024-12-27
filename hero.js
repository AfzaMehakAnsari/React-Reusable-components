import hero from "../assets/hero.jpg";


function Hero() {
  return (
    <div style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%"
    }}>

  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop:'120px' }}>
  <h1 style={{ color: "#fff", fontSize: "65px", margin: "0" }}>The Baked Box</h1>
  <h2 style={{ color: "#f6e4ca", fontSize: "45px", margin: "10px 0" }}>From our oven to your heart</h2>

</div>
</div>

  );
}

export { Hero };
