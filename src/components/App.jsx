
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from "components/Filter/Filter";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { fetchContacts } from 'redux/contacts/operations';
// import { getError, getIsLoading } from 'redux/contacts/selectors';
import { ROUTES } from 'utils/routes';
// import { MainTitle, Phonebook, SubTitle } from "./App.styled";
// import ContactList from "./ContactList/ContactList";
// import { Header } from './Header/Header';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register/Register';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import NotFound from './pages/NotFound';

// const TITLES = {
//   form: 'iPhoneBook &#63743;',
//   contacts: 'Contacts',
// }

export function App () {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    
    <Routes>
      <Route path={ROUTES.HOME} element={<SharedLayout />} >
        <Route index element={<HomePage />} />
        <Route
          path={ROUTES.REGISTER}
          element={
            <RestrictedRoute 
              redirectTo={ROUTES.CONTACTS} 
              component={<Register />} 
            />
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <RestrictedRoute 
              redirectTo={ROUTES.CONTACTS} 
              component={<Login />} 
            />
          }
        />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <PrivateRoute 
              redirectTo={ROUTES.LOGIN} 
              component={<Contacts />} 
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

      // <Phonebook>
      //   <Header/>
      //   <MainTitle title={TITLES.form} />
      //   <ContactForm/>
      //   <SubTitle title={TITLES.contacts}/>
      //   <Filter/>
      //   {isLoading && <p>Loading</p>}
      //   {error && <p>{error}</p>}
      //   <ContactList/>
      // </Phonebook>
  );
}
  