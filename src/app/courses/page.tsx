import Link from "next/link";
import { BookOpen, Clock, Users, Award, CheckCircle } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      id: "p1-p2",
      title: "P1 & P2 - 7 Days Basic Course",
      duration: "7 Days",
      price: "₹25,000",
      level: "Beginner",
      description:
        "Our P1 and P2 courses are made for you if you want to learn paragliding. These courses are designed to help you take your first steps in paragliding and give you the basic skills and knowledge you need.",
      p1Skills: [
        "Equipment introduction",
        "Equipment care and maintenance",
        "Forward/Alpine launch",
        "Glider control",
        "Wind and radio",
        "Flare and kill paraglider energy",
        "Different packing methods",
      ],
      p2Skills: [
        "Safe takeoff and landing",
        "Direction control and drift",
        "Turn and bending turns",
        "S-turn and U-turn",
        "Safe gliding approach",
        "Safe flying weather and wind condition",
        "Basic air traffic rules",
      ],
    },
    {
      id: "p3",
      title: "P3 - 15 Days Intermediate Course",
      duration: "15 Days",
      price: "₹30,000",
      level: "Intermediate",
      description:
        "Fly higher and improve your skills! This course is for pilots who have completed their basic training and want to get better at taking off, landing, and flying.",
      skills: [
        "Reverse launch",
        "Kiting introduction (on ground)",
        "Proxy flying",
        "Pitch, yaw, and roll control (glider movement)",
        "Big ears (safe height descending method)",
        "Normal and tight 360 turns",
        "Introduction of Thermal and ridge soaring (height gaining techniques)",
      ],
    },
    {
      id: "p4",
      title: "P4 - 20 Days Advanced Course",
      duration: "20 Days",
      price: "₹35,000",
      level: "Advanced",
      description:
        "Ready to take your flying to the next level? This course is for experienced pilots who want to master advanced techniques and become truly independent flyers.",
      skills: [
        "Advanced thermal techniques",
        "Cross-country flying basics",
        "Advanced meteorology",
        "Competition flying introduction",
        "Emergency procedures",
        "Advanced landing techniques",
        "Flight planning and navigation",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: <BookOpen size={32} className="text-white" />,
      title: "Expert Instruction",
      description:
        "Learn from certified instructors with 15+ years of experience",
    },
    {
      icon: <Award size={32} className="text-white" />,
      title: "Safety First",
      description: "World-class safety standards and modern equipment",
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: "Global Community",
      description: "Join 100+ international students who learned with us",
    },
    {
      icon: <Clock size={32} className="text-white" />,
      title: "Flexible Schedule",
      description: "Courses designed to fit your timeline and goals",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Paragliding</span>
              <span className="block text-3xl md:text-5xl text-gray-300 font-light">
                Courses
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Master the skies with professional training at India's premier
              paragliding destination
            </p>
            <div className="bg-gray-800/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <p className="text-lg text-gray-200">
                Train with India's most experienced instructors at Bir Billing -
                the world's second highest paragliding site. Join over 100
                students from around the world who have learned to fly with our
                15+ years of professional flying experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="card-dark rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {course.title}
                      </h2>
                      <p className="text-gray-300 text-lg mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center space-x-4 mb-6 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock size={20} className="text-gray-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={20} className="text-gray-400" />
                          <span>{course.level}</span>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white mb-6">
                        {course.price}
                      </div>
                      <button className="btn-primary px-8 py-3 rounded-full text-lg">
                        Enroll Now
                      </button>
                    </div>
                    <div>
                      {course.id === "p1-p2" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                              P1: Basic Ground Training
                            </h3>
                            <div className="space-y-2">
                              {course.p1Skills?.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className="flex items-start space-x-2"
                                >
                                  <CheckCircle
                                    className="text-green-400 mt-1 flex-shrink-0"
                                    size={16}
                                  />
                                  <span className="text-gray-300">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                              P2: Solo Introduction Flying
                            </h3>
                            <div className="space-y-2">
                              {course.p2Skills?.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className="flex items-start space-x-2"
                                >
                                  <CheckCircle
                                    className="text-green-400 mt-1 flex-shrink-0"
                                    size={16}
                                  />
                                  <span className="text-gray-300">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {(course.id === "p3" || course.id === "p4") && (
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-4">
                            {course.id === "p3"
                              ? "Intermediate Training"
                              : "Advanced Training"}
                          </h3>
                          <div className="space-y-2">
                            {course.skills?.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle
                                  className="text-green-400 mt-1 flex-shrink-0"
                                  size={16}
                                />
                                <span className="text-gray-300">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why Choose AntiGravity?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Every year, we train and help over 100+ students from all around the
            world to fulfill their dream of becoming paragliding pilots. We
            pride ourselves on providing top-notch instruction and an
            unforgettable experience for our students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-dark p-6 rounded-xl text-center">
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Don't just take our word for it. Allow our students themselves to
            share their firsthand training experiences.
          </p>
          <div className="card-dark p-8 rounded-xl max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-200 mb-6">
              "Head to AntiGravity, whether it is for a tandem flight or a
              proper course, these guys will not disappoint, they'll make it fun
              and make sure you learn it in a way that you become an independent
              pilot. If going for a tandem, do ask that you want 'acro' in your
              flight, no extra charges, but 10x the experience in the same
              duration. Happy flying!"
            </p>
            <p className="font-semibold text-white">- Satyam Anand</p>
            <Link
              href="/testimonials"
              className="mt-8 inline-block btn-primary px-8 py-3 rounded-full text-lg"
            >
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-light italic mb-4 text-gray-100">
            "Once you have tasted flight you will walk the earth with your eyes
            turned skywards, for there you have been and there you will long to
            return."
          </blockquote>
          <cite className="text-gray-400 text-lg font-medium">
            — Leonardo da Vinci
          </cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Flying Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to book your paragliding course and experience the
            thrill of flying!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-10 py-4 rounded-full text-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/joyride"
              className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Try a Joyride First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
