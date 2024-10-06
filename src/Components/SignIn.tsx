import { Link, Navigate } from "react-router-dom";
import IconsCloud from "./IconsCloud";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/States/hooks";
import axios from "axios";
import { handleUser } from "@/States/features/user/userSlice";
import { login } from "./apiService";
import { LinkedInApi } from "@/config";

// interface tokenInterface {
//   token: string;
//   refreshToken: string;
// }

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  // const tokens = {
  //   token: localStorage.getItem("token"),
  //   refreshToken: localStorage.getItem("refreshToken"),
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Fetched locally: ", localStorage.getItem("token"));
    if (token) {
      axios
        .post("http://localhost:5000/verify-token", { token })
        .then((response) => {
          if (response.data.valid) {
            // setIsAuthenticated(true);
            dispatch(handleUser());
            console.log("Success");
          } else {
            localStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error("Token verification failed: ", error);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(email, pwd);
      // setResponse(res.data);
      // localStorage.setItem("token", resonse.token);
      console.log(res.data.token);
      console.log(res.data.refreshToken);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      dispatch(handleUser());
      const tokens = {
        token: res.data.token,
        refreshToken: res.data.refreshToken,
      };
      axios.post("http://localhost:4001/token", tokens);
    } catch (error) {
      console.error("Error logging in: ", error);
      // setResponse("Login failed");
    }
  };

  const LinkedinLogin = () => {
    const { clientId, redirectUrl, scope, state } = LinkedInApi;
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&state=${state}&scope=${scope}`;
    window.location.href = authUrl;
  };

  if (user) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <div className="w-full landing leading-normal tracking-normal text-gray-900 h-screen pb-14 bg-right bg-cover">
        <div className="w-full container mx-auto p-6">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                className="h-8 fill-current text-indigo-600 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
              </svg>
              REWA
            </a>

            <div className="flex w-1/2 justify-end content-center">
              <a
                className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
                data-tippy-content="@twitter_handle"
                href="https://twitter.com/intent/tweet?url=#"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                </svg>
              </a>
              <a
                className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
                data-tippy-content="#facebook_id"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* main */}
        {/* <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"> */}
        <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="loginOptions flex flex-col w-full justify-center items-center justify-items-center space-y-3 xl:w-2/5">
            <div className="lockIcon size-fit rounded-full p-2 bg-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="loginForm flex flex-col items-center space-y-3">
              <div className="header">Sign in</div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border p-2 rounded"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  className="border p-2 rounded"
                />
                <button
                  type="submit"
                  className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                >
                  Continue
                </button>
                <Link to="/signup">Need an account?</Link>
              </form>
              <div className="flex w-full items-center justify-center my-4">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-500">Or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <button
                type="button"
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                onClick={LinkedinLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 me-2"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
                Continue with LinkedIn
              </button>
            </div>
          </div>
          <IconsCloud />
          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="#"
            >
              &copy; App 2024
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;
