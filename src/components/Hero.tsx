import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: '/images/profile.png',
      title: 'Software Engineering at Oberlin',
      meta: 'Current role',
      description: 'Modernizing the recordings archive with React, Node.js, TypeScript, and MongoDB.',
    },
    {
      image: '/images/tujenge-intern.jpg',
      title: 'Tujenge Summer Internship',
      meta: 'Summer 2025',
      description: 'Supported technical and community impact projects through hands-on collaboration.',
    },
    {
      image: '/images/bonner-intern3.jpeg',
      title: 'Bonner Leadership Work',
      meta: '2025',
      description: 'Led planning and student-focused initiatives across programs and events.',
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white text-gray-900">
      {/* 45-degree divider line */}
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[140%] w-[2px] bg-gray-200 -translate-x-1/2 rotate-45" />

      <div className="relative z-10 h-full">
        <div className="flex flex-col lg:flex-row h-full items-stretch">
          {/* Left: image only */}
          <div className="flex-1 min-w-0 flex flex-col justify-start">
            <div className="relative w-full h-[420px] sm:h-[560px] lg:h-screen overflow-hidden">
              {slides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt="Featured life update"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === activeSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Subtle white gradient only at bottom for highlight/stroke effect */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/95 via-white/70 to-transparent z-10 pointer-events-none" />

              {/* Slide information overlay */}
              <div
                className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-14 z-20 text-white"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                <p
                  className="text-lg sm:text-xl font-thin text-white"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {slides[activeSlide].meta}
                </p>
                <h3
                  className="mt-1 text-4xl sm:text-5xl font-thin leading-tight"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {slides[activeSlide].title}
                </h3>
                <p
                  className="mt-1 text-3xl sm:text-2xl italic text-white max-w-xl font-thin leading-loose"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {slides[activeSlide].description}
                </p>
                <button
                  className="mt-4 px-6 py-3 rounded-full  bg-black text-white font-bold shadow-lg transition-all duration-200 text-lg ring-2 ring-white/80  outline-none "
                >
                  Visit more work
                </button>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeSlide ? 'w-7 bg-white' : 'w-2.5 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="mt-10 flex-1 min-w-0 px-6 py-10 sm:py-12 lg:px-12 lg:py-16 flex flex-col justify-start">

            <p className="mt-6 text-2xl sm:text-3xl text-black max-w-xl font-thin p-3" style={{ lineHeight: 1.9 }}>
              Pursuing a dual major in <span className="text-white bg-black p-1">Computer Science</span> and <span className="text-white bg-black p-1">Economics</span>, with a <span className="text-white bg-black p-1">Mathematics minor</span>, at <span className="text-white bg-red-600 p-1">Oberlin College</span>.
              On the side, I engineer solutions to upgrade and scale the campus recordings archive, modernizing it for security, performance, and future growth using&nbsp;
              <span className="text-white bg-black p-1">React, Node.js, TypeScript, MongoDB</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:tharcissentira@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-200"
              >
                contact me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-gray-900 font-semibold bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                View projects
              </a>
            </div>
            <div className="mt-5 text-2xl font-thin">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-2 text-black">
                <span className="text-gray-600">Currently working on</span>
                <a
                  href=''
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Swapp
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="sr-only">(opens in new tab)</span>
                </a>
                <span className="text-gray-600">and</span>
                <a
                  href="https://epreuves.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2.5 py-1 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Epreuves
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;