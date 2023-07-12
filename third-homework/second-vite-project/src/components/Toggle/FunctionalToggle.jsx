import {useState} from 'react';

function FunctionalToggle(){
    const [isToggled, setToggled] = useState(false);

    const toggleState = () =>{
        setToggled(!isToggled);
    }

    return (
        <div>
            <button onClick={toggleState}>
                {isToggled ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}
export default FunctionalToggle;