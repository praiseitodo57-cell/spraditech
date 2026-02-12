import Navbar from "../component/NavBar";
import {Clock4, Users, MapPin, TrendingUp, DollarSign, CircleCheckBig, Target, Calendar , FolderOpen , Briefcase , Video, Megaphone, Wifi, Bitcoin, Cog, Lock, Film, Award, Shield, BookOpen, Phone, Mail, Clock, Eye, Zap, Globe, Heart, Trophy, Server } from "lucide-react"
import Footer from "@/app/component/Footer";



export default async function About() {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <section id="about" className="py-20 bg-white mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Spraditech Digital Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We are a leading tech skills training company based in Lagos, Nigeria, committed to empowering individuals with world-class digital skills.</p>
                    </div>
                    <div className="mb-16">
                        <div className="bg-gray-200 rounded-2xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                                    <div className="flex items-start space-x-3 mb-6">
                                        <MapPin className="w-6 h-6 text-blue-800 mt-1"/>
                                        <div>
                                            <p className="text-gray-700 leading-relaxed w-50">7, St. Finbarr's College Road,koka,Yaba, Lagos, Nigeria</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed w-130">Located in the heart of Lagos tech ecosystem, we provide accessible training for aspiring tech professionals across Nigeria and beyond.</p>
                                </div>
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Training Areas</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <span className="text-gray-700">Data Analytics</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <span className="text-gray-700">Software Engineering</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <span className="text-gray-700">Cybersecurity</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <span className="text-gray-700">AI Engineering</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <span className="text-gray-700">UI/UX Design</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <span className="text-gray-700">Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mt-18">
                                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                        <Eye className="w-8 h-8 text-blue-800"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                    <p className="text-gray-500 leading-relaxed font-bold">o be the undisputed global leader in accessible, world-class tech skills training, empowering individuals everywhere to build successful careers and drive digital innovation.</p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                        <Target className="w-8 h-8 text-green-600"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                    <p className="text-gray-500 leading-relaxed font-bold">Spraditech Digital Solutions equips individuals worldwide with cutting-edge, industry-relevant tech skills through exceptional training, mentorship, and career support. We foster a dynamic learning community in Lagos and beyond.</p>
                                </div>
                            </div>
                    </div>
                    <div className="mt-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">These values guide everything we do and shape our commitment to student success and community impact.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-yellow-100 text-yellow-800 rounded-xl flex items-center justify-center mb-6">
                                    <Award className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                                <p className="text-gray-600 leading-relaxed">We relentlessly pursue the highest standards in curriculum, instruction, and student outcomes. We embrace continuous improvement and innovation.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Empowerment</h3>
                                <p className="text-gray-600 leading-relaxed">We believe in unlocking potential. We provide the tools, knowledge, confidence, and support for learners to take control of their careers and futures.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-green-100 text-green-800 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                                <p className="text-gray-600 leading-relaxed">We measure success by the tangible career advancement of our graduates and their positive contributions to businesses and society through technology.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Mindset, Local Roots</h3>
                                <p className="text-gray-600 leading-relaxed">We think globally, designing skills for the worldwide market, while staying deeply connected to and serving the vibrant Nigerian and African tech landscape.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-red-100 text-red-800 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity & Trust</h3>
                                <p className="text-gray-600 leading-relaxed">We operate with honesty, transparency, and ethical practices. We build trust with students, partners, and the community through reliability and respect.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Community & Collaboration</h3>
                                <p className="text-gray-600 leading-relaxed">We foster a supportive, inclusive learning environment where students, instructors, and alumni collaborate, network, and grow together.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 animation-delay:0s">
                                <div className="w-16 h-16 bg-red-100 text-red-800 rounded-xl flex items-center justify-center mb-6">
                                    <Heart className="w-8 h-8"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
                                <p className="text-gray-600 leading-relaxed">We strive to make high-quality tech education achievable through diverse learning formats, flexible pathways, and supportive structures.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Strategic Pillars</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Five key pillars that drive our mission to become the global leader in accessible, world-class tech skills training.</p>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center">
                                            <BookOpen className="w-10 h-10"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">World-Class Curriculum & Delivery</h3>
                                        <div className="grid md:grid-cols-2 gap-4">

                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Continuously update courses with the latest global tech trends & tools</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Invest in top-tier instructors (industry practitioners & expert educators)</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Develop innovative, scalable learning models (Blended, Online, Bootcamps)</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Implement rigorous quality assurance and learning outcome measurement</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-yellow-100 text-yellow-800 rounded-2xl flex items-center justify-center">
                                            <Trophy className="w-10 h-10"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Recognition & Employability</h3>
                                        <div className="grid md:grid-cols-2 gap-4">

                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Forge strong partnerships with leading global tech companies</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Build a powerful, recognized "Spraditech Graduate" brand</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Establish robust career services with global reach</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Secure internationally recognized accreditations and certifications</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-green-100 text-green-800 rounded-2xl flex items-center justify-center">
                                            <Server className="w-10 h-10"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Technology & Infrastructure</h3>
                                        <div className="grid md:grid-cols-2 gap-4">

                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Develop a state-of-the-art, scalable Learning Management System (LMS)</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Expand physical infrastructure in Lagos strategically</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Explore hub models globally for expansion</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Leverage technology for seamless remote/international student experiences</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-red-100 text-red-800 rounded-2xl flex items-center justify-center">
                                            <Heart className="w-10 h-10"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Unrivaled Student Experience & Community</h3>
                                        <div className="grid md:grid-cols-2 gap-4">

                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Provide exceptional pre-enrollment guidance and ongoing support</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Cultivate a vibrant, active, and supportive global alumni network</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Prioritize student success through personalized mentorship</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Foster a culture of collaboration, innovation, and belonging</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-purple-100 text-purple-800 rounded-2xl flex items-center justify-center">
                                            <TrendingUp className="w-10 h-10"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Growth & Impact</h3>
                                        <div className="grid md:grid-cols-2 gap-4">

                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Develop diverse revenue streams (corporate training, government contracts)</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Implement robust data-driven decision-making for expansion</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Maintain strong commitment to social impact and scholarships</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600 leading-relaxed">Build a high-performance, globally-minded team culture</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <Footer/>
                </div>
            </section>
        </div>
    )
}