import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import TakeTest from "./pages/TakeTest";
import TestPage from "./pages/TestPage";
import Result from "./Result";

function App() {
  return (
    <>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/take-test" element={<TakeTest />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/test/:subject" element={<TestPage/>}/>
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;