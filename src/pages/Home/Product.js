import { React } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/PosAction";

const Product = (props) => {
  const { title, image, price, id, category } = props.data;
  const dispatch = useDispatch();
  const saveData = (value) => {
    console.log(value);
    dispatch(addToCart(value));
  };

  return (
    <>
      <div class="col-sm-2 py-1">
        <div style={{ padding: "5px" }} className="card ">
          <center>
            <img src={image} alt={title} width="100px" height="100px" />
          </center>
          <div style={{ fontSize: "12px" }}>{category}</div>
          <div className="row">
            <div className="col-md-6" style={{ fontSize: "11px" }}>
              $ {price}
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary btn-sm"
                style={{ fontSize: "7px" }}
                onClick={(e) => saveData(id)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
