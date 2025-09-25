import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" role="status">
        <span className="load">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
