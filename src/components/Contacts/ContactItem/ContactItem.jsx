import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operationsContacts";
import { Li, Span, Div, SpanNum, } from "./styled.js";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const ContactItem = ({ id, name, number }) => {

    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
    };
    
    return (
        <Li>
            <Span>{name}: </Span>
            <Div>
                <SpanNum>{number}</SpanNum>
                <IconButton
                    aria-label="delete"
                    size="large"
                    type="button"
                    onClick={handleDeleteContact}
                    color="error"
                >
                    <DeleteIcon />
                </IconButton>
            </Div>
        </Li>
    );
};

export default ContactItem;


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};