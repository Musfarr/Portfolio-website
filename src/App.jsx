import { useState } from 'react'
import './index.css'
import './App.css'
import SideBar from './pages/SideBar'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import gsap from 'gsap'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let prevX = 0;
    let prevY = 0;
    let isFirstMove = true;
    const maxLines = 20;
    let lines = [];
    
    const createLine = (x1, y1, x2, y2) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      
      // Create line element
      const line = document.createElement("div");
      line.className = "trail-line";
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.width = "0px";
      line.style.transform = `rotate(${angle}deg)`;
      document.body.appendChild(line);
      
      // Animate the line
      gsap.fromTo(line, 
        { 
          width: 0,
          opacity: 0.8
        },
        {
          width: distance,
          opacity: 0,
          duration: 1,
          ease: "power1.out",
          onComplete: () => {
            if (document.body.contains(line)) {
              document.body.removeChild(line);
            }
          }
        }
      );
      
      return line;
    };
    
    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      if (isFirstMove) {
        prevX = x;
        prevY = y;
        isFirstMove = false;
        return;
      }
      
      // Only create a line if the mouse has moved a minimum distance
      const dx = x - prevX;
      const dy = y - prevY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 5) {
        // Create new line
        const line = createLine(prevX, prevY, x, y);
        lines.push(line);
        
        // Remove excess lines
        if (lines.length > maxLines) {
          const oldLine = lines.shift();
          gsap.killTweensOf(oldLine);
          if (document.body.contains(oldLine)) {
            document.body.removeChild(oldLine);
          }
        }
        
        prevX = x;
        prevY = y;
      }
    };
    
    document.addEventListener("mousemove", onMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      // Clean up any remaining lines
      lines.forEach(line => {
        gsap.killTweensOf(line);
        if (document.body.contains(line)) {
          document.body.removeChild(line);
        }
      });
    };
  }, []);

  return (
    <>
    {/* <Navbar/> */}
    <SideBar/>
    <Home/>
     
    </>
  )
}

export default App
