import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiChevronDown,
} from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on your requirements, features and project scope.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites are completed within 2–6 weeks depending on complexity.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. I provide ongoing maintenance and support after project delivery.",
  },
  {
    question: "Can I hire you remotely?",
    answer: "Absolutely. I work with clients from anywhere in the world.",
  },
];

function Help() {
  const [open, setOpen] = useState(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/msg",
        formData,
      );

      toast.success(data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Hero */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-500 uppercase tracking-[5px] font-medium">
            Help Center
          </span>

          <h1 className="text-5xl md:text-7xl font-medium mt-6 leading-tight">
            We're Here To Help You
          </h1>

          <p className="text-gray-600 mt-8 text-lg leading-relaxed">
            Have questions about our services or your project? Fill out the
            contact form and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="bg-white rounded-[30px] p-8 text-center">
            <FiPhone className="mx-auto text-3xl text-orange-500" />
            <h3 className="text-2xl font-medium mt-5">Phone</h3>
            <p className="text-gray-500 mt-3">+91 98765 43210</p>
          </div>

          <div className="bg-white rounded-[30px] p-8 text-center">
            <FiMail className="mx-auto text-3xl text-orange-500" />
            <h3 className="text-2xl font-medium mt-5">Email</h3>
            <p className="text-gray-500 mt-3">hello@adonagency.com</p>
          </div>

          <div className="bg-white rounded-[30px] p-8 text-center">
            <FiMapPin className="mx-auto text-3xl text-orange-500" />
            <h3 className="text-2xl font-medium mt-5">Location</h3>
            <p className="text-gray-500 mt-3">Anand, Gujarat, India</p>
          </div>

          <div className="bg-white rounded-[30px] p-8 text-center">
            <FiClock className="mx-auto text-3xl text-orange-500" />
            <h3 className="text-2xl font-medium mt-5">Working Hours</h3>
            <p className="text-gray-500 mt-3">
              Mon - Sat
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}

        <div className="bg-white rounded-[35px] p-10 mt-24">
          <h2 className="text-4xl font-medium text-center">
            Send us a Message
          </h2>

          <form
            className="grid md:grid-cols-2 gap-6 mt-12"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border rounded-2xl px-6 py-4 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-2xl px-6 py-4 outline-none"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-2xl px-6 py-4 outline-none"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border rounded-2xl px-6 py-4 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="md:col-span-2 border rounded-2xl px-6 py-4 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-black text-white rounded-full py-5 hover:bg-orange-500 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* FAQ */}

        <div className="mt-24">
          <h2 className="text-5xl text-center font-medium">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto mt-16 space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center p-8"
                >
                  <h3 className="text-xl font-medium text-left">
                    {faq.question}
                  </h3>

                  <FiChevronDown
                    className={`transition ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
