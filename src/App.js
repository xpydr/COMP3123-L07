import logo from './logo.svg';
import Student from './student';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Student sid={101482475} fnm="Rohan" lnm="Puri" school="George Brown College" city="Toronto" />
    </div>
  );
}

export default App;