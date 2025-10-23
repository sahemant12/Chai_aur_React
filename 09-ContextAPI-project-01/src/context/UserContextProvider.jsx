import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null) // user, setUser is the data that we want to pass(this data should avoid prop driling)
    return(
        // Step-2: make the Provider of the component in which you want to send data
        <UserContext.Provider value={{user, setUser}}>
        {children} // now children can access the data of UserContext.
        </UserContext.Provider>
    )
}

export default UserContextProvider