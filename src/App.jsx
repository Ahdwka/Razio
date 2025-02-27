import Header from "./components/1-header/Header.jsx";
import Hero from "./components/2-hero/Hero.jsx";
import Cards from "./components/3-cards/Cards.jsx";
import Footer from "./components/4-footer/Footer.jsx";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://efrcznztvxsgnvebbnvb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmcmN6bnp0dnhzZ252ZWJibnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1OTAwMDEsImV4cCI6MjA1NjE2NjAwMX0.pzEIk_Px-y-_voHgk7Fc9etknHTMsyGPQnObnMRH0-M");

function App() {
  return (
    <div className="container">
      <div className="container2">
      
        <Header />
        <Hero />
        <div className="divider" />
        <Cards />
        <div className="divider" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
