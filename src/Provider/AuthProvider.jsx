import { createContext, useState } from "react"



export const Authcontex = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);



    const userInfo = {
        user,


    }


    return (
        <Authcontex.Provider value={userInfo}>

            {children}
        </Authcontex.Provider>
    )
}

export default AuthProvider
