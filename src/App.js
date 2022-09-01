import { click } from '@testing-library/user-event/dist/click';
import {useState} from 'react'
import './App.css';
import Star from './Star'

function App() {

  const [clickedRating, setClickedRating] = useState(null)


  return (
    <div className="App">
{[...Array(5)].map((star, index) => {

let ratingValue = index + 1;
 
 return (
  <label>
    <input 
    className="radio-btns"
    type='radio'
    onClick={() => setClickedRating(ratingValue + 1)}
    />
    <Star key={index} clickedRating={clickedRating} ratingValue={ratingValue}  />
  </label>

 )
})}

    </div>
  );
}

export default App;
