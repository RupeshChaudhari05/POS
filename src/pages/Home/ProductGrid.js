//get_menu

import { React, useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../Redux/Actions/PosAction";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.POS.ProductList);

  useEffect(() => {
    //console.log(BASE_URL);
    dispatch(getAllProduct());
  }, [dispatch]);

  // console.log(state);

  return (
    <>
      <h6>Product Grid</h6>
      <div className="row">
        {state.map((item, index) => {
          return <Product data={item} key={index}></Product>;
        })}
      </div>
    </>
  );
};

export default ProductGrid;
