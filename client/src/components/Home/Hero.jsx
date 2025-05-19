
const Hero = () => {
  return (
    <section id="home" className="bg-green-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Your Mental Wellness Starts Here
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Confidential, compassionate, and professional support tailored to your
          needs.
        </p>
        {/* <Link to="/booking"> */}
        <a
          href="/booking"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-block"
        >
          Book appointment
        </a>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Hero;
