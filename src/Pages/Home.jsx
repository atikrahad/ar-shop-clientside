import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Brand from "../Components/Brand";
import Contactus from "../Components/Contactus";



const Home = () => {

    const [branddata, setBranddata] = useState([])
    useEffect(()=>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data=> setBranddata(data))
    },[])
    return (
        <div>
            <Header></Header>
            <h1 className="text-3xl font-bold text-center pt-20">Explore our brands products</h1>
            <div className=" py-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] mx-auto">
                {
                    branddata.map(data => <Brand key={data.id} data={data}></Brand>)
                }
            </div>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;