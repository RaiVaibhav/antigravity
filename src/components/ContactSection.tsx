import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-blue-400" size={24} />,
      title: "Phone Numbers",
      details: ["+91 83520 87033 (Sushant)", "+91 82196 35970 (Vicky)"],
    },
    {
      icon: <Mail className="text-green-400" size={24} />,
      title: "Email Address",
      details: ["antigravityparagliding@gmail.com"],
    },
    {
      icon: <MapPin className="text-yellow-400" size={24} />,
      title: "Location",
      details: ["Bir Billing, Himachal Pradesh, India"],
    },
    {
      icon: <Clock className="text-purple-400" size={24} />,
      title: "Operating Hours",
      details: ["Daily: 8:00 AM - 6:00 PM", "Weather Dependent"],
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your paragliding adventure? Contact us for bookings,
            course information, or any questions you might have.
          </p>
          {/* <div className="text-center mt-16">
            <div className="card-dark p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Take Flight?
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you're looking for an adrenaline-pumping joyride or want
                to learn to fly solo, we're here to make your paragliding dreams
                come true.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-8 py-3 rounded-full font-semibold">
                  Book a Joyride
                </button>
                <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Enroll in Course
                </button>
              </div>
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-full flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-dark p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>15+ years of experience in paragliding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>100% safety record with certified equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>1000+ students trained from around the world</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Located at world&apos;s 2nd highest paragliding site
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-dark p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400">
                    <option value="">Select a service</option>
                    <option value="tandem-joyride">Tandem Joyride</option>
                    <option value="p1-p2-course">P1 & P2 Basic Course</option>
                    <option value="p3-course">P3 Intermediate Course</option>
                    <option value="p4-course">P4 Advanced Course</option>
                    <option value="acro-flight">Acro Flight</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  placeholder="Tell us about your requirements, preferred dates, or any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-lg font-semibold flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
