import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Background from "./components/Background/Background";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }

 
  return (
    <>
      <Background />

      <div className="main-content">

        <ScrollProgress />

        <Navbar />
        <SocialSidebar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />

      </div>
    </>
  );
}

export default App;