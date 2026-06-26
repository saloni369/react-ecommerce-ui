import "./LoadingSkeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>

      <div className="skeleton-title"></div>

      <div className="skeleton-price"></div>

      <div className="skeleton-btn"></div>
    </div>
  );
};

export default LoadingSkeleton;