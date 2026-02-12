import Navbar from "../component/NavBar";
import {Clock4, Users, MapPin, TrendingUp, DollarSign, CircleCheckBig, Target, Calendar , FolderOpen , Briefcase , Video, Megaphone, Wifi, Bitcoin, Cog, Lock, Film, Award, Shield, BookOpen, Phone, Mail, Clock } from "lucide-react"
import Footer from "@/app/component/Footer";


export default async function Contact() {
   return(
    <div>
        <div><Navbar/></div>

        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Ready to transform your career? Contact us to learn more about our programs and take the first step towards your tech journey.</p>

                </div>
                <div className="grid lg:grid-cols-2 gap-12 ">
                <div >
                <div className="space-y-8 ">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-800"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                    <p className="text-gray-600 leading-relaxed w-50">7, St. Finbarr's College Road,Pako Bus-Stop, Akoka,Yaba, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-green-600"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                    <p className="text-gray-600 leading-relaxed">+234 (0) 808 559 6444</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-purple-600"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600 leading-relaxed">spraditech@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-orange-600"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                                    <p className="text-gray-600 leading-relaxed w-60">Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:0 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-800 to-indigo-800 rounded-2xl p-6 text-white mb-25">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">Join thousands of successful graduates who have transformed their careers with Spraditech Digital Solutions. Our expert instructors and comprehensive curriculum will guide you every step of the way.</p>
                <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <span className="text-blue-100">Industry-relevant curriculum</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <span className="text-blue-100">Expert instructors and mentorship</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <span className="text-blue-100">Career support and job placement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <span className="text-blue-100">Flexible learning options</span>
                    </div>
                </div>
                <div className="space-y-3">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 pointer-events-none size-4 shadow h-9 px-4 w-full bg-white text-blue-800 hover:bg-blue-50 py-3">Schedule a Consultation</button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 pointer-events-none size-4 shadow h-9 px-4 w-full bg-white text-whitehover:bg-blue-700 px-8 py-3 bg-white">Download Course Brochure</button>
                </div>
            </div>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </section>
    </div>
   )
}


 