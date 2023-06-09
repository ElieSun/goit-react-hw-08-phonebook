import { useState } from 'react';
import { Form, FormLine, FormLabel, FormInput, FormButton } from 'components/ContactForm/ContactForm.styled'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export default function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();


    const handleChange = evt => {
        const {name, value} = evt.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break ;
            case 'number':
                setNumber(value)
                break ;
            default:
                break ;
        }
    }; 

    const handleSubmit = evt => {
        evt.preventDefault();
        if (contacts.some(contact => contact.name === name)) {
            alert('Contact already exists');
            return
        }
        const contact = {
            name: name,
            number: number
        }
        dispatch(addContact(contact));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <>
            <Form onSubmit={handleSubmit}>
                <FormLine>
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </FormLine>
                <FormLine>
                    <FormLabel>Contact Number</FormLabel>
                    <FormInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChange}
                    />
                </FormLine>
                <FormButton type="submit">
                    Add contact
                </FormButton>
            </Form>
            </>
        );
    }
