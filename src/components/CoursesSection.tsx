import { BookOpen, Clock, Users, Award } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "P1 & P2 - Basic Course",
      duration: "7 Days",
      students: "Beginner",
      price: "₹25,000",
      description:
        "Perfect for beginners who want to learn the basics of paragliding. Comprehensive training from ground handling to solo flights.",
      features: [
        "Ground handling training",
        "Equipment introduction",
        "Forward/Alpine launch",
        "Safe takeoff and landing",
        "Basic air traffic rules",
      ],
    },
    {
      title: "P3 - Intermediate Course",
      duration: "15 Days",
      students: "Intermediate",
      price: "₹30,000",
      description:
        "Advanced training for pilots who want to improve their skills and fly higher with confidence.",
      features: [
        "Reverse launch techniques",
        "Thermal and ridge soaring",
        "Big ears technique",
        "360 degree turns",
        "Advanced meteorology",
      ],
    },
    {
      title: "P4 - Advanced Course",
      duration: "20 Days",
      students: "Advanced",
      price: "₹35,000",
      description:
        "Professional level training for serious pilots who want to master advanced techniques and become independent flyers.",
      features: [
        "Cross-country flying",
        "Competition preparation",
        "Advanced thermal techniques",
        "Emergency procedures",
        "Flight planning & navigation",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Paragliding Courses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive paragliding courses designed for
            different skill levels. All courses include certified instruction,
            equipment, and safety training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card-dark rounded-xl p-8 relative">
              <div className="text-center mb-6">
                <div className="bg-gray-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={32} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-center space-x-4 text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-4">
                  {course.price}
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-center">
                {course.description}
              </p>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full btn-primary py-3 rounded-full font-semibold">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8">
            All courses include equipment, accommodation assistance, and
            certification upon completion.
          </p>
          <button className="btn-primary px-8 py-3 rounded-full text-lg font-semibold">
            View Detailed Course Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
