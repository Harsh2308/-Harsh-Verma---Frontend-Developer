import { Route, Routes } from 'react-router-dom';
import Capsule  from './Components/Capsule';
import  Homepage  from './Components/Homepage';
import  Navbar  from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/home" element={<Homepage />}/>
          <Route exact path="/capsule" element={<Capsule />}/>
          </Routes>
    </div>
  );
}

export default App;
