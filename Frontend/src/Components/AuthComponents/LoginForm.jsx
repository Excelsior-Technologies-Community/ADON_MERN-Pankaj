import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: " ",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        formData,
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "LOGIN Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-slate-300">Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="
          w-full
          mt-2
          bg-slate-800
          border
          border-slate-700
          rounded-lg
          px-4
          py-3
          text-white
          outline-none
          focus:border-amber-500
          "
        />
      </div>

      <div>
        <label className="text-slate-300">Password</label>

        <div className="relative mt-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-lg
            px-4
            py-3
            text-white
            outline-none
            focus:border-amber-500
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
            absolute
            right-4
            top-4
            text-slate-400
            "
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button
        disabled={loading}
        className="
        w-full
        bg-amber-500
        hover:bg-amber-600
        text-black
        font-semibold
        py-3
        rounded-lg
        transition
        "
      >
        {loading ? "Logging..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
