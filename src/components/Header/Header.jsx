// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'components/Hooks/useAuth';
import css from 'components/Header/Header.module.css';

import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <header className={css.header} >
      <nav className='nav-main-link'>
        <NavLink to={ROUTES.HOME}><p style={{paddingRight: 30}}>Home</p></NavLink>
        {isLoggedIn ? <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink> : ''}
      </nav>
      {isLoggedIn ? (
        <div className="nav-user-auth">
          <p className='nav-user-name'>Welcome, {user.name}</p>
          <NavLink type="button" onClick={ () => dispatch( logOut() ) } >
            Logout
          </NavLink>
        </div>
      ) : (
        <div className={css.auth}>
          <NavLink to={ROUTES.LOGIN}>Login</NavLink>
          <NavLink to={ROUTES.REGISTER}>Register</NavLink>
        </div>
      ) }
    </header>
  )
}
    