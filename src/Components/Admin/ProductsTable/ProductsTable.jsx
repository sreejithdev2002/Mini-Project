import React from "react";
import "./ProductsTable.css";
import {Link } from 'react-router-dom';
import ShoesData from "../../../Data/Shoes.json";

//sampleImage
import SampleImg from "../../../Assets/Images/example1.webp";

function ProductsTable() {
  const products = ShoesData.shoes;
  const totalProducts = products.length;

  return (
    <div className="adminProducts">
      <h1>All Products</h1>
      <h3 style={{margin: '10px 0px', fontFamily: 'sans-serif'}}>Total  Products: {totalProducts}</h3>
      <table className="proTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={SampleImg} style={{ height: "200px" }} />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                ₹{product.price}
              </td>
              <td>
                <Link to={`/admin/edit/${product.id}`}><button className="adminProTableBtn">Edit</button></Link>
                <button className="adminProTableBtn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
