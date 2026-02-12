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
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                            <p className="text-lg text-gray-600">Last updated: December 26, 2024</p>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-semibold">1. Information We Collect</h2>
                            <p className="font-semibold">At Spraditech Digital Solutions, we collect information you provide directly to us, such as when you:</p>
                            <span className="font-semibold">
                                Register for our courses or create an account
                                    Contact us for support or inquiries
                                    Subscribe to our newsletter or blog updates
                                    Participate in surveys or feedback forms
                                    Attend our classes or workshops
                                    Personal Information
                                    This may include:

                                    Name, email address, and phone number
                                    Billing and payment information
                                    Educational background and career goals
                                    Course progress and academic records
                                    Communication preferences
                                    2. How We Use Your Information
                                    We use the information we collect to:

                                    Provide and improve our educational services
                                    Process payments and manage your account
                                    Communicate with you about courses and updates
                                    Provide customer support and respond to inquiries
                                    Send marketing communications (with your consent)
                                    Analyze usage patterns to improve our platform
                                    Comply with legal obligations
                                    3. Information Sharing and Disclosure
                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:

                                    Service Providers: We may share information with trusted third-party service providers who assist us in operating our platform
                                    Legal Requirements: We may disclose information when required by law or to protect our rights
                                    Business Transfers: In the event of a merger or acquisition, your information may be transferred
                                    Consent: We may share information with your explicit consent
                                    4. Data Security
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

                                    Encryption of sensitive data in transit and at rest
                                    Regular security assessments and updates
                                    Access controls and authentication measures
                                    Employee training on data protection
                                    5. Your Rights and Choices
                                    You have the right to:

                                    Access: Request access to your personal information
                                    Correction: Request correction of inaccurate information
                                    Deletion: Request deletion of your personal information
                                    Portability: Request a copy of your data in a portable format
                                    Opt-out: Unsubscribe from marketing communications
                                    6. Cookies and Tracking Technologies
                                    We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.

                                    7. Children's Privacy
                                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.

                                    8. International Data Transfers
                                    Your information may be transferred to and processed in countries other than Nigeria. We ensure appropriate safeguards are in place for such transfers.

                                    9. Changes to This Privacy Policy
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.

                                    10. Contact Us
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:

                                    Spraditech Digital Solutions

                                    7, St. Finbarr's College Road, Pako Bus-Stop, Akoka, Yaba, Lagos, Nigeria

                                    Email: privacy@spraditech.com

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