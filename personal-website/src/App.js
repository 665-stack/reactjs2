import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
      </Routes>

    </div>
  );
}

export default App;
