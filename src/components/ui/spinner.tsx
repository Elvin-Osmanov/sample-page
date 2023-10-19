import { Spinner } from "react-bootstrap";

const CenteredSpinner = () => {
  return (
    <div className="mt-3 d-flex justify-content-center align-items-center ">
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default CenteredSpinner;
