import axios from "axios";
import { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";

const UserBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("http://localhost:5000/api/blog");

      setBlogs(data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-40 pb-32 text-center text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0B1020] text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Blog
          </span>

          <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-tight">
            Insights, Ideas & Latest Updates
          </h1>

          <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto mt-8">
            Explore our latest thoughts on web development, design, branding and
            digital growth.
          </p>
        </div>
      </section>

      {/* Featured Blog */}
      {featuredBlog && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="mb-10">
              <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
                Featured Post
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold mt-4">
                Latest Highlight
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8 lg:p-12">
                <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
                  {featuredBlog.category}
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-tight">
                  {featuredBlog.title}
                </h2>

                <p className="text-gray-600 leading-8 mt-6">
                  {featuredBlog.description}
                </p>

                <div className="flex items-center gap-3 text-gray-500 mt-8">
                  <FiCalendar className="text-orange-500" />
                  <span>
                    {new Date(featuredBlog.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-12">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Latest Articles
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4">
              Read Our Insights
            </h2>
          </div>

          {remainingBlogs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg py-16">
              No more blogs available.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {remainingBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                        {blog.category}
                      </span>

                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FiCalendar className="text-orange-500" />
                        <span>
                          {new Date(blog.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mt-5 leading-8 line-clamp-4">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[35px] px-8 md:px-16 py-16 text-center text-white shadow-xl">
            <span className="uppercase tracking-[4px] text-orange-100 font-semibold">
              Stay Updated
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-5">
              Get Fresh Insights In Your Inbox
            </h2>

            <p className="text-orange-100 max-w-2xl mx-auto mt-6 leading-8">
              Subscribe to stay updated with our latest articles, design ideas
              and development insights.
            </p>

            <form className="max-w-2xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 px-5 rounded-full text-black outline-none bg-white"
              />

              <button
                type="submit"
                className="h-14 px-8 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserBlog;
