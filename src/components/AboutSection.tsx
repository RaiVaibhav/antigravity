import { Award, Users, MapPin, Shield } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: "15+ Years Experience",
      description: "Our instructors have over 15 years of flying experience",
    },
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: "1000+ Trained Pilots",
      description: "Successfully trained over 1000 solo pilots",
    },
    {
      icon: <MapPin className="text-green-400" size={32} />,
      title: "Prime Location",
      description: "Located at India's highest paragliding site in Bir Billing",
    },
    {
      icon: <Shield className="text-red-400" size={32} />,
      title: "100% Safety Record",
      description:
        "Maintaining perfect safety standards with certified equipment",
    },
  ];

  const team = [
    {
      name: "Sushant",
      role: "Chief Instructor & Founder",
      experience: "15+ years",
      phone: "+91 83520 87033",
      specialization: "P1, P2, P3 Courses & Tandem Flights",
    },
    {
      name: "Vicky",
      role: "Senior Instructor",
      experience: "12+ years",
      phone: "+91 82196 35970",
      specialization: "Advanced Courses & Cross Country",
    },
    {
      name: "Bhargav",
      role: "Instructor",
      experience: "8+ years",
      phone: "Contact via school",
      specialization: "Ground Handling & Theory",
    },
    {
      name: "Rakesh",
      role: "Instructor",
      experience: "10+ years",
      phone: "Contact via school",
      specialization: "Safety & Emergency Procedures",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About AntiGravity
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AntiGravity is a leading paragliding school located at India&apos;s
            highest paragliding site in Bir, Himachal Pradesh. We are a team of
            dedicated paragliding pilots and instructors providing experienced
            training and safety equipment to enjoy paragliding in Bir Billing.
          </p>
        </div>

        {/* Why Choose AntiGravity */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AntiGravity?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-dark p-6 rounded-xl text-center">
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story and Mission */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 py-10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/antigravity/our-story.avif"
              alt="Our Story Background"
              fill
              className="object-cover rounded-2xl object-top md:object-top-right"
            />
            <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
          </div>
          <div className="relative z-10 p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded with a passion for flight and adventure, AntiGravity
                Paragliding School has been at the forefront of paragliding
                education in India for over 15 years. Our journey began with a
                simple mission: to make the dream of flying accessible to
                everyone while maintaining the highest safety standards.
              </p>
              <p>
                Located in the breathtaking landscape of Bir Billing, Himachal
                Pradesh, we have the privilege of operating at one of the
                world&apos;s best paragliding sites. The unique geographical
                features and favorable weather conditions make it an ideal
                location for both learning and recreational flying.
              </p>
              <p>
                Our team of certified instructors brings together decades of
                combined experience in paragliding, ensuring that every student
                receives world-class training. We believe in personalized
                attention, progressive learning, and creating a supportive
                environment where students can build confidence and skills at
                their own pace.
              </p>
            </div>
          </div>
          <div className="relative z-10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Provide world-class paragliding education with international
                  standards
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Maintain 100% safety record through rigorous training and
                  equipment standards
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Create a supportive community of passionate paragliding
                  enthusiasts
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Promote adventure tourism and showcase the beauty of Himachal
                  Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Meet Our Expert Team */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-dark p-6 rounded-xl text-center">
                <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-2">
                  {member.experience}
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  {member.specialization}
                </p>
                <p className="text-gray-500 text-xs">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Flying Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied students who have learned to fly with
            AntiGravity. Whether you want to learn paragliding or just
            experience a thrilling joyride, we&apos;re here to make your dreams
            come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3 rounded-full text-lg font-semibold">
              Book a Course
            </button>
            <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
