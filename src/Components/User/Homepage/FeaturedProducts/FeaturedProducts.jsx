import React from "react";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <>
      <div className="featuredProducts">
        <h2 className="featuredHeading">Featured Products</h2>
        <hr />
        <div className="featuredGrid">
          <div className="featuredGrids">
            <div className="featuredImage" id="image1"></div>
            <div className="featuredDescription">
              <h2>Milan</h2>
              <h3>$30.00</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia saepe in rem, accusamus possimus dolorem cupiditate officia temporibus voluptates enim consequuntur facilis magni laborum animi cum unde quo incidunt reprehenderit!</p>
            </div>
          </div>
          <div className="featuredGrids">
            <div className="featuredImage" id="image2"></div>
            <div className="featuredDescription">
              <h2>Hush Puppies</h2>
              <h3>$90.00</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia saepe in rem, accusamus possimus dolorem cupiditate officia temporibus voluptates enim consequuntur facilis magni laborum animi cum unde quo incidunt reprehenderit!</p>
            </div>
          </div>
          <div className="featuredGrids">
            <div className="featuredImage" id="image3"></div>
            <div className="featuredDescription">
              <h2>Classen</h2>
              <h3>$45.50</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil cum incidunt neque repellat aspernatur non temporibus nemo, est, ipsum itaque consequuntur veniam odio asperiores ea reprehenderit perferendis iure nostrum?</p>
            </div>
          </div>
          <div className="featuredGrids">
            <div className="featuredImage" id="image4"></div>
            <div className="featuredDescription">
              <h2>Hush Puppies</h2>
              <h3>$90.00</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur dolorum voluptatibus quas reprehenderit adipisci? Placeat deleniti, laudantium, deserunt ut rerum blanditiis eveniet repudiandae aut id totam, odio repellat fugit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
