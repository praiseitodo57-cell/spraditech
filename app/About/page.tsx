import Navbar from "../component/NavBar";
import {
  Users, MapPin, TrendingUp, Eye, Target, Award,
  Shield, BookOpen, Zap, Globe, Heart, Trophy, Server
} from "lucide-react";
import Footer from "@/app/component/Footer";

const trainingAreas = [
  "Data Analytics", "Software Engineering", "Cybersecurity",
  "AI Engineering", "UI/UX Design", "Digital Marketing",
];

const coreValues = [
  { icon: Award, bg: "bg-yellow-100", color: "text-yellow-800", title: "Excellence", desc: "We relentlessly pursue the highest standards in curriculum, instruction, and student outcomes. We embrace continuous improvement and innovation." },
  { icon: Zap, bg: "bg-blue-100", color: "text-blue-800", title: "Empowerment", desc: "We believe in unlocking potential. We provide the tools, knowledge, confidence, and support for learners to take control of their careers and futures." },
  { icon: Target, bg: "bg-green-100", color: "text-green-800", title: "Impact", desc: "We measure success by the tangible career advancement of our graduates and their positive contributions to businesses and society through technology." },
  { icon: Globe, bg: "bg-purple-100", color: "text-purple-800", title: "Global Mindset, Local Roots", desc: "We think globally, designing skills for the worldwide market, while staying deeply connected to and serving the vibrant Nigerian and African tech landscape." },
  { icon: Shield, bg: "bg-red-100", color: "text-red-800", title: "Integrity & Trust", desc: "We operate with honesty, transparency, and ethical practices. We build trust with students, partners, and the community through reliability and respect." },
  { icon: Users, bg: "bg-blue-100", color: "text-blue-800", title: "Community & Collaboration", desc: "We foster a supportive, inclusive learning environment where students, instructors, and alumni collaborate, network, and grow together." },
  { icon: Heart, bg: "bg-red-100", color: "text-red-800", title: "Accessibility", desc: "We strive to make high-quality tech education achievable through diverse learning formats, flexible pathways, and supportive structures." },
];

const pillars = [
  {
    icon: BookOpen, bg: "bg-blue-100", color: "text-blue-800", border: "border-blue-200",
    title: "World-Class Curriculum & Delivery",
    points: [
      "Continuously update courses with the latest global tech trends & tools",
      "Invest in top-tier instructors (industry practitioners & expert educators)",
      "Develop innovative, scalable learning models (Blended, Online, Bootcamps)",
      "Implement rigorous quality assurance and learning outcome measurement",
    ],
  },
  {
    icon: Trophy, bg: "bg-yellow-100", color: "text-yellow-800", border: "border-yellow-200",
    title: "Global Recognition & Employability",
    points: [
      "Forge strong partnerships with leading global tech companies",
      "Build a powerful, recognized 'Spraditech Graduate' brand",
      "Establish robust career services with global reach",
      "Secure internationally recognized accreditations and certifications",
    ],
  },
  {
    icon: Server, bg: "bg-green-100", color: "text-green-800", border: "border-green-200",
    title: "Scalable Technology & Infrastructure",
    points: [
      "Develop a state-of-the-art, scalable Learning Management System (LMS)",
      "Expand physical infrastructure in Lagos strategically",
      "Explore hub models globally for expansion",
      "Leverage technology for seamless remote/international student experiences",
    ],
  },
  {
    icon: Heart, bg: "bg-red-100", color: "text-red-800", border: "border-red-200",
    title: "Unrivaled Student Experience & Community",
    points: [
      "Provide exceptional pre-enrollment guidance and ongoing support",
      "Cultivate a vibrant, active, and supportive global alumni network",
      "Prioritize student success through personalized mentorship",
      "Foster a culture of collaboration, innovation, and belonging",
    ],
  },
  {
    icon: TrendingUp, bg: "bg-purple-100", color: "text-purple-800", border: "border-purple-200",
    title: "Sustainable Growth & Impact",
    points: [
      "Develop diverse revenue streams (corporate training, government contracts)",
      "Implement robust data-driven decision-making for expansion",
      "Maintain strong commitment to social impact and scholarships",
      "Build a high-performance, globally-minded team culture",
    ],
  },
];

export default async function About() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Page Header ── */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Spraditech Digital Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a leading tech skills training company based in Lagos, Nigeria, committed to
              empowering individuals with world-class digital skills.
            </p>
          </div>

          {/* ── Location Card ── */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="flex items-start gap-3 mb-5">
                  <MapPin className="w-6 h-6 text-blue-800 mt-1 shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    7, St. Finbarr's College Road, Akoka, Yaba, Lagos, Nigeria
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Located in the heart of Lagos tech ecosystem, we provide accessible training for
                  aspiring tech professionals across Nigeria and beyond.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Training Areas</h4>
                <ul className="space-y-2">
                  {trainingAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-800 rounded-full shrink-0" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Vision & Mission ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the undisputed global leader in accessible, world-class tech skills training,
                empowering individuals everywhere to build successful careers and drive digital innovation.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Spraditech Digital Solutions equips individuals worldwide with cutting-edge,
                industry-relevant tech skills through exceptional training, mentorship, and career
                support. We foster a dynamic learning community in Lagos and beyond.
              </p>
            </div>
          </div>

          {/* ── Core Values ── */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                These values guide everything we do and shape our commitment to student success and
                community impact.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map(({ icon: Icon, bg, color, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${bg} ${color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Strategic Pillars ── */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Strategic Pillars
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Five key pillars that drive our mission to become the global leader in accessible,
                world-class tech skills training.
              </p>
            </div>
            <div className="space-y-6">
              {pillars.map(({ icon: Icon, bg, color, border, title, points }) => (
                <div
                  key={title}
                  className={`bg-white border-2 ${border} rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className={`w-16 h-16 ${bg} ${color} rounded-2xl flex items-center justify-center shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {points.map((point, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-800 rounded-full mt-1.5 shrink-0" />
                            <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-20">
          <Footer />
        </div>
      </section>
    </div>
  );
}