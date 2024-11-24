import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios"; // Import Axios

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/signup", {
        username,
        email,
        password,
      });
      console.log("Signup response:", response);
      if (response.status === 201) {
        // Redirect to login page if signup is successful
        window.location.href = "/login";
      } else {
        // Handle signup error
        console.error("Signup failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }
return (
    <div className="container px-6 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <a href="/" className="absolute top-10 left-20 mt-4 ml-4">
          <FaArrowLeft className="text-[#00df9a] text-xl" />
        </a>
        <div className="flex flex-col w-full">
          <div>
            <svg
              className="w-20 h-20 mx-auto md:float-left fill-stroke text-[#00df9a]"
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
          <h1 className="text-5xl text-[#00df9a] font-bold">Client Register</h1>
          <p
            className="text-gray-400 mt-7 flex flex-wrap"
            style={{ maxWidth: "400px" }}
          >
            Welcome to our user registration page! Signing up is your gateway to
            unlocking and explore our platform.
          </p>
        </div>
        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div className="p-10 flex flex-col w-full shadow-xl rounded-xl border border-[#00df9a]">
            <h2 className="text-3xl font-bold text-[#00df9a] text-left mb-5">
              Signup
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="username" className="text-gray-200 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Please choose your username"
                  className="appearance-none bg-[#1f201f] rounded-lg px-4 py-3 placeholder-[#879892] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:shadow-lg text-[#00df9a]"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Please choose your email"
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
                  className="aappearance-none bg-[#1f201f] rounded-lg px-4 py-3 placeholder-[#879892] focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:shadow-lg text-[#00df9a]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00df9a] rounded-lg text-black mt-5 hover:bg-[#0f5f47] hover:text-white"
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
                    <div className="font-bold">Signup</div>
                  </div>
                </button>
                <div className="flex justify-evenly mt-5">
                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-semibold leading-6 text-[#00df9a] hover:text-[#02734f]"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
