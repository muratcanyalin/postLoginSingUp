import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div  >
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} /> 
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
