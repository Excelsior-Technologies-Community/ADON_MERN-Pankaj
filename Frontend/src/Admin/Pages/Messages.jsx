import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FiSearch, FiEye, FiTrash2 } from "react-icons/fi";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:5000/api/msg", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(data.data);
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const confirmDelete = window.confirm("delete this msg ? ");

      if (!confirmDelete) return;

      const token = localStorage.getItem("token");

      const { data } = await axios.delete(
        `http://localhost:5000/api/msg/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(data.message);
      getMessages();
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white py-20">Loading Messages...</div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Messages</h1>

          <p className="text-slate-400 mt-2">Manage contact messages.</p>
        </div>
      </div>

      {/* Search */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
        <FiSearch className="text-slate-400 text-xl" />

        <input
          type="text"
          placeholder="Search message..."
          className="bg-transparent outline-none w-full text-white placeholder:text-slate-500"
        />
      </div>

      {/* Desktop */}

      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="text-left p-5">Name</th>
              <th className="text-left p-5">Email</th>
              <th className="text-left p-5">Subject</th>
              <th className="text-left p-5">Status</th>
              <th className="text-left p-5">Date</th>
              <th className="text-center p-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                className="border-t border-slate-800 hover:bg-slate-800/40"
              >
                <td className="p-5 text-white font-medium">{message.name}</td>

                <td className="p-5 text-slate-300">{message.email}</td>

                <td className="p-5 text-slate-300">{message.subject}</td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      message.is_read
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {message.is_read ? "Read" : "Unread"}
                  </span>
                </td>

                <td className="p-5 text-slate-400">
                  {new Date(message.createdAt).toLocaleDateString()}
                </td>

                <td className="p-5">
                  <div className="flex justify-center gap-3">
                    <Link to={`/admin/messages/view/${message.id}`}>
                      <button className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-white transition">
                        <FiEye />
                      </button>
                    </Link>

                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-600 flex items-center justify-center text-white transition"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div className="grid gap-5 lg:hidden">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
          >
            <h2 className="text-xl text-white font-semibold">{message.name}</h2>

            <p className="text-slate-400 mt-2">{message.email}</p>

            <p className="text-slate-400 mt-2">{message.subject}</p>

            <span
              className={`inline-block mt-4 px-3 py-1 rounded-full text-xs ${
                message.is_read
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {message.is_read ? "Read" : "Unread"}
            </span>

            <div className="flex justify-between mt-6">
              <Link
                to={`/admin/messages/view/${message.id}`}
                className="flex-1 mr-2"
              >
                <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-white transition">
                  <FiEye className="mx-auto" />
                </button>
              </Link>

              <button
                onClick={() => deleteMessage(message.id)}
                className="flex-1 ml-2 py-3 rounded-xl bg-slate-800 hover:bg-red-600 text-white transition"
              >
                <FiTrash2 className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
