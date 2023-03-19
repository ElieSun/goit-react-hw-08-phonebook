import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/Hooks/useAuth';
import { ROUTES } from 'utils/routes';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ 
    component: Component, 
    redirectTo = ROUTES.HOME
 }) => {
  const { isLoggedIn } = useAuth();
 
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
