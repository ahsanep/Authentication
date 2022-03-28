import logo from './logo.svg';
import './App.css';
import Signup from './Signup'
import Gogin from './Gogin'
import {Route,Routes} from 'react-router-dom'
import Main from './Main';
function App() {
  return (
   <>
   <Routes>
     <Route exact path="/signup" element={<Signup></Signup>} />
     <Route path="/" element={<Gogin></Gogin>} />
     <Route path="/main" element={<Main></Main>} />
   </Routes>
 
    </>
  );
}

export default App;
