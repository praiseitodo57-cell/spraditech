
import Navbar from "../component/NavBar";
import { Users, Calendar, Eye, Heart, Search, ArrowRight, Clock } from "lucide-react";
import Footer from "@/app/component/Footer";
import Image from "next/image";

const featuredArticles = [
  { img: "/pho2.jpg", tag: "Data Analytics", title: "12 Transformative Advantages of Computer Networking", excerpt: "Discover 12 transformative advantages of computer networking with real-world case studies.", author: "Chika Agbakwuru", readTime: "5 min read", date: "December 15, 2024" },
  { img: "/pho3.jpg", tag: "Cybersecurity", title: "10 Essential Cybersecurity Skills for Nigerian Businesses", excerpt: "As cyber threats increase across Africa, discover the critical skills every professional needs.", author: "Eng. Fatima Abdullahi", readTime: "7 min read", date: "December 12, 2024" },
  { img: "/pho5.jpg", tag: "Software Engineering", title: "From Lagos to Silicon Valley: Our Graduates' Stories", excerpt: "Meet our software engineering graduates who have landed roles at top global tech companies.", author: "Chioma Nwankwo", readTime: "6 min read", date: "December 10, 2024" },
];

const latestArticles = [
  {
    img: "/pho5.jpg", tag: "AI Engineering", tagColor: "bg-blue-100 text-blue-800",
    title: "AI and Machine Learning: Opportunities in the Nigerian Market",
    excerpt: "Discover the growing demand for AI professionals in Nigeria and how our AI Engineering program prepares you for these opportunities.",
    author: "Prof. Ibrahim Musa", date: "12/8/2024", views: 743, likes: 52,
    tags: ["Artificial Intelligence", "Machine Learning", "Career Opportunities"],
  },
  {
    img: "/pho5.jpg", tag: "UI/UX Design", tagColor: "bg-pink-100 text-pink-800",
    title: "UI/UX Design Trends Shaping African Digital Products",
    excerpt: "Learn about the latest design trends that are influencing user experience across African digital platforms and mobile apps.",
    author: "Grace Okoro", date: "12/5/2024", views: 634, likes: 41,
    tags: ["Design Trends", "Mobile UX", "Africa Tech"],
  },
  {
    img: "/pho5.jpg", tag: "Digital Marketing", tagColor: "bg-orange-100 text-orange-800",
    title: "Digital Marketing Strategies for Nigerian Startups",
    excerpt: "Effective digital marketing tactics that Nigerian startups are using to scale their businesses and reach global audiences.",
    author: "Olumide Adeyemi", date: "12/3/2024", views: 521, likes: 38,
    tags: ["SEO", "Social Media", "Startups"],
  },
];

const categories = [
  { label: "Data Analytics", count: 12, color: "bg-blue-100 text-blue-800" },
  { label: "Software Engineering", count: 8, color: "bg-green-100 text-green-600" },
  { label: "Cybersecurity", count: 6, color: "bg-red-100 text-red-600" },
  { label: "AI Engineering", count: 6, color: "bg-purple-100 text-purple-600" },
  { label: "UI/UX Design", count: 7, color: "bg-pink-100 text-pink-600" },
  { label: "Digital Marketing", count: 4, color: "bg-orange-100 text-orange-600" },
];

const recentPosts = [
  { title: "The Future of Data Analytics in Nigeria's Financial Sector", date: "12/15/2024", cat: "Data Analytics" },
  { title: "10 Essential Cybersecurity Skills Every Nigerian Business Needs", date: "12/12/2024", cat: "Cybersecurity" },
  { title: "From Lagos to Silicon Valley: Success Stories", date: "12/10/2024", cat: "AI Engineering" },
  { title: "AI and Machine Learning: Opportunities in Nigeria", date: "12/8/2024", cat: "Software Engineering" },
];

const tags = ["Career Advice", "Tech Trends", "Nigeria Tech", "Job Market", "Skills Development", "Industry Insights", "Success Stories", "Learning Tips", "Tech News", "Certification"];

const featuredCourses = [
  { title: "Data Analytics", desc: "Master data analysis and visualization", duration: "6 Months" },
  { title: "Software Engineering", desc: "Build robust applications", duration: "12 Months" },
  { title: "Cybersecurity", desc: "Protect digital assets", duration: "8 Months" },
];

export default async function Blog() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-16 bg-gray-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Tech Insights & Industry News
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay ahead in your tech career with expert insights, industry trends, and success
              stories from the Nigerian tech ecosystem.
            </p>
          </div>

          {/* ── Main 2-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* ── LEFT: Main content (3 cols wide on lg) ── */}
            <div className="lg:col-span-3 space-y-10">

              {/* Category Filter */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h2 className="text-base font-bold text-gray-900 mb-3">Browse by Category</h2>
                <div className="flex flex-wrap gap-2">
                  {["All Posts", "Data Analytics", "Software Engineering", "Cybersecurity", "AI Engineering", "UI/UX Design", "Digital Marketing"].map((cat, i) => (
                    <button
                      key={cat}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Articles */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Featured Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {featuredArticles.map((a, i) => (
                    <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative">
                        <Image src={a.img} width={400} height={192} alt={a.title} className="w-full h-44 object-cover" />
                        <span className="absolute top-3 left-3 bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">{a.tag}</span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{a.title}</h3>
                        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{a.excerpt}</p>
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
              </div>

              {/* Latest Articles */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Latest Articles</h2>
                <div className="space-y-5">
                  {latestArticles.map((a, i) => (
                    <article key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {/* Image */}
                        <div className="sm:col-span-1">
                          <Image src={a.img} width={300} height={200} alt={a.title} className="w-full h-44 object-cover rounded-lg" />
                        </div>
                        {/* Content */}
                        <div className="sm:col-span-2 flex flex-col justify-between">
                          <div>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${a.tagColor}`}>{a.tag}</span>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{a.title}</h3>
                            <p className="text-gray-500 text-sm mb-3 line-clamp-2">{a.excerpt}</p>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400 mb-3">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{a.author}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{a.date}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{a.views}</span>
                                <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{a.likes}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div className="flex flex-wrap gap-2">
                                {a.tags.map((tag) => (
                                  <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{tag}</span>
                                ))}
                              </div>
                              <button className="text-xs font-medium border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors shrink-0">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Sidebar (1 col wide on lg) ── */}
            <aside className="lg:col-span-1 space-y-6">

              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search blog posts"
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-1">
                  {categories.map((c) => (
                    <a key={c.label} href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-sm text-gray-700 hover:text-blue-800">{c.label}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.color}`}>{c.count}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((p, i) => (
                    <a key={i} href="#" className="group block">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800 line-clamp-2 mb-1">{p.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" /><span>{p.date}</span>
                        <span>•</span><span>{p.cat}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a key={tag} href="#" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-xl p-5">
                <h3 className="text-base font-bold mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">Get the latest tech insights and career advice delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="w-full py-2 bg-white text-blue-800 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Featured Courses */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Featured Courses</h3>
                <div className="space-y-3">
                  {featuredCourses.map((c) => (
                    <a key={c.title} href="#" className="group block p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800">{c.title}</h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0" />
                      </div>
                      <p className="text-xs text-gray-500">{c.desc} • {c.duration}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Facebook", bg: "bg-blue-50 text-blue-800 hover:bg-blue-100" },
                    { label: "Twitter", bg: "bg-sky-50 text-sky-800 hover:bg-sky-100" },
                    { label: "LinkedIn", bg: "bg-blue-50 text-blue-800 hover:bg-blue-100" },
                    { label: "Instagram", bg: "bg-red-50 text-red-800 hover:bg-red-100" },
                  ].map((s) => (
                    <a key={s.label} href="#" className={`flex items-center justify-center p-3 rounded-lg text-sm font-medium transition-colors ${s.bg}`}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </section>
    </div>
  );
}