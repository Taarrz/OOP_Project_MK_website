import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center h-[750px] px-6 my-5 items-center">
      <div className="w-4/6 lg:w-1/3 h-max bg-white p-5 rounded-lg">
        <h3 className="pt-4 text-2xl text-center">Login!</h3>
        <form>
          <div>
            <label className="block mb-2 text-red">Email</label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Ex. test@email.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-red">Password</label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="**********"
            />
          </div>
          <div>
            <button
              className="w-full px-4 py-2 font-bold text-white bg-red rounded-full hover:bg-third-color focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="my-5 flex flex-col sm:flex-row justify-between">
          <a
            className="text-red hover:text-third-color text-sm float-left"
            href="#"
          >
            Forgot Password?
          </a>
          <a
            className="text-red hover:text-third-color text-sm float-right"
            href="#"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
