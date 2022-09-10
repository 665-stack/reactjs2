import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Countries from './Components/Countries/Countries';
import Resume from './Components/Resume/Resume';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
