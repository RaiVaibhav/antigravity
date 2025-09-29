import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Paragliding Course - Complete Guide for Beginners",
      excerpt:
        "Learn to paraglide with AntiGravity in Bir Billing (India's leading paragliding school). In this guide, we have given you all the details about paragliding courses, requirements, and what to expect.",
      author: "Sushant Thakur",
      date: "March 20, 2024",
      readTime: "10 min read",
      category: "Education",
      tags: ["Beginner", "Course", "Training"],
      featured: true,
    },
    {
      id: 2,
      title: "Tandem Paragliding: Complete Guide for Adventure Lovers",
      excerpt:
        "Tandem paragliding is an exhilarating adventure sport that allows you to experience the sensation of flying like a bird. Whether you're a complete beginner or looking for an adrenaline rush, tandem flights offer the perfect introduction to paragliding.",
      author: "AntiGravity Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Adventure",
      tags: ["Tandem", "Joyride", "Adventure"],
      featured: false,
    },
    {
      id: 3,
      title: "What is Paragliding - Complete Guide",
      excerpt:
        "Have you ever dreamed of flying like a bird, effortlessly gliding through the sky, with the wind rushing past you and breathtaking views stretching endlessly below? Paragliding makes this dream a reality.",
      author: "Sushant Kumar",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Education",
      tags: ["Basics", "Introduction", "Guide"],
      featured: false,
    },
    {
      id: 4,
      title:
        "The Thrilling Journey of Kobe Michiels: From Beginner to Paragliding Enthusiast",
      excerpt:
        "Paragliding, an exhilarating sport that allows humans to soar through the skies with just a canopy and the power of the wind, has captured the hearts of adventure seekers worldwide. Follow Kobe's inspiring journey from his first flight to becoming a certified pilot.",
      author: "AntiGravity Team",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Success Story",
      tags: ["Student Story", "Inspiration", "Journey"],
      featured: false,
    },
    {
      id: 5,
      title: "Best Time to Visit Bir Billing for Paragliding",
      excerpt:
        "Planning your paragliding adventure in Bir Billing? Understanding the weather patterns and seasonal conditions is crucial for the best flying experience. Here's your complete guide to timing your visit.",
      author: "Vicky Thakur",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Travel Guide",
      tags: ["Weather", "Planning", "Bir Billing"],
      featured: false,
    },
    {
      id: 6,
      title: "Safety in Paragliding: Equipment and Protocols",
      excerpt:
        "Safety is paramount in paragliding. Learn about the essential safety equipment, protocols, and procedures that make paragliding a safe and enjoyable sport when practiced correctly.",
      author: "Rakesh Kumar",
      date: "February 20, 2024",
      readTime: "12 min read",
      category: "Safety",
      tags: ["Safety", "Equipment", "Protocols"],
      featured: false,
    },
  ];

  const categories = [
    { name: "All Posts", count: 15 },
    { name: "Education", count: 6 },
    { name: "Adventure", count: 4 },
    { name: "Safety", count: 3 },
    { name: "Travel Guide", count: 2 },
  ];

  const popularTags = [
    "Beginner",
    "Course",
    "Tandem",
    "Safety",
    "Bir Billing",
    "Training",
    "Adventure",
    "Equipment",
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-blue-500",
      Adventure: "bg-green-500",
      "Success Story": "bg-purple-500",
      "Travel Guide": "bg-yellow-500",
      Safety: "bg-red-500",
    };
    return colors[category] || "bg-gray-500";
  };

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
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Expert insights, guides, and stories from the world of paragliding
            </p>
            <div className="bg-gray-800/50 rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
              <p className="text-lg text-gray-200">
                Stay updated with the latest paragliding tips, safety
                guidelines, student success stories, and comprehensive guides
                from our experienced instructors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-blue-400 text-black"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Article
            </h2>
          </div>

          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <div
                key={post.id}
                className="card-dark rounded-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
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
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <User size={16} className="mr-2" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="btn-primary px-6 py-2 rounded-full font-semibold flex items-center">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg h-64 lg:h-full flex items-center justify-center">
                    <span className="text-gray-400">Featured Image</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">
                Latest Articles
              </h2>
              <div className="space-y-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <article key={post.id} className="card-dark rounded-xl p-6">
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
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
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
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-400 text-black rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <div className="card-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Tag size={20} className="mr-2 text-blue-400" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-4">
                  Subscribe to our newsletter for the latest paragliding tips
                  and updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <button className="w-full btn-primary py-3 rounded-lg font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="card-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      className="border-b border-gray-700 pb-4 last:border-b-0"
                    >
                      <h4 className="text-white font-semibold mb-2 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                  ))}
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
            Ready to Start Your Paragliding Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            From reading about it to experiencing it - take the next step and
            book your course or joyride today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-10 py-4 rounded-full text-xl">
              Book a Course
            </button>
            <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-400 hover:text-black text-gray-300 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Try a Joyride
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
