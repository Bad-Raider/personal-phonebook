import { useState } from "react";
import { addContact } from "redux/contacts/operationsContacts";
import { useSelector, useDispatch } from "react-redux";
import { Form, Label, Input, Button } from "./styled";

const ContactForm = () => { 

    const { contacts } = useSelector(state => state);
    const { items } = contacts;
    const dispatch = useDispatch();


    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const addNewContacts = (name, number) => {
        const contactExists = items.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (contactExists) alert(`${name} is already in contacts.`);
        else {
            const newContact = {
                name: name,
                number: number,
            };
            dispatch(addContact(newContact));
        };
    };


    const handleChange = evt => { 
        const { name, value } = evt.target;
        if (name === "name") setName(value);
        else if(name === "number") setNumber(value);
    };

    const handleSubmit = evt => {
        evt.preventDefault()
        addNewContacts(name, number);
        setName("");
        setNumber("");
    };          

    return <Form onSubmit={handleSubmit}>
        <Label > Name:
            <Input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Label>
        <Label > Number:
            <Input
                onChange={handleChange}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </Label>
        <Button
            type="submit">Add contacts
        </Button>
    </Form>;
};


export default ContactForm;



