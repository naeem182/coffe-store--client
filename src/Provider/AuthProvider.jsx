import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../components/firebase/firebase.config";



export const Authcontex = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        createuser,
        signInUser


    }


    return (
        <Authcontex.Provider value={userInfo}>

            {children}
        </Authcontex.Provider>
    )
}

export default AuthProvider
