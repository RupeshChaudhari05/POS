import { React, useState, Suspense, lazy } from "react";
import Slider from "./Slider";
const ProductGrid = lazy(() => import("./ProductGrid.js"));

const Home = () => {
  const [search, setSearchbar] = useState("");
  return (
    <>
      <div className="form-group card">
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearchbar(e.target.value)}
          placeholder="Enter Product Name"
        />
      </div>
      <br></br>
      <Slider></Slider>
      <br></br>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid></ProductGrid>
      </Suspense>
    </>
  );
};

export default Home;
