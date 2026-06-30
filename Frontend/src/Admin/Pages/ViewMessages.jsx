import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiUser,
  FiCalendar,
} from "react-icons/fi";

const ViewMessages = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // Get Message
      const { data } = await axios.get(`http://localhost:5000/api/msg/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);

      setMessage(data.message[0]);

      // Mark as Read
      if (!data.message.is_read) {
        await axios.put(
          `http://localhost:5000/api/msg/read/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load message");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-white text-center py-20 text-2xl">Loading...</div>
    );
  }

  if (!message) {
    return (
      <div className="text-white text-center py-20 text-2xl">
        Message Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">View Message</h1>

          <p className="text-slate-400 mt-2">
            Contact form submission details.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/messages")}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl transition"
        >
          <FiArrowLeft />
          Back
        </button>
      </div>

      {/* Card */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
        {/* Name */}

        <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl">
            <FiUser />
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold">
              {message.name}
            </h2>

            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                message.is_read
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {message.is_read ? "Read" : "Unread"}
            </span>
          </div>
        </div>

        {/* Info */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-orange-500 mb-3">
              <FiMail />
              <span>Email</span>
            </div>

            <p className="text-white">{message.email}</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-orange-500 mb-3">
              <FiPhone />
              <span>Phone</span>
            </div>

            <p className="text-white">{message.phone}</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-orange-500 mb-3">
              <FiCalendar />
              <span>Received</span>
            </div>

            <p className="text-white">
              {new Date(message.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-orange-500 mb-3">
              <FiMail />
              <span>Subject</span>
            </div>

            <p className="text-white">{message.subject}</p>
          </div>
        </div>

        {/* Message */}

        <div className="mt-8">
          <h3 className="text-white text-xl font-semibold mb-5">Message</h3>

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-300 leading-8 whitespace-pre-wrap">
              {message.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMessages;
