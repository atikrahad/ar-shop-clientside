const Addproducts = () => {

    const handleAddproduct = e => {
        e.preventDefault()
        const  form = e.target;
        const img = form.img.value;
        const title = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = {img, title, brand, category, price, description, rating };
        form.reset()
        console.log(product);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Product</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddproduct} className="card-body">
              
              <div className="form-control">
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
              <div className="form-control">
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand name</span>
                </label>
                <input
                  type="text"
                  placeholder="brand"
                  className="input input-bordered"
                  required
                  name="brand"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Type</span>
                </label>
                <select name="category" className="input input-bordered" id="">
                    <option value="Phone">Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Watch">Watch</option>
                    <option value="Headphone">Headphone</option>
                </select>
              </div>
              
              <div className="form-control">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea name="description" className="input input-bordered" cols="30" rows="10"></textarea>
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                  name="rating"
                />
                
              </div>
              <div className="form-control">
            
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

export default Addproducts;
