import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

    const { auth } = useSelector(state => state);

    const location = useLocation();

    return auth.isLoggedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
