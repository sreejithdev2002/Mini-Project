import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShoesData from '../../../Data/Shoes.json';
import './EditProduct.css'

function EditProduct() {
    const [product, setProduct] = useState({ id: '', name: '', brand: '', description: ''  ,price: 0, gender: '', isLuxury: false, dateAdded: '',category: ''});
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Find the product with the matching productId
        const foundProduct = ShoesData.shoes.find(item => item.id === parseInt(productId));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [productId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the submission of the edited product details
        console.log("Updated Product:", product);
        // Redirect or perform any necessary actions after submission
        navigate('/admin/view'); // For example, navigate to the products page
    };

    return (
        <div className='adminEditProduct'>
            <h1>Edit Product</h1>
            <div className="editProductSection">
            <form onSubmit={handleSubmit}>
            <div className="editProductInputDiv">
              <label>ID</label>
              <input
                type="number"
                name="id"
                value={product.id}
                onChange={handleInputChange}
                placeholder="ENTER PRODUCT ID..."
                id="input"
              />
            </div>
            <br />
            <div className="editProductInputDiv">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                placeholder="ENTER NAME HERE..."
                id="input"
              />
            </div>

            <br />
            <div className="editProductInputDiv">
              <label>Brand</label>
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                id="input"
              >
                <option value="Adidas">Adidas</option>
                <option value="Nike">Nike</option>
                <option value="Puma">Puma</option>
                <option value="Reebok">Reebok</option>
              </select>
            </div>

            <br />
            <div className="editProductInputDiv">
              <label>Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleInputChange}
                placeholder="PRODUCT DESCRIPTION..."
                id="input"
              />
            </div>

            <br />
            <div className="editProductInputDiv">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                placeholder="ENTER PRICE HERE ..."
                id="input"
              />
            </div>

            <br />
            <div className="editProductInputDiv">
              <label>Gender</label>
              <select
                name="gender"
                value={product.gender}
                onChange={handleInputChange}
                id="input"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <br />
            <div className="editProductInputDiv">
              <label>Luxury</label>
              <select
                name="isLuxury"
                value={product.isLuxury}
                onChange={handleInputChange}
                id="input"
              >
                <option value={true}>yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <br />
            <div className="editProductInputDiv">
              <label>Date Added</label>
              <input
                type="text"
                name="dateAdded"
                value={product.dateAdded}
                onChange={handleInputChange}
                placeholder="YYYY - MM - DD"
                id="input"
              />
            </div>

            <br />
            <div className="editProductInputDiv">
              <label>Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleInputChange}
                id="input"
              >
                <option value="Casuals">Casuals</option>
                <option value="Formals">Formals</option>
                <option value="Sandals">Sandals</option>
                <option value="Sneakers">Sneakers</option>
              </select>
            </div>

            <br />
            <button type="submit" id="editProductBtn">
              Save Changes
            </button>
          </form>
            </div>
        </div>
    )
}

export default EditProduct;
