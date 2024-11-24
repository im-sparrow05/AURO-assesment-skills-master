import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log("Login response:", response);

      if (response.status === 200) {
        // Assuming the token is sent in the response data
        const token = response.data.token;
        // Store token in localStorage
        localStorage.setItem("token", token);
        // Redirect to dashboard or any other page upon successful login
        window.location.href = "/dashboard"; // Change this URL as needed
      } else {
        console.error("Login failed");
        // Log the message sent by the backend
        console.log("Login error message:", response.data.message);
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again later.");
    }
  }
  return (
    <div className="container px-20 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <a href="/" className="absolute top-10 left-20 mt-4 ml-4">
          <FaArrowLeft className="text-[#00df9a] text-xl" />
        </a>

        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div className="p-10 flex flex-col w-full shadow-xl rounded-xl border border-[#00df9a]">
            <h2 className="text-3xl font-bold text-[#00df9a] text-left mb-5">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please insert your email"
                  className="appearance-none bg-[#1f201f] rounded-lg px-4 py-3 placeholder-[#879892] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:shadow-lg text-[#00df9a]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="password" className="text-gray-200 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="appearance-none bg-[#1f201f] rounded-lg px-4 py-3 placeholder-[#879892] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:shadow-lg text-[#00df9a]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00df9a] rounded-lg text-black hover:bg-[#0f5f47] hover:text-white"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Login</div>
                  </div>
                </button>
                <div className="flex justify-evenly mt-5">
                  <p className="text-center text-sm text-gray-500">
                    Don&apos;t have an Account?{" "}
                    <a
                      href="/signup"
                      className="font-semibold leading-6 text-[#00df9a] hover:text-[#02734f]"
                    >
                      Signup
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div>
            <svg
              className="w-20 h-20 mx-auto md:float-right fill-stroke text-[#00df9a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <h1 className="md:text-right text-5xl text-[#00df9a] font-bold">
            Client Login
          </h1>
          <p className="text-gray-400 text-right mt-7">
            Access your account here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
