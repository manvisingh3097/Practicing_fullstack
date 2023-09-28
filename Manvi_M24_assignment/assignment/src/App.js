import './App.css';
import A_q1 from "./pages/q1";
import A_q2 from "./pages/q2";
import A_q3 from "./pages/q3";
import A_q4 from "./pages/q4";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/q1" element={<A_q1 />} />
      <Route path="/q2" element={<A_q2 />} />
      <Route path="/q3" element={<A_q3 />} />
      <Route path="/q4" element={<A_q4 />} />
    </Routes>
   </Router>
  );
}

export default App;
