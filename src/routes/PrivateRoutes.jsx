import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../auth/auth';

const PrivateRoutes = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/login" />;
}

export default PrivateRoutes