import { useLoaderData } from "react-router-dom";
import Cartdetails from "../Components/Cartdetails";
import { useContext, useState } from "react";
import { Authinfo } from "../SharedComponents/Authprovider";


const Addcart = () => {
  const data = useLoaderData();
  const {setPromis} = useContext(Authinfo)
  const [loderdata, setLoderdata] = useState(data)
  
  let totalprice = 0
  for (let item of loderdata) {
    totalprice = totalprice + parseFloat(item.price);
  }


  const handleDeleteCartproduct = id => {
    fetch(`http://localhost:5000/cart/${id}`, {
       
    })
    .then(res => res.json())
    .then(data => {
       const remaining = loderdata.filter(item => item._id!== id)
       setLoderdata(remaining)
       console.log(data);
       setPromis(false)
       
    })
  }
  return (
    <div className="w-[95%] min-h-[60vh] py-20 md:w-[80%] gap-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mx-auto">
      <div className="md:col-span-3 space-y-5 lg:col-span-3">

        {
            loderdata.length==0 && <h1 className="text-3xl text-orange-400 text-center">You have not add to cart any product</h1>
        }

        {loderdata.map((item) => (
          <Cartdetails key={item._id} handleDeleteCartproduct={handleDeleteCartproduct} item={item}></Cartdetails>
        ))}
      </div>
      <div className="md:col-span-2">
        <div className="card bg-base-200 shadow-xl">
          
          <div className="card-body">
            <h2 className="card-title">Total Price: {totalprice} tk</h2>
            
            <div className="card-actions ">
              <button className="text-white py-2 px-3 bg-green-600 hover:bg-sky-600 rounded-md">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcart;
