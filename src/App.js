
import './App.css';
import kluxlogo from './kluxlogo.png';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="App-header text-center">
        <div><img src={kluxlogo} className="App-logo img-fluid" alt="logo" /></div>
      </header>
      <main>
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword="sunrise"/>
      </main>
      <footer className="App-footer text-center">
        <small>Coded by Klux</small>
      </footer>
      </div>
    </div>
  );
}

export default App;
