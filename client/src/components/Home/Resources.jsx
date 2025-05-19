const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Helpful Resources
        </h2>
        <ul className="max-w-2xl mx-auto space-y-3 text-lg text-gray-600">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Managing Anxiety & Depression</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Daily Mindfulness Practices</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>The Benefits of Regular Therapy</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resources;
