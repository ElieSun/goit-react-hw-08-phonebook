
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Phonebook, MainTitle, SubTitle } from "./App.styled";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export function App () {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Phonebook>
        <MainTitle>iPhoneBook &#63743;</MainTitle>
        <ContactForm/>
        <SubTitle>Contacts</SubTitle>
        <Filter/>
        {isLoading && <p>Loading</p>}
        {error && <p>{error}</p>}
        <ContactList/>
      </Phonebook>
    );
    }
  