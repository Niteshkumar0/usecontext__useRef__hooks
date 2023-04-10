import Home from "./comp/Home.js";
import About from "./comp/About.js";
import { Route,Routes,Link  } from "react-router-dom";
import React,{createContext, useState} from 'react'
import Scroll from "./comp/Scrolll.js";


// export let giveValue = createContext()
export  let giveValue = createContext();

function App() {
  let [value,setValue] = useState("hello")
  return (
    
    // <Router>
    <>
    <giveValue.Provider value={value}>

      <nav>
        <ul>
          <li><Link to="/">  Home </Link></li>
          <li><Link to="/about"> About</Link></li>
        </ul>
      </nav>

        <Routes>
         <Route path="/" Component={Home}/>
         <Route path="/about" Component={About}/>
     </Routes>
    </giveValue.Provider>

    <Scroll/>

</>
    
  );
}

export default App;
