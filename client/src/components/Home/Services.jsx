const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h2>
        <ul className="max-w-2xl mx-auto space-y-3 text-lg text-gray-600">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Licensed Individual & Family Therapy</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Teen & Adolescent Counseling</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Interactive Self-Guided Programs</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>24/7 AI-Powered Chat Support</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
