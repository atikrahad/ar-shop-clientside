import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Singleproducts = () => {
  const data = useLoaderData();
  const { img, title, _id, brand, rating, description, price } = data;
  const [brandeddata, setBrandeddata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${brand}`)
      .then((res) => res.json())
      .then((data) => setBrandeddata(data));
  }, []);

  const handlecart = (addcarddata) => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addcarddata),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleDeleteProduct = () => {
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="">
      <div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {brandeddata.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="py-20 flex flex-col md:flex-row items-center justify-evenly">
                <div className="md:w-1/2">
                  <h1 className="text-4xl">{item.title}</h1>
                  <div className="h-12 text-ellipsis overflow-hidden">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* product details  */}

      <div className=" w-[95%] md:w-[80%] mx-auto">
        <div className="hero-content py-20 flex justify-between items-center  flex-col lg:flex-row">
          <div className="md:w-1/2">
            <img src={img} className=" mx-auto w-72 rounded-lg shadow-2xl" />
          </div>
          <div className="md:w-1/2 space-y-3">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h2 className="text-xl text-green-600 font-bold">
              Rating: {rating}
            </h2>
            <hr />
            <h1 className="text-2xl font-bold">
              Price: <span className="text-orange-600 ">{price}</span> tk
            </h1>
            <h1 className="text-xl ">
              Brand name: <span className="font-bold">{brand}</span>
            </h1>
            <button
              onClick={() => handlecart(data)}
              className="btn text-white mr-3 font-semibold bg-green-600 hover:bg-sky-600"
            >
              Add to cart
            </button>

            <Link to={`/apdate/${brand}/${_id}`}>
              <button className="btn text-white mr-3 font-semibold bg-green-600 hover:bg-sky-600">
                Apdate product
              </button>
            </Link>

            

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn text-white  font-semibold bg-green-600 hover:bg-sky-600"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
             Delete product
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="">
                  <form method="">
                    {/* if there is a button in form, it will close the modal */}
                    <div  className=" text-center space-x-2">
                    <Link to="/products"><button onClick={handleDeleteProduct} className="btn text-white  font-semibold bg-green-600 hover:bg-sky-600">Delete</button></Link>
                    <button className="btn text-white  font-semibold bg-green-600 hover:bg-sky-600">Cencel</button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>

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
