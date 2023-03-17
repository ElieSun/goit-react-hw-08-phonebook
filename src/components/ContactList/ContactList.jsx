import ContactListItem from "components/ContactListItem/ContactListItem";
import { List, Item } from "components/ContactList/ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/contacts/selectors";
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactList() {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress</b>}
      <List>
        {contacts.map((contact) => {
          return (
            <Item key={contact.id} >
              <ContactListItem contact={contact} />
              </Item>
          );
        })}
      </List>
    </>
  );
}
