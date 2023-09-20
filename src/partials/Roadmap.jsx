import React from "react";
import Tilt from "react-parallax-tilt";

function Roadmap() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Roadmap</h2>
            <p className="text-xl text-gray-400">
              Obliq Beta will be available only on iOS through TestFlight
            </p>
          </div>

          {/* Roadmap */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st checkpoint */}
            <Tilt
              glareReverse
              glareEnable
              glareMaxOpacity={0.1}
              className="h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              transitionEasing="cubic-bezier(.17,.67,.83,.67)"
            >
              <div
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
              >
                <h4 className="h4 mb-4">Core Foundation</h4>
                <blockquote className="text-lg text-gray-400 grow">
                  In the first release, you'll be able to build your own routine
                  templates, create a workout schedule, and track your progress.
                </blockquote>
                <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">v1.0</cite> •{" "}
                  <a className="text-green-200 hover:text-gray-200 transition duration-150 ease-in-out">
                    October 2023
                  </a>
                </div>
              </div>
            </Tilt>

            {/* 2nd checkpoint */}
            <Tilt
              glareReverse
              glareEnable
              glareMaxOpacity={0.1}
              className="h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              transitionEasing="cubic-bezier(.17,.67,.83,.67)"
            >
              <div
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
              >
                <h4 className="h4 mb-4">Social Update</h4>
                <blockquote className="text-lg text-gray-400 grow">
                  You've been using the app to make your workout templates, now
                  it's time to show them off to your friends. In the second
                  release you can follow others, share your templates, and show
                  off your progress to followers.
                </blockquote>
                <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">v2.0</cite> •{" "}
                  <a className="text-green-200 hover:text-gray-200 transition duration-150 ease-in-out">
                    Winter 2024
                  </a>
                </div>
              </div>
            </Tilt>

            {/* 3rd checkpoint */}
            <Tilt
              glareReverse
              glareEnable
              glareMaxOpacity={0.1}
              className="h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              transitionEasing="cubic-bezier(.17,.67,.83,.67)"
            >
              <div
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
              >
                <h4 className="h4 mb-4">Payments Update</h4>
                <blockquote className="text-lg text-gray-400 grow">
                  Set up your templates to require payment for access,
                  effectively monetizing your services. The tier-based payment
                  system will allow for additional perks to customers based on
                  the amount paid.
                </blockquote>
                <div className="text-gray-500 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">v3.0</cite> •{" "}
                  <a className="text-green-200 hover:text-gray-200 transition duration-150 ease-in-out">
                    Summer 2024
                  </a>
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
