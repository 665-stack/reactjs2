import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Friends></Friends>
      <About></About>
    </div>
  );
}

export default App;
