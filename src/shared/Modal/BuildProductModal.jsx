import { Fragment } from "react";
import Modal from "react-modal";
import ColorCircle from "../../components/ColorCircle";
import ErrorMessage from "../../components/ErrorMessage";
import { CATEGORIES, COLORS, productsFormInputs } from "../../lists";
import Button from "../Button";
import FormInput from "../FormInput";
import SelectMenu from "../SelectMenu";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const BuildProductModal = ({
  modalIsOpen,
  closeModal,
  product,
  onChangeHandler,
  errors,
  isError,
  tempColors,
  setTempColors,
  selectedCategory,
  setSelectedCategory,
  submitHandler,
}) => {
  /* ------- RENDER -------  */
  const renderInputs = productsFormInputs.map(({ label, type, name }, idx) => (
    <Fragment key={idx}>
      <FormInput
        label={label}
        type={type}
        id={name}
        name={name}
        value={product[name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[name]} />
    </Fragment>
  ));
  const renderColors = COLORS.map(color => (
    <ColorCircle
      key={color}
      bg={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors(prev => prev.filter(item => item !== color));
          return;
        }
        setTempColors(prev => [...prev, color]);
      }}
    />
  ));

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Build Product"
    >
      <form onSubmit={submitHandler}>
        {renderInputs}
        <p className="text-sm font-medium text-gray-700 mb-3">COLORS:({tempColors.length})</p>
        <p className="text-sm font-medium text-gray-700">
          Selected Colors: {!tempColors.length ? "__" : ""}
        </p>
        <div className="flex items-center flex-wrap max-w-sm">
          {tempColors.map(color => (
            <span
              key={color}
              className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
              style={{ backgroundColor: color }}
            >
              {color}
            </span>
          ))}
        </div>
        <div className="flex items-center my-3">{renderColors}</div>
        <SelectMenu
          optionList={CATEGORIES}
          label="Select Category"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Button
          type="submit"
          className={
            isError
              ? "text-white w-full py-5 rounded-md font-medium bg-red-700 hover:bg-red-600"
              : "text-white w-full py-5 rounded-md font-medium bg-indigo-500  hover:bg-indigo-700 duration-300"
          }
        />
      </form>
    </Modal>
  );
};

export default BuildProductModal;
