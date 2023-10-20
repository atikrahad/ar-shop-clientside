import { useContext } from "react";
import { Authinfo } from "./Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"


const Privateroute = ({children}) => {
    const {user, loading} = useContext(Authinfo)
    if(loading){
        return (
            <div>

            </div>
        )
    }
    else if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};
Privateroute.propTypes = {
    children: PropTypes.node
}
export default Privateroute;