import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    let [ref,setRef]=useRef("inputbox");

    useEffect(() => {
        
    }, []);

    const handleButtonClick = () => {

    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={ref}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
