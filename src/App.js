import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is for each pages you naviagte to */}
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-in" exact element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
