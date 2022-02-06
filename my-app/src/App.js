import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Message className = "loveman" title={"HELLO "}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Input />
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
