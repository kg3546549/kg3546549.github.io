import React from 'react';
import { Box, CSSReset } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Career from './components/Career';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Box bg="white" minH="100vh">
      <CSSReset />
      <Navbar />
      <Box as="main">
        <Profile />
        <Box id="about">
          <About />
        </Box>
        <Box id="career">
          <Career />
        </Box>
        <Box id="tech">
          <TechStack />
        </Box>
        <Box id="awards">
          <Achievements />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
