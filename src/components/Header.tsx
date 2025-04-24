
import { useState } from "react";
import logo from "../assets/sail-logo.svg";

const sections = [
  { id: "whyWorkWithMe", label: "Why Me" },
  { id: "contact", label: "Contact" },
  { id: "clientTestimonials", label: "Client Testimonials" },
  { id: "whoIWorkWith", label: "Who I Work With" },
  { id: "finalCall", label: "Final Call" },
  { id: "newsLetter", label: "News Letter" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <div className="text-xl font-bold"><img src={logo} alt="Sailboat Logo" className=" w-20 h-24 p-2 mx-8 object-contain " /></div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={(e) => {
                e.preventDefault();
                handleLinkClick(section.id);
              }}
              className="relative text-black transition duration-200
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:h-[2px] after:w-0 after:bg-[#008080]
                         hover:after:w-full after:transition-all after:duration-300">
              {section.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(section.id);
              }}
              className="block w-full text-left text-gray-700 py-2 hover:text-blue-600"
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header;