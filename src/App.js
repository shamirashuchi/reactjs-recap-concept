import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name: 'Dr. Mahfuz', job:'singer'}
const singer2 = {name: 'Eva Rahman', job:'singer2'}

const singerstyle = {
  color:'purple',
  backgroundColor:'white'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        {/*.container*/}
        <div className="container">
          <h3>hello dude, React.How are you</h3>
        </div>
        <div className="music">
         <p>Name:{2222+number}</p>
         <p style={singerstyle}>Name:{singer.name} {singer.job}</p> 
         <p style={{
  color:'blue',
  backgroundColor:'yellow'
}}>Name:{singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
