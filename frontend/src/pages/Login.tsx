import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthServiceContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuthServiceContext();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.username) errors.username = "Username required";
      if (!values.password) errors.password = "Password required";
      return errors;
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      const status = await login(username, password);
      if (status === 401) {
        formik.setErrors({
          username: "Invalid username or password",
          password: "Invalid username or password",
        });
      } else {
        navigate("/");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23272a]">
      <div className="bg-[#2b2d31] rounded-2xl shadow-2xl p-8 w-full sm:max-w-md border border-[#36393f]">
        <h1 className="text-3xl font-black text-white mb-6 text-center tracking-tight">
          Sign in
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-white mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              autoFocus
              required
              className={`w-full px-4 py-2 rounded-lg bg-[#23272a] border border-transparent focus:border-[#5865f2] focus:ring-2 focus:ring-[#5865f2] outline-none text-white placeholder:text-gray-400 transition ${
                formik.touched.username && formik.errors.username ? "border-red-500" : ""
              }`}
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="username"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-xs text-red-400 mt-1">{formik.errors.username}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={`w-full px-4 py-2 rounded-lg bg-[#23272a] border border-transparent focus:border-[#5865f2] focus:ring-2 focus:ring-[#5865f2] outline-none text-white placeholder:text-gray-400 transition ${
                formik.touched.password && formik.errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="current-password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-xs text-red-400 mt-1">{formik.errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#5865f2] text-white font-extrabold text-lg shadow hover:bg-[#4752c4] transition focus:outline-none focus:ring-2 focus:ring-[#5865f2]/70"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm text-white">Don&apos;t have an account?</span>
          <a href="/register" className="ml-2 font-bold text-[#5865f2] hover:underline hover:text-white transition">
            Create one
          </a>
        </div>
      </div>
    </div>
  );
}
