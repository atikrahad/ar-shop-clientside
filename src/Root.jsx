import { Outlet } from "react-router-dom";
import Footer from "./SharedComponents/Footer";
import Navber from "./SharedComponents/Navber";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;