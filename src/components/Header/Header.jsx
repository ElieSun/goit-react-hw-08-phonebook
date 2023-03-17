// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'components/Hooks/useAuth';
import css from 'components/Header/Header.module.css';

import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <>  
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </>
      {isLoggedIn ? (
        <>
          <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        </>
      ) : (
        <div className={css.auth}>
          <NavLink to={ROUTES.LOGIN}>Login</NavLink>
          <NavLink to={ROUTES.REGISTER}>Register</NavLink>
        </div>
        )}
        
    </header>
      )
      }