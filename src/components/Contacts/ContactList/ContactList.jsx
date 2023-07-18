import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Ul from "./styled";



const ContactList = () => {

    const { contacts, filter } = useSelector(state => state);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const arrContacts = getVisibleContacts();

    return (
        <>
            {contacts.isLoading &&
                <Box sx={{ display: 'flex' }}>
                <CircularProgress />
                </Box>
            }
            {contacts.error && <h2>Oooopsss! Try again, please</h2>}
            <Ul>
                {arrContacts.map(({ id, name, number, phone }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number || phone}
                    />
                ))}
            </Ul>
        </>
    );
};

export default ContactList;
