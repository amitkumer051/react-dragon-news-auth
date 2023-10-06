/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    console.log(location.pathname);

    if(loading){
      return  <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return  <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default PrivateRouts;