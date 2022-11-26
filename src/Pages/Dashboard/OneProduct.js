import React from "react";

const OneProduct = ({ product, index }) => {
  return (
    <div>
      <tr className="hover" key={product._id}>
        <th>{index + 1}</th>
        <td>{product?.company}</td>
        <td>{product?.productName}</td>
        <td>Available</td>
        <td>
          <button className="btn btn-success">Add</button>
        </td>
        <td>
          <button className="btn">Delete</button>
        </td>
      </tr>
    </div>
  );
};

export default OneProduct;
