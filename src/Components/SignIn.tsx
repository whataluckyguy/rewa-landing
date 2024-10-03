const SignIn = () => {
  return (
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
          //   onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            // value={pwd}
            // onChange={(e) => setPwd(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          >
            Continue
          </button>
          {/* <Link to="/signup">Need an account?</Link> */}
        </form>
        <div className="flex w-full items-center justify-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-4 text-gray-500">Or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <button
          type="button"
          className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          //   onClick={LinkedinLogin}
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
  );
};

export default SignIn;
