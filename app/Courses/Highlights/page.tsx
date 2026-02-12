'use client'
import Navbar from "@/app/component/NavBar";
import {Clock4, Users, MapPin, TrendingUp, DollarSign, CircleCheckBig, Target, Calendar , FolderOpen , Briefcase , Video, Megaphone, Wifi, Bitcoin, Cog, Lock, Film, Award, Shield, BookOpen, GraduationCap, CreditCard, UserPlus, LogIn, ChevronRight, X, Mail } from "lucide-react"
import Footer from "@/app/component/Footer";
import { useState } from "react";
import { useFormData, FormProvider } from '@/app/component/FormContext'
import Step1 from '@/app/component/forms/Step1'
import Step2 from '@/app/component/forms/Step2'
import Step3 from '@/app/component/forms/Step3'
import Step4 from '@/app/component/forms/Step4'
import Step5 from "@/app/component/forms/Step5";
import Payment from "@/app/component/forms/Payment";
import { useUI } from '@/app/component/UIContext'
export default  function Highlights() {
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      
      <FormProvider>
        <MainContent open={open} setOpen={setOpen} />
      </FormProvider>
      
    </div>
  );
}

// Separate component that uses the form context
function MainContent({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { step, setStep } = useFormData();
 
  
  
  
  
  
  return (
    <div className="">
        <Navbar/>

        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-indigo-800 to-indigo-800  ">
           
           {open &&( <div className="flex min-h-screen items-center justify-center p-1 sm:p-4 absolute top-0 left-50 fixed z-50">
                <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col  ">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 sm:px-6 py-4 text-white flex-shrink-0">
                        <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-lg sm:text-2xl font-bold truncate">Course Enrollment</h2>
                                <p className="text-blue-100 text-sm sm:text-base truncate">Enrolling in Data Analytics</p>
                                <div className="mt-2 text-xs text-blue-200">
                                    <strong>Test Cards for Demo:</strong>
                                    <br />
                                    • Success: 4084084084084081
                                    <br />
                                    • Decline: 4084084084084081 (use wrong CVV)
                                </div>
                            </div>
                            
                            <button onClick={()=>setOpen(false)} className="w-10 h-10 sm:w-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0 ml-2">
                            <X className="w-4 h-4 sm:w-5 sm:h-5"/>
                            </button>
                            
                        </div>
                    </div>
                    <div className="px-3 sm:px-6 py-3 bg-gray-50 border border-gray-300 flex-shrink-0">
                        <div className="flex items-center justify-between overflow-x-auto pb-1">
                            <div className="flex items-center flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors bg-blue-800 text-white">
                                    <Users className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-medium text-blue-800">User Type</div>
                                </div>
                                <div className="w-4 sm:w-8 h-0.5 mx-2 bg-gray-200"></div>
                            </div>

                            <div className="flex items-center flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 text-gray-600 ">
                                    <Users className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-medium text-gray-800">Personal</div>
                                </div>
                                <div className="w-4 sm:w-8 h-0.5 mx-2 bg-gray-200"></div>
                            </div>

                            <div className="flex items-center flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 text-gray-600">
                                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-medium text-gray-800">Education</div>
                                </div>
                                <div className="w-4 sm:w-8 h-0.5 mx-2 bg-gray-200"></div>
                            </div>

                            <div className="flex items-center flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 text-gray-600">
                                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-medium text-gray-800">Professional</div>
                                </div>
                                <div className="w-4 sm:w-8 h-0.5 mx-2 bg-gray-200"></div>
                            </div>

                            <div className="flex items-center flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 text-gray-600">
                                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-medium text-gray-800">Course</div>
                                </div>
                                <div className="w-4 sm:w-8 h-0.5 mx-2 bg-gray-200"></div>
                            </div>

                            <div className="flex items-center flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 text-gray-600">
                                    <CreditCard className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </div>
                                <div className="ml-2">
                                    <div className="text-xs font-medium text-gray-800">Payment & Review</div>
                                </div>
                                <div className="w-4 sm:w-8 h-0.5 mx-2 bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 sm:px-6 py-4 flex-1 overflow-y-auto">
                       {step === 1 && ( <div className="space-y-6 sm:space-y-8">
                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Welcome to Spraditech</h3>
                                <p className="text-sm sm:text-base text-gray-600">Are you a new or existing student?</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                                <button  onClick={() => setStep(2)} className="p-6 sm:p-8 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 border-blue-500 bg-blue-50 shadow-lg">
                                    <div className="flex flex-col items-center text-center">
                                        <UserPlus className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mb-4"/>
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">New Student</h4>
                                        <p className="text-sm sm:text-base text-gray-600 mb-4">Create a new account and complete your enrollment</p>
                                        <div className="text-xs sm:text-sm text-blue-600 font-medium">Complete all enrollment steps</div>
                                    </div>
                                </button>

                                <button className="p-6 sm:p-8 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 border-gray-200 bg-gray-50 shadow-lg">
                                    <div className="flex flex-col items-center text-center">
                                        <LogIn className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mb-4"/>
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Existing student</h4>
                                        <p className="text-sm sm:text-base text-gray-600 mb-4">Sign in to your account for quick enrollment</p>
                                        <div className="text-xs sm:text-sm text-green-600 font-medium">Skip personal information steps</div>
                                    </div>
                                </button>
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-xs sm:text-sm text-gray-500">You selected: New Student - Complete all enrollment steps</p>
                            </div>
                        </div>
                       )}
                        <div className="w-200  px-3 sm:px-6 py-3 bg-gray-50  flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 flex-shrink-0  bg-white sm:bg-gray-50">
                            <div className="flex space-x-2 w-full sm:w-auto justify-between sm:justify-start">
                                <div className="text-center flex items-center justify-center flex-1 sm:hidden">
                                    <div className="text-xs text-gray-600">
                                        1 of 4
                                    </div>
                                </div>
                                <button className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 pointer-events-none shrink-0 text-primary-foreground shadow px-4 py-2 bg-blue-800 hover:bg-blue-700 flex items-center space-x-1 sm:space-x-2 flex-1 sm:flex-none min-w-[80px] sm:min-w-[100px] h-6 sm:h-10">
                                    <span className="text-xs sm:text-sm">Next</span>
                                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </button>
                            </div>
                            <div className="hidden sm:block text-center">
                                <div className="text-sm text-gray-600">Step 1 of 4</div>
                            </div>
                            <div className="hidden sm:flex space-x-2"></div>
                        
                        </div>
                        
                    </div>
                     {step >0 &&(       
                    <div className="px-3 sm:px-6 py-4 flex-1 overflow-y-auto">
                        
                        {step === 1 && <Step1 />}
                        {step === 2 && <Step2 />}
                        {step === 3 && <Step3 />}
                        {step === 4 && <Step4 />}
                        {step === 5 && <Step5 />}
                        {step === 6 && <Payment />}
                       
                    </div>
                     )}
                </div>
            </div>)} 


        <div className="  items-center flex justify-between ">
        <div className="p-10 w-195 ">
          <div className="flex item-center space-x-2 mt-10 ">
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center spac-x-1">
              <Video className="w-4 h-4"/> Pre-Recorded Videos
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center spac-x-1">
            <Users className="w-4 h-4"/> Live Sessions
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center spac-x-1">
            <MapPin className="w-4 h-4"/> Lagos Campus
          </div>
            </div>

            <div className="">
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Data Analytics</h2>
            <p className="text-2xl text-blue-100 mt-5 leading-relaxed">Master data analysis, visualization, and interpretation to drive business decisions.</p>
             </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                <div className="text-center">
                    <Clock4  className="w-8 h-8 mx-auto mb-2 text-blue-300"/>
                    <p className="text-sm text-blue-200">Duration</p>
                    <p className="font-bold text-xl text-white">6 Months</p>
                </div>

                <div className="text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-300"/>
                    <p className="text-sm text-blue-200">Level</p>
                    <p className="font-semibold text-xl text-white">Beginner to Advanced</p>
                </div>

                <div className="text-center">
                    <Award className="w-8 h-8 mx-auto mb-2 text-blue-300"/>
                    <p className="text-sm text-blue-200">Job Placement</p>
                    <p className="font-semibold text-xl text-white">96%</p>
                </div>

                <div className="text-center">
                    <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-300"/>
                    <p className="text-sm text-blue-200">Job Placement</p>
                    <p className="font-semibold text-xl text-white">96%</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
                
                <button onClick={()=>setOpen(true)} className="inline-flex items-center justify-center gap-2
                 whitespace-nowrap text-sm font-medium transition-colors focus
                 -visible:outline-none focus-visible:ring-1 focus-visible:ring
                 -ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded
                 -md bg-white text-blue-800 hover:bg-blue-50 px-8 py-3">Enroll Now - Get Started</button>
                 
                <button className="inline-flex items-center justify-center gap-2
                whitespace-nowrap text-sm font-medium transition-colors focus-
                visible:ouline-none focus-visible:ring-1 focus-visible:ring-ring
                 disabled:pointer-events-none disabled:opacity-50 bg-background 
                 shadow-sm hover:text-accent-foreground h-10 rounded-md border-
                 blue-300 text-white hover:bg-blue-700 px-8 py-3 bg-white">Download Brochure</button>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-40">
                <h3 className="text-2xl font-bold mb-6 text-white">Course Highlights</h3>
                <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white"><CircleCheckBig className="w-5 h-5 text-green-400 mr-3"/> Industry-relevant curriculum</div>
                <div className="flex items-center space-x-3 text-white"><CircleCheckBig  className="w-5 h-5 text-green-400 mr-3"/> Expert instructors from top companies</div>
                <div className="flex items-center space-x-3 text-white"><CircleCheckBig  className="w-5 h-5 text-green-400 mr-3"/> Hands-on projects and portfolio</div>
                <div className="flex items-center space-x-3 text-white"><CircleCheckBig  className="w-5 h-5 text-green-400 mr-3"/> Career support and job placement</div>
                <div className="flex items-center space-x-3 text-white"><CircleCheckBig  className="w-5 h-5 text-green-400 mr-3"/> Industry certifications included</div>
                <div className="flex items-center space-x-3 text-white"><CircleCheckBig  className="w-5 h-5 text-green-400 mr-3"/> Flexible payment options</div>
                </div>

             <div className="mt-6 space-y-4">
                <h4 className="text-lg font-semibold text-white">Pricing by Format</h4>
                <div className="p-4 bg-white/10 rounded-lg">
                   <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">In-Person (Lagos)</span>
                    <span className="text-lg font-bold text-white">₦450,000</span>
                    </div>
                    <div className="text-sm text-blue-200">6 Months</div>
                </div>

                <div className="p-4 bg-white/10 rounded-lg">
                   <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">Live Online</span>
                    <span className="text-lg font-bold text-white">₦380,000</span>
                    </div>
                    <div className="text-sm text-blue-200">6 Months</div>
                </div>

                <div className="p-4 bg-white/10 rounded-lg">
                   <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">Self-Paced</span>
                    <span className="text-lg font-bold text-white">₦300,000</span>
                    </div>
                    <div className="text-sm text-blue-200">120 Hours</div>
                </div>
            </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">Flexible Payment Plans</h3>
                    <div className="spacy-y-3 text-white">
                    <div className="flex justify-between text-sm">
                        <span>Full Payment:</span>
                        <span className="font-semibold">10% Discount</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="w-40">60% Initial + Balance:</span>
                        <span className="text-sm w-80 relative left-4">Pay 60% now, 40% spread over course duration</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span>Monthly Installments:</span>
                        <span>Equal payments + 1 extra month</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
      
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Transform raw data into actionable insights with our comprehensive Data Analytics program. Learn to collect, process, analyze, and visualize data using industry-standard tools and techniques.</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
             <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0"/>
               <span className="text-gray-600 text-lg">Master statistical analysis and data interpretation</span>
             </div>
             <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0"/>
               <span className="text-gray-600 text-lg">Create compelling data visualizations using Tableau and Power BI</span>
             </div>
             <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0"/>
               <span className="text-gray-600 text-lg">Develop skills in data cleaning and preprocessing</span>
             </div>
             <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0"/>
               <span className="text-gray-600 text-lg">Learn advanced Excel, SQL, Python, and R programming</span>
             </div>
             <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0"/>
               <span className="text-gray-600 text-lg">Understand machine learning fundamentals for predictive analytics</span>
             </div>
             <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0"/>
               <span className="text-gray-600 text-lg">Build professional data analysis portfolios</span>
             </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Excel</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">R</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Tableau</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Power BI</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Google Analytics</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SPSS</span>
            </div>
        </div>
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 md-4">Course Details</h3>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">6 Months</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-semibold">Beginner to Advanced</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Format:</span>
                        <div className="text-right">
                            <div className="text-sm">Pre-recorded</div>
                            <div className="text-sm">Live Online</div>
                            <div className="text-sm">In-person (Lagos)</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Job Placement:</span>
                        <span className="font-semibold text-green-600">96%</span>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Basic computer skills and mathematical aptitude. No prior programming experience required.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certification</h3>
                <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-800 mt-1"/>
                <p className="text-gray-600 text-sm leading-relaxed">Spraditech Data Analytics Professional Certificate + Industry certifications from Microsoft and Tableau</p>
                </div>
            </div>
        </div>
      </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px4 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Curriculum</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 1: Data Analytics Fundamentals</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">4 Week</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Introduction to Data Analytics</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Statistical Concepts and Probability</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Types of Data and Data Sources</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Data Collection Methods</span>
                                   </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 2: Excel for Data Analysis</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">3 Week</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Advanced Excel Functions</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Data Validation and Cleaning</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Pivot Tables and Charts</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Excel Macros and VBA Basics</span>
                                   </div>
                                </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 3: SQL and Database Management</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">4 Week</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Database Design Principles</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Data Aggregation and Grouping</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">SQL Queries and Joins</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Stored Procedures and Functions</span>
                                   </div>
                                   </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 4: Python for Data Analysis</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">6 Week</span>
                                </div>
                            </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="flex items-center space-x-3">
                                                <BookOpen className="w-4 h-4 text-blue-800"/>
                                                <span className="text-gray-600">Python Programming Fundamentals</span>
                                            </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Data Manipulation and Cleaning</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">NumPy and Pandas Libraries</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Statistical Analysis with SciPy</span>
                                   </div>
                                   </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 5: Data Visualization</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">4 Week</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Tableau Desktop and Public</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Python Visualization (Matplotlib, Seaborn)</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Power BI Development</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Dashboard Design Principles</span>
                                   </div>
                                   </div>
                          </div>
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 6: Machine Learning Basics</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">3 Week</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Supervised vs Unsupervised Learning</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Model Evaluation and Validation</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Regression and Classification</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Predictive Analytics Applications</span>
                                   </div>
                                   </div>
                          </div>
                        <div className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Module 7: Capstone Project</h3>
                                <div className="flex items-center space-x-2 text-blue-800">
                                    <Calendar className="w-4 h-4"/>
                                    <span className="text-sm font-medium">2 Week</span>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Real-world Data Analysis Projec</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Presentation Skills</span>
                                 </div>
                                  <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Portfolio Development</span>
                                  </div>
                                   <div className="flex items-center space-x-3">
                                    <BookOpen className="w-4 h-4 text-blue-800"/>
                                    <span className="text-gray-600">Industry Best Practices</span>
                                   </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="space-y-6 sticky top-24">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                            <div className="flex items-center space-x-2 mb-4">
                                <FolderOpen className="w-5 h-5 text-blue-800"/>
                                <h3 className="text-xl font-bold text-gray-900">Course Categories</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                                    <span className="text-gray-700 font-medium  text-sm">Web & Mobile Development</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center">4</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                                    <span className="text-gray-700 font-medium text-sm"> Data & AI</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center"> 4</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                                    <span className="text-gray-700 font-medium text-sm">Software Engineering</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center"> 2</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                                    <span className="text-gray-700 font-medium text-sm">Cloud & DevOps</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center"> 1</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                                    <span className="text-gray-700 font-medium text-sm">Cybersecurity</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center"> 2</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                                    <span className="text-gray-700 font-medium text-sm">Digital Literacy</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center"> 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-800 to-indigo-800 text-white rounded-2xl p-6 text-center">
                                <h3 className="text-lg font-bold mb-2">Need Guidance?</h3>
                                <p className="text-blue-100 text-sm mb-4">Talk to our course advisors</p>
                                <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors w-full">Get Free Consultation</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-xl text-gray-600">Graduates from this program typically pursue these high-demand roles</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transitoin-shadow">
                    <Briefcase  className="w-12 h-12 text-blue-800 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold text-gray-900">Data Analyst</h3>
                </div>

                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transitoin-shadow">
                    <Briefcase  className="w-12 h-12 text-blue-800 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold text-gray-900">Business Intelligence Analyst</h3>
                </div>

                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transitoin-shadow">
                    <Briefcase  className="w-12 h-12 text-blue-800 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold text-gray-900">Marketing Analyst</h3>
                </div>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transitoin-shadow">
                    <Briefcase  className="w-12 h-12 text-blue-800 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold text-gray-900">Financial Analyst</h3>
                </div>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transitoin-shadow">
                    <Briefcase  className="w-12 h-12 text-blue-800 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold text-gray-900">Operations Analyst</h3>
                </div>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transitoin-shadow">
                    <Briefcase  className="w-12 h-12 text-blue-800 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold text-gray-900">Data Scientist (Junior)</h3>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center w-280 ml-27">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Salary Range</h3>
            <div className="text-3xl font-bold text-blue-800 mb-2">₦2,500,000 - ₦4,500,000 annually</div>
            <p className="text-gray-600 ">Based on our graduate placement data in Nigeria and internationally</p>
        </div>
      </section>

      <section className="py-16 text-white bg-gradient-to-br from-indigo-800 to-indigo-800 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of successful graduates who have transformed their careers with Spraditech Digital Solutions.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-10 rounded-md bg-white text-blue-800 hover:bg-blue-50 px-8 py-3">Enroll Now - Get Started</button>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focuse-visible:ring-ring disable:pointer-events-none disable:opacity-50 bg-background shadow w-50 hover:text-accent-foreground h-10 rounded-md border-blue-300 text-white hover:bg-blue-700 px- py3 w-0 bg-white">Schedule Free Consultation</button>
        </div>
        <div className="mt-8 text-blue-200">
            <p>💳 Flexible payment plans available • 🎓 Job placement guarantee • 📞 Free career counseling</p>
        </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Courses You Might Like</h2>
                <p className="text-xl text-gray-600">Explore other courses that complement your learning journey</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow  boreder-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Literacy</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Gain essential digital skills to confidently navigate the modern digital world for work,</p>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Level:</span>
                            <span className="font-medium text-gray-900">Beginner</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Duration:</span>
                            <span className="font-medium text-gray-900">3 Months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Starting from:</span>
                            <span className="font-bold text-blue-800">Free</span>
                        </div>
                    </div>
                    <a href="#" className="block w-full bg-blue-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">View Course Details</a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow  boreder-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Software Engineering</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Build robust applications with modern programming languages and frameworks.</p>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Level:</span>
                            <span className="font-medium text-gray-900">Beginner to Advanced</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Duration:</span>
                            <span className="font-medium text-gray-900">12 Months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Starting from:</span>
                            <span className="font-bold text-blue-800">₦600,000</span>
                        </div>
                    </div>
                    <a href="#" className="block w-full bg-blue-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">View Course Details</a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow  boreder-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Engineering</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Master artificial intelligence and machine learning to build intelligent systems and</p>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Level:</span>
                            <span className="font-medium text-gray-900">Intermediate to Advanced</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Duration:</span>
                            <span className="font-medium text-gray-900">10 Months</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Starting from:</span>
                            <span className="font-bold text-blue-800">₦450,000</span>
                        </div>
                    </div>
                    <a href="#" className="block w-full bg-blue-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">View Course Details</a>
                </div>
            </div>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
}