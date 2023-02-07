import { toast } from "react-toastify";
import Image from "../shared/Image";
import { numberWithCommas, txtCutterWithDots } from "../utils/func";
import ColorCircle from "./ColorCircle";
import EyeIcon from "./svg/EyeIcon";
import TrashIcon from "./svg/TrashIcon";

const ProductCard = ({
  id,
  title,
  description,
  image,
  price,
  colors,
  category,
  productList,
  setProductList,
}) => {
  const MAX_COLORS_LENGTH = 7;
  const renderColors = colors.slice(0, MAX_COLORS_LENGTH).map(color => (
    <ColorCircle
      key={color}
      bg={color}
      onClick={() => {
        setTempColors(prev => [...prev, color]);
      }}
    />
  ));

  const filterById = () => {
    const filteredArr = productList.filter(item => item.id !== id);
    setProductList(filteredArr);
    toast.success("Product has been removed successfully", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="relative border-[1px] border-gray-300 rounded-lg flex flex-col h-fit overflow-hidden p-3">
      <Image src={image} className="rounded-lg h-52 w-full lg:object-cover" />
      <h3 className="text-lg mt-3 font-semibold">{title}</h3>
      <p className="text-xs text-gray-500 my-2">{txtCutterWithDots(description, 120)}</p>
      <p className="my-2 text-indigo-600 font-bold text-lg">${numberWithCommas(price)}</p>
      {!colors.length ? (
        <p className="mb-3">No available color!</p>
      ) : (
        <div className="flex items-center flex-wrap">
          {renderColors}{" "}
          <span className="mb-1 font-semibold text-lg">
            {colors.length >= MAX_COLORS_LENGTH && colors.length - MAX_COLORS_LENGTH
              ? `+ ${colors.length - MAX_COLORS_LENGTH}`
              : null}
          </span>
        </div>
      )}

      <div className="mt-3 flex items-center">
        <Image src={category.avatar} className="w-10 h-10 rounded-full object-cover" />
        <span className="ml-3">{category.name}</span>
      </div>
      <span className="absolute top-5 right-[5%] cursor-pointer" onClick={filterById}>
        <TrashIcon />
      </span>
      <span className="absolute top-12 right-[5%] cursor-pointer">
        <EyeIcon />
      </span>
    </div>
  );
};

export default ProductCard;
