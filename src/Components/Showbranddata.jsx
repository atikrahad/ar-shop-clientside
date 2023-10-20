import { Link } from "react-router-dom";


const Showbranddata = ({item}) => {
    const {img,price,rating,brand,_id, title} = item;
    return (
        <div>
      <div className="card bg-base-200 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={img}
            alt=""
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body -my-3 -space-y-1 items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{price} TK</p>
          <p>Rating {rating} </p>
          <div className="card-actions">
            <Link to={`/products/${_id}`}><button className="btn bg-green-600 text-white font-semibold hover:bg-sky-600">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Showbranddata;