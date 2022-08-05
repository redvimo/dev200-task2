import logo from './logo.svg';
import './App.css';
import {currentDate, availabilityStatus} from './booking.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Availability Calendar</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{currentDate.toDateString()}</p>
        <p>{availabilityStatus.toString()}</p>
      </header>
    </div>
  );
}

export default App;
