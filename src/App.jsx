import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Mywork from './components/Mywork';
import Contect from './components/Contect';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-[#2a004a] dark:text-white`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Header />
      <About />
      <Services />
      <Mywork />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
