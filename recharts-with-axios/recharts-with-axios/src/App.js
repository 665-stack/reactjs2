import logo from './logo.svg';
import './App.css';
import PhoneChart from './Component/PhoneChart/PhoneChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


function App() {
  const [flip, set] = useState(false)

  const props = useSpring({
    to: {
      opacity: 1
    },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  },
  );

  function isAdmin(user) {
    return (user ? 'Admin' : 'Normal User');
  }
  // console.log(isAdmin(true));
  return (

    <div className="App">
      <animated.div style={props}> <h2>ReCharts</h2> </animated.div>
      <PhoneChart></PhoneChart>

    </div>
  );
}

export default App;
