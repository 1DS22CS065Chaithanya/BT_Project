// import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ProductCard
        name="Wireless Headphones"
        price={120}
        description="High quality sound with noise cancellation."
        image="/images/Headphones.jpg"  // make sure this image exists inside public/images/
        inStock={true}
      />
    </div>
  );
}

export default App;
