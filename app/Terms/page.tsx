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
            <div className="pt-16">
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                            <p className="text-lg text-gray-600">Last updated: December 26, 2024</p>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-semibold">1. Acceptance of Terms</h2>
                            <p className="font-semibold">By accessing and using the services provided by Spraditech Digital Solutions ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.</p>
                            <span className="font-semibold">
                                2. Description of Service
                                        Spraditech Digital Solutions provides technology skills training through various formats including:

                                        In-person classes at our Lagos campus
                                        Live online sessions via video conferencing
                                        Pre-recorded video courses and materials
                                        Assignments, projects, and assessments
                                        Career support and job placement assistance
                                        3. User Accounts and Registration
                                        3.1 Account Creation
                                        To access our services, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.

                                        3.2 Eligibility
                                        You must be at least 16 years old to use our services. If you are under 18, you must have parental or guardian consent.

                                        3.3 Account Responsibility
                                        You are responsible for all activities that occur under your account and for keeping your password secure.

                                        4. Course Enrollment and Payment
                                        4.1 Enrollment
                                        Course enrollment is subject to availability and our admission requirements. We reserve the right to refuse enrollment at our discretion.

                                        4.2 Payment Terms
                                        Full payment is due upon enrollment unless installment plans are arranged
                                        All fees are in Nigerian Naira (₦) unless otherwise specified
                                        Payment plans must be approved in advance
                                        Late payment fees may apply for overdue installments
                                        4.3 Refund Policy
                                        Full refund available within 7 days of enrollment if no classes have been attended
                                        Partial refunds may be considered on a case-by-case basis
                                        No refunds after 30% course completion
                                        Administrative fees may apply to all refunds
                                        5. Student Responsibilities
                                        As a student, you agree to:

                                        Attend classes regularly and participate actively
                                        Complete assignments and projects on time
                                        Respect instructors and fellow students
                                        Use course materials only for personal learning
                                        Not share login credentials or course content
                                        Follow our code of conduct and academic integrity policies
                                        6. Intellectual Property
                                        6.1 Our Content
                                        All course materials, videos, assignments, and content provided by Spraditech Digital Solutions are our intellectual property and are protected by copyright laws.

                                        6.2 Student Work
                                        You retain ownership of your original work created during courses, but grant us permission to use it for educational and promotional purposes.

                                        6.3 Prohibited Use
                                        You may not:

                                        Copy, distribute, or sell our course materials
                                        Record or share live sessions without permission
                                        Use our content for commercial purposes
                                        Reverse engineer or attempt to extract source code
                                        7. Code of Conduct
                                        We maintain a respectful learning environment. Prohibited behaviors include:

                                        Harassment, discrimination, or offensive language
                                        Cheating or academic dishonesty
                                        Disrupting classes or online sessions
                                        Sharing inappropriate content
                                        Violating others' privacy or rights
                                        8. Technology Requirements
                                        Students are responsible for having appropriate technology and internet connectivity to participate in online courses and access digital materials.

                                        9. Limitation of Liability
                                        Spraditech Digital Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.

                                        10. Job Placement
                                        While we provide career support and job placement assistance, we cannot guarantee employment outcomes. Job placement statistics are based on historical data and individual results may vary.

                                        11. Termination
                                        We reserve the right to terminate or suspend your account and access to our services for violations of these terms or for any other reason at our discretion.

                                        12. Governing Law
                                        These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be resolved in the courts of Lagos State, Nigeria.

                                        13. Changes to Terms
                                        We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.

                                        14. Contact Information
                                        For questions about these Terms of Service, please contact us:

                                        Spraditech Digital Solutions

                                        7, St. Finbarr's College Road, Pako Bus-Stop, Akoka, Yaba, Lagos, Nigeria

                                        Email: legal@spraditech.com

                                        Phone: +234 (0) 808 559 6444
                            </span>
                        </div>
                    </div>
                    <div className="mt-30">
                        <Footer/>
                    </div>
                </section>
            </div>
        </div>
    )
}