
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/about' element={<About></About>}></Route>

        <Route path='/friends' element={<Friends></Friends>}></Route>

        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
