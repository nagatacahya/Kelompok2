import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NagataProfile from './myPages/NagataProfile';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/nagata" element={<NagataProfile />} />
      </Routes>
    </Router>
  );
}

export default App;