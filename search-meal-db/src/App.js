import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Restaurant from './Components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
