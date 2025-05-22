import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">Mind Care</div>
        <button className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
        <nav className="md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none">
          <div className="container mx-auto px-4 py-2 md:py-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="#home" className="py-2 hover:text-green-600 transition">
              Home
            </a>
            <a href="#about" className="py-2 hover:text-green-600 transition">
              About
            </a>
            <a
              href="#services"
              className="py-2 hover:text-green-600 transition"
            >
              Services
            </a>
            <a
              href="#resources"
              className="py-2 hover:text-green-600 transition"
            >
              Resources
            </a>
            <a href="#contact" className="py-2 hover:text-green-600 transition">
              Contact
            </a>
            <Link
              to="/login"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
