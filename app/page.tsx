import Image from "next/image";
import { BookOpen, Users, Globe, Award, Star, Shield, Quote, Clock, Calendar } from "lucide-react";
import CourseCards from "./component/CourseCards";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";

export default function Home() {
  const trustBadges = [
    { bg: "bg-yellow-100", icon: <Award className="w-7 h-7 text-yellow-800" />, title: "Industry Certified", desc: "Internationally recognized certifications" },
    { bg: "bg-blue-100", icon: <Users className="w-7 h-7 text-blue-800" />, title: "1000+ Graduates", desc: "Successfully trained professionals" },
    { bg: "bg-green-100", icon: <Globe className="w-7 h-7 text-green-800" />, title: "Global Recognition", desc: "Graduates working worldwide" },
    { bg: "bg-purple-100", icon: <Shield className="w-7 h-7 text-purple-800" />, title: "Quality Assured", desc: "Rigorous curriculum standards" },
    { bg: "bg-emerald-100", icon: <Shield className="w-7 h-7 text-emerald-800" />, title: "95% Job Placement", desc: "Proven career success rates" },
    { bg: "bg-orange-100", icon: <Shield className="w-7 h-7 text-orange-800" />, title: "4.9/5 Rating", desc: "Excellent student satisfaction" },
  ];

  const testimonials = [
    { img: "/pho3.jpg", name: "Adebayo Ogundimu", course: "Data Analytics", text: "Spraditech transformed my career completely. The Data Analytics program was comprehensive and practical. Within 3 months of graduation, I landed my dream job.", role: "Data Analyst at Flutterwave • 2024" },
    { img: "/pho4.jpg", name: "Ibrahim Musa", course: "Cybersecurity", text: "The hands-on approach to cybersecurity training at Spraditech is unmatched. Real-world scenarios, ethical hacking labs, and expert mentors made all the difference.", role: "Security Engineer at MTN • 2024" },
    { img: "/pho1.jpg", name: "Chioma Nwankwo", course: "Software Engineering", text: "The Software Engineering bootcamp exceeded my expectations. From zero coding experience to building full-stack applications in 12 months.", role: "Software Engineer at Andela • 2024" },
    { img: "/pho2.jpg", name: "Fatima Abdullahi", course: "UI/UX Design", text: "Spraditech's UI/UX program taught me to think like a user while designing beautiful interfaces. The portfolio projects I built opened doors worldwide.", role: "UI/UX Designer at Andela • 2024" },
    { img: "/pho5.jpg", name: "Olumide Adeyemi", course: "Digital Marketing", text: "The digital marketing course covered everything from SEO to social media advertising. The practical campaigns we ran gave me real-world experience.", role: "Digital Marketing Manager at Jumia • 2023" },
    { img: "/pho4.jpg", name: "Grace Okoro", course: "AI Engineering", text: "The AI Engineering program at Spraditech is cutting-edge. Working on machine learning projects and neural networks prepared me for global opportunities.", role: "AI Engineer at Microsoft Nigeria • 2024" },
  ];

  const featuredArticles = [
    { img: "/pho2.jpg", tag: "Data Analytics", title: "The Future of Data Analytics in Nigerian Finance", excerpt: "Explore how data analytics is revolutionising banking and finance across Nigeria.", author: "Dr. Adebayo Ogundimu", readTime: "5 min read", date: "December 15, 2024" },
    { img: "/pho3.jpg", tag: "Cybersecurity", title: "10 Essential Cybersecurity Skills for 2025", excerpt: "As cyber threats increase across Africa, discover the critical skills every professional needs.", author: "Eng. Fatima Abdullahi", readTime: "7 min read", date: "December 12, 2024" },
    { img: "/pho5.jpg", tag: "Software Engineering", title: "From Lagos to Silicon Valley: Our Graduates' Stories", excerpt: "Meet our software engineering graduates who have landed roles at top global tech companies.", author: "Chioma Nwankwo", readTime: "6 min read", date: "December 10, 2024" },
  ];

  const morePosts = [
    { tag: "AI Engineering", readTime: "8 min read", title: "AI and Machine Learning: Opportunities in the Nigerian Market", excerpt: "Discover the growing demand for AI professionals in Nigeria and how our AI programme prepares you.", author: "Prof. Ibrahim Musa", date: "12/8/2024" },
    { tag: "UI/UX Design", readTime: "4 min read", title: "UI/UX Design Trends Shaping African Digital Products", excerpt: "Learn about the latest design trends influencing user experience across African platforms.", author: "Grace Okoro", date: "12/5/2024" },
    { tag: "Digital Marketing", readTime: "5 min read", title: "Digital Marketing Strategies for Nigerian Startups", excerpt: "Effective digital marketing tactics that Nigerian startups are using to scale their businesses.", author: "Olumide Adeyemi", date: "12/3/2024" },
  ];

  const galleryImages = [
    "/pho1.jpg", "/pho2.jpg", "/pho3.jpg",
    "/pho2.jpg", "/pho1.jpg", "/pho4.jpg",
    "/pho1.jpg", "/pho3.jpg", "/pho2.jpg",
  ];

  return (
    <div className="overflow-x-hidden w-full bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen font-sans">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section className="w-full px-4 sm:px-6 lg:px-16 py-10 lg:py-0 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:mt-36">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Transform Your Career with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
              World-Class Tech Skills
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            Spraditech Digital Solutions equips individuals worldwide with cutting-edge,
            industry-relevant tech skills through exceptional training, mentorship, and career support.
          </p>

          {/* Stats */}
          <div className="flex flex-row flex-wrap gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
                <Users className="w-6 h-6 text-blue-800" />
              </div>
              <span className="text-2xl font-bold text-gray-900">1000+</span>
              <span className="text-sm text-gray-600">Students Trained</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-1">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">95%</span>
              <span className="text-sm text-gray-600">Job Placement</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">70+</span>
              <span className="text-sm text-gray-600">Tech Courses</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-900 rounded-lg text-white text-base font-medium hover:bg-blue-800 transition-colors">
              Start Your Journey
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-blue-800 rounded-lg text-blue-900 text-base font-medium hover:bg-blue-50 transition-colors">
              View Courses
            </button>
          </div>
        </div>

        {/* Right – Info Card */}
        <div className="w-full lg:w-5/12 lg:mt-32">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                <BookOpen className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Spraditech Digital Solutions</h3>
                <p className="text-gray-500 text-sm">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-base font-bold text-blue-800">Data Analytics</p>
                <p className="text-xs text-blue-600 mt-1">6 Months</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <p className="text-base font-bold text-green-800">Software Eng.</p>
                <p className="text-xs text-green-600 mt-1">12 Months</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <p className="text-base font-bold text-purple-800">Cybersecurity</p>
                <p className="text-xs text-purple-600 mt-1">8 Months</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-center">
                <p className="text-base font-bold text-orange-800">AI Engineering</p>
                <p className="text-xs text-orange-600 mt-1">10 Months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="w-full bg-gradient-to-br from-slate-100 to-gray-100 py-16 px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Featured Training Programs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start your tech journey with our most popular courses, available both in-person and online.
          </p>
        </div>
        <CourseCards />
      </section>

      {/* ── TRUSTED ── */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            Trusted by Students & Employers Worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mx-auto text-center max-w-2xl mb-10">
            Our commitment to excellence has earned us recognition as Nigeria's leading tech training institution.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((item, i) => (
              <div key={i} className="text-center p-3 rounded-xl hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Companies */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-sm mb-5">Our graduates work at leading companies including:</p>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 opacity-60">
              {["Flutterwave", "Paystack", "Andela", "MTN Nigeria", "Jumia", "Microsoft"].map((c) => (
                <span key={c} className="text-lg sm:text-2xl font-bold text-gray-400">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE ── */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Campus Life & Learning Environment
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look inside our modern facilities, vibrant classrooms, and the amazing learning community.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["All Photos (9)", "Classroom (6)", "Facilities (2)", "Events (1)"].map((label, i) => (
              <button
                key={label}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  i === 0 ? "bg-blue-800 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300">
                <Image
                  src={src}
                  width={400}
                  height={300}
                  alt={`Campus photo ${i + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Success Stories from Our Graduates
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from alumni who transformed their careers and are now working at top tech companies.
            </p>
          </div>

          {/* Featured Quote */}
          <div className="bg-blue-900 rounded-2xl p-6 sm:p-10 text-white mb-10">
            <div className="flex justify-center mb-6">
              <Quote className="w-10 h-10 text-blue-300" />
            </div>
            <blockquote className="text-base sm:text-xl leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              "Spraditech transformed my career completely. The Data Analytics program was comprehensive
              and practical. Within 3 months of graduation, I landed my dream job at Flutterwave.
              The instructors are world-class!"
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Image src="/pho3.jpg" width={56} height={56} alt="Adebayo" className="rounded-full object-cover w-14 h-14 shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-bold text-base">Adebayo Ogundimu</p>
                <p className="text-blue-200 text-sm">Data Analyst at Flutterwave</p>
                <p className="text-blue-300 text-xs">Data Analytics Graduate • 2024</p>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={t.img} width={52} height={52} alt={t.name} className="rounded-full object-cover w-13 h-13 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.course}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{t.text}</p>
                <p className="mt-3 text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "1000+", label: "Graduates", color: "text-blue-800" },
              { val: "95%", label: "Job Placement Rate", color: "text-green-600" },
              { val: "4.9/5", label: "Average Rating", color: "text-purple-600" },
              { val: "50+", label: "Partner Companies", color: "text-orange-600" },
            ].map((s) => (
              <div key={s.label}>
                <p className={`text-2xl sm:text-3xl font-bold ${s.color} mb-1`}>{s.val}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Latest Insights & Industry News
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in tech, career advice, and insights from our instructors.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredArticles.map((a, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <Image src={a.img} width={400} height={192} alt={a.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 left-3 bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {a.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{a.excerpt}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{a.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />{a.date}
                    </span>
                    <button className="text-blue-800 hover:text-blue-600 text-xs font-semibold">Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* More Posts */}
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">More Recent Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {morePosts.map((p, i) => (
              <article key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">{p.tag}</span>
                  <span className="text-xs text-gray-400">{p.readTime}</span>
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{p.title}</h4>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{p.author}</span>
                  <span>{p.date}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="w-full sm:w-56 py-3 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded-lg font-medium transition-colors">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
