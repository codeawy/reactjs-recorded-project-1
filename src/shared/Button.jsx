const Button = ({
  type = "button",
  btnTxt = "Add Product",
  className = "bg-indigo-500 text-white w-full py-5 rounded-md font-medium hover:bg-indigo-700 duration-300",
  onClick,
}) => {
  return (
    <button type={type} className={`my-5 ${className}`} onClick={onClick}>
      {btnTxt}
    </button>
  );
};

export default Button;
