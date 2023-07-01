import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {

    const { auth } = useSelector(state => state);

    const location = useLocation();
    return !auth.isLoggedIn ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
