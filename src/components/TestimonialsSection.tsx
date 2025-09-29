import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Achin Jindal",
      course: "P3 Course",
      rating: 5,
      text: "Head to AntiGravity, whether it is for a tandem flight or a proper course, these guys will not disappoint, they'll make it fun and make sure you learn it in a way that you become an independent pilot. If going for a tandem, do ask that you want 'acro' in your flight, no extra charges, but 10x the experience in the same duration. Happy flying!",
    },
    {
      name: "Rajat Dutt",
      course: "Solo Flying Course",
      rating: 5,
      text: "Experience of a lifetime, to overcome fear, and to fly alone trust is an important factor and when you have a trainer like Sushant who says don't worry nothing will happen till I am there you can rest assured of the amazing experience of flying solo against majestic backdrops of Dhauladhar range and Bir.",
    },
    {
      name: "Geet Sethi",
      course: "Paragliding Course",
      rating: 5,
      text: "Best paragliding school in Bir Billing. Sushant Thakur the co-owner is a very skilled pilot & professional passionate teacher true gentleman to guide the best of his skills makes you perfect and keeps u very safe ..as they believe in safety first. Vicky Thakur India's no.2 Acrobatic pilot, very humble n always ready to teach you advanced skills.",
    },
  ];

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
    <section className="py-20 relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/antigravity/testimonial-background.avif')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our students
            have to say about their experience learning to fly with AntiGravity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:rounded-xl sm:bg-gradient-to-br sm:from-gray-800/90 sm:to-gray-900/90 sm:border sm:border-gray-600/30 sm:backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <Quote size={32} className="text-gray-600" />
              </div>

              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-300 mb-6 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-blue-400 text-sm">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <p className="text-gray-300">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                100%
              </div>
              <p className="text-gray-300">Safety Record</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>

          <div className="mt-12">
            <button className="btn-primary px-8 py-3 rounded-full text-lg font-semibold">
              Read All Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
