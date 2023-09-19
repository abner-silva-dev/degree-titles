import "./button.style.css";

const BUTTON_TYPE_CLASSES = {
  update: "btn--update",
  create: "btn--create",
  delete: "btn--delete",
};

const Button = ({ type, children, ...otherProps }) => {
  return (
    <button className={`btn ${BUTTON_TYPE_CLASSES[type]}`} {...otherProps}>
      {children || type}
    </button>
  );
};

export default Button;
