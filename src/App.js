import logo from './logo.svg';
import './App.css';
import FirstPage from './component/FisrtPage';
import {Routes,Route} from "react-router-dom"
import SecondPage from './component/SecondPage';
import ThirdPage from './component/ThirdPage';
import ForthPage from './component/ForthPage';
import OutputResult from './component/OutputResult';

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/second" element={<SecondPage/>}/>
        <Route path="/third" element={<ThirdPage/>}/>
        <Route path="/forth" element={<ForthPage/>}/>
        <Route path="/resultData" element={<OutputResult/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
