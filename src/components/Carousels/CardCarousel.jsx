import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoShareSocialOutline } from "react-icons/io5";
import img from "../../assests/IMAGES/images/product-01.jpg";
import img2 from "../../assests/IMAGES/images/product-02.jpg";
import Products from "../../assests/StaticData/products.json";

// Helper function to generate the stars based on rating
const generateStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating); // Integer part for filled stars
  const halfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className="fa fa-star text-warning"></i> // Filled Star
      ))}
      {halfStar && <i className="fa fa-star-half-alt text-warning"></i>} // Half Star
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index + filledStars + (halfStar ? 1 : 0)} className="fa fa-star text-muted"></i> // Empty Star
      ))}
    </>
  );
};

const CardCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products); // Load static data from JSON
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
    <hr/>

    <div className="slider-container my-4">
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product._id} className="px-3">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-transparent text-center">
                <a href={`/product-detail/${product.slug}`} className="text-decoration-none">
                  {product.status && (
                    <span
                      className={`badge rounded-pill bg-${
                        product.status.toLowerCase() === "sale"
                          ? "danger"
                          : product.status.toLowerCase() === "new"
                          ? "success"
                          : "secondary"
                      }`}
                    >
                      {product.status}
                    </span>
                  )}
                </a>
              </div>
              <div className="card-body text-center">
                <a href={`/product-detail/${product.slug}`}>
                  <div className="d-flex justify-content-center position-relative">
                    {/* Main Image */}
                    <img
                      src={img}
                      alt={`${product.name} - Main`}
                      className="img-fluid product-image"
                      style={{
                        maxHeight: "150px",
                        objectFit: "cover",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    />
                    {/* Hover Image */}
                    <img
                      src={img2}
                      alt={`${product.name} - Hover`}
                      className="img-fluid product-image-hover position-absolute"
                      style={{
                        maxHeight: "150px",
                        objectFit: "cover",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) => (e.target.style.opacity = 1)}
                      onMouseOut={(e) => (e.target.style.opacity = 0)}
                    />
                  </div>
                  <h5 className="card-title mt-3 text-dark">{product.name}</h5>
                </a>
                <p className="card-text">
                  <span className="text-danger fw-bold">₹{product.offer_price}</span>{" "}
                  <span className="text-muted text-decoration-line-through">
                    ₹{product.price}
                  </span>
                </p>

                {/* Rating Section with Stars */}
                <div className="ratings-container mb-3">
                  <div className="d-flex justify-content-center">
                    {generateStars(parseFloat(product.rating))} {/* Generate Stars */}
                  </div>
                  <span className="ms-2">({product.numofReviews} Reviews)</span>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light">
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => console.log("Add to Wishlist clicked:", product)}
                >
                  <IoShareSocialOutline /> Wishlist
                </button>
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => console.log("Add to Cart clicked:", product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <hr/>
    </>
  );
};

export default CardCarousel;
