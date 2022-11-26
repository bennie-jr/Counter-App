import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <h1>COUNTER APP</h1>
      <Counter value = {5}/>
      <Counter value = {15}/>
      <Counter value = {30}/>
      
    </div>
  );
}

export default App;
