import { Wraper, Image, Title, ItemList } from "./styled";
import svg from "../../images/human.svg";


const Home = () => {
    
    return (
        <Wraper>
            <div>
                <Title>What we do? </Title>
                <ul>
                    <ItemList>We keep the numbers of your enemies </ItemList>
                    <ItemList>We help you to find the right enemy when it's time to take revenge</ItemList>
                </ul>
                
            </div>
            <div >
                <Image src={svg} alt="React Logo" />
            </div>
        </Wraper>
    );
};

export default Home;