import { Wraper, Title } from "./styled";
import svg from "../../images/human.svg";


const Home = () => {
    
    return (
        <Wraper>
            <Title>Welcom to phonebook app!</Title>
            <div>{svg}</div>
        </Wraper>
    )
};

export default Home;