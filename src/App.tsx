import React from "react";
import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection";
import PhotoSlider from "./components/PhotoSlider.tsx";
import VideoSlider from "./components/VideoSlider.tsx";

const App: React.FC = () =>  {


  return (
    <>
          <Header />
      <main className="pt-16">
          <HeroSection />
          <PhotoSlider />
          <VideoSlider />
      </main>
    </>
  )
}

export default App
