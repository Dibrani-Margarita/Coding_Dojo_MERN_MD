import { useParams } from "react-router";

const Number = (props) => {
    const { number } = useParams();
    const parameter = isNaN(number);
    let returnText = '';
        if(parameter) {
            returnText = <div><p>The word is { number }</p></div>
        } else {
            returnText = <div><p>The number is { number }</p></div>
        }
    return(returnText);
}

export default Number;