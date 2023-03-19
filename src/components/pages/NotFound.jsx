import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

export const NotFound = () => {
    return  (
        <>
            <div>NotFound</div>
            <NavLink to={ROUTES.HOME}>Go back</NavLink>
        </>
    )
}

export default NotFound;