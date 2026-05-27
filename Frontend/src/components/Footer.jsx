import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Send, ChevronRight, Loader2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // State management for form inputs and submission feedback
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Points to your local Node backend port
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: "Message deployed successfully!", error: null });
        setEmail('');
        setMessage('');
      } else {
        throw new Error(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0B0E14] font-sans antialiased text-[#F0F6FC] py-20 lg:py-24 border-t border-[#30363D] overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3FB950]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-[#F0F6FC]">
              Let's <span className="text-[#3FB950]">Talk</span>
            </h2>
          </div>
          <p className="max-w-md text-[#8B949E] text-sm lg:text-lg border-l border-[#3FB950]/30 pl-6 font-medium leading-relaxed">
            Ready to collaborate on high-performance web architectures and scalable MERN applications.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          {/* Section 1: Contact Identity */}
          <div className="space-y-8 flex flex-col items-start">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#3FB950]">Contact Identity</h4>
            <div className="space-y-5 w-full">
              <a href="mailto:vedantilame22@gmail.com" className="flex items-center gap-4 group text-[#8B949E] hover:text-[#3FB950] transition-colors">
                <div className="p-2.5 bg-[#161B22] rounded-lg border border-[#30363D] group-hover:border-[#3FB950]/40 transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium lowercase">vedantilame22@gmail.com</span>
              </a>
              <a href="tel:+918530725749" className="flex items-center gap-4 group text-[#8B949E] hover:text-[#3FB950] transition-colors">
                <div className="p-2.5 bg-[#161B22] rounded-lg border border-[#30363D] group-hover:border-[#3FB950]/40 transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium">+91 8530725749</span>
              </a>
              <a href="http://maps.google.com/?q=Nagpur" target="_blank" rel="noreferrer" className="flex items-center gap-4 group text-[#8B949E] hover:text-[#3FB950] transition-colors">
                <div className="p-2.5 bg-[#161B22] rounded-lg border border-[#30363D] group-hover:border-[#3FB950]/40 transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-medium">Nagpur, India</span>
              </a>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/vedantilame22" target="_blank" rel="noreferrer" className="p-3 bg-[#161B22] border border-[#30363D] text-[#8B949E] rounded-xl hover:border-[#3FB950] hover:text-[#3FB950] transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/vedantilame22" target="_blank" rel="noreferrer" className="p-3 bg-[#161B22] border border-[#30363D] text-[#8B949E] rounded-xl hover:border-[#3FB950] hover:text-[#3FB950] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Section 2: Navigation */}
          <div className="space-y-8 flex flex-col items-start">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#3FB950]">Navigation</h4>
            <nav className="flex flex-col gap-5">
              {quickLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="group flex items-center gap-3 text-[#F0F6FC] hover:text-[#3FB950] transition-all text-sm font-bold uppercase tracking-widest"
                >
                  <ChevronRight size={14} className="text-[#3FB950]/40 group-hover:text-[#3FB950] transition-colors" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 3: Quick Message */}
          <div className="space-y-8 flex flex-col items-start w-full">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#3FB950]">Quick Message</h4>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status.loading}
                className="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3FB950]/50 transition-all text-[#F0F6FC] disabled:opacity-50"
              />
              <textarea 
                placeholder="How can I help?" 
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status.loading}
                className="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3FB950]/50 transition-all text-[#F0F6FC] resize-none disabled:opacity-50"
              ></textarea>
              
              <button 
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-3 bg-[#3FB950] text-[#0B0E14] font-bold py-3 rounded-lg text-sm hover:bg-[#2ea043] transition-all duration-300 shadow-lg shadow-[#3FB950]/10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Deploying...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Deploy Message
                  </>
                )}
              </button>

              {/* Success/Error Response Notifications */}
              {status.success && (
                <p className="text-xs text-[#3FB950] font-mono mt-2">{status.success}</p>
              )}
              {status.error && (
                <p className="text-xs text-red-400 font-mono mt-2">Error: {status.error}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-[#30363D] text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#484F58]">
            <p>© {currentYear} Vedant Ilame </p>
            <span className="hidden md:block text-[#30363D]">|</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse"></span>
              <p> Available for Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;