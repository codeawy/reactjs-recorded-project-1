const ErrorMessage = ({ msg = "" }) => {
  return msg ? <p className="mb-2 text-red-700 font-semibold text-sm">{msg}</p> : null;
};

export default ErrorMessage;
