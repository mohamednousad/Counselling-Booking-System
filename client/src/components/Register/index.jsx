import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-20">
      <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
        Create an Account
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Fill in the form to register a new account
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300 cursor-pointer"
        >
          Sign up
        </button>
        
        <Link to="/login" className="text-sm text-green-700 hover:underline">
          Already have an account?
        </Link>
      </form>
    </main>
  );
}
