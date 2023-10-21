
import PropTypes from 'prop-types'


const Cartdetails = ({ item , handleDeleteCartproduct}) => {

    
    
  const { img,_id, title, price } = item;

    
  
  return (
    <div>
      <div className="flex gap-5  h-40 md:h-32 card-side bg-base-300 shadow-xl">
        <div className="w-1/3 md:w-[20%]">
          <img
            src={img}
            alt="Movie"
            className="w-48  h-40 md:h-auto md:w-24"
          />
        </div>
        <div className="w-[60%] py-10 md:w-[75%]">
          <div>
          <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold"> Price: {price} tk</p>
          </div>
          
            <button onClick={()=>handleDeleteCartproduct(_id)} className=" rounded-md text-white py-2 px-3 bg-green-600 hover:bg-sky-600">Remove from cart</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
Cartdetails.propTypes ={
    item: PropTypes.object.isRequired,
    handleDeleteCartproduct: PropTypes.func.isRequired
}
export default Cartdetails;
