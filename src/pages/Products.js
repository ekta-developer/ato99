import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "../components/Header/Header";
import img1 from "../assests/IMAGES/images/gallery-01.jpg";
import img2 from "../assests/IMAGES/images/gallery-02.jpg";
import img3 from "../assests/IMAGES/images/gallery-03.jpg";
import img4 from "../assests/IMAGES/images/gallery-04.jpg";
import img5 from "../assests/IMAGES/images/gallery-05.jpg";
const products = [
  {
    id: 1,
    name: "Wireless Earbuds, IPX8",
    price: "$39.99",
    image: img1,
    rating: "4.5",
    button: "Add to Cart",
  },
  {
    id: 2,
    name: "AirPods Max",
    price: "$549.00",
    image: img2,
    rating: "4.7",
    button: "Add to Cart",
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: "$299.00",
    image: img3,
    rating: "4.6",
    button: "Add to Cart",
  },
  {
    id: 4,
    name: "Bose BT Earphones",
    price: "$299.00",
    image: img4,
    rating: "4.6",
    button: "Add to Cart",
  },
  {
    id: 5,
    name: "Bose BT Earphones",
    price: "$299.00",
    image: img5,
    rating: "4.6",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Wireless Earbuds, IPX8",
    price: "$39.99",
    image: img1,
    rating: "4.5",
    button: "Add to Cart",
  },
  {
    id: 2,
    name: "AirPods Max",
    price: "$549.00",
    image: img2,
    rating: "4.7",
    button: "Add to Cart",
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: "$299.00",
    image: img3,
    rating: "4.6",
    button: "Add to Cart",
  },
  {
    id: 4,
    name: "Bose BT Earphones",
    price: "$299.00",
    image: img4,
    rating: "4.6",
    button: "Add to Cart",
  },
  {
    id: 5,
    name: "Bose BT Earphones",
    price: "$299.00",
    image: img5,
    rating: "4.6",
    button: "Add to Cart",
  },
  // Add more products here...
];

function Products() {
  return (
    <div>
      <section>
        <Header />
        {/* Banner Section
      <div className="banner bg-light text-center py-5 mb-4">
        <h2 className="fw-bold">Grab Up to 50% Off On Selected Headphones</h2>
        <button className="btn btn-success btn-lg mt-3">Buy Now</button>
      </div> */}
      </section>
      {/* Product Cards */}
      <div className="container">
        <h3 className="mb-4">Get Ready for FASHION!</h3>

        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold" style={{ color: "#e84545" }}>
                    {product.price}
                  </p>
                  <p className="card-text">Rating: {product.rating}⭐</p>
                </div>
                <div className="card-footer bg-white text-center">
                  <button className="btn btn-outline-success btn-sm">
                    {product.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
