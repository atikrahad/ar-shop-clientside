import { Link, NavLink } from "react-router-dom";

const Navber = () => {

    const navber = <>
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li className=""><NavLink to="/products">Products</NavLink></li>
        <li className=""><NavLink to="/addproducts">Add Product</NavLink></li>
        <li className=""><NavLink to="/signup">Sign Up</NavLink></li>
        
    </>

  return (
    <div className="bg-cyan-950">
      <div className="navbar w-[95%] md:w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-white w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                navber
              }
            </ul>
          </div>
          <a className="btn normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white space-x-2 px-1">
            {
                navber
            }
          </ul>
        </div>
        <div className="navbar-end ">
          <Link><button className="font-bold rounded-md text-white py-2 px-3 bg-green-600 hover:bg-sky-600">Sign In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
