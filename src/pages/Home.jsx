import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  ArrowRight,
  Zap,
  Gauge,
  Shield,
  Trophy,
  Sparkles,
  Target,
  Users,
  Star,
  CheckCircle2,
  ChevronRight,
  Settings,
  Cpu,
  Activity,
  TrendingUp,
  Award,
  ThumbsUp,
  Timer,
  Layers,
  Box,
  Package,
  CircuitBoard,
  Bolt,
  Flame,
  Rocket,
  Play,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

// ============================================
// MAXOTO LUXURY BRANDING
// ============================================
const BRANDING = {
  productName: "MAXOTO",
  tagline: "Engineering Excellence",
  subtagline: "Precision Performance for the Discerning Driver",
  
  links: {
    products: "https://maxoto.com/products/",
    contact: "https://maxoto.com/contact",
    powercontrol: "https://maxoto.com/products/powercontrol",
    pedalbox: "https://maxoto.com/products/pedalbox",
  },
  
  stats: {
    vehicles: "4,000+",
    powerIncrease: "30%",
    customers: "15,000+",
    countries: "25+",
    warranty: "Comprehensive",
    installation: "5-10 Minutes",
  },
};

const MaxotoLuxuryPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const scrollContainerRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll testimonials
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 0.5;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  // ============================================
  // PRODUCTS DATA
  // ============================================
  const products = [
    {
      id: "powercontrol",
      name: "PowerControl",
      tagline: "Optimal Performance Enhancement",
      subtitle: "Engineered for Maximum Efficiency",
      description: "Experience unprecedented power delivery with our advanced engine management system. Seamlessly integrating with your vehicle's ECU, PowerControl optimizes fuel injection and boost pressure for up to 30% gains in both horsepower and torque.",
      icon: Bolt,
      accentColor: "from-amber-200 via-amber-400 to-amber-600",
      glowColor: "amber-500",
      stats: [
        { label: "Power Gain", value: "+30%", icon: Flame, color: "text-amber-400" },
        { label: "Torque Gain", value: "+30%", icon: Rocket, color: "text-amber-400" },
        { label: "Compatibility", value: "4,000+", icon: Trophy, color: "text-amber-400" },
      ],
      features: [
        "Certified for 4,000+ vehicle models worldwide",
        "Comprehensive warranty with Engine Protect+",
        "Plug & Play installation in 15-20 minutes",
        "Optimized fuel efficiency and power delivery",
        "Real-time performance monitoring",
        "Reversible to factory settings anytime",
      ],
      example: "Audi A3 (8V) 1.6 TDI 110 HP",
      technicalHighlights: [
        "Advanced ECU optimization",
        "Dynamic boost management",
        "Real-time adaptation",
      ],
    },
    {
      id: "pedalbox",
      name: "PedalBox",
      tagline: "Electronic Throttle Mastery",
      subtitle: "Precision Control at Your Fingertips",
      description: "Transform your driving experience with instantaneous throttle response. PedalBox eliminates lag between pedal input and engine reaction, delivering sport-tuned acceleration across 30+ customizable settings.",
      icon: Gauge,
      accentColor: "from-cyan-200 via-cyan-400 to-cyan-600",
      glowColor: "cyan-500",
      stats: [
        { label: "Response", value: "+25%", icon: Zap, color: "text-cyan-400" },
        { label: "Settings", value: "30+", icon: Settings, color: "text-cyan-400" },
        { label: "Install", value: "5-10min", icon: Timer, color: "text-cyan-400" },
      ],
      features: [
        "Universal compatibility with all vehicle models",
        "Instant throttle response enhancement",
        "30+ preset performance profiles",
        "3-step plug & play installation",
        "Sport, City, and Eco driving modes",
        "Completely reversible system",
      ],
      example: "Toyota Land Cruiser 4.2 TD",
      technicalHighlights: [
        "Electronic throttle optimization",
        "Multi-mode programming",
        "Adaptive response curves",
      ],
    },
  ];

  // ============================================
  // WHY MAXOTO
  // ============================================
  const whyMaxoto = [
    {
      icon: Layers,
      title: "Umbrella of Innovation",
      description: "A singular vision encompassing multiple verticals—from performance enhancement to cutting-edge diagnostics. One brand, infinite possibilities.",
      color: "from-violet-400 to-purple-600",
      stat: "Multiple Verticals",
    },
    {
      icon: Award,
      title: "Exclusive Partnerships",
      description: "Proud to feature DTE Systems Germany—pioneers in automotive electronics. More prestigious collaborations on the horizon.",
      color: "from-amber-400 to-orange-600",
      stat: "DTE Germany",
    },
    {
      icon: Cpu,
      title: "Future-Ready Technology",
      description: "Supporting ICE, Hybrid, and EV ecosystems with adaptive solutions that evolve with automotive innovation.",
      color: "from-cyan-400 to-blue-600",
      stat: "All Powertrains",
    },
  ];

  // ============================================
  // TESTIMONIALS
  // ============================================
  const testimonials = [
    {
      name: "Marcus Reynolds",
      role: "Automotive Enthusiast",
      location: "Munich, Germany",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "The precision engineering is immediately evident. PowerControl transformed my Audi's performance while maintaining the refinement I expect from a premium vehicle. Exceptional product.",
      rating: 5,
      vehicle: "Audi RS6 Avant",
      verified: true,
    },
    {
      name: "Sophie Chen",
      role: "Executive",
      location: "Singapore",
      avatar: "https://i.pravatar.cc/150?img=45",
      text: "PedalBox delivers exactly what it promises—instantaneous throttle response with customizable profiles. The build quality and installation process reflect true German engineering standards.",
      rating: 5,
      vehicle: "Porsche Cayenne Turbo",
      verified: true,
    },
    {
      name: "James Mitchell",
      role: "Performance Driver",
      location: "London, UK",
      avatar: "https://i.pravatar.cc/150?img=33",
      text: "I've tested numerous performance modules. MAXOTO stands apart—not just in power gains, but in how seamlessly it integrates. The Engine Protect+ feature provides genuine peace of mind.",
      rating: 5,
      vehicle: "BMW M4 Competition",
      verified: true,
    },
    {
      name: "Isabella Rossi",
      role: "Luxury Car Owner",
      location: "Milan, Italy",
      avatar: "https://i.pravatar.cc/150?img=26",
      text: "Sophistication meets performance. The installation was effortless, and the results exceeded expectations. MAXOTO has earned its place in the luxury performance market.",
      rating: 5,
      vehicle: "Mercedes-AMG GT",
      verified: true,
    },
    {
      name: "David Park",
      role: "Tech Entrepreneur",
      location: "Seoul, South Korea",
      avatar: "https://i.pravatar.cc/150?img=51",
      text: "As someone who values both innovation and reliability, MAXOTO delivers on both fronts. The technology is sophisticated yet user-friendly. Highly recommended.",
      rating: 5,
      vehicle: "Tesla Model S Plaid",
      verified: true,
    },
  ];

  // ============================================
  // FAQ
  // ============================================
  const faqs = [
    {
      question: "How does MAXOTO maintain warranty compliance?",
      answer: "All MAXOTO products are engineered with stringent safety parameters and certified for over 4,000 vehicle models. Our systems operate within manufacturer-approved tolerances and include comprehensive product warranties. PowerControl features Engine Protect+ for additional safeguarding.",
    },
    {
      question: "What level of technical expertise is required for installation?",
      answer: "Both PowerControl and PedalBox feature sophisticated plug-and-play architecture. PowerControl installs in 15-20 minutes, while PedalBox requires just 5-10 minutes with our guided 3-step process. No specialized tools or technical training necessary.",
    },
    {
      question: "Which vehicles are compatible with MAXOTO products?",
      answer: "PowerControl is certified for 4,000+ vehicles including gasoline and turbo diesel engines. PedalBox offers universal compatibility with all electronic throttle systems. Visit our compatibility tool on the product pages for specific model verification.",
    },
    {
      question: "What performance improvements should I expect?",
      answer: "PowerControl delivers up to 30% increases in both horsepower and torque, varying by vehicle platform and configuration. PedalBox enhances throttle response by approximately 25%, with 30+ customizable settings to match your driving preferences.",
    },
    {
      question: "Are these systems safe for long-term use?",
      answer: "Absolutely. Developed by DTE Systems Germany with decades of automotive electronics expertise, our products undergo rigorous testing. PowerControl's Engine Protect+ actively monitors vital parameters, while both systems are completely reversible to factory specifications.",
    },
    {
      question: "Can I adjust performance characteristics after installation?",
      answer: "PedalBox offers 30+ preset configurations with up to 21 distinct power levels, allowing real-time adjustment via intuitive controls. PowerControl is optimized for maximum safe performance but can be reset to stock parameters at any time.",
    },
    {
      question: "Do MAXOTO products support electric and hybrid vehicles?",
      answer: "Yes. MAXOTO provides future-ready solutions spanning ICE (Internal Combustion Engine), Hybrid, and full EV platforms. Check specific product compatibility for your vehicle's powertrain configuration.",
    },
    {
      question: "What warranty coverage is included?",
      answer: "All MAXOTO products include comprehensive warranty coverage. Specific terms vary by product line and region. Our customer service team provides detailed warranty documentation and support throughout your ownership experience.",
    },
  ];

  // CTA Button Component
  const CTAButton = ({ 
    href, 
    children, 
    className = "", 
    size = "default", 
    variant = "primary" 
  }) => {
    const sizeClasses = {
      small: "px-5 py-2.5 text-sm",
      default: "px-8 py-4 text-base",
      large: "px-10 py-5 text-lg",
    };

    const variantClasses = {
      primary: "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-900 hover:from-amber-400 hover:to-amber-600 shadow-lg shadow-amber-500/30",
      secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40",
      ghost: "bg-transparent text-amber-400 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900",
    };

    return (
      <a
        href={href}
        className={`group inline-flex items-center justify-center gap-3 ${sizeClasses[size]} ${variantClasses[variant]} font-semibold rounded-full transition-all duration-300 hover:scale-105 ${className}`}
      >
        <span className="tracking-wide">{children}</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Luxury Background with Grid Patterns */}
      <div className="fixed inset-0 z-0">
        {/* Primary Hexagon Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='87' viewBox='0 0 100 87' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l25 14.5v29L25 58 0 43.5v-29L25 0zm50 0l25 14.5v29L75 58l-25-14.5v-29L50 0z' fill='none' stroke='%23f59e0b' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 87px',
          }}
        />

        {/* Secondary Fine Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.3) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.3) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal Lines Pattern */}
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(251, 191, 36, 0.2) 50px,
              rgba(251, 191, 36, 0.2) 51px
            )`,
          }}
        />

        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Carbon Fiber Texture Simulation */}
        <div
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(251, 191, 36, 0.1) 2px, rgba(251, 191, 36, 0.1) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(251, 191, 36, 0.1) 2px, rgba(251, 191, 36, 0.1) 4px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Elegant Gradient Orbs */}
        <div className="absolute -top-48 -left-48 w-[800px] h-[800px] bg-gradient-radial from-amber-500/15 via-amber-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-cyan-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-violet-500/8 via-violet-500/2 to-transparent rounded-full blur-3xl" />
        
        {/* Luxury Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 backdrop-blur-xl bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Geometric Border */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg blur-sm opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Bolt className="w-6 h-6 text-slate-900" />
                </div>
                {/* Hexagon Border */}
                <div className="absolute -inset-1 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" fill="none" stroke="url(#grad1)" strokeWidth="1"/>
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'rgb(217, 119, 6)', stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter text-white">MAXOTO</h1>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Performance Engineering</p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium">Products</a>
              <a href="#technology" className="text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium">Technology</a>
              <a href="#testimonials" className="text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium">Testimonials</a>
              <CTAButton href={BRANDING.links.contact} size="small" variant="primary">
                Contact Us
              </CTAButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero Specific Patterns */}
          <div className="absolute inset-0">
            {/* Large Hexagon Grid for Hero */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='174' viewBox='0 0 200 174' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0l50 29v58l-50 29-50-29V29L50 0zm100 0l50 29v58l-50 29-50-29V29l50-29z' fill='none' stroke='%23f59e0b' stroke-width='0.8'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 174px',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
            {/* Trust Badge with Grid Border */}
            <div className="flex justify-center mb-12" data-animate>
              <div className="relative inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50 rounded-tl-full" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-500/50 rounded-tr-full" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-500/50 rounded-bl-full" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50 rounded-br-full" />
                
                <div className="flex -space-x-2">
                  {[12, 45, 33].map((img) => (
                    <div key={img} className="w-8 h-8 rounded-full border-2 border-slate-900 ring-1 ring-amber-500/50 overflow-hidden">
                      <img src={`https://i.pravatar.cc/40?img=${img}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-300 font-medium">Trusted by {BRANDING.stats.customers} drivers worldwide</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center max-w-5xl mx-auto mb-16" data-animate>
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-8">
                  Premium Performance Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                <span className="text-white">Elevate Your</span>
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                    Driving Experience
                  </span>
                  {/* Underline Accent */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
                German-engineered performance enhancement systems delivering up to <span className="text-white font-semibold">30% more power</span> with plug & play simplicity. Certified for <span className="text-white font-semibold">{BRANDING.stats.vehicles} vehicles</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href={BRANDING.links.products} size="large" variant="primary">
                  Explore Products
                </CTAButton>
                <CTAButton href="#technology" size="large" variant="secondary">
                  Learn More
                </CTAButton>
              </div>
            </div>

            {/* Stats Bar with Geometric Patterns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto" data-animate>
              {[
                { icon: Flame, value: "+30%", label: "Power Increase" },
                { icon: Trophy, value: "4,000+", label: "Compatible Vehicles" },
                { icon: Timer, value: "5-10min", label: "Installation Time" },
                { icon: Shield, value: "Certified", label: "Comprehensive Warranty" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Inner Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.5) 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/20" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/20" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/20" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/20" />
                  
                  <div className="relative z-10">
                    <stat.icon className="w-8 h-8 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/5 to-transparent rounded-br-2xl" />
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="relative">
                <ChevronDown className="w-6 h-6 text-amber-400" />
                <div className="absolute inset-0 bg-amber-400 blur-xl opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-32 relative">
          {/* Section Background Pattern */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-[0.01]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f59e0b' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20" data-animate>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Featured Products
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Precision-Engineered
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Performance Solutions
                </span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Discover automotive excellence through advanced German engineering
              </p>
            </div>

            {/* Product Selection Tabs */}
            <div className="flex justify-center gap-4 mb-16" data-animate>
              {products.map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProduct(idx)}
                  className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeProduct === idx
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-xl shadow-amber-500/30 scale-105"
                      : "bg-white/5 text-slate-400 border border-white/10 hover:border-amber-500/30 hover:bg-white/10"
                  }`}
                >
                  {activeProduct === idx && (
                    <div className="absolute inset-0 opacity-10">
                      <div 
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.5) 1px, transparent 0)`,
                          backgroundSize: '15px 15px',
                        }}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  <product.icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{product.name}</span>
                </button>
              ))}
            </div>

            {/* Active Product Display */}
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  activeProduct === idx ? "block" : "hidden"
                }`}
                data-animate
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Product Visual with Advanced Patterns */}
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-10 rounded-3xl blur-3xl`} />
                    
                    <div className="relative p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                      {/* Top Border Accent with Geometric Pattern */}
                      <div className="absolute top-0 left-0 w-full h-px">
                        <div className={`w-full h-full bg-gradient-to-r ${product.accentColor}`} />
                      </div>
                      
                      {/* Corner Geometric Elements */}
                      <div className="absolute top-0 left-0 w-20 h-20">
                        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                          <polygon points="0,0 100,0 0,100" fill="url(#cornerGrad)" />
                          <defs>
                            <linearGradient id="cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0.3}} />
                              <stop offset="100%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0}} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 rotate-180">
                        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                          <polygon points="0,0 100,0 0,100" fill="url(#cornerGrad2)" />
                          <defs>
                            <linearGradient id="cornerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0.3}} />
                              <stop offset="100%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0}} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Hexagon Pattern Overlay */}
                      <div 
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='43' viewBox='0 0 50 43' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l12.5 7.25v14.5L25 29l-12.5-7.25v-14.5L25 0z' fill='none' stroke='%23f59e0b' stroke-width='0.5'/%3E%3C/svg%3E")`,
                          backgroundSize: '50px 43px',
                        }}
                      />
                      
                      {/* Product Icon Display with Grid */}
                      <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-8 overflow-hidden group">
                        {/* Background Grid */}
                        <div 
                          className="absolute inset-0 opacity-5"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)`,
                            backgroundSize: '30px 30px',
                          }}
                        />
                        
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <product.icon className="w-40 h-40 text-amber-400 relative z-10" />
                        
                        {/* Rotating Hexagon Border */}
                        <div className="absolute inset-8 opacity-20 animate-spin-slow">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" fill="none" stroke="url(#hexGrad)" strokeWidth="0.5" strokeDasharray="5,5"/>
                            <defs>
                              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:1}} />
                                <stop offset="100%" style={{stopColor:'rgb(217, 119, 6)', stopOpacity:0.3}} />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Stats Grid with Geometric Borders */}
                      <div className="grid grid-cols-3 gap-4">
                        {product.stats.map((stat, statIdx) => (
                          <div
                            key={statIdx}
                            className="relative text-center p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-amber-500/30 transition-all overflow-hidden group"
                          >
                            {/* Inner Pattern */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity"
                              style={{
                                backgroundImage: `linear-gradient(45deg, rgba(251, 191, 36, 0.5) 25%, transparent 25%, transparent 75%, rgba(251, 191, 36, 0.5) 75%), 
                                                 linear-gradient(45deg, rgba(251, 191, 36, 0.5) 25%, transparent 25%, transparent 75%, rgba(251, 191, 36, 0.5) 75%)`,
                                backgroundSize: '10px 10px',
                                backgroundPosition: '0 0, 5px 5px',
                              }}
                            />
                            
                            <stat.icon className={`w-7 h-7 ${stat.color} mx-auto mb-2 relative z-10`} />
                            <div className="text-2xl font-bold text-white mb-1 relative z-10">{stat.value}</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide font-medium relative z-10">{stat.label}</div>
                            
                            {/* Corner Brackets */}
                            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-8">
                    {/* Product Header */}
                    <div>
                      <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r ${product.accentColor} rounded-full mb-4`}>
                        <product.icon className="w-5 h-5 text-slate-900" />
                        <span className="text-slate-900 font-bold text-sm uppercase tracking-wide">
                          {product.name}
                        </span>
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-2">{product.tagline}</h3>
                      <p className="text-xl text-amber-400 font-medium mb-6">{product.subtitle}</p>
                      <p className="text-lg text-slate-300 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Example Vehicle with Pattern */}
                    <div className="relative p-4 bg-gradient-to-r from-white/5 to-transparent border-l-4 border-amber-500 rounded-lg overflow-hidden">
                      <div 
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                          backgroundImage: `repeating-linear-gradient(45deg, rgba(251, 191, 36, 0.5) 0px, rgba(251, 191, 36, 0.5) 1px, transparent 1px, transparent 10px)`,
                        }}
                      />
                      <p className="text-sm text-slate-400 mb-1 relative z-10">Example Application</p>
                      <p className="text-white font-semibold relative z-10">{product.example}</p>
                    </div>

                    {/* Technical Highlights */}
                    <div className="flex flex-wrap gap-3">
                      {product.technicalHighlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 font-medium overflow-hidden group"
                        >
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity"
                            style={{
                              backgroundImage: `linear-gradient(90deg, rgba(251, 191, 36, 0.5) 0%, transparent 50%, rgba(251, 191, 36, 0.5) 100%)`,
                            }}
                          />
                          <span className="relative z-10">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features List with Grid Pattern */}
                    <div className="space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="relative flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-amber-500/30 transition-all group overflow-hidden"
                        >
                          {/* Hover Grid Pattern */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity"
                            style={{
                              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.5) 1px, transparent 0)`,
                              backgroundSize: '15px 15px',
                            }}
                          />
                          
                          <div className="shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform relative z-10">
                            <Check className="w-3 h-3 text-slate-900" />
                          </div>
                          <span className="text-slate-300 leading-relaxed relative z-10">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <CTAButton href={BRANDING.links[product.id]} size="large" variant="primary">
                      Discover {product.name}
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why MAXOTO Section with Enhanced Patterns */}
        <section id="technology" className="py-32 relative overflow-hidden">
          {/* Complex Background Patterns */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f59e0b' stroke-width='0.5'%3E%3Cpath d='M0 0L80 80M80 0L0 80M40 0v80M0 40h80'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20" data-animate>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Why Choose MAXOTO
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Redefining Automotive
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Performance Standards
                </span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                A legacy of innovation, precision, and excellence
              </p>
            </div>

            {/* Feature Cards with Advanced Grid Patterns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" data-animate>
              {whyMaxoto.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hexagon Pattern Background */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='35' viewBox='0 0 40 35' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l10 5.75v11.5L20 23l-10-5.75v-11.5L20 0z' fill='none' stroke='%23f59e0b' stroke-width='0.3'/%3E%3C/svg%3E")`,
                      backgroundSize: '40px 35px',
                    }}
                  />
                  
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Geometric Corner Accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path d="M100 0L100 100L0 0Z" fill="url(#featureGrad)" />
                      <defs>
                        <linearGradient id="featureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0.5}} />
                          <stop offset="100%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0}} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />

                  <div className="relative z-10">
                    {/* Icon with Hexagon Border */}
                    <div className="relative inline-block mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Hexagon Border */}
                      <div className="absolute -inset-2 opacity-30 group-hover:opacity-50 transition-opacity">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" fill="none" stroke="url(#iconGrad)" strokeWidth="0.8"/>
                          <defs>
                            <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:0.5}} />
                              <stop offset="100%" style={{stopColor:'rgb(217, 119, 6)', stopOpacity:0.3}} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-amber-400 font-semibold mb-4">
                      {feature.stat}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px">
                    <div className={`w-0 group-hover:w-full h-full bg-gradient-to-r ${feature.color} transition-all duration-500`} />
                  </div>
                </div>
              ))}
            </div>

            {/* DTE Systems Badge with Geometric Pattern */}
            <div className="text-center" data-animate>
              <div className="relative inline-flex items-center gap-6 px-10 py-8 bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                {/* Background Grid */}
                <div 
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.5) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                
                {/* Corner Geometric Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-500/30" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-500/30" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-500/30" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-500/30" />
                
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-xl">
                  <Shield className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-left relative z-10">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Powered By</p>
                  <h3 className="text-2xl font-bold text-white mb-1">DTE SYSTEMS GERMANY</h3>
                  <p className="text-sm text-amber-400 font-medium">Decades of Automotive Electronics Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20" data-animate>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Customer Excellence
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Trusted by Discerning
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Automotive Enthusiasts
                </span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                {BRANDING.stats.customers} drivers worldwide have elevated their experience with MAXOTO
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
              data-animate
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative shrink-0 w-[450px] p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-amber-500/30 transition-all shadow-2xl group overflow-hidden"
                >
                  {/* Hexagon Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.02] transition-opacity"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='26' viewBox='0 0 30 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l7.5 4.33v8.67L15 17.33l-7.5-4.33V4.33L15 0z' fill='none' stroke='%23f59e0b' stroke-width='0.3'/%3E%3C/svg%3E")`,
                      backgroundSize: '30px 26px',
                    }}
                  />
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber-500/20" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber-500/20" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-amber-500/20" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-amber-500/20" />
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg text-slate-300 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full ring-2 ring-amber-500/50"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                            <Check className="w-3 h-3 text-slate-900" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg mb-0.5">{testimonial.name}</div>
                        <div className="text-sm text-amber-400 font-medium mb-0.5">{testimonial.vehicle}</div>
                        <div className="text-xs text-slate-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20" data-animate>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Expert Answers to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Your Questions
                </span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4" data-animate>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all"
                >
                  {/* Dot Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.01]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.5) 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="relative w-full flex items-center justify-between p-6 text-left group z-10"
                  >
                    <span className="font-semibold text-white text-lg pr-8 group-hover:text-amber-400 transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        openFaq === idx
                          ? "bg-gradient-to-br from-amber-400 to-amber-600 rotate-180"
                          : "bg-white/5 group-hover:bg-white/10"
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 ${openFaq === idx ? "text-slate-900" : "text-amber-400"}`}
                      />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="relative px-6 pb-6 z-10">
                      <div className="p-5 bg-white/5 border border-white/5 rounded-xl">
                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Dramatic Background with Multiple Patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f59e0b' stroke-width='0.5'%3E%3Ccircle cx='50' cy='50' r='40'/%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Cline x1='10' y1='50' x2='90' y2='50'/%3E%3Cline x1='50' y1='10' x2='50' y2='90'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />

          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10" data-animate>
            {/* Icon with Hexagon */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-50" />
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl shadow-2xl shadow-amber-500/30">
                <Rocket className="w-10 h-10 text-slate-900" />
              </div>
              {/* Hexagon Border */}
              <div className="absolute -inset-3 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" fill="none" stroke="url(#ctaGrad)" strokeWidth="1"/>
                  <defs>
                    <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'rgb(251, 191, 36)', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'rgb(217, 119, 6)', stopOpacity:0.3}} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Experience the Pinnacle of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Automotive Performance
              </span>
            </h2>

            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the exclusive community of {BRANDING.stats.customers} drivers who demand excellence. 
              Transform your vehicle with precision-engineered German technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <CTAButton href={BRANDING.links.products} size="large" variant="primary">
                Explore Our Collection
              </CTAButton>
              <CTAButton href={BRANDING.links.contact} size="large" variant="ghost">
                Consult Our Specialists
              </CTAButton>
            </div>

            {/* Trust Indicators with Pattern */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm font-medium">
              {[
                "Plug & Play Installation",
                "Comprehensive Warranty",
                "German Engineering"
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center gap-2 group">
                  <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <Check className="w-3 h-3 text-slate-900" />
                    <div className="absolute inset-0 rounded-full bg-amber-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 py-20">
          {/* Footer Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.01]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f59e0b' stroke-width='0.5'%3E%3Cpath d='M0 20h40M20 0v40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <Bolt className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">MAXOTO</h3>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Performance Engineering</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                  {BRANDING.tagline}. Delivering precision-engineered performance solutions powered by DTE Systems Germany.
                </p>
                <p className="text-sm text-slate-500">
                  Elevating the driving experience for discerning automotive enthusiasts worldwide.
                </p>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Products</h4>
                <div className="space-y-3">
                  {['PowerControl', 'PedalBox', 'All Products', 'Compatibility'].map((item, idx) => (
                    <a key={idx} href="#" className="block text-slate-400 hover:text-amber-400 transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Company</h4>
                <div className="space-y-3">
                  {['Technology', 'Testimonials', 'Contact', 'Support'].map((item, idx) => (
                    <a key={idx} href="#" className="block text-slate-400 hover:text-amber-400 transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-sm">
                  © 2025 MAXOTO. All rights reserved. Powered by DTE Systems Germany.
                </p>
                <div className="flex items-center gap-8">
                  {['Privacy Policy', 'Terms of Service', 'Warranty'].map((item, idx) => (
                    <a key={idx} href="#" className="text-slate-500 hover:text-amber-400 transition-colors text-sm">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        [data-animate] {
          opacity: 0;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MaxotoLuxuryPage;
    