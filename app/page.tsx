import Image from "next/image";
import Link from "next/link";
import { BookOpen,  Users, Globe, Award, Star, Shield, Quote, Clock, Calendar, } from "lucide-react"
import CourseCards from './component/CourseCards';
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen font-sans">
      <div >
         <Navbar />
       
      </div>
      <div className="ml-15 mt-2 flex justify-between " >
        <div className="space-y-4 mt-35 [animation:fadeInUp_1.1s_ease-out_forwards]">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight w-150">Transform Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">World-Class Tech Skills </span></div>
          <p className="text-lg text-gray-600 font-bold relative bottom-2">Spraditech Digital Solutions equips individuals worldwide with<br/> cutting-edge, industry-relevant tech skills through<br/> exceptional training, mentorship, and career support.</p>
          <div className="flex justify-around mt-5 ml-13">
          <span>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto  mr-35">
            <Users className=" w-6 h-6 text-blue-800"/>
            </div>
            <h1 className="relative right-3 text-2xl font-bold">1000+</h1>
            <p className="relative right-7 text-gray-600">Students Trained</p>
          </span>

          <span>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto  mr-35">
            <Award className="w-6 h-6 text-green-600"/>
            </div>
            <h1 className="relative right-1 text-2xl font-bold">95%</h1>
            <p className="relative right-7 text-gray-600">Job Placement</p>
          </span>

          <span>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto  mr-35">
            <Globe className="w-6 h-6 text-purple-600"/>
            </div>
            <h1 className=" text-2xl font-bold">70+</h1>
            <p className="relative right-7 text-gray-600">Tech Courses</p>
          </span>
          </div>
          <div className="flex  mt-9 gap-4">
            <button className="w-55 h-10 bg-blue-900 rounded-lg text-white text-lg ">Start Your Journey</button>
            <button className="w-55 h-10 border-2 border-blue-800 rounded-lg text-blue-900 text-lg  ">View Courses</button>
          </div>
        </div>
        <div className="relative animate-slide-in-left mt-32 [animation:fadeInUp_1.1s_ease-out_forwards]">
          <div className="w-150 h-80 bg-gray-600 relative right-25 top-35 rounded-2xl transform rotate-6 opacity-20"></div>
          <div className="w-148 h-80 bg-white relative bottom-45 right-24 rounded-2xl shadow-2xl p-8 ">
            <span className="flex  ">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center ">
           <BookOpen className="text-white w-8 h-8 " />
            </div>
              <div className="pl-3"><h3 className="text-xl font-bold text-gray-900">Spraditech Digital Solutions</h3> <p className="text-gray-600 text-1xl">Lagos, Nigeria</p></div>
              
            </span>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="bg-blue-50 rounded-lg p-4 text-center text-2xl font-bold text-blue-800">Data Analytics <br/><p className="text-sm text-blue-600">6 Months</p></div>
              <div className="bg-green-50 rounded-lg p-4 text-center text-2xl font-bold text-green-800">Software Eng. <br/><p className="text-sm text-green-600">12 Months</p></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="bg-purple-50 rounded-lg p-4 text-center text-2xl font-bold text-purple-800">Cybersecurity <br/><p className="text-sm text-purple-600">8 Months</p></div>
              <div className="bg-orange-50 rounded-lg p-4 text-center text-2xl font-bold text-orange-800">Ai Engineering <br/><p className="text-sm text-orange-600">10 Months</p></div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-gradient-to-br from-slate-100 to-gray-100 min-h-700 font-sans">
          <span className="text-center relative top-15">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Start your tech journey with our most popular courses, available both in-person <br/>and online.</p>
          </span>
          <CourseCards >
          </CourseCards>
          

        </div>
        <div className="py-16 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Trusted by Students & Employers Worldwide</h2>
          <p className="text-xl text-gray-600  mx-auto leading-relaxed text-center">Our commitment to excellence has earned us recognition as Nigeria's leading <br/><span> tech training institution.</span></p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
            <div className="text-center p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-800 rounded-xl flex items-center justify-centern mx-auto mb-3 ">
              <Award className="w-8 h-8 ml-4 "/>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Industry Certified</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Internationally recognized certifications</p>
            </div>

            <div className="text-center p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-centern mx-auto mb-3">
              <Users className="w-8 h-8 ml-4 "/>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">1000+ Graduates</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Successfully trained professionals</p>
            </div>

            <div className="text-center p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-800 rounded-xl flex items-center justify-centern mx-auto mb-3">
              <Globe className="w-8 h-8 ml-4 "/>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Global Recognition</h3>
              <p className="text-sm text-gray-600">Graduates working worldwide</p>
            </div>

            <div className="text-center p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-centern mx-auto mb-3">
              <Shield className="w-8 h-8 ml-4 "/>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Quality Assured</h3>
              <p className="text-sm text-gray-600">Rigorous curriculum standards</p>
            </div>

            <div className="text-center p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-centern mx-auto mb-3">
              <Shield className="w-8 h-8 ml-4 "/>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">95% Job Placement</h3>
              <p className="text-sm text-gray-600">Proven career success <br/><span>rates</span></p>
            </div>

            <div className="text-center p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 text-orange-800 rounded-xl flex items-center justify-centern mx-auto mb-3">
              <Shield className="w-8 h-8 ml-4 "/>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">4.9/5 Rating</h3>
              <p className="text-sm text-gray-600">Excellent student satisfaction</p>
            </div>
          </div>

          <div>
            <p className="mt-16 text-center text-gray-600 mb-8">Our graduates work at leading companies including:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mt-6">
              <h1 className="text-2xl font-bold text-gray-400">Flutterwave</h1>
              <h1 className="text-2xl font-bold text-gray-400">Paystack</h1>
              <h1 className="text-2xl font-bold text-gray-400">Andela</h1>
              <h1 className="text-2xl font-bold text-gray-400">MTN Nigeria</h1>
              <h1 className="text-2xl font-bold text-gray-400">Jumia</h1>
              <h1 className="text-2xl font-bold text-gray-400">Microsoft</h1>
            </div>
          </div>

          <div>
            <div className="text-center mt-26">
               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Life & Learning Environment</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Take a look inside our modern facilities, vibrant classrooms, and the amazing learning community at Spraditech Digital Solutions.</p>
              </div>
            <div className="flex flex-wrap justify-center gap-4 mt-16">
            <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-blue-800 text-white shadow-lg">All Photos (9)</button>
            <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200">Classroom (6)</button>
            <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200">Facilities (2)</button>
            <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200">Events (1)</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-15">
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                 <Image
                    src="/pho1.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                   className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"/>
                  </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho2.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho3.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho2.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho1.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho4.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho1.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho3.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/pho2.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
                
            </div>
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Graduates</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Hear from our alumni who have transformed their careers and are now working at top tech companies across Nigeria and globally.</p>
                </div>
                <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white mb-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                      <Quote className="w-12 h-12 text-blue-300"/>
                    </div>
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-center mb-8">"Spraditech transformed my career completely. The Data Analytics program was comprehensive and practical. Within 3 months of graduation, I landed my dream job at Flutterwave. The instructors are world-class!"</blockquote>
                    <div className="flex items-center justify-center space-x-4">
                     <Image
                    src="/pho3.jpg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-full object-cover w-16 h-16"
                  />
                  <div className="text-center">
                    <div className="font-bold text-lg">Adebayo Ogundimu</div>
                    <div className="text-blue-200">Data Analyst at Flutterwave</div>
                    <div className="text-blue-300 text-sm">Data Analytics Graduate • 2024</div>
                  </div>
                    </div>
                    <div className="flex justify-center mt-6">
                      <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                      <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                      <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                      <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                      <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4 ">
                      <Image
                    src="/pho3.jpg" 
                    width={70}        
                    height={80}       
                    alt="Picture of the author"
                     className="rounded-full object-cover "
                  />
                    <div> 
                        <div className="font-semibold text-gray-900">Adebayo Ogundimu</div>
                        <div className="text-sm text-gray-600">Data Analytics</div>
                    </div>
                    </div>
                    <div className="flex mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">Spraditech transformed my career completely. The Data Analytics program was comprehensive and practical. Within 3</p>
                    <div className="mt-4 text-xs text-gray-500">Data Analyst at Flutterwave • 2024</div>
                  </div>
                  <div className="bg-white  border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                    src="/pho4.jpg" 
                    width={70}        
                    height={90}       
                    alt="Picture of the author"
                     className="rounded-full object-cover "
                  />
                    <div> 
                        <div className="font-semibold text-gray-900">Ibrahim Musa</div>
                        <div className="text-sm text-gray-600">Cybersecurity</div>
                    </div>
                    </div>
                    <div className="flex mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">The hands-on approach to cybersecurity training at Spraditech is unmatched. Real-world scenarios, ethical hacking labs, and</p>
                    <div className="mt-4 text-xs text-gray-500">Data Analyst at Flutterwave • 2024</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                    src="/pho1.jpg" 
                    width={70}        
                    height={90}       
                    alt="Picture of the author"
                     className="rounded-full object-cover "
                  />
                    <div> 
                        <div className="font-semibold text-gray-900">Chioma Nwankwo</div>
                        <div className="text-sm text-gray-600">Software Engineering</div>
                    </div>
                    </div>
                    <div className="flex mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">The Software Engineering bootcamp exceeded my expectations. From zero coding experience to building full-stack applications</p>
                    <div className="mt-4 text-xs text-gray-500">Data Analyst at Flutterwave • 2024</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                     <div className="flex items-center space-x-4 mb-4">
                      <Image
                    src="/pho2.jpg" 
                    width={70}        
                    height={90}       
                    alt="Picture of the author"
                     className="rounded-full object-cover "
                  />
                    <div> 
                        <div className="font-semibold text-gray-900">Fatima Abdullahi</div>
                        <div className="text-sm text-gray-600">UI/UX Design</div>
                    </div>
                    </div>
                    <div className="flex mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">Spraditech's UI/UX program taught me to think like a user while designing beautiful interfaces. The portfolio projects I built</p>
                    <div className="mt-4 text-xs text-gray-500">UI/UX Designer at Andela • 2024</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                    src="/pho5.jpg" 
                    width={70}        
                    height={90}       
                    alt="Picture of the author"
                     className="rounded-full object-cover "
                  />
                    <div> 
                        <div className="font-semibold text-gray-900">Olumide Adeyemi</div>
                        <div className="text-sm text-gray-600">Digital Marketing</div>
                    </div>
                    </div>
                    <div className="flex mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">The digital marketing course covered everything from SEO to social media advertising. The practical campaigns we ran</p>
                    <div className="mt-4 text-xs text-gray-500">Digital Marketing Manager at Jumia • 2023</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                    src="/pho4.jpg" 
                    width={70}        
                    height={90}       
                    alt="Picture of the author"
                     className="rounded-full object-cover "
                  />
                    <div> 
                        <div className="font-semibold text-gray-900"> Grace Okoro</div>
                        <div className="text-sm text-gray-600">AI Engineering</div>
                    </div>
                    </div>
                    <div className="flex mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                      <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">The AI Engineering program at Spraditech is cutting-edge. Working on machine learning projects and neural networks prepared me f</p>
                    <div className="mt-4 text-xs text-gray-500">AI Engineer at Microsoft Nigeria • 2024</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-800 mb-2">1000+</div>
                    <div className="text-gray-600">Graduates</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-600">Job Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-gray-600">Partner Companies</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-20 bg-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights & Industry News</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Stay updated with the latest trends in tech, career advice, and insights from our expert instructors and successful graduates.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">The Future of Data Analytics in</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">Explore how data analytics is revolutionizing bankin</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4"/>
                            <span>Dr. Adebayo Ogundimu</span>
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
                <div className="m-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Recent Posts</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">AI Engineering</span>
                        <span className="text-xs text-gray-500">8 min read</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">AI and Machine Learning: Opportunities in the Nigerian</h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Discover the growing demand for AI professionals in Nigeria and how our AI</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Prof. Ibrahim Musa</span>
                          <span>12/8/2024</span>
                        </div>
                    </article>
                    <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">UI/UX Design</span>
                        <span className="text-xs text-gray-500">4 min read</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">UI/UX Design Trends Shaping African Digital Products</h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Learn about the latest design trends that are influencing user experience across African</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Grace Okoro</span>
                          <span>12/5/2024</span>
                        </div>
                    </article>
                    <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Digital Marketing</span>
                        <span className="text-xs text-gray-500">5 min read</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">Digital Marketing Strategies for Nigerian Startups</h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">Effective digital marketing tactics that Nigerian startups are using to scale their businesses</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Olumide Adeyemi</span>
                          <span>12/3/2024</span>
                        </div>
                    </article>
                  </div>
                </div>
                <div className="text-center">
                  <button className=" w-60 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring:ring-ring disabled:pointer-events-none disabled:opacity-50 pointer-events-none size-4 bg-background shadow-sm h-10 rounded-md border-2 border-blue-800 text-blue-800  hover:bg-blue-800 hover:text-white px-8 py-3 bg-white">View All Blog Posts</button>
                </div>
              </div>
            </section>
            <div>
              <Footer/>
            </div>
          </div>
        </div>
    </div>
  );
}
