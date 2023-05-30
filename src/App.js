import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css'
import LearningPath from "./components/LearningPath";
import Navbar from "./components/Navbar";
import FirstContainer from "./components/FirstContainer";
import MyCourses from "./components/MyCourses";
import Courses from "./components/Courses";
import CascadingVid from "./videoContents/CascadingVid";
import HyperText from "./videoContents/HyperText";
import JavaScriptVid from "./videoContents/JavaScriptVid";
import CourceReact from "./videoContents/CourceReact";
import ReactNative from "./videoContents/ReactNative";
import NodeCourses from "./videoContents/NodeCourses";
import Mysql from "./videoContents/Mysql";
import Azure from "./videoContents/Azure";
import GitHub from "./videoContents/GitHub";
import FrondEnd from "./courseDeteils/FrondEnd";
import Backend from "./courseDeteils/BackEnd";
import MobileDev from "./courseDeteils/MobileDev";
import SignUp from "./components/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <FirstContainer/> */}

      <Routes>
        <Route path="/firstcontainer" exact element={<FirstContainer />} />
        <Route path="/mycourses" exact element={<MyCourses />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/SignUp" exact element={<SignUp />} />
        <Route path="/LearningPath" exact element={<LearningPath />} />
        <Route path="/Hypertext" exact element={<HyperText />} />
        <Route path="/CascadingVid" exact element={<CascadingVid />} />
        <Route path="/JavaScriptVid" exact element={<JavaScriptVid />} />
        <Route path="/CourceReact" exact element={<CourceReact />} />
        <Route path="/ReactNative" exact element={<ReactNative />} />
        <Route path="/NodeCourses" exact element={<NodeCourses />} />
        <Route path="/Mysql" exact element={<Mysql />} />
        <Route path="/Azure" exact element={<Azure />} />
        <Route path="/GitHub" exact element={<GitHub />} />
        <Route path="/Frondend" exact element={<FrondEnd />} />
        <Route path="/Backend" exact element={<Backend />} />
        <Route path="/MobileDev" exact element={<MobileDev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
