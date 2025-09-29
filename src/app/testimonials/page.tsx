"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const detailedTestimonials = [
    {
      name: "Achin Jindal",
      course: "P3 Course",
      rating: 5,
      date: "December 2021",
      text: "Run by highly talented pilots Sushant and Vicky, both of whom have flown extensively from a young age, have participated in several competitions and won several accolades, and have a tremendous reputation among their peers. It was easy to see why this was the case when I did a P3 course with them in December 2021. Bir is a beautiful playground for paragliding and these guys are the best in the business to teach you how to make it yours. They don't cut corners in equipment, time spent on the ground while learning the sport, or any other aspects. Similarly, don't negotiate prices much, one you won't get anywhere with it. Second, you'd rather be focusing on the quality and safety aspects which are already top-notch. The support staff was also very helpful and fun-loving. Just one tip - trust is a very important factor in this sport and hence make sure you go with an open mind. Question everything, try to understand the nitty-gritty, but make sure to absorb, imbibe and internalise what comes your way and you shall soar. Looking forward to go back to Bir and be in the skies again. Bottomline - Head to anti-gravity, whether it is for a tandem flight or a proper course, these guys will not disappoint, they'll make it fun and make sure you learn it in a way that you become an independent pilot. If going for a tandem, do ask that you want 'acro' in your flight, no extra charges, but 10x the experience in the same duration. Happy flying!",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Rajat Dutt",
      course: "Solo Flying Course",
      rating: 5,
      date: "2023",
      text: "Experience of a lifetime, to overcome fear, and to fly alone trust is an important factor and when you have a trainer like Sushant who says don't worry nothing will happen till I am there you can rest assured of the amazing experience of flying solo against majestic backdrops of Dhauladhar range and Bir. These guys will make sure you give your best and give feedback on each and every run on ground training and flights which sets them apart. I had a wonderful experience that I will never forget and always recommend Antigravity and its team if you wanna dare to fly solo.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Geet Sethi",
      course: "Paragliding Course",
      rating: 5,
      date: "2023",
      text: "Best paragliding school in Bir Billing. Shushant Thakur the co-owner is a very Skilled pilot & professional passionate teacher true gentleman to guide the best of his skills makes you perfect and keeps u very safe ..as they believe in safety first. Vicky Thakur India's no.2 Acrobatic pilot, very humble n always ready to teach you advanced skills. Rakesh bhai the landing champion makes u feel ready for landing and approaches. The team Antigravity is the most dedicated professional ready to be part of your paragliding journey.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Harshita Bhushan",
      course: "Flying Course & Tandem",
      rating: 5,
      date: "2023",
      text: "One of the most experienced Pilots Vikki and Sushant in Bir. They know their game very strongly and will make sure to give you the best flying experience and you will go home with the most fulfilling feeling ever. Along with being the best tandem pilots, they both are amazing teachers and will support you in the best possible way in the flying course! So if you want to fly tandem or learn solo paragliding, AntiGravity should be your place! Keep rocking guys. :)",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Anu",
      course: "Tandem Paragliding",
      rating: 5,
      date: "2023",
      text: "Had a great paragliding experience today! Everyone was very professional. The ride was decided on very short notice by me and they quickly came to pick me up in front of my hotel. GoPro video is included in the price and we also get landing pictures. Vicky was very professional and the paragliding ride was breathtaking. Highly recommend them !",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Stoned Jusus",
      course: "Training Course",
      rating: 5,
      date: "2023",
      text: "Sushant and Vicky are national champions of the sport and yet their humility will amaze you. I trained with them and can absolutely vouch that they are not just responsible but also eager to teach you if you're willing to learn. Also, post-training do go and hang out with them. They are awesome storytellers and great connectors. Will see you soon!",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Sonia Bose",
      course: "Tandem Paragliding",
      rating: 5,
      date: "2023",
      text: "Amazing experience with Sushant and team. Very professional and safety conscious. The tandem flight was incredible and the views were breathtaking. Highly recommended for anyone looking to experience paragliding in Bir Billing.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Satyam Anand",
      course: "Tandem & Course",
      rating: 5,
      date: "2023",
      text: "Head to AntiGravity, whether it is for a tandem flight or a proper course, these guys will not disappoint, they'll make it fun and make sure you learn it in a way that you become an independent pilot. If going for a tandem, do ask that you want 'acro' in your flight, no extra charges, but 10x the experience in the same duration. Happy flying!",
      image: "/api/placeholder/100/100",
    },
  ];

  const quickTestimonials = [
    {
      name: "Priya Sharma",
      text: "Best paragliding school in Bir! Professional instructors and amazing experience.",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      text: "Sushant and Vicky are incredible pilots. Learned so much in my P2 course.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      text: "International student here - felt completely safe and welcome. Highly recommend!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      text: "The acro flight was mind-blowing! These guys are true professionals.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      text: "Came from UK for the course. Worth every penny! Amazing instructors.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      text: "From complete beginner to confident pilot in 7 days. Incredible teaching!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === detailedTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? detailedTestimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Student</span>
              <span className="block text-3xl md:text-5xl text-gray-300 font-light">
                Testimonials
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Hear from our students who have experienced the joy of flight with
              AntiGravity
            </p>
            <div className="bg-gray-800/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <p className="text-lg text-gray-200">
                Over 1000+ students from around the world have learned to fly
                with us. Read their experiences and see why AntiGravity is the
                preferred choice for paragliding education in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed experiences from our students who have completed courses
              with us.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="card-dark p-8 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <div className="text-center">
                  <span className="text-gray-400">
                    {currentTestimonial + 1} of {detailedTestimonials.length}
                  </span>
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>

              <div className="text-center mb-6">
                <Quote size={48} className="text-gray-600 mx-auto mb-4" />
                <div className="flex justify-center mb-2">
                  {renderStars(detailedTestimonials[currentTestimonial].rating)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {detailedTestimonials[currentTestimonial].name}
                </h3>
                <p className="text-blue-400 font-semibold mb-1">
                  {detailedTestimonials[currentTestimonial].course}
                </p>
                <p className="text-gray-400">
                  {detailedTestimonials[currentTestimonial].date}
                </p>
              </div>

              <div className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                {detailedTestimonials[currentTestimonial].text}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {detailedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Testimonials Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick reviews from our happy students and pilots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickTestimonials.map((testimonial, index) => (
              <div key={index} className="card-dark p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-white font-semibold text-center">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence in paragliding
              education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">1000+</div>
              <p className="text-gray-300 text-lg">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">15+</div>
              <p className="text-gray-300 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                100%
              </div>
              <p className="text-gray-300 text-lg">Safety Record</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <p className="text-gray-300 text-lg">Countries Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join hundreds of satisfied students who have learned to fly with
            AntiGravity. Your adventure awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-10 py-4 rounded-full text-xl">
              Start Your Journey
            </button>
            <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Read More Reviews
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
