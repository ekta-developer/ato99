import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Required to include default styles

const ProductCardSkeleton = () => {
  return (
    <div className="card" style={{ width: "18rem", paddingTop: "0px" }}>
      <Skeleton
        width={60}
        style={{ alignContent: "center", marginTop: "0px" }}
      />
      {/* Product Image */}
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <Skeleton height={170} width={150} />
      </div>

      {/* Product Title */}
      <div style={{ marginBottom: "8px" }}>
        <Skeleton width="100%" height={20} />
        <Skeleton width="70%" height={20} />
      </div>

      {/* Offer Details */}
      <div style={{ marginBottom: "10px" }}>
        <Skeleton width={100} height={15} />
      </div>

      {/* Ratings */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "10px",
        }}
      >
        <Skeleton circle={true} height={20} width={20} />
        <Skeleton width={60} height={15} />
      </div>

      {/* Pricing */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <Skeleton width={40} height={15} />
        <Skeleton width={50} height={20} />
      </div>

      {/* Add to Cart Button */}
      <div style={{ textAlign: "center" }}>
        <Skeleton height={40} width={120} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
