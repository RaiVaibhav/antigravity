import {
  Award,
  Users,
  MapPin,
  Shield,
  Target,
  Heart,
  Star,
} from "lucide-react";

export default function AboutPage() {
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
      name: "Sushant Thakur",
      role: "Chief Instructor & Co-Founder",
      experience: "15+ years",
      phone: "+91 83520 87033",
      specialization: "P1, P2, P3 Courses & Tandem Flights",
      achievements: [
        "National Champion Paragliding Pilot",
        "Certified Instructor with 1000+ students trained",
        "Expert in meteorology and wind dynamics",
        "Specializes in safety protocols and emergency procedures",
      ],
    },
    {
      name: "Vicky Thakur",
      role: "Senior Instructor & Co-Founder",
      experience: "12+ years",
      phone: "+91 82196 35970",
      specialization: "Advanced Courses & Acrobatic Flying",
      achievements: [
        "India's No.2 Acrobatic Pilot",
        "National Champion in Paragliding",
        "Expert in advanced flying techniques",
        "Specializes in cross-country and thermal flying",
      ],
    },
    {
      name: "Rakesh",
      role: "Landing Specialist",
      experience: "10+ years",
      phone: "Contact via school",
      specialization: "Landing Techniques & Safety",
      achievements: [
        "Landing Champion with perfect record",
        "Expert in approach techniques",
        "Safety instructor for emergency procedures",
        "Specializes in ground handling training",
      ],
    },
    {
      name: "Bhargav",
      role: "Ground Training Instructor",
      experience: "8+ years",
      phone: "Contact via school",
      specialization: "Equipment & Ground Training",
      achievements: [
        "Expert in equipment maintenance and care",
        "Ground training specialist",
        "Safety equipment instructor",
        "Specializes in pre-flight preparations",
      ],
    },
  ];

  const values = [
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: "Safety First",
      description:
        "We never compromise on safety. Every flight is conducted with the highest safety standards and certified equipment.",
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Passion for Flying",
      description:
        "Our love for paragliding drives us to share this incredible experience with others and help them discover the joy of flight.",
    },
    {
      icon: <Target className="text-green-400" size={24} />,
      title: "Excellence in Training",
      description:
        "We are committed to providing the best training experience, ensuring every student becomes a confident and skilled pilot.",
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "Community Building",
      description:
        "We believe in building a strong paragliding community where pilots support and learn from each other.",
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
              <span className="text-white">About</span>
              <span className="block text-3xl md:text-5xl text-gray-300 font-light">
                AntiGravity
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              India's premier paragliding school with over 15 years of
              excellence in flight training
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Founded in 2008, AntiGravity Paragliding School has been at
                  the forefront of paragliding education in India. Located in
                  the picturesque town of Bir in Himachal Pradesh, we operate
                  from one of the world's best paragliding sites.
                </p>
                <p>
                  What started as a passion project by two experienced pilots
                  has grown into India's most trusted paragliding school. We
                  have successfully trained over 1000 pilots from around the
                  world, helping them achieve their dream of free flight.
                </p>
                <p>
                  Our commitment to safety, quality instruction, and
                  personalized attention has made us the preferred choice for
                  both beginners and advanced pilots looking to enhance their
                  skills.
                </p>
              </div>
            </div>
            <div className="card-dark p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6">
                To provide world-class paragliding education in a safe,
                supportive environment while promoting the sport of paragliding
                in India and building a strong community of passionate pilots.
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300">
                To be recognized globally as the leading paragliding school,
                setting the standard for safety, instruction quality, and
                student success in the sport of paragliding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over the years, we have built a reputation for excellence in
              paragliding education and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-dark p-6 rounded-xl text-center">
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced and certified instructors are passionate about
              paragliding and dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-dark p-8 rounded-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 mb-2">
                    Experience: {member.experience}
                  </p>
                  <p className="text-gray-400 mb-4">Phone: {member.phone}</p>
                  <p className="text-gray-300 font-medium">
                    Specialization: {member.specialization}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {member.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-2"
                        >
                          <Star
                            size={16}
                            className="text-yellow-400 mt-1 flex-shrink-0"
                          />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to
              paragliding education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-dark p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-full flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Bir Billing?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Bir Billing is internationally recognized as one of the
                  world's best paragliding sites. Located in Himachal Pradesh at
                  an altitude of 8000+ feet, it offers perfect conditions for
                  both learning and advanced flying.
                </p>
                <p>
                  The site features consistent thermals, reliable wind patterns,
                  and breathtaking views of the Himalayas, making it an ideal
                  location for paragliding education.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>World's 2nd highest paragliding site</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award size={16} className="text-yellow-400" />
                    <span>Host to international competitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield size={16} className="text-green-400" />
                    <span>Safe landing areas and emergency protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-dark p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Facilities
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-white">Training Center</h4>
                  <p className="text-gray-300">
                    Modern classroom with weather monitoring equipment and
                    theoretical training materials
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-white">
                    Equipment Storage
                  </h4>
                  <p className="text-gray-300">
                    Climate-controlled storage for all paragliding equipment
                    with regular maintenance schedules
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-white">Safety Equipment</h4>
                  <p className="text-gray-300">
                    Latest safety gear including reserve parachutes, helmets,
                    and communication devices
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-white">Accommodation</h4>
                  <p className="text-gray-300">
                    Comfortable lodging options nearby with meal facilities for
                    course participants
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a complete beginner or looking to advance your
            skills, we're here to help you achieve your paragliding goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-10 py-4 rounded-full text-xl">
              Start Your Journey
            </button>
            <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
