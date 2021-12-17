import React, { useState, useEffect } from 'react';
import { Profiler } from 'react/cjs/react.production.min';
import './App.css';
import ProfileCard from './Components/ProfileCard';
import profiles from './Components/ProfileData';

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(0);


  const [fullname, setFullname] = useState('WAITING FOR DATA')

  const getRandomName = async () => {
    const response = await fetch('https://randomuser.me//api')
    const data = await response.json()
    setFullname(data.results[0].name.first + ' ' + data.results[0].name.last)
    return fullname
  }

  useEffect(() => {
    getRandomName()
  }, [])


  return (
    <div className="App">
      <h1>The Count is: {count} </h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={Increment}>Increment</button>
      {" "}
      {/* <button onClick={() => setCount(count - 1)}> Decrement</button> */}
      <button onClick={Decrement}> Decrement</button>
      {" "}
      {/* <button onClick={() => setCount(0)} >Reset</button> */}
      <button onClick={Reset} >Reset</button>

      <hr /><hr />


      {profiles.map(profile => (
        <ProfileCard
          image={`https://robohash.org/${Math.random()}.png`}
          title={profile.title}
          name={fullname}
          description={profile.description}
        />
      ))}
    </div >
  );
}

export default App;







// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);



//   const Increment = () => setCount(count + 1);
//   const Decrement = () => setCount(count - 1 ) ? Decrement : Reset;
//   const Reset = () => setCount(0);


//   return (
//     <div className='App'>
//       <h1>The Number is: {count} </h1> <hr />
//       <button onClick={Increment}>+</button> {" "}
//       {count} {" "}
//       <button onClick={Decrement}>-</button> {" "} <br /><br />
//       <button onClick={Reset}>Reset</button>

//     </div>
//   )
// }

// export default App
