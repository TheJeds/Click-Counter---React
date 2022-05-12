import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import LogoTheJeds from './images/Logo-TheJeds.png'
import { useState } from 'react'

function App() {

  const [clicksC, setClickC] = useState(0);
  
  const addClick = () => {
    setClickC(clicksC + 1);
  }

  const resetCounter = () => {
    setClickC(0);
  }

  return (
    <div className="App">
      <div className="container-TheJeds-logo">
        <img className="TheJeds-logo" src={LogoTheJeds} alt="Logo TheJeds" />
      </div>
      <div className='container-main'>
        <Counter clicksC={ clicksC } />
        <Button text='Click' isButtonClick={true} handleClick={addClick} />
        <Button text='Reset' isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
