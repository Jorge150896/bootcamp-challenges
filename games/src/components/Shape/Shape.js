import "./Shape.scss";
import { useState } from "react";


const Shape = ({forma,userColor}) => {

    const [bgcolor,setBGColor] = useState();

    const changeColor = () => {
        console.log("cambia color")
        setBGColor(userColor)
    }

    return(
        <>
                <div className={`shape__${forma}`} onClick={changeColor} style={{backgroundColor: bgcolor}} > </div>
                <p>{forma}</p>
        </>
    );
}

export default Shape;