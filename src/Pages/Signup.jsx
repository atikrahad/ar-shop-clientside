import { useContext, useState } from "react";
import { Authinfo } from "../SharedComponents/Authprovider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { createUser, user } = useContext(Authinfo);

  const [open, setOpen] = useState('!open')

  console.log(user);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()
    createUser(email, password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
      });
    
  };

  const handleIcon = open => {
    setOpen(open)
  }

  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name<sup>*</sup></span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email<sup>*</sup></span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password<sup>*</sup></span>
                </label>
                <input
                  type={open? 'password': 'text'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div className="absolute right-2 top-[63%]" onClick={()=>handleIcon(!open)}>
                    {
                        open? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                    }
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white py-2 px-3 bg-green-600 hover:bg-sky-600">Sign up</button>
              </div>
              <p>Already have accound <Link className="text-blue-800 font-bold" to="/login">login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
