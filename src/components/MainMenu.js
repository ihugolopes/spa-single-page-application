import { MainMenuContainer } from "../styles/MainMenuContainer";
import { Link } from "react-router-dom";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </MainMenuContainer>
);