import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoHeadsetOutline, IoShareSocialOutline } from "react-icons/io5";
import img from "../../assests/IMAGES/images/product-01.jpg";
import img2 from "../../assests/IMAGES/images/product-02.jpg";
import Products from "../../assests/StaticData/products.json";
import Rating from "../Rating/Rating";
import { CiHeart } from "react-icons/ci";
import "./style.css";
import { useNavigate } from "react-router-dom";

const textStyle = {
  fontFamily: "'Arial', sans-serif",
  fontSize: "16px", // Adjusted for mobile readability
  fontWeight: "400",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#000",
  margin: "0",
  marginTop: "5px",
  padding: "0",
};

const ratingContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  fontFamily: "'Arial', sans-serif",
  fontSize: "12px",
  color: "#000",
};

const CardCarousel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(Products); // Load static data from JSON
  }, []);

  const sliderSettings = {
    dots: false,
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
      <div
        className="container"
        style={{
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 className="display-5 text-center p-3">Our Collection</h1>
        <div className="slider-container my-4">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product._id} className="px-3">
                <div
                  className="card h-100"
                  style={{ border: "none", boxShadow: "none" }}
                >
                  {/* Product Images */}
                  <div className="card-body text-center" style={{ border: "none" }}>
                    <a href={`/product-detail/${product.slug}`}>
                      <div className="d-flex justify-content-center position-relative">
                        {/* Main Image */}
                        <img
                          src={img}
                          alt={`${product.name} - Main`}
                          className="img-fluid product-image"
                          style={{
                            maxHeight: "250px",
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
                            maxHeight: "250px",
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
                      {/* Wishlist Button */}
                      <button
                        className="position-absolute top-0 end-0 p-2 m-2 bg-white border-0 rounded-circle shadow"
                        onClick={() =>
                          console.log("Add to Wishlist clicked:", product)
                        }
                      >
                        <CiHeart style={{ fontSize: "25px" }} />
                      </button>
                    </a>

                    {/* Product Details */}
                    <div className="ratings-container mb-3">
                      <div className="d-flex justify-content-center">
                        <span>
                          <p style={textStyle}>{product.name}</p>
                          <div style={ratingContainerStyle}>
                            <Rating
                              rating={product.averageRating}
                              numofReviews={product.numofReviews}
                            />
                          </div>
                        </span>
                      </div>
                      <p
                        className="card-text text-center"
                        style={{ marginBottom: "10px" }}
                      >
                        <span
                          style={{
                            color: "#ff4d29",
                            fontSize: "18px",
                            fontWeight: "700",
                            marginRight: "10px",
                          }}
                        >
                          ₹{product.offer_price}
                        </span>
                        <span
                          className="text-muted text-decoration-line-through"
                          style={{ fontSize: "16px", fontWeight: "400" }}
                        >
                          ₹{product.price}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="card-footer text-center bg-white" style={{ border: "none" }}>
                    <button
                      className="btn2"
                      onClick={() =>
                        console.log("Add to Cart clicked:", product)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* View All Button */}
        <div className="text-center p-3 ">
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              navigate("/product");
            }}
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
