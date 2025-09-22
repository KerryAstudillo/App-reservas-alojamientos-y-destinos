import Navbar from "./navbar/navbar";
import MainPart from "./mainPart/mainPart";
import InforPart from "./infoPart/infoPart";
import { BrowserRouter as Router } from "react-router-dom";

const PrincipalPage = () => {
    return(
        <div className="parallax-container">
            <Navbar />
            <MainPart />
            <InforPart />
            
        </div>
    );
}

export default PrincipalPage;