import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export  const Authinfo = createContext(null)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [remaingdata, setRemaingdata] = useState()
    const [promis, setPromis] = useState(false)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const singinWithpas = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password); 
    }
    const googleSignin = provider => {
        setLoading(true)
       return signInWithPopup(auth, provider);
        
    }
    const logoutUser = () => {
        setLoading(true)
       return signOut(auth);
        
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=> {
            setUser(user);
            setLoading(false)
        })
        return unSubscribe;
    },[])

    
        

    const Info = {
        user,
        createUser,
        setUser,
        googleSignin,
        singinWithpas,
        logoutUser,
        loading,
        setRemaingdata,
        remaingdata,
        setPromis,
        promis
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