"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

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
      details: [
        "Bir Billing, Himachal Pradesh, India",
        "India's Highest Paragliding Site",
      ],
    },
    {
      icon: <Clock className="text-purple-400" size={24} />,
      title: "Operating Hours",
      details: ["Daily: 8:00 AM - 6:00 PM", "Weather Dependent"],
    },
  ];

  const faqs = [
    {
      question: "What is the best time to visit Bir Billing for paragliding?",
      answer:
        "The best time is from March to June and September to November when weather conditions are most favorable for flying.",
    },
    {
      question: "Do I need any prior experience for a joyride?",
      answer:
        "No prior experience is required for tandem joyrides. Our certified instructors will handle everything while you enjoy the flight.",
    },
    {
      question: "What should I wear for paragliding?",
      answer:
        "Wear comfortable clothes, closed-toe shoes, and bring a jacket. We provide all safety equipment including helmets and harnesses.",
    },
    {
      question: "How long does a paragliding course take?",
      answer:
        "Our P1 & P2 basic course takes 7 days, P3 intermediate course takes 15 days, and P4 advanced course takes 20 days.",
    },
    {
      question: "Is paragliding safe?",
      answer:
        "Yes, when done with proper training and equipment. We maintain a 100% safety record with certified equipment and experienced instructors.",
    },
    {
      question: "What is included in the course fee?",
      answer:
        "Course fees include all equipment, instruction, accommodation assistance, and certification upon completion.",
    },
    {
      question: "Can I get a refund if weather doesn't permit flying?",
      answer:
        "Yes, we offer flexible rescheduling and refunds for weather-related cancellations. Safety is our top priority.",
    },
    {
      question: "Do you provide accommodation?",
      answer:
        "We assist with accommodation bookings at nearby guesthouses and hotels. We can recommend budget to premium options.",
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
              <span className="text-white">Contact</span>
              <span className="block text-3xl md:text-5xl text-gray-300 font-light">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Ready to take flight? Get in touch with our team for bookings,
              courses, or any questions
            </p>
            <div className="bg-gray-800/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <p className="text-lg text-gray-200">
                We're here to help you plan your paragliding adventure. Whether
                you're interested in a tandem joyride or a complete training
                course, our team is ready to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-dark p-6 rounded-xl text-center">
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-400">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="mr-3 text-blue-400" size={32} />
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    >
                      <option value="">Select a service</option>
                      <option value="tandem-joyride">Tandem Joyride</option>
                      <option value="p1-p2-course">P1 & P2 Basic Course</option>
                      <option value="p3-course">P3 Intermediate Course</option>
                      <option value="p4-course">P4 Advanced Course</option>
                      <option value="acro-flight">Acro Flight</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    placeholder="Tell us about your requirements, preferred dates, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-lg font-semibold flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Find Us at Bir Billing
                </h3>
                <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-6">
                  <span className="text-gray-400">
                    Interactive Map Coming Soon
                  </span>
                </div>
                <div className="card-dark p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Location Details
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      <strong>Takeoff Site:</strong> Billing (8000+ ft altitude)
                    </p>
                    <p>
                      <strong>Landing Site:</strong> Bir (2500 ft altitude)
                    </p>
                    <p>
                      <strong>Nearest Airport:</strong> Kangra Airport (67 km)
                    </p>
                    <p>
                      <strong>Nearest Railway:</strong> Pathankot (150 km)
                    </p>
                    <p>
                      <strong>From Delhi:</strong> 520 km (10-12 hours by road)
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Quick Response Times
                </h4>
                <div className="space-y-3 text-gray-300">
                  <p>
                    📞 <strong>Phone Calls:</strong> Immediate response during
                    operating hours
                  </p>
                  <p>
                    📧 <strong>Email Queries:</strong> Within 2-4 hours
                  </p>
                  <p>
                    💬 <strong>WhatsApp:</strong> Within 30 minutes
                  </p>
                  <p>
                    📝 <strong>Contact Form:</strong> Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our paragliding services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card-dark p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-dark p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Emergency Contact
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              For urgent matters or emergency situations during your stay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Phone className="text-red-400" size={24} />
                <span className="text-xl font-semibold text-white">
                  +91 83520 87033
                </span>
              </div>
              <span className="text-gray-400 hidden sm:block">•</span>
              <div className="flex items-center space-x-2">
                <Phone className="text-red-400" size={24} />
                <span className="text-xl font-semibold text-white">
                  +91 82196 35970
                </span>
              </div>
            </div>
            <p className="text-gray-400 mt-4">
              Available 24/7 for emergencies and urgent assistance
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Flight?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Don't wait any longer - your paragliding adventure is just a message
            away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-10 py-4 rounded-full text-xl">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Call Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
