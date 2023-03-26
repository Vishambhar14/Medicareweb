import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigate from './component/Navigate';
import Home from './component/Home';
import About from './component/About';
import Servica from './component/Servica';
import News from './component/News';
import Review from './component/Review';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     
       <Route path="/" element={<Navigate/>}>
       <Route path='/home' element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/service" element={<Servica/>}/>
       <Route path="/news" element={<News/>}/>
     
       </Route>
       <Route path="/review" element={<Review/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
