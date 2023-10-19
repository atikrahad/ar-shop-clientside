import PropTypes from 'prop-types'
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
          <div className="card-actions justify-end">
            <button className="btn border-none text-white font-semibold bg-green-600 hover:bg-sky-600">See {brand} products</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Brand.propTypes ={
    data: PropTypes.object.isRequired
}
export default Brand;
