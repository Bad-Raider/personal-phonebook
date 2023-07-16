import { Wraper, Image } from "./styled";
import svg from "../../images/human.svg";


const Home = () => {
    
    return (
        <Wraper>
            <div>
                <h2>What we do? </h2>
                <ul>
                    <li>We keep the numbers of your enemies </li>
                    <li>We help you to find the right enemy when it's time to take revenge</li>
                </ul>
                
            </div>
            <div >
                <Image src={svg} alt="React Logo" />
            </div>
        </Wraper>
    )
};

export default Home;