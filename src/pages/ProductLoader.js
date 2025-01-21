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
        <Skeleton height={200} width={150} />
      </div>

      {/* Product Title */}
      <div style={{ marginBottom: "8px" }}>
        <Skeleton width="100%" height={20} />
        <Skeleton width="100%" height={20} />
      </div>

      {/* Offer Details */}
      <div style={{ marginBottom: "10px", textAlign: "start" }}>
        <Skeleton width={100} height={15} />
      </div>

      {/* Ratings */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} circle={true} height={20} width={20} />
            ))}
        </div>
        <div style={{ marginBottom: "10px", textAlign: "start" }}>
          <Skeleton width={65} height={20} style={{ textAlign: "right" }} />
        </div>{" "}
      </div>

      {/* Pricing */}
      <div
        style={{
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ marginBottom: "10px", textAlign: "start" }}>
          <Skeleton width={100} height={15} />
        </div>{" "}
        <Skeleton width={65} height={20} />
      </div>

      {/* Add to Cart Button */}
      <div style={{ textAlign: "center" }}>
        <Skeleton height={40} width={120} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
