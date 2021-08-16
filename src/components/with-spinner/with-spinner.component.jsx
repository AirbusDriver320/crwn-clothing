import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherprops }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <WrappedComponent {...otherprops} />
    );
  };
  return Spinner;
};

export default WithSpinner;
