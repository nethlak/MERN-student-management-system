import './App.css';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";// by this we can change th epart of the document when action happening

// import CounterClass from './components/CounterClass';
// import CounterFunction from './components/CounterFunction';

function App() {
  return (
    <Router>
      <div className="App">
      
        {/* <CounterClass/>
        <CounterFunction/> */}
        <Header/>
        
        <Routes>
          <Route path="/" exact Component={AllStudent}/>
          <Route path="/add" exact Component={AddStudent}/>
        </Routes>
        
      
      </div>
    </Router>
  );
}

export default App;
