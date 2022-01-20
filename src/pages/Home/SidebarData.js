import { React, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { deleteCartItem } from "../../Redux/Actions/PosAction";
import { useSelector, useDispatch } from "react-redux";
const SidebarData = () => {
  const state = useSelector((state) => state.POS.CartData);
  console.log("sidebar", state);
  const dispatch = useDispatch();
  const deleteItemFromCart = (id) => {
    console.log(id);
    dispatch(deleteCartItem(id));
  };

  const Minus = (price) => {};

  const Addition = () => {};

  return (
    <>
      <table
        className="table"
        style={{ "margin-top": "5px", fontSize: "10px" }}
      >
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt="product"
                      width="50px"
                      height="50px"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td style={{ fontSize: "16px" }}>
                    <Icon.Play onClick={(e) => Minus(item.price)} />
                    {0}
                    <Icon.Plus onClick={(e) => Addition(item.price)} />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <Icon.Trash onClick={(e) => deleteItemFromCart(item.id)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SidebarData;
