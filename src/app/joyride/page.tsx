import {
  Wind,
  Shield,
  Camera,
  Clock,
  MapPin,
  Users,
  Award,
} from "lucide-react";

export default function JoyridePage() {
  const packages = [
    {
      title: "Basic Joyride",
      duration: "15-20 minutes",
      height: "2000-2500 ft",
      price: "₹3,500",
      popular: false,
      features: [
        "Tandem flight with certified instructor",
        "Basic aerial photography",
        "Safety briefing included",
        "Certificate of completion",
        "Hotel pickup available",
      ],
    },
    {
      title: "Premium Joyride",
      duration: "25-30 minutes",
      height: "2500-3000 ft",
      price: "₹4,500",
      popular: true,
      features: [
        "Extended flight time",
        "Professional photography",
        "GoPro video recording included",
        "Souvenir photos included",
        "Hotel pickup & drop",
      ],
    },
    {
      title: "Deluxe Experience",
      duration: "35-40 minutes",
      height: "3000+ ft",
      price: "₹6,000",
      popular: false,
      features: [
        "Maximum flight duration",
        "4K video recording",
        "Professional photo shoot",
        "Personalized flight route",
        "Premium service & pickup",
      ],
    },
    {
      title: "Acro Flight",
      duration: "20-25 minutes",
      height: "2500+ ft",
      price: "₹5,000",
      popular: false,
      features: [
        "Acrobatic maneuvers",
        "Adrenaline-pumping experience",
        "Professional pilot",
        "GoPro recording",
        "For adventure seekers",
      ],
    },
  ];

  const safetyFeatures = [
    {
      icon: <Shield className="text-green-400" size={32} />,
      title: "100% Safety Record",
      description:
        "Certified equipment and experienced pilots ensure your safety",
    },
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: "Expert Pilots",
      description:
        "All our pilots are certified with thousands of flight hours",
    },
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: "Certified Equipment",
      description: "We use only the latest, certified paragliding equipment",
    },
    {
      icon: <Wind className="text-gray-400" size={32} />,
      title: "Weather Monitoring",
      description:
        "Continuous weather monitoring for optimal flying conditions",
    },
  ];

  const flightProcess = [
    {
      step: "1",
      title: "Booking & Arrival",
      description:
        "Book your slot online or call us. Arrive at our office 30 minutes before your flight time.",
    },
    {
      step: "2",
      title: "Safety Briefing",
      description:
        "Our certified instructors will give you a comprehensive safety briefing and instructions.",
    },
    {
      step: "3",
      title: "Equipment Check",
      description:
        "We'll help you wear the safety gear and check all equipment before takeoff.",
    },
    {
      step: "4",
      title: "Takeoff",
      description:
        "Run a few steps with your instructor and you'll be soaring in the sky!",
    },
    {
      step: "5",
      title: "Enjoy the Flight",
      description:
        "Relax and enjoy the breathtaking views of the Himalayas and valleys below.",
    },
    {
      step: "6",
      title: "Safe Landing",
      description:
        "Your instructor will guide you to a safe landing at the designated landing site.",
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
                Joyride
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Experience the thrill of flying with our tandem paragliding
              flights at Bir Billing
            </p>
            <div className="bg-gray-800/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <p className="text-lg text-gray-200">
                No experience required! Fly with our certified instructors and
                enjoy breathtaking views of the Himalayas. Perfect for
                first-time flyers and adventure enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our range of tandem paragliding packages designed for
              different preferences and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card-dark rounded-xl p-6 relative ${
                  pkg.popular ? "border-2 border-blue-400" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    {pkg.price}
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock size={16} className="text-gray-400" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{pkg.height}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary py-3 rounded-full font-semibold">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest safety standards in the industry with
              certified equipment and experienced pilots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="card-dark p-6 rounded-xl text-center">
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's what happens during your paragliding joyride experience
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flightProcess.map((process, index) => (
              <div key={index} className="card-dark p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {process.title}
                  </h3>
                </div>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Weather */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bir Billing - World's Best Flying Site
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Bir Billing is recognized as one of the world's best
                  paragliding sites, located in the beautiful state of Himachal
                  Pradesh, India.
                </p>
                <p>
                  The site offers perfect flying conditions with consistent
                  thermals, stunning mountain views, and safe landing areas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Altitude: 8000+ feet above sea level</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Wind size={16} className="text-blue-400" />
                    <span>Perfect wind conditions year-round</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Camera size={16} className="text-blue-400" />
                    <span>Breathtaking Himalayan views</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-dark p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Best Flying Seasons
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-white">March - June</h4>
                  <p className="text-gray-300">
                    Perfect weather with clear skies and excellent visibility
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-white">
                    September - November
                  </h4>
                  <p className="text-gray-300">
                    Post-monsoon clarity with stable weather conditions
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-white">
                    December - February
                  </h4>
                  <p className="text-gray-300">
                    Winter flying with crisp air and snow-capped mountain views
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Flying Adventure?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your paragliding joyride today and create memories that will
            last a lifetime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-10 py-4 rounded-full text-xl">
              Book Your Flight
            </button>
            <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
