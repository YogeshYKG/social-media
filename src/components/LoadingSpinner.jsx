const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner-vertical-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
