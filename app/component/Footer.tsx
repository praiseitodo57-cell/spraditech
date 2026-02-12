import { Database, Users, MapPin, Code, Brain, Laptop, Shield, Palette, Cloud, Package, Video, Megaphone, Wifi, Bitcoin, Cog, Lock, Film, BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"


interface FooterProps {
  className?: string;
  showGetStarted?: boolean;
}


const Footer = ({ className = "", showGetStarted = true }: FooterProps) => {
  return (
    <div className="bg-gray-900 text-white w-335.7 h-150 grid grid-cols-3 lg:grid-cols-4 gap-5 p-10">
                <div>
                    <span className="flex items-center space-x-2 mt-4">
                        <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center ">
                             <BookOpen className="text-white w-6 h-6 " />
                        </div>
                      <h2 className="text-xl font-bold">Spraditech</h2>  
                    </span>
                    <p className="text-gray-300 mt-4 leading-relaxed">Empowering individuals worldwide with cutting-edge, industry-relevant tech skills through exceptional training, mentorship, and career support.</p>
                    <div className="space-y-2 text-gray-300 text-sm mt-7">
                        <p>7, St. Finbarr's College Road, Pako Bus-Stop, Akoka, Yaba, Lagos, Nigeria
                        +234 (0) 808 559 6444
                         spraditech@gmail.com</p>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-lg font-semibold mt-4">Quick Links</h2>
                    <ul className="space-y-2"> 
                     <li className="text-gray-300 hover:text-white transition-colors"> Home</li>
                     <li className="text-gray-300 hover:text-white transition-colors">About Us</li>
                     <li className="text-gray-300 hover:text-white transition-colors">Courses</li>

                     <li className="text-gray-300 hover:text-white transition-colors">Blog</li>
                    <li className="text-gray-300 hover:text-white transition-colors">Contact</li>
                    <li className="text-gray-300 hover:text-white transition-colors">Student Portal</li>
                    <li className="text-gray-300 hover:text-white transition-colors">Instructor Portal</li>

                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mt-4">Our Courses</h2>
                    <ul className="space-y-2">
                    <li  className="text-gray-300 hover:text-white transition-colors">Data Analytics</li>
                    <li  className="text-gray-300 hover:text-white transition-colors">Software Engineering</li>
                    <li  className="text-gray-300 hover:text-white transition-colors">Cybersecurity</li>
                    <li  className="text-gray-300 hover:text-white transition-colors">AI Engineering</li>
                    <li  className="text-gray-300 hover:text-white transition-colors">UI/UX Design</li>
                    <li  className="text-gray-300 hover:text-white transition-colors">Digital Marketing</li>

                   </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mt-4">Support & Legal</h2>
                    <ul className="space-y-2">
                     <li className="text-gray-300 hover:text-white transition-colors">Help Center</li>
                     <li className="text-gray-300 hover:text-white transition-colors">Student Support</li>
                     <li className="text-gray-300 hover:text-white transition-colors">Privacy Policy</li>
                    <li className="text-gray-300 hover:text-white transition-colors">Terms of Service</li>
                    <li className="text-gray-300 hover:text-white transition-colors">Refund Policy</li>
                   </ul>

                   <div>
                    <h2 className="text-lg font-semibold mt-4">Office Hours</h2>
                    <div className="text-gray-300 text-sm space-y-1">Mon - Fri: 9:00 AM - 6:00 PM
                    Saturday: 10:00 AM - 4:00 PM
                    Sunday: Closed</div>
                   </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 w-315"></div>
                <div className="flex flex-col md:flex-row justify-between w-200 items-center mt-10 ">
                    <div className="flex space-x-4 mb:mb-0 relative right-83">
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                            <Facebook />
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                            <Twitter/>
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                            <Instagram/>
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                            <Linkedin/>
                        </div>
                    </div>
                    <p className="text-gray-400  md:text-right w-200 relative left-30">© 2025 Spraditech Digital Solutions. All rights reserved.</p>
                </div>
            </div>
            
          


 
);

}

export default Footer;