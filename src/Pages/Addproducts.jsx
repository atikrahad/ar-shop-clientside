import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addproducts = () => {
  const handleAddproduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const title = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const product = { img, title, brand, category, price, description, rating };
    form.reset();
    console.log(product);

    fetch(
      "https://argedgets-server-eyv80oq3z-atikrahad1-gmailcom.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("product added successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="">
      <div className=" min-h-screen py-10 bg-base-200">
        <div className=" flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl py-5 text-center font-bold">Add Product</h1>
          </div>
          <div className="md:w-[80%] mx-auto w-[95%] rounded-md shadow-2xl bg-base-100">
            <form onSubmit={handleAddproduct} className=" p-5">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Image url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="image url"
                    className="input input-bordered"
                    required
                    name="img"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Brand name</span>
                  </label>
                  <select name="brand" className="input input-bordered" id="">
                    <option value="Google">Google</option>
                    <option value="Apple">Apple</option>
                    <option value="Sony">Sony</option>
                    <option value="Readmi">Readmi</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Intel">Intel</option>
                  </select>
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="products name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>

              <div className="flex flex-col gap-3 md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Category Type</span>
                  </label>
                  <select
                    name="category"
                    className="input input-bordered"
                    id=""
                  >
                    <option value="Phone">Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Watch">Watch</option>
                    <option value="Headphone">Headphone</option>
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                    name="price"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <select name="rating" className="input input-bordered">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="form-control mb-5 w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  name="description"
                  className="input input-bordered"
                  cols="60"
                  rows="10"
                ></textarea>
              </div>

              <div className="form-control w-full">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add products"
                />
              </div>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
