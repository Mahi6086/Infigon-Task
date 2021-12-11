import "./App.css";
import Home from "./components/Home/Home/Home";
import { Route, Routes } from "react-router";
import NotFound from "./components/Share/NotFound/NotFound";
import HowWeHelp from "./components/Home/HowWeHelp/HowWeHelp";
import Programs from "./components/Home/Programs/Programs";
import FAQS from "./components/Home/FAQS/FAQS";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/howWeHelp" element={<HowWeHelp />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/faqs" element={<FAQS />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
