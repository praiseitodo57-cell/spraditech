import { BookOpen } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
  showGetStarted?: boolean;
}

const Navbar = ({ className = "", showGetStarted = true }: NavbarProps) => {
  return (
    <nav className={`flex items-center p-5 fixed top-0 left-0 rig bg-white/95 backdrop-blur-md boder-b boder-gray-200 z-50 shadow-sm w-400 ${className}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center ml-16">
          <BookOpen className="text-white w-5 h-5" />
        </div>
        <span className="text-2xl font-bold font-sans text-gray-700 ml-2">
          Spraditech
        </span>
      </div>

      
      <div className="flex items-center ml-30 font-bold text-lg space-x-8 ">
        <NavLink href="/" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Home</NavLink>
        <NavLink href="/About" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>About</NavLink>
        <NavLink href="/Courses" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Courses</NavLink>
        <NavLink href="/Blog" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Blog</NavLink>
        <NavLink href="/Contact" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Contact</NavLink>
        <NavLink href="/Privacy" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Privacy</NavLink>
        <NavLink href="/Terms" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Terms</NavLink>
      </div>

    
      {showGetStarted && (
        <button className="ml-auto bg-blue-900 px-6 py-2 rounded-lg text-white text-sm hover:bg-blue-800 transition-colors font-bold relative right-35">
          Get Started
        </button>
      )}
    </nav>
  );
};

// Helper component for individual navigation links
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <div className="text-gray-500 hover:text-blue-900 transition-colors">
    <Link 
      href={href} 
      className={`mr-4 ${className}`}
    >
      {children}
    </Link>
  </div>
);

export default Navbar;