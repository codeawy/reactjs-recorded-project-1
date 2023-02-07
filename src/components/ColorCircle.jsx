const ColorCircle = ({ bg = "teal", onClick }) => {
  return (
    <span
      className="w-6 h-6 rounded-full mr-1 mb-1 cursor-pointer"
      style={{ backgroundColor: bg }}
      onClick={onClick}
    />
  );
};

export default ColorCircle;
