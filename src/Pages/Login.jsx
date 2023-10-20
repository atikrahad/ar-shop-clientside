import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Authinfo } from "../SharedComponents/Authprovider";

const Login = () => {
  const [open, setOpen] = useState("!open");
  const {user, googleSignin, singinWithpas} = useContext(Authinfo)

  const handleIcon = (open) => {
    setOpen(open);
  };

  const googleProvider = new GoogleAuthProvider()

  const handleGooglesignin = ()=> {
    googleSignin(googleProvider)
        .then(user => {
            console.log(user); 
        })
        .catch(error => {
            console.log(error);
        })

    
  }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singinWithpas(email, password)
        .then(user => {
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
console.log(user);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email<sup>*</sup>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">
                    Password<sup>*</sup>
                  </span>
                </label>
                <input
                  type={open ? "password" : "text"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <div
                  className="absolute right-2 top-[63%]"
                  onClick={() => handleIcon(!open)}
                >
                  {open ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white -my-2 px-3 bg-green-600 hover:bg-sky-600">
                  Login
                </button>
              </div>
            </form>
              <div className="form-control mx-8 mb-10">
                <button onClick={handleGooglesignin} className="btn  -my-3 px-3 hover:text-white hover:bg-sky-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    id="google"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    ></path>
                  </svg>Login with google
                </button>
                <p className="pt-4 -mb-3">New here? <Link className="text-blue-800 font-bold" to="/signup">Sign up</Link></p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
