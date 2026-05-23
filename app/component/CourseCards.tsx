'use client';
import React from "react";
import {
  Database, Users, MapPin, Code, Brain, Laptop, Shield,
  Palette, Cloud, Package, Video, Megaphone, Wifi, Bitcoin,
  Cog, Lock, Film,
  type LucideProps,
} from "lucide-react";
import Navbar from "../component/NavBar";
import Link from "next/link";
import Footer from "../component/Footer";

type LucideIcon = React.FC<LucideProps>;

interface IconData {
  icon: LucideIcon;
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
  icons: IconData[];
  borderColor: string;
}

const coursesData: CourseItem[] = [
  {
    title: "Digital Literacy",
    description: "Gain essential digital skills to confidently navigate the modern digital world for work, education, and everyday life.",
    format: "N450,000", format1: "N380,000", format2: "N300,000",
    level: "Beginner to Advanced", duration: "6 Months", duration1: "6 Months", duration2: "120 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Laptop, color: "text-yellow-800", bgColor: "bg-yellow-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-yellow-200",
  },
  {
    title: "Data Analytics",
    description: "Master data analysis, visualization, and interpretation to drive business decisions.",
    format: "N500,000", format1: "N420,000", format2: "N350,000",
    level: "Advanced", duration: "8 Months", duration1: "8 Months", duration2: "140 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Database, color: "text-blue-600",   bgColor: "bg-blue-100",   size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,    color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,    color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,   color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-blue-200",
  },
  {
    title: "Data Science/Machine Learning",
    description: "Dive into predictive analytics and artificial intelligence. Learn to build machine learning models that can forecast trends.",
    format: "N400,000", format1: "N350,000", format2: "N280,000",
    level: "Beginner to Intermediate", duration: "6 Months", duration1: "6 Months", duration2: "120 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Brain,  color: "text-purple-800", bgColor: "bg-purple-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-purple-300",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Learn to think like a hacker to defend against them. Master network security, vulnerability assessment, and ethical hacking.",
    format: "N350,000", format1: "N300,000", format2: "N250,000",
    level: "Beginner to Advanced", duration: "5 Months", duration1: "5 Months", duration2: "100 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Shield, color: "text-red-800",    bgColor: "bg-red-100",    size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-red-200",
  },
  {
    title: "AI Engineering",
    description: "Develop intelligent systems using machine learning and artificial intelligence.",
    format: "N450,000", format1: "N380,000", format2: "N300,000",
    level: "Beginner", duration: "6 Months", duration1: "6 Months", duration2: "120 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Brain,  color: "text-purple-800", bgColor: "bg-purple-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-purple-300",
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful, user-centered digital experiences and interfaces.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Palette, color: "text-pink-800",   bgColor: "bg-pink-100",   size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,   color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,   color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,  color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-pink-200",
  },
  {
    title: "Web Design (Front-End)",
    description: "Learn to create beautiful, responsive, and interactive websites using HTML, CSS, and JavaScript.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Palette, color: "text-cyan-800",   bgColor: "bg-cyan-100",   size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,   color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,   color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,  color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-cyan-200",
  },
  {
    title: "Full Stack Web Development",
    description: "Become a versatile developer by learning both front-end and back-end technologies to build complete web applications.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Code,   color: "text-emerald-800", bgColor: "bg-emerald-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",   bgColor: "bg-green-100",   size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600",  bgColor: "bg-purple-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600",  bgColor: "bg-yellow-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-emerald-200",
  },
  {
    title: "Mobile App Development",
    description: "Learn to build cross-platform mobile applications for iOS and Android using frameworks like React Native.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Laptop, color: "text-violet-800", bgColor: "bg-violet-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-violet-300",
  },
  {
    title: "Backend/Server-side Development",
    description: "Master the server-side of web development by building robust APIs, working with databases, and handling application logic.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Database, color: "text-amber-800", bgColor: "bg-amber-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,    color: "text-green-600", bgColor: "bg-green-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,    color: "text-purple-600",bgColor: "bg-purple-100",size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,   color: "text-yellow-600",bgColor: "bg-yellow-100",size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-amber-200",
  },
  {
    title: "DevOps & Cloud Computing",
    description: "Learn to automate software deployment, scaling, and monitoring using modern DevOps tools and cloud platforms like AWS.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Cloud,  color: "text-sky-600",    bgColor: "bg-sky-100",    size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-sky-200",
  },
  {
    title: "Software Engineering",
    description: "Build robust applications with modern programming languages and frameworks.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Code,   color: "text-green-800",  bgColor: "bg-green-100",  size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-green-200",
  },
  {
    title: "Product Management/Agile",
    description: "Learn to lead product development from concept to launch using Agile methodologies and data-driven decision making.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Package, color: "text-indigo-800", bgColor: "bg-indigo-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,   color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,   color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,  color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-indigo-200",
  },
  {
    title: "Video Editing & Content Creation",
    description: "Master professional video editing techniques and learn to create engaging content for YouTube, social media, and commercial projects.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Video,  color: "text-amber-800", bgColor: "bg-amber-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600", bgColor: "bg-green-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600",bgColor: "bg-purple-100",size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600",bgColor: "bg-yellow-100",size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-amber-200",
  },
  {
    title: "Digital Marketing",
    description: "Master the complete digital marketing landscape including SEO, social media, email marketing, PPC, and analytics to drive business growth.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Megaphone, color: "text-orange-800", bgColor: "bg-orange-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,     color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,     color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,    color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-orange-200",
  },
  {
    title: "Internet of Things (IoT)",
    description: "Learn to design, build, and program connected devices and IoT systems that collect and analyze data from the physical world.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Wifi,   color: "text-cyan-800",   bgColor: "bg-cyan-100",   size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-cyan-200",
  },
  {
    title: "Blockchain & Smart Contracts",
    description: "Master blockchain technology and smart contract development to build decentralized applications on major blockchain platforms.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Bitcoin, color: "text-gray-800",   bgColor: "bg-gray-100",   size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,   color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,   color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin,  color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-gray-300",
  },
  {
    title: "Robotics & Automation",
    description: "Learn to design, build, and program robots and automated systems for manufacturing, logistics, and smart environments.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Cog,    color: "text-orange-800", bgColor: "bg-orange-100", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-orange-200",
  },
  {
    title: "Digital Privacy/Cyber Hygiene",
    description: "Learn essential practices to protect your personal and organizational data from cyber threats in everyday digital activities.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Lock,   color: "text-green-800",  bgColor: "bg-green-100",  size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-green-200",
  },
  {
    title: "Animations & Motion Graphics",
    description: "Bring designs to life with captivating animations and motion graphics for video, web, and interactive media projects.",
    format: "N380,000", format1: "N320,000", format2: "N260,000",
    level: "Intermediate", duration: "4 Months", duration1: "4 Months", duration2: "80 Hours",
    buttons: ["Learn More", "Enroll Now"],
    icons: [
      { icon: Film,   color: "text-violet-800", bgColor: "bg-violet-300", size: "w-7 h-7", wrapperSize: "w-12 h-12" },
      { icon: Video,  color: "text-green-600",  bgColor: "bg-green-100",  size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: Users,  color: "text-purple-600", bgColor: "bg-purple-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
      { icon: MapPin, color: "text-yellow-600", bgColor: "bg-yellow-100", size: "w-5 h-5", wrapperSize: "w-8 h-8" },
    ],
    borderColor: "border-violet-200",
  },
];

function CourseIcon({ iconData }: { iconData: IconData }) {
  const { icon: Icon, size, color, bgColor, wrapperSize, wrapperPadding } = iconData;
  return (
    <div
      className={[
        "flex items-center justify-center rounded-lg transition-transform hover:scale-110",
        wrapperSize ?? "w-10 h-10",
        wrapperPadding ?? "p-2",
        bgColor ?? "bg-gray-100",
      ].join(" ")}
    >
      <Icon className={`${size ?? "w-5 h-5"} ${color}`} />
    </div>
  );
}

export default function CourseCards() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />

      {/* Page Header */}
      <div className="text-center mt-24 sm:mt-32 px-4 sm:px-6 pb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Training Programs
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Choose from our comprehensive range of tech courses designed to prepare
          you for high-demand careers in the digital economy.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 lg:px-10 pb-10">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md p-5 border-2 ${course.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
          >
            {/* Icons Row */}
            <div className="flex flex-wrap gap-2 mb-4">
              {course.icons.map((iconData, idx) => (
                <CourseIcon key={idx} iconData={iconData} />
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{course.description}</p>

            {/* Pricing & Details */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">In-Person:</span>
                <span className="text-gray-900 font-bold">{course.format}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Live Online:</span>
                <span className="text-gray-900 font-bold">{course.format1}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Self-Paced:</span>
                <span className="text-gray-900 font-bold">{course.format2}</span>
              </div>
              <div className="border-t border-gray-100 pt-2 mt-2 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Level:</span>
                  <span className="text-gray-800 text-right max-w-[55%]">{course.level}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">In-Person Duration:</span>
                  <span className="text-gray-800">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Live Online:</span>
                  <span className="text-gray-800">{course.duration1}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Self-Paced:</span>
                  <span className="text-gray-800">{course.duration2}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto pt-2">
              <button
                onClick={() => console.log("Learn more about", course.title)}
                className="flex-1 py-2 text-sm rounded-lg font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
              >
                Learn More
              </button>
              <Link href="/Courses/Highlights" className="flex-1">
                <button className="w-full py-2 text-sm rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center px-4 pb-16">
        <button className="w-full sm:w-auto px-8 py-3 bg-blue-900 rounded-lg text-white text-base font-bold hover:bg-blue-800 transition-colors">
          Enroll Now — Transform Your Career
        </button>
      </div>

    </div>
  );
}