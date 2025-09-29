"use client";

import { useState } from "react";
import { ChevronDown, Wind, Award, Users } from "lucide-react";

const HeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/antigravity/post-monsoon-batches.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          {/* <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">AntiGravity</span>
          </h1> */}
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Professional Paragliding at Bir Billing
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="/joyride"
            className="btn-primary px-4 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Book Your Flight
          </a>
          <a
            href="/courses"
            className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-4 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View Courses
          </a>
        </div>

        {/* Features - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-16">
          <div className="p-4 sm:p-6 sm:rounded-xl text-center sm:bg-gradient-to-br sm:from-gray-800/90 sm:to-gray-900/90 sm:border sm:border-gray-600/30 sm:backdrop-blur-sm">
            <div className="bg-gray-700 p-3 md:p-4 rounded-full mb-3 md:mb-4 mx-auto w-fit">
              <Wind size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
              Expert Training
            </h3>
            <p className="text-gray-400 text-center text-sm md:text-base">
              Learn from certified instructors with years of experience in
              paragliding.
            </p>
          </div>
          <div className="p-4 sm:p-6 sm:rounded-xl text-center sm:bg-gradient-to-br sm:from-gray-800/90 sm:to-gray-900/90 sm:border sm:border-gray-600/30 sm:backdrop-blur-sm">
            <div className="bg-gray-700 p-3 md:p-4 rounded-full mb-3 md:mb-4 mx-auto w-fit">
              <Award size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
              Safety First
            </h3>
            <p className="text-gray-400 text-center text-sm md:text-base">
              World-class safety standards and equipment for your peace of mind.
            </p>
          </div>
          <div className="p-4 sm:p-6 sm:rounded-xl text-center sm:bg-gradient-to-br sm:from-gray-800/90 sm:to-gray-900/90 sm:border sm:border-gray-600/30 sm:backdrop-blur-sm">
            <div className="bg-gray-700 p-3 md:p-4 rounded-full mb-3 md:mb-4 mx-auto w-fit">
              <Users size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
              Community
            </h3>
            <p className="text-gray-400 text-center text-sm md:text-base">
              Join hundreds of pilots who&apos;ve learned to fly with us.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Enquiry
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full btn-primary p-3 rounded-lg font-semibold"
              >
                Send Enquiry
              </button>
              <button
                type="button"
                onClick={() => setShowEnquiry(false)}
                className="w-full mt-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
