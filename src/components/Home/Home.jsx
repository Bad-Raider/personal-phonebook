import { Wraper, Image, Title, Words, ItemList } from "./styled";
import svg from "../../images/human.svg";


const Home = () => {
    
    return (
        <Wraper>
            <div>
                <Title>
                    <Words>What we do ?</Words>
                </Title>
                <ul>
                    <ItemList>
                        <Words>We keep the numbers of your enemies.</Words>
                    </ItemList>
                    <ItemList>
                        <Words>We help you to find the right enemy when it's time to take revenge.</Words>
                    </ItemList>
                </ul>
                
            </div>
            <div >
                <Image src={svg} alt="React Logo" />
            </div>
        </Wraper>
    );
};

export default Home;