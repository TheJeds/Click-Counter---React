import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import LogoTheJeds from './images/Logo-TheJeds.png'

function App() {
  
  const handleClick = () => {
    console.log('Click');
  }

  const resetCounter = () => {
    console.log('Reset');
  }

  return (
    <div className="App">
      <div className="container-TheJeds-logo">
        <img className="TheJeds-logo" src={LogoTheJeds} alt="Logo TheJeds" />
      </div>
      <div className='container-main'>
        <Counter clicksC='5' />
        <Button text='Click' isButtonClick={true} handleClick={handleClick} />
        <Button text='Reset' isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
