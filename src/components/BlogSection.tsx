import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Paragliding Course - Complete Guide for Beginners",
      excerpt:
        "Learn to paraglide with AntiGravity in Bir Billing. Complete guide covering everything you need to know about paragliding courses, requirements, and what to expect.",
      author: "Sushant Thakur",
      date: "March 20, 2024",
      readTime: "10 min read",
      category: "Education",
    },
    {
      title: "Best Time to Visit Bir Billing for Paragliding",
      excerpt:
        "Planning your paragliding adventure? Understanding weather patterns and seasonal conditions is crucial for the best flying experience.",
      author: "Vicky Thakur",
      date: "March 15, 2024",
      readTime: "7 min read",
      category: "Travel Guide",
    },
    {
      title: "Safety in Paragliding: Equipment and Protocols",
      excerpt:
        "Safety is paramount in paragliding. Learn about essential safety equipment, protocols, and procedures that make paragliding safe and enjoyable.",
      author: "AntiGravity Team",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Safety",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-blue-500",
      "Travel Guide": "bg-green-500",
      Safety: "bg-red-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest paragliding tips, safety guidelines,
            and insights from our experienced instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="card-dark rounded-xl overflow-hidden"
            >
              <div className="bg-gray-700 h-48 flex items-center justify-center">
                <span className="text-gray-400">Blog Image</span>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary px-8 py-3 rounded-full text-lg font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
