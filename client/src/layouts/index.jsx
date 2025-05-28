import React from "react";

const ResponsiveLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#1" className="text-gray-600 hover:text-black">Home</a>
            <a href="#2" className="text-gray-600 hover:text-black">About</a>
            <a href="#3" className="text-gray-600 hover:text-black">Services</a>
            <a href="#4" className="text-gray-600 hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to MyApp</h2>
            <p className="text-gray-600 mb-6">
              Build powerful web experiences with simplicity and speed using Tailwind CSS and React.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Hero"
              className="w-full rounded-xl shadow"
            />
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          © 2025 MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;
