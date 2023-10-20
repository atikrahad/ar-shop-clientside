import { useLoaderData } from "react-router-dom";


const Addcart = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>{data.length}</h1>
        </div>
    );
};

export default Addcart;