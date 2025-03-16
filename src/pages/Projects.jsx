import React from 'react';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  return (
    <PageTransition>
      <div className="Grad-effct h-screen w-screen text-center flex items-center justify-center p-10">
        <div className='breath-effct'>
          <p className='text-gray-300 text-5xl mb-4 font-bold'>My Projects</p>
          <h1 className='text-gray-300 text-2xl mb-6'>Showcasing my recent work</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            <div className='bg-gray-800 bg-opacity-40 p-4 rounded-lg'>
              <h3 className='text-gray-200 text-xl mb-2'>OTT Platform</h3>
              <p className='text-gray-400'>Mjunoon OTT Platform  </p>
            </div>
            <div className='bg-gray-800 bg-opacity-40 p-4 rounded-lg'>
              <h3 className='text-gray-200 text-xl mb-2'>Order Management System (OMS)</h3>
              <p className='text-gray-400'>An Order Management System for BYD-mega Motors.</p>
            </div>
            <div className='bg-gray-800 bg-opacity-40 p-4 rounded-lg'>
              <h3 className='text-gray-200 text-xl mb-2'>Analytics Dashboard</h3>
              <p className='text-gray-400 '> Analytics dashboards for businesses .</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
