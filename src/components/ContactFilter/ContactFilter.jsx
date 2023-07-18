import { useSelector, useDispatch } from "react-redux";
import { addFilter } from 'redux/filter/filterSlice';
import { Wraper, Title } from "./styled.js";
 

const ContactFilter = () => {

  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();


  const handleChange = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <Wraper>
      <Title>Find contacts by name</Title>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </Wraper>
  )
};


export default ContactFilter;

