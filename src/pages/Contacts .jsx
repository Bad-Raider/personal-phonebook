import Container from "../components/Container/Container";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/Contacts/ContactList/ContactList";
import ContactFilter from "../components/ContactFilter/ContactFilter";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operationsContacts";



const Contacts = () => {
    
    const dispatch = useDispatch();
    const { auth, contacts } = useSelector(state => state);
    const lengthContacts = contacts.items.length >= 1;

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    
    return (
        auth.isLoggedIn &&
        <div style={{
            paddingRight: '15px',
            paddingLeft: '15px'
        }}>
            <Container>
                <h2>Phonebook</h2>
                <ContactForm />
                {lengthContacts &&
                    <>
                        <h2>Contacts</h2>
                        <ContactFilter />
                        <ContactList />
                    </>
                }
            </Container>
        </div>
    );
};


export default Contacts;
