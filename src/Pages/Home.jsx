import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Brand from "../Components/Brand";
import Contactus from "../Components/Contactus";
import bodyimg from '../assets/e-comm.jpg'

const Home = () => {
  const [branddata, setBranddata] = useState([]);
  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => setBranddata(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <h1 className="text-3xl font-bold text-center pt-20">
        Explore our brands products
      </h1>
      <div className=" py-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] mx-auto">
        {branddata.map((data) => (
          <Brand key={data.id} data={data}></Brand>
        ))}
      </div>
      <div className="w-[95%] py-16 md:w-[80%] mx-auto">
        <h1 className="text-center text-2xl py-5 md:text-4xl font-bold">Why You buy Products from us?</h1>

        <div className="flex gap-5 flex-col md:flex-row items-center justify-between">
          <div className="md:w-[50%]">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Quality Assurance
              </div>
              <div className="collapse-content">
                <p>
                  Emphasize your commitment to delivering high-quality products.
                  Highlight any quality control processes, certifications, or
                  product testing you employ to ensure that customers receive
                  products that meet their expectations.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Wide Product Selection
              </div>
              <div className="collapse-content">
                <p>
                  Highlight the range and variety of products available on your
                  site. Let customers know that they can find a diverse
                  selection of items, from different brands, styles, and
                  categories, making it a one-stop shop for their needs.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Exceptional Customer Service
              </div>
              <div className="collapse-content">
                <p>
                Mention your customer service policies and availability. Ensure customers that they can easily contact your support team for any queries, concerns, or assistance. Provide information about response times and availability through various communication channels like phone, email, or live chat.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Competitive Pricing
              </div>
              <div className="collapse-content">
                <p>
                Mention how your prices are competitive in the market. You can offer occasional discounts, price matching, or loyalty programs to assure customers that they are getting good value for their money.
                </p>
              </div>
            </div>
            
          </div>
          <div className="md:w-[50%]">
            <img src={bodyimg} className="w-full rounded-md" alt="" />
          </div>
        </div>
      </div>
      <Contactus></Contactus>
    </div>
  );
};

export default Home;
