import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Home';
import Room from './pages/Room';


//?App Function

function App() {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/room/:roomId' element={<Room/>}/>

   </Routes>
  );
}

export default App;
