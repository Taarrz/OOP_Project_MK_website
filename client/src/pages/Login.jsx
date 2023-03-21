import React from "react";
import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";

export default function Login() {
  return (
    <div className="font-kanit">
      <Header />
      <CategoryBar />
      <div className="flex w-full bg-gray justify-center items-center py-5">
        <div className="border-l-2 h-6 mx-2"></div>
        <h1 className="text-xl w-1/5">Login</h1>
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-1/3 h-max p-5 rounded-lg">
          <h3 className="pt-4 text-2xl text-center">Login!</h3>
          <form>
            <div>
              <label className="block mb-2 text-red">Email</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="email"
                placeholder="Ex. test@email.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-red">Password</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md"
                type="password"
                placeholder="**********"
              />
            </div>
            <div>
              <button
                className="w-full px-4 py-2 mt-3 font-bold text-white bg-red rounded-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="my-5 flex flex-col sm:flex-row justify-between">
            <a
              className="text-red hover:text-third-color text-sm float-left"
              href="/"
            >
              Forgot Password?
            </a>
            <a
              className="text-red hover:text-third-color text-sm float-right"
              href="/registor"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
