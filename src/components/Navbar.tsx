import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex gap-6 px-8 py-4 glass">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/our-story">Our Story</Link>
      <Link to="/founders">Founders</Link>
      <Link to="/app">App</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
