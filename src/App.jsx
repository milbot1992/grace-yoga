import { Routes, Route } from "react-router-dom";
import MainPage from '../src/Components/MainPage.jsx'
import SingleClass from "./Components/SingleClass.jsx";
import YogaRetreat from "./Components/YogaRetreat.jsx";

function App() {

  return (
    <>
      <div className = 'content-container'>
      <Routes>
      <Route path="/" element={<MainPage />} />
          <Route path="/classes/:class_id" element={<SingleClass />} />
          <Route path="/retreat" element={<YogaRetreat />} />
        </Routes>
      </div>
    </>
  );
}


export default App;

