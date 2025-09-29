import { Wind, Camera, Clock, MapPin } from "lucide-react";

const JoyrideSection = () => {
  const packages = [
    {
      title: "Basic Joyride",
      duration: "15-20 minutes",
      height: "2000-2500 ft",
      price: "₹3,500",
      features: [
        "Tandem flight with certified instructor",
        "Basic aerial photography",
        "Safety briefing included",
        "Certificate of completion",
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
      ],
    },
    {
      title: "Acro Flight",
      duration: "20-25 minutes",
      height: "2500+ ft",
      price: "₹5,000",
      features: [
        "Acrobatic maneuvers",
        "Adrenaline-pumping experience",
        "Professional pilot",
        "GoPro recording",
      ],
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Paragliding Joyride
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the thrill of flying with our tandem paragliding flights.
            No experience required - just come and enjoy the breathtaking views
            of the Himalayas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Wind size={32} className="text-blue-400" />
                </div>
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
                  <li key={featureIndex} className="flex items-start space-x-2">
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

        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Camera size={48} className="text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Photo & Video
              </h4>
              <p className="text-gray-400">
                Professional photography and GoPro videos included
              </p>
            </div>
            <div className="text-center">
              <Wind size={48} className="text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Safe Flying
              </h4>
              <p className="text-gray-400">
                Certified pilots with thousands of flight hours
              </p>
            </div>
            <div className="text-center">
              <MapPin size={48} className="text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Best Location
              </h4>
              <p className="text-gray-400">
                Bir Billing - World's 2nd highest paragliding site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoyrideSection;
