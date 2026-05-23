import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  className?: string;
  showGetStarted?: boolean;
}

const Footer = ({ className = "", showGetStarted = true }: FooterProps) => {
  return (
    <footer className={`bg-gray-900 text-white w-full ${className}`}>
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1 – Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">Spraditech</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Empowering individuals worldwide with cutting-edge, industry-relevant tech skills
            through exceptional training, mentorship, and career support.
          </p>
          <div className="text-gray-400 text-sm space-y-1">
            <p>7, St. Finbarr's College Road, Pako Bus-Stop,</p>
            <p>Akoka, Yaba, Lagos, Nigeria</p>
            <p>+234 (0) 808 559 6444</p>
            <p>spraditech@gmail.com</p>
          </div>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Courses", "Blog", "Contact", "Student Portal", "Instructor Portal"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Courses */}
        <div>
          <h3 className="text-base font-semibold mb-4">Our Courses</h3>
          <ul className="space-y-2 text-sm">
            {["Data Analytics", "Software Engineering", "Cybersecurity", "AI Engineering", "UI/UX Design", "Digital Marketing"].map((course) => (
              <li key={course}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{course}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Support & Hours */}
        <div>
          <h3 className="text-base font-semibold mb-4">Support & Legal</h3>
          <ul className="space-y-2 text-sm mb-6">
            {["Help Center", "Student Support", "Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>

          <h3 className="text-base font-semibold mb-2">Office Hours</h3>
          <div className="text-gray-400 text-sm space-y-1">
            <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p>Saturday: 10:00 AM – 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-right">
            © 2025 Spraditech Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;