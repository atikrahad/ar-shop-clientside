import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Brand = ({ data }) => {

    const {img, brand} = data;
  return (
    <div>
      <div className="card h-64  shadow-xl image-full">
        <figure>
          <img className="w-full"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p></p>
          <Link to={`/brandproducts/${brand}`}><div className="card-actions justify-end">
            <button className="btn border-none text-white font-semibold bg-green-600 hover:bg-sky-600">See {brand} products</button>
          </div></Link>
        </div>
      </div>
    </div>
  );
};
Brand.propTypes ={
    data: PropTypes.object.isRequired
}
export default Brand;
