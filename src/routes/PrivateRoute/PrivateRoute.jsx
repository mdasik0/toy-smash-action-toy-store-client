import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
        <progress className="progress w-56"></progress>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
