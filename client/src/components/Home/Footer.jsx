const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; 2025 MindCare. All rights reserved. |{" "}
          <a href="#ass" className="hover:text-green-400 transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#TermsofService" className="hover:text-green-400 transition">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
