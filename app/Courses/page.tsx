'use client';
import { Database, Users, MapPin, Code, Brain, Laptop, Shield, Palette, Cloud, Package, Video, Megaphone, Wifi, Bitcoin, Cog, Lock, Film, BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Navbar from "../component/NavBar";
import Link from "next/link";
import Footer from "../component/Footer";

interface IconData {
icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor?: string;
   size?: string;
   wrapperSize?: string; 
  wrapperPadding?: string; 
}

interface CourseItem {
  title: string;
  description: string;
  level: string;
  format: string;
  format1: string;
  format2: string;
  duration: string;
  duration1: string;
  duration2: string;
  buttons: string[];
  icons: IconData[]; // Array of icon objects with styling

  borderColor: string; 
}
const coursesData: CourseItem[] = [
   {
    title: "Digital Literacy",
    description: "Gain essential digital skills to confidently navigate the modern digital world for work, education, and everyday life.",
    format: "N450,000",
    format1: "N380,000",
    format2: "N300,000",
    level: "Beginner to Advanced",
    duration: "6 Months",
    duration1: "6 Months",
    duration2: "120 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Laptop, color: "text-yellow-800", bgColor: "bg-yellow-100", size:"w-15 h-15", wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600 ", bgColor: "bg-green-100",size:"w-5 h-5",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",size:"w-5 h-5",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size:"w-5 h-5",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-yellow-200"
  },
  {
    title: "Data Analytics",
    description: "Master data analysis, visualization, and interpretation to drive business decisions.",
    format: "N500,000",
    format1: "N420,000",
    format2: "N350,000",
    level: " Advanced",
    duration: "8 Months",
    duration1: "8 Months",
    duration2: "140 Hours",
    buttons: ["Learn More", "Enroll Now"],
     icons: [
      { icon: Database, color: "text-blue-600", bgColor: "bg-blue-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-blue-200"
  },
  {
    title: "Data Science/Machine Learning",
    description: "Dive into predictive analytics and artificial intelligence. Learn to build machine learning models that can forecast trends",
    format: "N400,000",
    format1: "N350,000",
    format2: "N280,000",
    level: "Beginner to Intermediate",
    duration: "6 Months",
    duration1: "6 Months",
    duration2: "120 Hours",
    buttons: ["Learn More", "Enroll Now"],
     icons: [
      { icon: Brain, color: "text-purple-800", bgColor: "bg-purple-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-purple-300"
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Learn to think like a hacker to defend against them. Master network security, vulnerability assessment, and ethical hacking.",
    format: "N350,000",
    format1: "N300,000",
    format2: "N250,000",
    level: "Beginner to Advanced",
    duration: "5 Months",
    duration1: "5 Months",
    duration2: "100 Hours",
    buttons: ["Learn More", "Enroll Now"],
     icons: [
      { icon: Shield, color: "text-red-800", bgColor: "bg-red-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-red-200"
  },
  {
    title: "AI Engineering",
    description: "Develop intelligent systems using machine learning and artificial intelligence.",
    format: "N450,000",
    format1: "N380,000",
    format2: "N300,000",
    level: "Beginner ",
    duration: "6 Months",
    duration1: "6 Months",
    duration2: "120 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Brain, color: "text-purple-800", bgColor: "bg-purple-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-purple-300"
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful, user-centered digital experiences and interfaces.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Palette, color: "text-pink-800", bgColor: "bg-pink-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-pink-200"
  },
  {
    title: "Web Design (Front-End)",
    description: "Learn to create beautiful, responsive, and interactive websites using HTML, CSS, and JavaScript.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Palette, color: "text-cyan-800", bgColor: "bg-cyan-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-cyan-200"
  },
  {
    title: "Full Stack Web Development",
    description: "Become a versatile developer by learning both front-end and back-end technologies to build complete web applications.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Code, color: "text-emerald-800", bgColor: "bg-emerald-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
  
    borderColor: "border-emerald-200"
  },
  {
    title: "Mobile App Development",
    description: "Learn to build cross-platform mobile applications for iOS and Android using frameworks like React Native.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Laptop, color: "text-violet-800", bgColor: "bg-violet-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    
    borderColor: "border-violet-300"
  },
  {
    title: "Backend/Server-side Development",
    description: "Master the server-side of web development by building robust APIs, working with databases, and handling application logic.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Database, color: "text-amber-800", bgColor: "bg-amber-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-amber-200"
  },
  {
    title: "DevOps & Cloud Computing",
    description: "Learn to automate software deployment, scaling, and monitoring using modern DevOps tools and cloud platforms like AWS.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Cloud, color: "text-sky-600", bgColor: "bg-sky-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-sky-200"
  },
  {
    title: "Software Engineering",
    description: "Build robust applications with modern programming languages and frameworks.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Code, color: "text-green-800", bgColor: "bg-green-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-green-200"
  },
  {
    title: "Product Management/Agile Methodologies",
    description: "Learn to lead product development from concept to launch using Agile methodologies and data-driven decision making.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Package, color: "text-indigo-800", bgColor: "bg-indigo-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-indigo-200"
  },
  {
    title: "Video Editing & Content Creation",
    description: "Master professional video editing techniques and learn to create engaging content for YouTube, social media, and commercial projects.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Video, color: "text-amber-800", bgColor: "bg-amber-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-amber-200"
  },
  {
    title: "Digital Marketing",
    description: "Master the complete digital marketing landscape including SEO, social media, email marketing, PPC, and analytics to drive business growth.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Megaphone, color: "text-orange-800", bgColor: "bg-orange-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8"},
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-orange-200"
  },
  {
    title: "Internet of Things (IoT)",
    description: "Learn to design, build, and program connected devices and IoT systems that collect and analyze data from the physical world.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Wifi, color: "text-cyan-800", bgColor: "bg-cyan-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-cyan-200"
  },
  {
    title: "Blockchain & Smart Contracts",
    description: "Master blockchain technology and smart contract development to build decentralized applications on major blockchain platforms.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Bitcoin, color: "text-gray-800", bgColor: "bg-gray-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-gray-300"
  },
  {
    title: "Robotics & Automation",
    description: "Learn to design, build, and program robots and automated systems for manufacturing, logistics, and smart environments.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Cog, color: "text-orange-800", bgColor: "bg-orange-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-orange-200"
  },
  {
    title: "Digital Privacy/Cyber Hygiene",
    description: "Learn essential practices to protect your personal and organizational data from cyber threats in everyday digital activities.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Lock, color: "text-green-800", bgColor: "bg-green-100", wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-green-200"
  },
  {
    title: "Animations & Motion Graphics",
    description: "Bring designs to life with captivating animations and motion graphics for video, web, and interactive media projects.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Film, color: "text-violet-800", bgColor: "bg-violet-300",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600 w-3 h-3", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-violet-200"
  },

  {
    title: "Blockchain & Smart Contracts",
    description: "Master blockchain technology and smart contract development to build decentralized applications on major blockchain platforms.",
    format: "N380,000",
    format1: "N320,000",
    format2: "N260,000",
    level: "Intermediate",
    duration: "4 Months",
    duration1: "4 Months",
    duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Bitcoin, color: "text-gray-800", bgColor: "bg-gray-100",wrapperSize: "w-15 h-15" },
      { icon: Video, color: "text-green-600", bgColor: "bg-green-100",wrapperSize: "w-8 h-8" },
      { icon: Users, color: "text-purple-600", bgColor: "bg-purple-100",wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100",wrapperSize: "w-8 h-8" }
    ],
    borderColor: "border-gray-300"
  },
];





export default function CourseCards() {
    
  return (
    
    <div>
         <Navbar />
        <div className="text-center mt-36 bg-gradient-light">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxe">Choose from our comprehensive range of tech courses designed to prepare you for high-demand careers in the digital economy.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-15 mt-4">
      {coursesData.map((course, index) => (
        <div 
          key={index} 
           className={`bg-white rounded-2xl shadow-md p-6 border-2 ${course.borderColor} hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-3`}
        >
            
          {/* Icons with different styling - FIXED */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.icons.map((iconData, idx) => {
              const Icon = iconData.icon;
              return (
                <div 
                   key={idx} 
                   className={`flex items-center justify-center ${iconData.wrapperSize || "w-12 h-12"} ${iconData.wrapperPadding || "p-2"} rounded-lg ${iconData.bgColor || "bg-gray-100"} transition-transform hover:scale-110`}
             >
                  <Icon className={`${iconData.size || "h-7 w-7"} ${iconData.color}`} />
                </div>
              );
            })}
          </div>
          
          {/* NOTE: You have duplicate <h2> tags here - remove one */}
          <h2 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h2>
          <p className="text-gray-600 mb-4 text-xl leading-relaxed">{course.description}</p>
          
          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">In-Person:</span>
            <span className="ml-2 text-gray-900 font-bold">{course.format}</span>
          </div>
          
          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">Live Online:</span>
            <span className="ml-2 text-gray-900 font-bold">{course.format1}</span>
          </div>
          
          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">Self-Paced:</span>
            <span className="ml-2 text-gray-900 font-bold">{course.format2}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">Levels:</span>
            <span className="ml-2 text-gray-900">{course.level}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">Duration:</span>
            <span className="ml-2 text-gray-900">{course.duration}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">Live Online:</span>
            <span className="ml-2 text-gray-900">{course.duration1}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="text-sm font-medium text-gray-500">Self-Paced:</span>
            <span className="ml-2 text-gray-900">{course.duration2}</span>
          </div>
          
          <div className="flex space-x-3 mt-6">
            {course.buttons.map((button, btnIndex) => {
     if (btnIndex === 1) {
    return (
        <Link 
         key={`-enroll`}
        href={`/Courses/Highlights`}
        >
        <button
        className="px-4 py-2 text-sm rounded-md font-medium w-40 bg-blue-600 text-white hover:bg-blue-700"
        >
        {button}
        </button>
        </Link>
        );
         } else {
        return (
        <button
        key={`-learn`}
        onClick={() => {
                    
        console.log('Learn more about', );
        }}
        className="px-4 py-2 text-sm rounded-md font-medium w-40 bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
        {button}
        </button>
            );
            }
            })}
          </div>
        </div>
      ))}
      <div className="flex  mt-9 gap-4 w-100 items-center justify-center ml-100">
              <button className="w-75 h-10 bg-blue-900 rounded-lg text-white text-1xl font-bold ">Enroll Now - Transform Your Career</button>
            </div>

            </div>
            

          <div>
              <Footer/>
          </div>
    
    </div>
  );
}