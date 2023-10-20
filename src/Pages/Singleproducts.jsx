import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Singleproducts = () => {
  const data = useLoaderData();
  const { img, title, brand, rating, description, price } = data;
  const [brandeddata, setBrandeddata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${brand}`)
      .then((res) => res.json())
      .then((data) => setBrandeddata(data));
  }, []);

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
          <SwiperSlide key={item._id} >
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
            <button className="btn text-white mr-3 font-semibold bg-green-600 hover:bg-sky-600">
              Add to cart
            </button>
            <button className="btn text-white font-semibold bg-green-600 hover:bg-sky-600">
              Apdate product
            </button>

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
