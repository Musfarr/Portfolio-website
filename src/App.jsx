import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './App.css';
import Navbar from './pages/Navbar';
import SideBar from './pages/SideBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

// AnimatePresence requires the use of a location
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const lineRefs = useRef([]);
  const maxLines = 20;

  // Function to create a line between two points
  const createLine = (x1, y1, x2, y2) => {
    const line = document.createElement("div");
    line.className = "trail-line";
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    document.body.appendChild(line);
    
    // Calculate the angle and distance
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    // Store line reference for cleanup
    lineRefs.current.push(line);
    
    // Remove oldest line if we exceed the max number
    if (lineRefs.current.length > maxLines) {
      const oldestLine = lineRefs.current.shift();
      if (oldestLine && oldestLine.parentNode) {
        oldestLine.parentNode.removeChild(oldestLine);
      }
    }
    
    // Animate the line using GSAP
    gsap.set(line, {
      width: 0,
      height: 2,
      rotation: angle,
      transformOrigin: "left center"
    });
    
    gsap.to(line, {
      width: distance,
      duration: 0.3,
      ease: "power1.out"
    });
    
    gsap.to(line, {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      onComplete: () => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
          // Remove from refs array
          const index = lineRefs.current.indexOf(line);
          if (index > -1) {
            lineRefs.current.splice(index, 1);
          }
        }
      }
    });
  };

  useEffect(() => {
    let lastCallTime = 0;
    const throttleInterval = 30; // milliseconds
    const movementThreshold = 5; // minimum pixel movement to create a line
    
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      
      // Throttle line creation
      if (currentTime - lastCallTime < throttleInterval) return;
      
      // Calculate movement distance
      const distanceMoved = Math.sqrt(
        Math.pow(e.clientX - prevMouseX, 2) + 
        Math.pow(e.clientY - prevMouseY, 2)
      );
      
      // Only create a line if movement exceeds threshold
      if (distanceMoved > movementThreshold) {
        createLine(prevMouseX, prevMouseY, e.clientX, e.clientY);
        setPrevMouseX(e.clientX);
        setPrevMouseY(e.clientY);
        lastCallTime = currentTime;
      }
    };
    
    // Initial mouse position
    const initMousePosition = (e) => {
      setPrevMouseX(e.clientX);
      setPrevMouseY(e.clientY);
      document.removeEventListener('mousemove', initMousePosition);
      document.addEventListener('mousemove', handleMouseMove);
    };
    
    document.addEventListener('mousemove', initMousePosition);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', initMousePosition);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Remove all lines from DOM
      lineRefs.current.forEach(line => {
        if (line && line.parentNode) {
          line.parentNode.removeChild(line);
        }
      });
      lineRefs.current = [];
    };
  }, [prevMouseX, prevMouseY]);

  return (
    <BrowserRouter>
      <div className="App Grad-effct">
        <Navbar />
        <SideBar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
