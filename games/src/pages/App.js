import { useState } from 'react';
import './App.css';

const emojiDictionary ={
  banana: '🍌',
  platano: '🍌',
  manzana: '🍎',
};
const transformTextToEmoji = text =>{
  const newText = text.split(' ').map((word)=> emojiDictionary[word] ?? word);
  return newText.join(' ');
};

const App = () => {
  const [color,setColor] = useState('blue')
  const[text,setText] =useState('Hola estado inicial')
  const onTextAreaChnages = (e) => {
    // console.log(e.target.value)
    setText(e.target.value)
  }
  return (
    <div className="app">
      <textarea value={text} className='app__input' cols="30" rows="10" onChange={onTextAreaChnages}></textarea>
      {/* <p>{text}</p> */}
      <input type="text" onChange={(e) => setColor(e.target.value)}></input>
      <p style={{color:color}}>{transformTextToEmoji(text)}</p>
    </div>
  );
}
 
export default App;
