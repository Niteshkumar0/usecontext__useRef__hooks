import { useContext } from "react";
import { giveValue } from "../App";

let About = () => {
    let title_= useContext(giveValue);
    return(
        <>
            <span>about</span>
            <span>{title_}</span>
        </>
    )
}
export default About;