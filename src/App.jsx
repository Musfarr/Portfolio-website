import { useState, useEffect } from 'react'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // Cursor blaze effect - straight line version
    const maxLines = 20; // Reasonable number of lines to maintain performance
    let lines = [];
    let prevX = 0;
    let prevY = 0;
    let isFirstMove = true;
    
    // Create container for lines
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    const createLine = (x1, y1, x2, y2) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      
      const line = document.createElement('div');
      line.className = 'cursor-trail';
      line.style.width = `${distance}px`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.transform = `rotate(${angle}deg)`;
      container.appendChild(line);
      
      // Random thickness between 1px and 3px
      const thickness = Math.random() * 2 + 1;
      line.style.height = `${thickness}px`;
      
      // Set initial opacity
      line.style.opacity = '0.8';
      
      setTimeout(() => {
        line.style.opacity = '0';
        setTimeout(() => {
          if (container.contains(line)) {
            container.removeChild(line);
          }
        }, 500);
      }, 300);
      
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
      
      if (distance > 5) { // Minimum distance threshold
        // Create new line
        const line = createLine(prevX, prevY, x, y);
        lines.push(line);
        
        // Remove excess lines
        if (lines.length > maxLines) {
          const oldLine = lines.shift();
          if (container.contains(oldLine)) {
            container.removeChild(oldLine);
          }
        }
        
        prevX = x;
        prevY = y;
      }
    };
    
    document.addEventListener('mousemove', onMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return (
    <>
    <div className=" Grad-effct  h-screen w-screen text-center p-10">
   
    <div className='breath-effct'>
      <p className='text-gray-300 text-5xl mb-4 font-bold '>Syed Musfer </p>
      <h1 className='text-gray-300 text-2xl  '>Full Stack Software Engineer </h1>
    </div>
    </div>
     
    </>
  )
}

export default App
