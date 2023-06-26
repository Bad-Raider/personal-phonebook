import Container from "../components/Container/Container";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/Contacts/ContactList/ContactList";
import ContactFilter from "../components/ContactFilter/ContactFilter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";



const Contacts = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    
    return (
        <Container>
            <h2>Phonebook</h2>
            <ContactForm/>
            <h2>Contacts</h2>
            <ContactFilter />
            <ContactList />
        </Container>
    );
};


export default Contacts;
