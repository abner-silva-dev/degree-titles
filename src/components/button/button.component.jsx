import "./button.style.css";

const BUTTON_TYPE_CLASSES = {
  update: "btn--update",
  create: "btn--create",
  delete: "btn--delete",
  close: "btn--close",
};

const Button = ({ type, className = "", children, ...otherProps }) => {
  return (
    <button
      className={`btn ${BUTTON_TYPE_CLASSES[type]} ${className}`}
      {...otherProps}
    >
      {children || type}
    </button>
  );
};

export default Button;
