import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { StarsCanvas } from "./components/canvas";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary h-full">
        <div className="bg-[url('/herobg.png')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
