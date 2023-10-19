
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export  const Authinfo = createContext(null)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        
    }

    const Info = {
        user,
        createUser,
        setUser,
    }
    return (
        <Authinfo.Provider value={Info}>
            {
                children
            }
        </Authinfo.Provider>
    );
};

export default Authprovider;