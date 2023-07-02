import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({
    children
}) => {
    const [currentuser, setcurrentuser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async(inputs) => {
        const res = await axios.post("/auth/login", inputs);
        setcurrentuser(res.data);
    };
    const logout = async(inputs) => {
        const res = await axios.post("/auth/logout", inputs);
        setcurrentuser(null);
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentuser));
    }, [currentuser]);


    return ( 
    
    <AuthContext.Provider value = {
        {
            currentuser,
            login,
            logout
        }
    } > { children } 
    </AuthContext.Provider>
    );
};