import { useLoaderData } from "react-router-dom";
import Showbranddata from "../Components/Showbranddata";


const Brandallproducts = () => {

    const data = useLoaderData()
    return (
        <div className="w-[95%] md:w-[80%] mx-auto grid gap-5 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            {
                data.map(item => <Showbranddata key={item._id} item={item}></Showbranddata>)
            }
        </div>
    );
};

export default Brandallproducts;