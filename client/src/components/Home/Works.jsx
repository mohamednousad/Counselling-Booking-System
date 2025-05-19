const Works = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Sign Up Easily",
            "Complete a Brief Assessment",
            "Match with a Professional",
            "Begin Your Journey to Wellness",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mb-4 mx-auto">
                {index + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
