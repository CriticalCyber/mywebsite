import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../../utils/animationVarients";

const HireMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Website Development Inquiry from ${formData.name}`;
    const body = `Hello Anubhav,

I'm interested in hiring you for a website development project.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}

Looking forward to hearing from you!

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:criticalcyberx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const services = [
    {
      title: "Frontend Development",
      description: "Modern React.js websites with responsive design",
      features: ["React/TypeScript", "Tailwind CSS", "Mobile Responsive", "SEO Optimized"],
      icon: "🎨",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Full Stack Development",
      description: "Complete web applications with backend integration",
      features: ["Database Design", "API Development", "Authentication", "Payment Integration"],
      icon: "⚡",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Portfolio Websites",
      description: "Professional portfolios that showcase your work",
      features: ["Custom Design", "Fast Loading", "Contact Forms", "Analytics"],
      icon: "🚀",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores with shopping cart functionality",
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Admin Panel"],
      icon: "🛍️",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <motion.div
      variants={parentVariantFadeIn}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center justify-center gap-8"
    >
      <SectionHeader id="hire-me" title="Hire Me" />
      
      <motion.div
        variants={childVariantFadeIn}
        className="w-full"
      >
        <div className="card bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 shadow-2xl border border-base-300/50 backdrop-blur-sm">
          <div className="card-body text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">💼</span>
              </div>
            </div>
            <h2 className="card-title text-3xl justify-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Build Something Amazing Together!
            </h2>
            <p className="text-base-content/80 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
              I specialize in creating modern, responsive websites and web applications. 
              Whether you need a simple portfolio or a complex web application, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="badge badge-lg badge-primary">5+ Years Experience</div>
              <div className="badge badge-lg badge-secondary">100+ Projects</div>
              <div className="badge badge-lg badge-accent">24/7 Support</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={childVariantFadeIn}
        className="w-full"
      >
        <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          🛠️ My Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={childVariantFadeIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`card bg-gradient-to-br ${service.gradient} shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300/30 backdrop-blur-sm`}
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-base-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="card-title text-xl">{service.title}</h3>
                    <p className="text-sm text-base-content/80">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="badge badge-outline badge-sm hover:badge-primary transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={childVariantFadeIn}
        className="w-full"
      >
        <div className="card bg-gradient-to-br from-base-100 via-base-200/50 to-base-100 shadow-2xl border border-base-300/50">
          <div className="card-body">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h2 className="card-title text-2xl justify-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start Your Project
              </h2>
              <p className="text-base-content/70">Fill out the form below and I'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input input-bordered focus:input-primary transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered focus:input-primary transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company/Organization</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input input-bordered focus:input-primary transition-colors"
                    placeholder="Your company or organization"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Type *</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="select select-bordered focus:select-primary transition-colors"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="webapp">Web Application</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Budget Range</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="select select-bordered focus:select-primary transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="10000-50000">₹5,000 - ₹10,000</option>
                    <option value="50000-100000">₹10,000 - ₹50,000</option>
                    <option value="100000-250000">₹50,000 - ₹1,00,000</option>
                    <option value="250000+">₹1,00,000+</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="timeline">
                    <span className="label-text">Timeline</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    aria-label="Timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="select select-bordered focus:select-primary transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="2-4weeks">2-4 weeks</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Description *</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered focus:textarea-primary h-32 transition-colors"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <div className="form-control mt-8">
                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">🚀</span>
                  Send Project Inquiry
                </motion.button>
              </div>
            </form>

            <div className="divider text-base-content/60">OR</div>

            <div className="text-center">
              <p className="text-base-content/80 mb-6 text-lg">Prefer to contact me directly?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.a 
                  href="mailto:criticalcyberx@gmail.com" 
                  className="btn btn-outline btn-lg hover:btn-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xl"><FaEnvelope /></span>
                  Email 
                </motion.a>
                
                <motion.a 
                  href="https://wa.me/9079841105" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-lg hover:btn-accent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xl"><FaWhatsapp /></span>
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HireMePage;