import { useLoaderData } from "react-router-dom";



const Apdate = () => {

    const data = useLoaderData()
    const { img, title, brand,category, rating, description, price } = data;
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update product</h1>
            
          </div>
          <div className=" flex-shrink-0 w-full rounded-md shadow-2xl bg-base-100">
            <form  className=" p-5">
              
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
                  defaultValue={img}
                  name="img"
                />
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand name</span>
                </label>
                <input
                  type="text"
                  placeholder="brand"
                  className="input input-bordered"
                  required
                  defaultValue={brand}
                  name="brand"
                />
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
                  defaultValue={title}
                  name="name"
                />
              </div>
              
              <div className="flex flex-col gap-3 md:flex-row">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category Type</span>
                </label>
                <select name="category" defaultValue={category} className="input input-bordered" id="">
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
                  defaultValue={price}
                  name="price"
                />
                
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                  defaultValue={rating}
                  name="rating"
                />
                
              </div>
              </div>
              <div className="form-control mb-5 w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea name="description" defaultValue={description} className="input input-bordered" cols="30" rows="10"></textarea>
                
              </div>
              
              <div className="form-control w-full">
            
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add products"
                />
                
              </div>
              
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Apdate;