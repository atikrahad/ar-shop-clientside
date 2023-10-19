import PropTypes from "prop-types"
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export  const Authinfo = createContext(null)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const singinWithpas = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
        
    }
    const googleSignin = provider => {
       return signInWithPopup(auth, provider);
        
    }

    const Info = {
        user,
        createUser,
        setUser,
        googleSignin,
        singinWithpas,
    }
    return (
        <Authinfo.Provider value={Info}>
            {
                children
            }
        </Authinfo.Provider>
    );
};
Authprovider.propTypes = {
    children: PropTypes.node
}
export default Authprovider;