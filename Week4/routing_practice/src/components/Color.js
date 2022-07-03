import { useParams } from "react-router";

const Color = (props) => {
    const { number, text, background } = useParams();
    const parameter = isNaN(number);
    let returnText = '';
        if(parameter) {
            returnText = <div style={{color: text, backgroundColor: background, textAlign: "center"}}><p>The word is { number }</p></div>
        } else {
            returnText = <div style={{color: text, backgroundColor: background, textAlign: "center"}}><p>The number is { number }</p></div>
        }
    return(returnText);
}

export default Color;