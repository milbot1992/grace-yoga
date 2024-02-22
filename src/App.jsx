import { Routes, Route } from "react-router-dom";
import MainPage from '../src/Components/MainPage.jsx'
import SingleClass from "./Components/SingleClass.jsx";

function App() {

  return (
    <>
      <div className = 'content-container'>
      <Routes>
      <Route path="/" element={<MainPage />} />
          <Route path="/classes/:class_id" element={<SingleClass />} />
        </Routes>
      </div>
    </>
  );
}


export default App;

