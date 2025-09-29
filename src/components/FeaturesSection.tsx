import { Wind, Award, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-dark p-6 rounded-xl text-center">
            <div className="bg-gray-700 p-4 rounded-full mb-4 mx-auto w-fit">
              <Wind size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Expert Training
            </h3>
            <p className="text-gray-400 text-center">
              Learn from certified instructors with years of experience in
              paragliding.
            </p>
          </div>
          <div className="card-dark p-6 rounded-xl text-center">
            <div className="bg-gray-700 p-4 rounded-full mb-4 mx-auto w-fit">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Safety First
            </h3>
            <p className="text-gray-400 text-center">
              World-class safety standards and equipment for your peace of mind.
            </p>
          </div>
          <div className="card-dark p-6 rounded-xl text-center">
            <div className="bg-gray-700 p-4 rounded-full mb-4 mx-auto w-fit">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Community</h3>
            <p className="text-gray-400 text-center">
              Join hundreds of pilots who've learned to fly with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
