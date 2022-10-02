import './App.css';
import maintenance from './maintenance.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We're under maintenance</h1>
        <img src={maintenance} alt="rocket" />
        <p className='copyright'><a href="https://www.clipartmax.com/middle/m2i8m2Z5Z5H7i8Z5_website-maintenance-icon-png/">Website Maintenance Icon Png @clipartmax.com</a></p>
      </header>
    </div>
  );
}

export default App;
