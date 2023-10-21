import { useContext, useState } from "react";
import { Authinfo } from "../SharedComponents/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { createUser, error, setError} = useContext(Authinfo);

  const [open, setOpen] = useState('!open')

  const navigate = useNavigate()
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()

    if(password.length < 6){
      return setError('Password should be at least 6 characters')
    }
    else if(!/[A-Z]/.test(password)){
      return setError('Password should be a Capital latter')
    }
    // eslint-disable-next-line no-useless-escape
    else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
      return setError('Password should be a special character')
    }

    createUser(email, password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        navigate('/products')
        
      })
      .catch((error) => {
        const errorMessage = error.code.split('/');
      const message = errorMessage.slice(1, errorMessage.length)
      setError(message.join())
        
      });
    
  };

  const handleIcon = open => {
    setOpen(open)
  }

  return (
    <div className="bg-base-200 mx-auto">
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
              <p className="text-red-500 -mb-2">{error}</p>
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
