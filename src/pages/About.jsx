import React from 'react';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="Grad-effct h-screen w-screen text-center flex items-center justify-center p-10">
        <div className='breath-effct'>
          <p className='text-gray-300 text-5xl mb-4 font-bold'>About Me</p>
          <h1 className='text-gray-300 text-2xl mb-6'>Software Engineer with a passion for creating elegant solutions</h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            I specialize in building modern web applications using React, Node.js, and other cutting-edge technologies.
            With a strong background in full-stack development, I enjoy tackling complex problems and turning them into
            simple, beautiful interfaces.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
