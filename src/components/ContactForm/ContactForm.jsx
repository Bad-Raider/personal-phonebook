import { useState } from "react";
import css from './ContactForm.module.css';
import { addContact } from "redux/operations";
import { useSelector, useDispatch } from "react-redux";


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

    return <form
        onSubmit={handleSubmit}
        className={css.form}>
        <label > Name:
            <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <label > Number:
            <input
                onChange={handleChange}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button
            className={css.formBtn}
            type="submit">Add contacts
        </button>
    </form>;
};


export default ContactForm;



