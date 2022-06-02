import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Balones from "./Components/Balones/Balones";
import Uniformes from "./Components/Uniformes/Uniformes";
import Header from "./Layout/Header";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<></>} />
          <Route path="/uniformes" element={<Uniformes />} />
          <Route path="/balones" element={<Balones />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
