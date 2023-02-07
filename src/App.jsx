import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductCard from "./components/ProductCard";
import { CATEGORIES, PRODUCTS } from "./lists";
import Button from "./shared/Button";
import { addProductValidations } from "./validation/productValidation";
import BuildProductModal from "./shared/Modal/BuildProductModal";
import HeroSection from "./components/HeroSection";

const App = () => {
  /* ------- STATE -------  */
  const [isBuildModalOpen, setIsBuildModalOpen] = useState(false);
  const [productList, setProductList] = useState(PRODUCTS);
  const [tempColors, setTempColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[6]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    colors: [],
    category: "",
  });
  const [errors, setErrors] = useState({ ...product });
  const [isError, setIsError] = useState(false);

  /* ------- HANDLER -------  */
  const onChangeHandler = e => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const openBuildProductModal = () => setIsBuildModalOpen(true);
  const closeBuildProductModal = () => setIsBuildModalOpen(false);

  const submitHandler = e => {
    e.preventDefault();

    if (Object.keys(addProductValidations(product)).length) {
      setIsError(true);
      setErrors(addProductValidations(product));
      return;
    }
    setProductList(prev => [
      { ...product, id: nanoid(), colors: tempColors, category: selectedCategory },
      ...prev,
    ]);

    // setProduct({
    //   title: "",
    //   description: "",
    //   image: "",
    //   price: "",
    //   colors: [],
    // });
    setTempColors([]);
    setIsError(false);
  };

  return (
    <>
      <ToastContainer />
      <HeroSection />
      <div className="container mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Latest <span className="text-indigo-600">Products</span>
          </h2>
          <Button
            btnTxt="Build now"
            className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer w-fit "
            onClick={openBuildProductModal}
          />
        </div>
        <div className="my-10 grid grid-cols-products-grid gap-4">
          {productList.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              productList={productList}
              setProductList={setProductList}
            />
          ))}
        </div>

        <BuildProductModal
          modalIsOpen={isBuildModalOpen}
          closeModal={closeBuildProductModal}
          product={product}
          tempColors={tempColors}
          setTempColors={setTempColors}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          errors={errors}
          isError={isError}
          onChangeHandler={onChangeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </>
  );
};

export default App;
