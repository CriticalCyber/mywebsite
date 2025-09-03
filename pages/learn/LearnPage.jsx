import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { FaUserCircle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../../utils/animationVarients";

const LearnPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹9,999",
      originalPrice: "₹12,999",
      features: [
        "Frontend Development (HTML, CSS, JavaScript, React)",
        "Backend Development (Node.js, Express.js)",
        "Database Management (MongoDB, PostgreSQL)",
        "API Development & Integration",
        "Authentication & Authorization",
        "Deployment & DevOps Basics",
        "Real-world Projects",
        "Career Guidance"
      ],
      projects: [
        "Portfolio Website",
        "E-commerce Platform",
        "Social Media Dashboard",
        "Task Management App"
      ],
      icon: "💻",
      gradient: "from-blue-500/20 to-cyan-500/20",
      popular: true
    },
    {
      id: "cybersecurity",
      title: "Cyber Security & Ethical Hacking",
      description: "Learn to protect systems and conduct ethical penetration testing",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹9,999",
      originalPrice: "₹12,999",
      features: [
        "Network Security Fundamentals",
        "Ethical Hacking Techniques",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Tools (Metasploit, Burp Suite, Nmap)",
        "Incident Response",
        "Compliance & Frameworks",
        "Hands-on Lab Exercises"
      ],
      projects: [
        "Network Security Assessment",
        "Web Application Penetration Test",
        "Security Audit Report",
        "Incident Response Plan"
      ],
      icon: "🔒",
      gradient: "from-red-500/20 to-pink-500/20",
      popular: false
    },
    {
      id: "networking",
      title: "Networking & Databases",
      description: "Understand network infrastructure and database management systems",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      price: "₹4,999",
      originalPrice: "₹6,999",
      features: [
        "Network Fundamentals (OSI Model, TCP/IP)",
        "Routing & Switching",
        "Network Security",
        "Database Design Principles",
        "SQL & NoSQL Databases",
        "Database Optimization",
        "Network Troubleshooting",
        "Cloud Networking Basics"
      ],
      projects: [
        "Network Topology Design",
        "Database Management System",
        "Network Security Implementation",
        "Performance Optimization Case Study"
      ],
      icon: "🌐",
      gradient: "from-emerald-500/20 to-teal-500/20",
      popular: false
    },
    {
      id: "basics",
      title: "Computer Basics",
      description: "Essential computer skills for beginners and professionals",
      duration: "3 Months",
      level: "Beginner",
      price: "₹4,999",
      originalPrice: "₹6,999",
      features: [
        "Computer Hardware & Software",
        "Operating Systems (Windows, Linux basics)",
        "File Management",
        "Internet & Email",
        "Microsoft Office Suite",
        "Basic Troubleshooting",
        "Digital Security Awareness",
        "Productivity Tools"
      ],
      projects: [
        "System Setup & Configuration",
        "Document Creation & Management",
        "Presentation Design",
        "Digital Organization System"
      ],
      icon: "🖥️",
      gradient: "from-indigo-500/20 to-purple-500/20",
      popular: false
    }
  ];

  // ✅ Google Form handler (for courses)
  const handleEnrollClick = () => {
    const formLink = "https://forms.gle/6Vd7HLZLjnGsfgrs9"; // Replace with your Google Form link
    window.open(formLink, "_blank");
  };

  // ✅ Mail handler (for custom training/mentoring)
  const handleMailClick = (title) => {
    const subject = `Enrollment Inquiry - ${title}`;
    const body = `Hello Anubhav,

I'm interested in "${title}". 

Please provide me with more details.

Thank you!`;

    const mailtoLink = `mailto:criticalcyberx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      variants={parentVariantFadeIn}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center justify-center gap-8"
    >
      <SectionHeader id="learn-section" title="Learn" />
      
      {/* Hero Section */}
      <motion.div
        variants={childVariantFadeIn}
        className="w-full"
      >
        <div className="card bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 shadow-2xl border border-base-300/50 backdrop-blur-sm">
          <div className="card-body text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
                <span className="text-4xl">🎓</span>
              </div>
            </div>
            <h2 className="card-title text-4xl justify-center mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transform Your Career with Technology
            </h2>
            <p className="text-base-content/80 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
              Master in-demand tech skills with hands-on courses designed by industry experts. 
              From web development to cybersecurity, start your journey to becoming a tech professional.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                className="stat bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-figure text-primary">
                  <span className="text-3xl">👥</span>
                </div>
                <div className="stat-title text-base-content/80">Students Enrolled</div>
                <div className="stat-value text-primary text-4xl font-bold">500+</div>
                <div className="stat-desc text-primary/80">Active learners</div>
              </motion.div>
              
              <motion.div 
                className="stat bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-figure text-secondary">
                  <span className="text-3xl">✅</span>
                </div>
                <div className="stat-title text-base-content/80">Completion Rate</div>
                <div className="stat-value text-secondary text-4xl font-bold">95%</div>
                <div className="stat-desc text-secondary/80">Success rate</div>
              </motion.div>
              
              <motion.div 
                className="stat bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-figure text-accent">
                  <span className="text-3xl">💼</span>
                </div>
                <div className="stat-title text-base-content/80">Job Placement</div>
                <div className="stat-value text-accent text-4xl font-bold">85%</div>
                <div className="stat-desc text-accent/80">Career success</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Courses */}
      <motion.div
        variants={childVariantFadeIn}
        className="w-full"
      >
        <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          📚 Course Catalog
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={childVariantFadeIn}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`card bg-gradient-to-br ${course.gradient} shadow-2xl hover:shadow-3xl transition-all duration-300 border border-base-300/30 backdrop-blur-sm relative ${
                selectedCourse === course.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute -top-1 -right-0 z-10">
                  <div className="badge badge-secondary badge-lg shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}
              
              <div className="card-body p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-base-100 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">{course.icon}</span>
                    </div>
                    <div>
                      <h3 className="card-title text-xl mb-2">{course.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="badge badge-primary badge-sm">{course.duration}</span>
                        <span className="badge badge-secondary badge-sm">{course.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-base-content/80 mb-6 leading-relaxed">{course.description}</p>

                <div className="collapse collapse-arrow bg-base-200/50 rounded-xl">
                  <input 
                    type="checkbox" 
                    checked={selectedCourse === course.id}
                    onChange={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                  />
                  <div className="collapse-title text-sm font-medium">
                    Course Curriculum & Projects
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <span className="text-primary">📚</span>
                          What You'll Learn:
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3 p-2 bg-base-100/50 rounded-lg">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-xs leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <span className="text-accent">🚀</span>
                          Hands-on Projects:
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {course.projects.map((project, projectIndex) => (
                            <div key={projectIndex} className="flex items-start gap-3 p-2 bg-base-100/50 rounded-lg">
                              <span className="text-accent mt-1">🎯</span>
                              <span className="text-xs leading-relaxed font-medium">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-between items-center mt-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-lg line-through text-base-content/60">{course.originalPrice}</span>
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                    </div>
                    <span className="text-xs text-accent font-medium">Limited Time Offer</span>
                  </div>
                  <motion.button 
                    className="btn btn-primary btn-lg shadow-lg hover:shadow-xl"
                    onClick={() => handleEnrollClick()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">🎓</span>
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us + Mail Buttons */}
      <motion.div
        variants={childVariantFadeIn}
        className="w-full"
      >
        <div className="card bg-gradient-to-br from-base-100 via-base-200/50 to-base-100 shadow-2xl border border-base-300/50">
          <div className="card-body text-center">
            <h3 className="card-title text-2xl justify-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              🎯 Why Choose Our Courses?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mb-8">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Expert Instruction</h4>
                <p className="text-base-content/80">Learn from industry professionals with real-world experience</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Hands-On Learning</h4>
                <p className="text-base-content/80">Build real projects and create a portfolio that stands out</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Career Support</h4>
                <p className="text-base-content/80">Get guidance on job applications, interviews, and career growth</p>
              </motion.div>
            </div>
            
            <div className="divider text-base-content/60">Contact for Custom Training</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <motion.button 
                className="btn btn-outline btn-lg hover:btn-primary transition-all duration-300"
                onClick={() => handleMailClick("Custom Corporate Training")}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl"><FaBuilding /></span>
                Corporate Training
              </motion.button>
              <motion.button 
                className="btn btn-outline btn-lg hover:btn-secondary transition-all duration-300"
                onClick={() => handleMailClick("One-on-One Mentoring")}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl"><FaUserCircle /></span>
                1-on-1 Mentoring
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LearnPage;
