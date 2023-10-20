import { useLoaderData } from "react-router-dom";

const Singleproducts = () => {
  const data = useLoaderData();
  const {img, title, brand,rating,description, price, } = data;
  return (
    <div className="">
      <div className=" w-[95%] md:w-[80%] mx-auto">
        <div className="hero-content py-20 flex justify-between items-center  flex-col lg:flex-row">
          <div className="md:w-1/2">
          <img
            src={img}
            className=" mx-auto w-72 rounded-lg shadow-2xl"
          />
          </div>
          <div className="md:w-1/2 space-y-3">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h2 className="text-xl text-green-600 font-bold">Rating: {rating}</h2>
            <hr />
            <h1 className="text-2xl font-bold">Price: <span className="text-orange-600 ">{price}</span> tk</h1>
            <h1 className="text-xl ">Brand name: <span className="font-bold">{brand}</span></h1>
            <button className="btn text-white mr-3 font-semibold bg-green-600 hover:bg-sky-600">Add to cart</button>
            <button className="btn text-white font-semibold bg-green-600 hover:bg-sky-600">Apdate product</button>

            <div>
            <p className="font-semibold">Prodact description:</p>
            <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproducts;
