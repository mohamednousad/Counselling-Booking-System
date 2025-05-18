const Navbar = () => {
  return (
    <header>
      <div class="container nav-container">
        <div class="logo">MindCare</div>
        <div class="menu-toggle" id="menuToggle">☰</div>
        <nav id="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
