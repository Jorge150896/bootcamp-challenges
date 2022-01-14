import Shape from "../components/Shape/Shape";
import { useState } from "react";

import "./Paint.scss";


const PaintPage = () => {
    const [userColor,setUserColor] = useState("green");

    return(
        <>
        <div className="paint">
            <input
            value={userColor}
            type="text"
            onChange={ e=> {
                console.log(e.target.value)
                setUserColor(e.target.value)
            }}
            />
         <Shape forma = "cuadrado" userColor={userColor}/>

         <Shape forma = "rectangulo" userColor={userColor} />

         <Shape forma = "rombo" userColor={userColor}/>

         <Shape forma = "paralelogramo" userColor={userColor}/>

         <Shape forma = "circulo" userColor={userColor}/>





        </div>
        </>
    );
}

export default PaintPage;
