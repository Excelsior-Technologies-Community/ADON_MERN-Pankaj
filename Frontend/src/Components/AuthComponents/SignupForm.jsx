import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: " ",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return toast.error("passeords do not match");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      );
      toast.success(data.message || "Signup Success");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-slate-300">Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
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

      <div>
        <label className="text-slate-300">Confirm Password</label>

        <div className="relative mt-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
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
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="
            absolute
            right-4
            top-4
            text-slate-400
            "
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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
        {loading ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
};

export default SignupForm;
