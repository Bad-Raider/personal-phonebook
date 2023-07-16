import { Wraper, Title } from "./styled";
import svg from "../../images/human.svg";


const Home = () => {
    
    return (
        <Wraper>
            <Title>Welcom to phonebook app!</Title>
            <div className="App">
                <img src={svg} alt="React Logo" />
            </div>
        </Wraper>
    )
};

export default Home;