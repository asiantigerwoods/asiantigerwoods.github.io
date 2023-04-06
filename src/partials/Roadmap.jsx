import React from 'react';
import Tilt from 'react-parallax-tilt';

function Roadmap() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Roadmap</h2>
            <p className="text-xl text-gray-400">Obliq will be released in 3 versions:</p>
          </div>

          {/* Roadmap */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st checkpoint */}
            <Tilt className='h-full' tiltMaxAngleX={12} tiltMaxAngleY={12}>
              <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <h4 className="h4 mb-4">The core foundation</h4>
                <blockquote className="text-lg text-gray-400 grow">In the first release, you'll be able to build your own routines, create a workout schedule, and track your progress.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Version 1</cite> - <a className="text-green-200 hover:text-gray-200 transition duration-150 ease-in-out">July 2023</a>
                </div>
              </div>
            </Tilt>

            {/* 2nd checkpoint */}
            <Tilt className='h-full' tiltMaxAngleX={12} tiltMaxAngleY={12}>
              <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <h4 className="h4 mb-4">The social update</h4>
                <blockquote className="text-lg text-gray-400 grow">You've been using the app to make your routines, now it's time to show it off to your friends. In the second release, you can make your own profile, follow friends, and share your routines and progress with your followers.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Version 2</cite> - <a className="text-green-200 hover:text-gray-200 transition duration-150 ease-in-out">September 2023</a>
                </div>
              </div>
            </Tilt>

            {/* 3rd checkpoint */}
            <Tilt className='h-full' tiltMaxAngleX={12} tiltMaxAngleY={12}>
              <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <h4 className="h4 mb-4">The payments update</h4>
                <blockquote className="text-lg text-gray-400 grow">Users will be able to set up their routines to require payment for access, monetizing their services. The tier-based payment system will allow for additional perks based on the amount paid.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Version 3</cite> - <a className="text-green-200 hover:text-gray-200 transition duration-150 ease-in-out">Early 2024</a>
                </div>
              </div>
            </Tilt>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
