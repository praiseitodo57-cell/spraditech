import Navbar from "../component/NavBar";
import {Clock4, Users, MapPin, TrendingUp, DollarSign, CircleCheckBig, Target, Calendar , FolderOpen , Briefcase , Video, Megaphone, Wifi, Bitcoin, Cog, Lock, Film, Award, Shield, BookOpen, Phone, Mail, Clock, Eye, Zap, Globe, Heart, Trophy, Server, Search, ArrowRight } from "lucide-react"
import Footer from "@/app/component/Footer";
import Image from "next/image";


export default async function About() {
    return(
      <div>
        <div>
            <Navbar/>
        </div>

        <section className="py-12 bg-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-25">
        <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Insights & Industry News</h1>
       <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Stay ahead in your tech career with expert insights, industry trends, and success stories from the Nigerian tech ecosystem.</p>
    </div>
      <div className="grid lg:grid-cols-4 gap-8">
    <div className="lg:col-span-3">

      <div className=" ">
       <div className="">
     <div className="space-y-8">
  
         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 ">
         <h2 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-blue-800 text-white">All Posts</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">Data Analytics</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">Software Engineering</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">Cybersecurity</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">AI Engineering</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">UI/UX Design</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">Digital Marketing</button>
        </div>
    </div>
        </div>
        <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translate-y-1">
         <div className="relative">
                  <Image
                src="/pho2.jpg" 
                width={0}        
                height={0}       
                alt="Picture of the author"
                className=" object-cover w-full h-48"
                />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">Data Analytics</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">12 Transformative Advantages of Computer</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Discover 12 transformative advantages of computer networking with real-world case</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4"/>
                        <span>Chika Agbakwuru</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4"/>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4"/>
                      <span>December 15, 2024</span>
                    </div>
                    <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:ring-1 focus-visible:ring-ring disabled:poiter-events-none disabled:opacity-50 hover:bg-accent h-8 rounded-md text-xs text-blue-800 hover:text-blue-900 p-0">Read More</button>
                  </div>
                </div>
              </article>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translate-y-1">
                <div className="relative">
                  <Image
                src="/pho3.jpg" 
                width={0}        
                height={0}       
                alt="Picture of the author"
                className=" object-cover w-full h-48"
                />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">Cybersecurity</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">10 Essential Cybersecurity</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">As cyber threats increase across Africa, discover the critical</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4"/>
                        <span>Eng. Fatima Abdullahi</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4"/>
                        <span>7 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4"/>
                      <span>December 12, 2024</span>
                    </div>
                    <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:ring-1 focus-visible:ring-ring disabled:poiter-events-none disabled:opacity-50 hover:bg-accent h-8 rounded-md text-xs text-blue-800 hover:text-blue-900 p-0">Read More</button>
                  </div>
                </div>
              </article>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translate-y-1">
                <div className="relative">
                  <Image
                src="/pho5.jpg" 
                width={0}        
                height={0}       
                alt="Picture of the author"
                className=" object-cover w-full h-48"
                />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">Software Engineering</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">From Lagos to Silicon Valley:</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Meet our software engineering graduates who have landed roles</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4"/>
                        <span>Chioma Nwankwo</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4"/>
                        <span>6 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4"/>
                      <span>December 10, 2024</span>
                    </div>
                
                    <button className=" cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:ring-1 focus-visible:ring-ring disabled:poiter-events-none disabled:opacity-50 hover:bg-accent h-8 rounded-md text-xs text-blue-800 hover:text-blue-900 p-0 cursor-poiter">Read More</button>
                  </div>
                </div>
              </article>
            </div>
            <div className="space-y-6 ">
              <div className="">
                <div className="space-y-6 mt-15">
                    <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                    <div className="grid gap-6 ">
                        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <Image
                                src="/pho5.jpg" 
                                  width={0}        
                                  height={0}       
                                alt="Picture of the author"
                                className=" object-cover w-full h-60"
                                />
                            </div>
                            <div className="md:col-span-2 ">
                                <div className="flex items-center space-x-2 mb-3 ">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">AI Engineering</span>
                                    <div className="flex items-center space-x-1 text-xs text-gray-500"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">AI and Machine Learning: Opportunities in the Nigerian Market</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Discover the growing demand for AI professionals in Nigeria and how our AI Engineering program prepares you for these opportunities.</p>
                                <div className="flex items-center justify-between mb-4">

                                  <div className="flex items-center space-x-4 text-sm text-gray-500">

                                    <div className="flex items-center space-x-1">
                                      <Users className="w-4 h-4"/>
                                      <span className="w-30">Prof. Ibrahim Musa</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="w-4 h-4"/>
                                      <span className="w-20">12/8/2024</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">

                                    <div className="flex items-center space-x-1">
                                      <Eye className="w-4 h-4"/>
                                      <span>743</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Heart className="w-4 h-4"/>
                                      <span>52</span>
                                    </div>
                                  </div>
                                
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-3 w-100">
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Artificial Intelligence</span>
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Machine Learning</span>
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Career Opportunities</span>
                                    </div>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-color focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-event-none disabled:opacity-50 pointer-events-none border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">Read More</button>
                                  </div>
                            </div>
                        </div>
                        </article>

                        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                            <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <Image
                                src="/pho5.jpg" 
                                  width={0}        
                                  height={0}       
                                alt="Picture of the author"
                                className=" object-cover w-full h-60"
                                />
                            </div>
                            <div className="md:col-span-2 ">
                                <div className="flex items-center space-x-2 mb-3 ">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">UI/UX Design</span>
                                    <div className="flex items-center space-x-1 text-xs text-gray-500"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">UI/UX Design Trends Shaping African Digital Products</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Learn about the latest design trends that are influencing user experience across African digital platforms and mobile apps.</p>
                                <div className="flex items-center justify-between mb-4">

                                  <div className="flex items-center space-x-4 text-sm text-gray-500">

                                    <div className="flex items-center space-x-1">
                                      <Users className="w-4 h-4"/>
                                      <span className="w-30">Grace Okoro</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="w-4 h-4"/>
                                      <span className="w-20">12/8/2024</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">

                                    <div className="flex items-center space-x-1">
                                      <Eye className="w-4 h-4"/>
                                      <span>634</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Heart className="w-4 h-4"/>
                                      <span>52</span>
                                    </div>
                                  </div>
                                
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-3 w-100">
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Artificial Intelligence</span>
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Machine Learning</span>
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Career Opportunities</span>
                                    </div>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-color focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-event-none disabled:opacity-50 pointer-events-none border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">Read More</button>
                                  </div>
                            </div>
                        </div>
                        </article>
                            
                        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                            <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <Image
                                src="/pho5.jpg" 
                                  width={0}        
                                  height={0}       
                                alt="Picture of the author"
                                className=" object-cover w-full h-60"
                                />
                            </div>
                            <div className="md:col-span-2 ">
                                <div className="flex items-center space-x-2 mb-3 ">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Digital Marketing</span>
                                    <div className="flex items-center space-x-1 text-xs text-gray-500"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Digital Marketing Strategies for Nigerian Startups</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Effective digital marketing tactics that Nigerian startups are using to scale their businesses and reach global audiences.</p>
                                <div className="flex items-center justify-between mb-4">

                                  <div className="flex items-center space-x-4 text-sm text-gray-500">

                                    <div className="flex items-center space-x-1">
                                      <Users className="w-4 h-4"/>
                                      <span className="w-30">Olumide Adeyemi</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="w-4 h-4"/>
                                      <span className="w-20">12/8/2024</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">

                                    <div className="flex items-center space-x-1">
                                      <Eye className="w-4 h-4"/>
                                      <span>521</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Heart className="w-4 h-4"/>
                                      <span>52</span>
                                    </div>
                                  </div>
                                
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-3 w-100">
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Artificial Intelligence</span>
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Machine Learning</span>
                                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Career Opportunities</span>
                                    </div>
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-color focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-event-none disabled:opacity-50 pointer-events-none border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">Read More</button>
                                  </div>
                            </div>
                        </div>
                        </article>
                    </div>
                  </div>
                </div>
                  </div>
                </div>

            <div className="">
            <div className="lg:col-span-1">
              <div className="space-y-6  ">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80 bottom-55">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Search Articles</h3>
                  <div className="relative ">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                    <input type="text" placeholder="Search blog posts" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80  top-125">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <a href="/Blog?category=data-analytics" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 hover:text-blue-800">Data Analytics</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">12</span>
                    </a>

                    <a href="/Blog?category=data-analytics" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 hover:text-blue-800">Software Engineering</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">8</span>
                    </a>

                    <a href="/Blog?category=data-analytics" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 hover:text-blue-800">Cybersecurity</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">6</span>
                    </a>

                    <a href="/Blog?category=data-analytics" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 hover:text-blue-800">Ai Engineering</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-600">6</span>
                    </a>

                    <a href="/Blog?category=data-analytics" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 hover:text-blue-800">UI/UX Design</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">7</span>
                    </a>

                    <a href="/Blog?category=data-analytics" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700 hover:text-blue-800">Digital Marketing</span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">4</span>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80  top-225">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    <a href="/Blog/future-data-analytics-nigeria-financial-sector">
                      <div className="group cursor-pointer">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800 line-clamp-2 mb-2">The Future of Data Analytics in Nigeria's Financial Sector</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3"/>
                          <span>12/15/2024</span>
                          <span>•</span>
                          <span>Data Analytics</span>
                        </div>
                      </div>
                    </a>
                      <a href="/Blog/future-data-analytics-nigeria-financial-sector">
                      <div className="group cursor-pointer">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800 line-clamp-2 mb-2">10 Essential Cybersecurity Skills Every Nigerian Business Needs</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3"/>
                          <span>12/12/2024</span>
                          <span>•</span>
                          <span>Cybersecurity</span>
                        </div>
                      </div>
                    </a>
                    <a href="/Blog/future-data-analytics-nigeria-financial-sector">
                      <div className="group cursor-pointer">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800 line-clamp-2 mb-2">From Lagos to Silicon Valley: Success Stories</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3"/>
                          <span>12/10/2024</span>
                          <span>•</span>
                          <span>AI Engineering</span>
                        </div>
                      </div>
                    </a>
                    <a href="/Blog/future-data-analytics-nigeria-financial-sector">
                      <div className="group cursor-pointer">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800 line-clamp-2 mb-2">AI and Machine Learning: Opportunities in Nigeria</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3"/>
                          <span>12/15/2024</span>
                          <span>•</span>
                          <span>Software Engineering</span>
                        </div>
                      </div>
                    </a>
                </div>
              </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80  top-320">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Career Advice</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Tech Trends</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Nigeria Tech</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Job Market</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Skills Development</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Industry Insights</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Success Stories</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Learning Tips</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Tech News</a>
                    <a href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">Certification</a>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80  top-390">
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">Get the latest tech insights and career advice delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-lg text-gray-900 focus:ring-blue-300 bg-white"/>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shrink-0 shadow h-9 px-4 py-2 w-full bg-white text-blue-800 hover:bg-blue-50">Subscribe</button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80  top-455">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Courses</h3>
                  <div className="space-y-4">
                    <a href="#">
                      <div className="groud p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-800">Data Analytics</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600"/>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Master data analysis and visualization 6 Months</p>
                      </div>
                    </a>
                    <a href="#">
                      <div className="groud p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-800">Software Engineering</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600"/>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Build robust applications 12 Months</p>
                      </div>
                    </a>
                    <a href="#">
                      <div className="groud p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-800">Cybersecurity</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600"/>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Protect digital assets 8 Months</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 absolute left-270 w-80  top-555">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="flex items-center justify-center p-3 bg-blue-50 text-blue-800 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
            
                      <a href="#" className="flex items-center justify-center p-3 bg-blue-50 text-blue-800 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-sm font-medium">Twitter</span>
                    </a>
                    
                    
                      <a href="#" className="flex items-center justify-center p-3 bg-blue-50 text-blue-800 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    
                    
                      <a href="#" className="flex items-center justify-center p-3 bg-red-50 text-red-800 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                    
                  </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="mt-100">
              <Footer/>
            </div>
        </section>
       </div>
    )
    }