import {useState} from 'react';

function FunctionalCounter() {
    const [count, incrementCount] = useState(0);

    const addOne = () => {
        incrementCount(count + 1);
    };


    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={addOne}>Increment</button>
        </div>
    );
} 
export default FunctionalCounter;