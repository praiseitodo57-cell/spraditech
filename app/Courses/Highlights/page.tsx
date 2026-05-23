'use client'
import Navbar from "@/app/component/NavBar";
import {
  Clock4, Users, MapPin, TrendingUp, DollarSign, CircleCheckBig,
  Target, Calendar, FolderOpen, Briefcase, Video, Award, Shield,
  BookOpen, GraduationCap, CreditCard, UserPlus, LogIn, ChevronRight,
  X
} from "lucide-react"
import Footer from "@/app/component/Footer";
import { useState } from "react";
import { useFormData, FormProvider } from '@/app/component/FormContext'
import Step1 from '@/app/component/forms/Step1'
import Step2 from '@/app/component/forms/Step2'
import Step3 from '@/app/component/forms/Step3'
import Step4 from '@/app/component/forms/Step4'
import Step5 from "@/app/component/forms/Step5";
import Payment from "@/app/component/forms/Payment";

export default function Highlights() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <FormProvider>
        <MainContent open={open} setOpen={setOpen} />
      </FormProvider>
    </div>
  );
}

function MainContent({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { step, setStep } = useFormData();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Enrollment Modal ── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">

            {/* Modal header */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 sm:px-6 py-4 text-white flex-shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-2xl font-bold">Course Enrollment</h2>
                  <p className="text-blue-100 text-sm sm:text-base">Enrolling in Data Analytics</p>
                  <div className="mt-2 text-xs text-blue-200">
                    <strong>Test Cards for Demo:</strong><br />
                    • Success: 4084084084084081<br />
                    • Decline: 4084084084084081 (use wrong CVV)
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Step indicators — horizontal scroll on small screens */}
            <div className="px-3 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 flex-shrink-0 overflow-x-auto">
              <div className="flex items-center min-w-max gap-1">
                {[
                  { icon: Users, label: "User Type" },
                  { icon: Users, label: "Personal" },
                  { icon: GraduationCap, label: "Education" },
                  { icon: Briefcase, label: "Professional" },
                  { icon: BookOpen, label: "Course" },
                  { icon: CreditCard, label: "Payment" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${i === 0 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs font-medium whitespace-nowrap ${i === 0 ? 'text-blue-800' : 'text-gray-600'}`}>{label}</span>
                    </div>
                    {i < 5 && <div className="w-4 sm:w-6 h-px bg-gray-300 mx-2" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Welcome to Spraditech</h3>
                    <p className="text-sm sm:text-base text-gray-600">Are you a new or existing student?</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <button
                      onClick={() => setStep(2)}
                      className="p-6 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 border-blue-500 bg-blue-50 shadow-md"
                    >
                      <div className="flex flex-col items-center text-center">
                        <UserPlus className="w-12 h-12 text-blue-600 mb-3" />
                        <h4 className="text-lg font-bold text-gray-900 mb-1">New Student</h4>
                        <p className="text-sm text-gray-600 mb-3">Create a new account and complete your enrollment</p>
                        <span className="text-xs text-blue-600 font-medium">Complete all enrollment steps</span>
                      </div>
                    </button>

                    <button className="p-6 border-2 rounded-xl cursor-pointer transition-all hover:scale-105 border-gray-200 bg-gray-50 shadow-md">
                      <div className="flex flex-col items-center text-center">
                        <LogIn className="w-12 h-12 text-green-600 mb-3" />
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Existing Student</h4>
                        <p className="text-sm text-gray-600 mb-3">Sign in to your account for quick enrollment</p>
                        <span className="text-xs text-green-600 font-medium">Skip personal information steps</span>
                      </div>
                    </button>
                  </div>
                  <p className="text-center text-xs text-gray-500">You selected: New Student — Complete all enrollment steps</p>
                </div>
              )}

              {step > 1 && (
                <>
                  {step === 2 && <Step2 />}
                  {step === 3 && <Step3 />}
                  {step === 4 && <Step4 />}
                  {step === 5 && <Step5 />}
                  {step === 6 && <Payment />}
                </>
              )}
            </div>

            {/* Modal footer */}
            <div className="px-3 sm:px-6 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0 flex items-center justify-between">
              <span className="text-xs text-gray-500">Step {step} of 6</span>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero Section ── */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Left: main info */}
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                  <Video className="w-3.5 h-3.5" /> Pre-Recorded Videos
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Live Sessions
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Lagos Campus
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Data Analytics</h1>
              <p className="text-base sm:text-xl text-blue-100 mt-4 leading-relaxed">
                Master data analysis, visualization, and interpretation to drive business decisions.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: Clock4, label: "Duration", value: "6 Months" },
                  { icon: TrendingUp, label: "Level", value: "Beginner to Advanced" },
                  { icon: Award, label: "Job Placement", value: "96%" },
                  { icon: DollarSign, label: "Avg. Salary", value: "₦2.5M+" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center">
                    <Icon className="w-7 h-7 mx-auto mb-1.5 text-blue-300" />
                    <p className="text-xs text-blue-200">{label}</p>
                    <p className="font-bold text-sm sm:text-base text-white leading-tight mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-blue-50 transition-colors text-sm text-center"
                >
                  Enroll Now — Get Started
                </button>
                <button className="px-8 py-3 border border-blue-300 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-sm text-center">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right: highlights card */}
            <div className="w-full lg:w-80 xl:w-96 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Course Highlights</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Industry-relevant curriculum",
                  "Expert instructors from top companies",
                  "Hands-on projects and portfolio",
                  "Career support and job placement",
                  "Industry certifications included",
                  "Flexible payment options",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white text-sm">
                    <CircleCheckBig className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="text-base font-semibold text-white mb-3">Pricing by Format</h4>
              <div className="space-y-3 mb-4">
                {[
                  { label: "In-Person (Lagos)", price: "₦450,000", sub: "6 Months" },
                  { label: "Live Online", price: "₦380,000", sub: "6 Months" },
                  { label: "Self-Paced", price: "₦300,000", sub: "120 Hours" },
                ].map(({ label, price, sub }) => (
                  <div key={label} className="p-3 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{label}</span>
                      <span className="text-white font-bold text-sm">{price}</span>
                    </div>
                    <div className="text-blue-200 text-xs mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white/10 rounded-lg">
                <h5 className="text-white font-semibold text-sm mb-2">Flexible Payment Plans</h5>
                <div className="space-y-1.5 text-xs text-blue-100">
                  <div className="flex justify-between gap-2">
                    <span>Full Payment:</span>
                    <span className="font-semibold text-white">10% Discount</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>60% Initial + Balance:</span>
                    <span className="text-right">Pay 60% now, 40% over duration</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Monthly Installments:</span>
                    <span className="text-right">Equal payments + 1 extra month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Course Overview ── */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Transform raw data into actionable insights with our comprehensive Data Analytics program. Learn to collect, process, analyze, and visualize data using industry-standard tools and techniques.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Master statistical analysis and data interpretation",
                  "Create compelling data visualizations using Tableau and Power BI",
                  "Develop skills in data cleaning and preprocessing",
                  "Learn advanced Excel, SQL, Python, and R programming",
                  "Understand machine learning fundamentals for predictive analytics",
                  "Build professional data analysis portfolios",
                ].map((obj) => (
                  <div key={obj} className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-800 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">{obj}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Excel", "SQL", "Python", "R", "Tableau", "Power BI", "Google Analytics", "SPSS"].map((tool) => (
                  <span key={tool} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{tool}</span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Duration", value: "6 Months" },
                    { label: "Level", value: "Beginner to Advanced" },
                    { label: "Job Placement", value: "96%", valueClass: "text-green-600 font-semibold" },
                  ].map(({ label, value, valueClass }) => (
                    <div key={label} className="flex justify-between gap-2">
                      <span className="text-gray-600">{label}:</span>
                      <span className={`font-semibold text-right ${valueClass ?? "text-gray-900"}`}>{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-600">Format:</span>
                    <div className="text-right text-gray-900">
                      <div>Pre-recorded</div>
                      <div>Live Online</div>
                      <div>In-person (Lagos)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Prerequisites</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Basic computer skills and mathematical aptitude. No prior programming experience required.</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Certification</h3>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-800 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">Spraditech Data Analytics Professional Certificate + Industry certifications from Microsoft and Tableau</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Modules */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Detailed Curriculum</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Module 1: Data Analytics Fundamentals", weeks: "4 Weeks",
                    topics: ["Introduction to Data Analytics", "Statistical Concepts and Probability", "Types of Data and Data Sources", "Data Collection Methods"],
                  },
                  {
                    title: "Module 2: Excel for Data Analysis", weeks: "3 Weeks",
                    topics: ["Advanced Excel Functions", "Data Validation and Cleaning", "Pivot Tables and Charts", "Excel Macros and VBA Basics"],
                  },
                  {
                    title: "Module 3: SQL and Database Management", weeks: "4 Weeks",
                    topics: ["Database Design Principles", "Data Aggregation and Grouping", "SQL Queries and Joins", "Stored Procedures and Functions"],
                  },
                  {
                    title: "Module 4: Python for Data Analysis", weeks: "6 Weeks",
                    topics: ["Python Programming Fundamentals", "Data Manipulation and Cleaning", "NumPy and Pandas Libraries", "Statistical Analysis with SciPy"],
                  },
                  {
                    title: "Module 5: Data Visualization", weeks: "4 Weeks",
                    topics: ["Tableau Desktop and Public", "Python Visualization (Matplotlib, Seaborn)", "Power BI Development", "Dashboard Design Principles"],
                  },
                  {
                    title: "Module 6: Machine Learning Basics", weeks: "3 Weeks",
                    topics: ["Supervised vs Unsupervised Learning", "Model Evaluation and Validation", "Regression and Classification", "Predictive Analytics Applications"],
                  },
                  {
                    title: "Module 7: Capstone Project", weeks: "2 Weeks",
                    topics: ["Real-world Data Analysis Project", "Presentation Skills", "Portfolio Development", "Industry Best Practices"],
                  },
                ].map(({ title, weeks, topics }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{title}</h3>
                      <div className="flex items-center gap-1.5 text-blue-800 flex-shrink-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{weeks}</span>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-800 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <FolderOpen className="w-5 h-5 text-blue-800" />
                    <h3 className="text-base font-bold text-gray-900">Course Categories</h3>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Web & Mobile Development", count: 4 },
                      { name: "Data & AI", count: 4 },
                      { name: "Software Engineering", count: 2 },
                      { name: "Cloud & DevOps", count: 1 },
                      { name: "Cybersecurity", count: 2 },
                      { name: "Digital Literacy", count: 2 },
                    ].map(({ name, count }) => (
                      <div key={name} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                        <span className="text-gray-700 text-xs font-medium">{name}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-2xl p-5 text-center">
                  <h3 className="text-base font-bold mb-1">Need Guidance?</h3>
                  <p className="text-blue-100 text-xs mb-4">Talk to our course advisors</p>
                  <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors w-full">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career Opportunities ── */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Career Opportunities</h2>
            <p className="text-base sm:text-xl text-gray-600">Graduates from this program typically pursue these high-demand roles</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {[
              "Data Analyst",
              "Business Intelligence Analyst",
              "Marketing Analyst",
              "Financial Analyst",
              "Operations Analyst",
              "Data Scientist (Junior)",
            ].map((role) => (
              <div key={role} className="bg-white rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <Briefcase className="w-8 h-8 sm:w-12 sm:h-12 text-blue-800 mx-auto mb-3" />
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{role}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Average Salary Range</h3>
            <div className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">₦2,500,000 – ₦4,500,000 annually</div>
            <p className="text-gray-600 text-sm sm:text-base">Based on our graduate placement data in Nigeria and internationally</p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-indigo-900 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-8">
            Join thousands of successful graduates who have transformed their careers with Spraditech Digital Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-blue-50 transition-colors text-sm"
            >
              Enroll Now — Get Started
            </button>
            <button className="px-8 py-3 border border-blue-300 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-sm">
              Schedule Free Consultation
            </button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            💳 Flexible payment plans available &nbsp;•&nbsp; 🎓 Job placement guarantee &nbsp;•&nbsp; 📞 Free career counseling
          </p>
        </div>
      </section>

      {/* ── Related Courses ── */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Related Courses You Might Like</h2>
            <p className="text-base sm:text-xl text-gray-600">Explore other courses that complement your learning journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Digital Literacy",
                desc: "Gain essential digital skills to confidently navigate the modern digital world for work and everyday life.",
                level: "Beginner", duration: "3 Months", price: "Free",
              },
              {
                title: "Software Engineering",
                desc: "Build robust applications with modern programming languages and frameworks.",
                level: "Beginner to Advanced", duration: "12 Months", price: "₦600,000",
              },
              {
                title: "AI Engineering",
                desc: "Master artificial intelligence and machine learning to build intelligent systems.",
                level: "Intermediate to Advanced", duration: "10 Months", price: "₦450,000",
              },
            ].map(({ title, desc, level, duration, price }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{desc}</p>
                <div className="space-y-1.5 mb-4 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Level:</span><span className="font-medium text-gray-900 text-right">{level}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Duration:</span><span className="font-medium text-gray-900">{duration}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Starting from:</span><span className="font-bold text-blue-800">{price}</span></div>
                </div>
                <a href="#" className="block w-full bg-blue-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                  View Course Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}