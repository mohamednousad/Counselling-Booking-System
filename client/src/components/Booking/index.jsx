export default function Booking() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Book a Consultation</h2>
      <p className="text-gray-600 mb-6">
        Fill the form below to schedule your appointment with our counselor
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">National Identity Card</label>
          <input
            type="text"
            name="nid"
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
          <label className="block text-gray-700 font-medium mb-1">Type of Consultant</label>
          <select
            name="consultant"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select</option>
            <option value="counselor">Counselor</option>
            <option value="therapist">Therapist</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Level of Psychology</label>
          <select
            name="level"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300"
        >
          Book Appointment
        </button>
      </form>
    </main>
  );
}
