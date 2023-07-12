import {useState} from 'react';

function FunctionalTextInput (){
  const [text, setText] = useState('');

  const handleChange = change =>{
    setText(change.target.value);
  }
  return (
    <div>
      <input
          type="text"
          value={text}
          onChange={handleChange}
      />
      <p>Typed value: {text}</p>
    </div>
  );
}

export default FunctionalTextInput