import { Link, useLoaderData } from "react-router-dom";
import Showproducts from "../Components/Showproducts";


const Products = () => {
    const productsData = useLoaderData()

    return (
        <div className="min-h-[60vh] w-[95%] md:w-[80%] mx-auto">
            
            {
                productsData.length==0 && <div className="text-center py-32">
                    <h1 className="text-3xl text-orange-400" >Sorry all products are finished</h1>
                    <Link to="/addproducts"><button className="btn mt-5 btn-success">Add products</button></Link>
                </div>
            }

            <div className="grid gap-5 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    productsData.map(item => <Showproducts key={item._id} item={item}></Showproducts>)
                }
            </div>
        </div>
    );
};

export default Products;