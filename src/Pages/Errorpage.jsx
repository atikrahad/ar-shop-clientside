import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">

            <div className="text-center space-y-4">
            <h1 className="text-6xl">404</h1>
            <p>You have searched pagee is not found.</p>
            <Link to="/"><button className="rounded-md font-bold text-white py-2 px-3 bg-green-600 mt-4 hover:bg-sky-600">Go home</button></Link>
            </div>
            
        </div>
    );
};

export default Errorpage;