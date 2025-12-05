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
  Menu,
  X,
  Timer,
  Layers,
  Box,
  Package,
  CircuitBoard,
  Bolt,
  Flame,
  Rocket,
  Play,
  Pause,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Globe,
  Wrench,
  Truck,
  Clock,
  BadgeCheck,
  LineChart,
  BarChart3,
  Volume2,
  VolumeX,
  Search,
} from "lucide-react";

// ============================================
// MAXOTO BRANDING
// ============================================
const BRANDING = {
  productName: "MAXOTO",
  tagline: "Engineering Excellence",
  subtagline: "Precision Performance for the Discerning Driver",

  links: {
    products: "/products",
    contact: "/contact",
    powercontrol: "/products/powercontrol",
    pedalbox: "/products/pedalbox",
  },

  stats: {
    vehicles: "4,000+",
    powerIncrease: "30%",
    customers: "15,000+",
    countries: "25+",
    warranty: "Comprehensive",
    installation: "5-10 Minutes",
    satisfaction: "99.8%",
    experience: "20+ Years",
  },
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);

  // Video paths
  const videos = ["/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4"];

  // Navigation menu items - RR Style
  const menuItems = [
    { label: "INSPIRING GREATNESS", href: "#hero" },
    { label: "MODELS", href: "/products" },
    { label: "BESPOKE", href: "/products/powercontrol" },
    { label: "OWNERSHIP", href: "#process" },
    { label: "PROVENANCE", href: "/about" },
    { label: "BOUTIQUE", href: "/products/pedalbox" },
    { label: "MUSE ARTS PROGRAMME", href: "#testimonials" },
  ];

  // Hero slides - RR style carousel
  const heroSlides = [
    {
      id: 0,
      title: "POWERCONTROL",
      subtitle: "CENTENARY EDITION",
      description: "PRECISION PERFORMANCE ENHANCEMENT",
      video: "/1.mp4",
      cta: "DISCOVER NOW",
      link: "/products/powercontrol",
    },
    {
      id: 1,
      title: "PEDALBOX",
      subtitle: "ELECTRONIC THROTTLE MASTERY",
      description: "INSTANT RESPONSE TECHNOLOGY",
      video: "/2.mp4",
      cta: "EXPLORE",
      link: "/products/pedalbox",
    },
    {
      id: 2,
      title: "MAXOTO",
      subtitle: "ENGINEERING EXCELLENCE",
      description: "REDEFINING AUTOMOTIVE PERFORMANCE",
      video: "/3.mp4",
      cta: "LEARN MORE",
      link: "/about",
    },
  ];

  // Products
  const products = [
    {
      id: "powercontrol",
      name: "PowerControl",
      tagline: "Optimal Performance Enhancement",
      subtitle: "Engineered for Maximum Efficiency",
      description:
        "PowerControl sits between the ECU and engine sensors, applying a calibrated strategy to fuel, boost, and torque requests. The result is stronger in-gear acceleration and a broader, more usable power band without compromising drivability.",
      icon: Bolt,
      accentColor: "from-[#e2b27a] via-[#d39b63] to-[#b77b44]",
      stats: [
        { label: "Power Gain", value: "+30%", icon: Flame },
        { label: "Torque Gain", value: "+30%", icon: Rocket },
        { label: "Compatibility", value: "4,000+", icon: Trophy },
      ],
      features: [
        "Vehicle-specific maps for thousands of engines",
        "Engine Protect+ monitors key parameters in real time",
        "No permanent changes to the ECU flash",
        "Optimized for daily driving, touring, and towing",
        "Dyno-developed calibrations with road validation",
        "Fully reversible with OEM-style connectors",
      ],
    },
    {
      id: "pedalbox",
      name: "PedalBox",
      tagline: "Electronic Throttle Mastery",
      subtitle: "Precision Control at Your Fingertips",
      description:
        "PedalBox refines how your vehicle reacts to pedal input, removing dead travel and lag. Modes ensure that city traffic, open highway cruising, and dynamic back-road driving each feel tailored and precise.",
      icon: Gauge,
      accentColor: "from-[#f0d7ac] via-[#d9b786] to-[#b28651]",
      stats: [
        { label: "Response", value: "+25%", icon: Zap },
        { label: "Settings", value: "30+", icon: Settings },
        { label: "Install", value: "5-10min", icon: Timer },
      ],
      features: [
        "Profiles for Comfort, City, Sport, and Track use",
        "Fine adjustment inside each main mode",
        "Memory function retains last setting at key-on",
        "Compact handset with discreet mounting options",
        "Optimised for both ICE and selected EV platforms",
        "Zero impact on factory safety systems",
      ],
    },
  ];

  // Journey steps
  const processSteps = [
    {
      number: "01",
      icon: Target,
      title: "Configure Your Vehicle",
      description:
        "Enter brand, model, year, and engine code to see compatible hardware, indicative gains, and available packages.",
    },
    {
      number: "02",
      icon: Package,
      title: "Curated Package Creation",
      description:
        "Our configurator suggests the right combination of PowerControl, PedalBox, and accessories for your use case.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Installation & Setup",
      description:
        "Choose between certified partner installation or guided self-install with step-by-step visuals and video support.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Calibration & Fine-Tuning",
      description:
        "Tailor modes, sensitivity, and profiles to your preferences, and store multiple driver presets.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Marcus Reynolds",
      role: "Automotive Enthusiast",
      location: "Munich, Germany",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "PowerControl transformed mid-range response while leaving the car's refinement untouched. It feels like a higher-output factory tune rather than an add-on.",
      rating: 5,
      vehicle: "Audi RS6 Avant",
      verified: true,
    },
    {
      name: "Sophie Chen",
      role: "Executive",
      location: "Singapore",
      avatar: "https://i.pravatar.cc/150?img=45",
      text: "The ability to switch PedalBox modes depending on traffic and weather makes the car feel tailored to each day.",
      rating: 5,
      vehicle: "Porsche Cayenne Turbo",
      verified: true,
    },
    {
      name: "James Mitchell",
      role: "Performance Driver",
      location: "London, UK",
      avatar: "https://i.pravatar.cc/150?img=33",
      text: "On track days I use more aggressive maps, and for commuting I return to a calmer profile. That flexibility is the real win.",
      rating: 5,
      vehicle: "BMW M4 Competition",
      verified: true,
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "How does MAXOTO handle manufacturer warranty concerns?",
      answer:
        "Modules operate within engine safety margins and can be removed without trace, leaving no permanent changes in the ECU flash. Documentation for service centers is included in every kit.",
    },
    {
      question: "Is coding or laptop-based programming required?",
      answer:
        "No specialist tools are required. All firmware and mapping is pre-loaded, and installation is fully plug-and-play through OEM-style connectors.",
    },
    {
      question: "Which brands do you support?",
      answer:
        "Coverage includes leading European, Japanese, Korean, American, and Indian brands, across petrol, diesel, hybrid, and selected EV platforms.",
    },
    {
      question: "Will fuel consumption increase?",
      answer:
        "In equivalent driving conditions, many customers report similar or slightly improved consumption because the engine can operate more efficiently at lower throttle openings.",
    },
  ];

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 200;
      setScrollProgress(Math.min(scrolled / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Video controls
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Testimonials auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 0.5;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* ============================================ */}
      {/* HEADER - Rolls-Royce Style */}
      {/* ============================================ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 0.95})`,
          backdropFilter: `blur(${scrollProgress * 20}px)`,
        }}
      >
        <div className="border-b border-white/10">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Left - Menu Button */}
              <div className="flex-1 flex justify-start">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
                  aria-label="Open menu"
                >
                  {/* Animated hamburger icon */}
                  <div className="flex flex-col gap-1">
                    <div className="w-7 h-0.5 bg-white transition-all group-hover:w-8"></div>
                    <div className="w-5 h-0.5 bg-white/60 transition-all group-hover:w-8"></div>
                    <div className="w-7 h-0.5 bg-white transition-all group-hover:w-8"></div>
                  </div>
                  <span className="hidden md:block text-[9px] tracking-[0.3em] text-white/60 uppercase">
                    Menu
                  </span>
                </button>
              </div>

              {/* Center - MAXOTO Logo */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <a
                  href="/"
                  className="flex items-center gap-2 md:gap-2.5 transition-transform hover:scale-105"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-lg blur-sm opacity-60" />
                    <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-lg flex items-center justify-center">
                      <Bolt className="w-4 h-4 md:w-6 md:h-6 text-[#1c130e]" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-bold tracking-tight text-white">
                      MAXOTO
                    </h1>
                    <p className="text-[7px] md:text-[8px] text-[#c3ac93] uppercase tracking-[0.25em]">
                      Performance
                    </p>
                  </div>
                </a>
              </div>

              {/* Right - Find Dealer */}
              <div className="flex-1 flex justify-end">
                <button className="group flex items-center gap-1.5 md:gap-2 text-sm tracking-wider hover:opacity-80 transition-opacity">
                  <Search className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/80">
                    Find Dealer
                  </span>
                  <span className="sm:hidden text-[10px] tracking-[0.2em] uppercase text-white/80">
                    Dealer
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* LEFT SIDE MENU - Compact & Right-Aligned */}
      {/* ============================================ */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark overlay - click to close */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Left side panel - narrower width */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-full sm:w-[420px] md:w-[480px] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border-r border-white/5 transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(226,178,122,0.05)_0%,_transparent_50%)] pointer-events-none" />

          <div className="relative h-full overflow-y-auto flex flex-col">
            {/* Header - Close button & Logo */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
                <span className="text-[10px] tracking-[0.25em] uppercase">
                  Close
                </span>
              </button>

              {/* Logo badge */}
              <div className="w-10 h-10 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center opacity-80">
                <Bolt className="w-5 h-5 text-[#1c130e]" />
              </div>
            </div>

            {/* Menu items - Right aligned, compact */}
            <nav className="flex-1 py-8 md:py-12 px-6 md:px-10">
              <div className="space-y-1">
                {menuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-600 ${
                      mobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: mobileMenuOpen ? `${idx * 60}ms` : "0ms",
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group block text-right py-2.5 px-4 hover:bg-white/5 rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-sm md:text-base font-light text-white/50 group-hover:text-white transition-colors tracking-[0.15em] uppercase">
                          {item.label}
                        </span>
                        <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#e2b27a] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </nav>

            {/* Footer - CTA & Contact */}
            <div className="p-6 md:p-8 border-t border-white/5 inline-flex flex-col gap-4 items-end">
              {/* CTA Button - Right aligned */}
              <div
                className={`transition-all duration-600 ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${menuItems.length * 60 + 100}ms`
                    : "0ms",
                }}
              >
                <a
                  href={BRANDING.links.contact}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-end gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#e2b27a] to-[#b77b44] text-black text-xs font-semibold tracking-wider hover:from-[#f0d7ac] hover:to-[#b77b44] transition-all group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Contact info - Right aligned, compact */}
              <div
                className={`space-y-2.5 text-[11px] text-white/40 transition-all duration-600 ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${menuItems.length * 60 + 200}ms`
                    : "0ms",
                }}
              >
                <div className="flex items-center justify-end gap-2">
                  <span className="tracking-wide">+91 1800 123 4567</span>
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="tracking-wide">info@maxoto.com</span>
                  <Mail className="w-3.5 h-3.5" />
                </div>

                {/* Social links - Right aligned */}
                <div className="flex gap-4 justify-end pt-3 border-t border-white/5 mt-4">
                  {["Instagram", "Facebook", "Twitter"].map((social, idx) => (
                    <a
                      key={idx}
                      href={`#${social.toLowerCase()}`}
                      className="text-[9px] tracking-[0.2em] uppercase text-white/25 hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* HERO CAROUSEL - Fully Responsive */}
      {/* ============================================ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Video Background */}
            <video
              ref={activeSlide === index ? videoRef : null}
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.video}
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

            {/* Content - Responsive */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                {/* Small label */}
                <p
                  className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/80 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.description}
                </p>

                {/* Main title - Responsive sizes */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.1em] sm:tracking-[0.15em] text-white animate-fade-in leading-tight"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.title}
                </h1>

                {/* Subtitle - Responsive sizes */}
                <p
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/90 animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  {slide.subtitle}
                </p>

                {/* CTA - Responsive button */}
                <div
                  className="pt-6 sm:pt-8 animate-fade-in"
                  style={{ animationDelay: "0.8s" }}
                >
                  <a
                    href={slide.link}
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold hover:bg-white/90 transition-all group"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Video Controls - Responsive positioning */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-30 flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleMute}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 rounded-full transition-all"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            ) : (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
          </button>

          <button
            onClick={togglePlayPause}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 rounded-full transition-all"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
            )}
          </button>
        </div>

        {/* Pagination - Responsive */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Progress ring */}
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity={activeSlide === index ? "1" : "0.3"}
                  className={`transition-all duration-500 ${
                    activeSlide === index ? "animate-dash" : ""
                  }`}
                  strokeDasharray="50 50"
                  strokeDashoffset={activeSlide === index ? "-50" : "0"}
                />
                {/* Center dot */}
                <circle
                  cx="10"
                  cy="10"
                  r={activeSlide === index ? "3" : "2.5"}
                  fill="white"
                  opacity={activeSlide === index ? "1" : "0.5"}
                  className="transition-all duration-300"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Scroll indicator - Hidden on small screens */}
        <div className="hidden sm:block absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-white/60" />
        </div>
      </section>

      {/* ============================================ */}
      {/* BRAND STORY */}
      {/* ============================================ */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 items-center">
            {/* Left content */}
            <div data-animate>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6">
                ENGINEERING EXCELLENCE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4 sm:mb-6 leading-tight">
                A Quietly Obsessive
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  Engineering Culture
                </span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-4 sm:mb-6">
                MAXOTO was founded by calibration engineers and test drivers who
                spent their early careers inside OEM development programs. The
                goal was simple: offer measurable performance benefits without
                the drama and compromises that often define the aftermarket.
              </p>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                Every module is the product of hundreds of hours of data
                logging, dyno work, and route validation on real roads—from
                high-altitude passes to dense city traffic.
              </p>
            </div>

            {/* Right - image placeholder */}
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl"
              data-animate
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b1b11] to-black flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <CircuitBoard className="w-16 h-16 sm:w-20 sm:h-20 text-[#e2b27a] mx-auto mb-3 sm:mb-4 opacity-40" />
                  <p className="text-xs sm:text-sm text-white/40 tracking-[0.2em] sm:tracking-[0.25em] uppercase px-4">
                    Engineering Lab Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DISCOVER PRODUCTS - RR style cards */}
      {/* ============================================ */}
      <section
        id="products"
        className="relative py-16 sm:py-20 md:py-24 bg-[#0a0a0a]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6">
              FEATURED MODULES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4 sm:mb-6 leading-tight">
              Discover Your Performance
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed px-4">
              Choose from our precision-engineered modules or configure a
              bespoke solution for your vehicle.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {products.map((product, index) => (
              <a
                key={index}
                href={BRANDING.links[product.id]}
                className="group relative aspect-[3/4] overflow-hidden bg-black rounded-xl sm:rounded-2xl"
                data-animate
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-20 transition-opacity duration-700 group-hover:opacity-30`}
                />

                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.4'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                />

                {/* Icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <product.icon className="w-24 h-24 sm:w-32 sm:h-32 text-[#e2b27a] opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 text-white">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${product.accentColor} rounded-lg sm:rounded-xl flex items-center justify-center`}
                    >
                      <product.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#1c130e]" />
                    </div>
                  </div>

                  <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/70 mb-2">
                    {product.tagline}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-2 sm:mb-3">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4 sm:mb-6">
                    {product.subtitle}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                          {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/50">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View all CTA */}
          <div className="text-center" data-animate>
            <a
              href={BRANDING.links.products}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold hover:bg-white/90 transition-all group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESS / JOURNEY */}
      {/* ============================================ */}
      <section
        id="process"
        className="relative py-16 sm:py-20 md:py-24 bg-black"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6">
              OWNERSHIP JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4 sm:mb-6 leading-tight">
              From Curiosity to Confidence
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed px-4">
              A guided path from first inquiry to your first calibrated drive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 bg-[#0f0f0f] border border-white/10 hover:border-[#e2b27a]/40 transition-all duration-500"
                data-animate
              >
                {/* Number watermark */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl font-bold text-white/5">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c130e]" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS - Auto-scrolling */}
      {/* ============================================ */}
      <section
        id="testimonials"
        className="relative py-16 sm:py-20 md:py-24 bg-[#0a0a0a] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6">
              CUSTOMER STORIES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4 sm:mb-6 leading-tight">
              Built for Drivers Who Notice Everything
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed px-4">
              {BRANDING.stats.customers} owners have made the quiet upgrade.
            </p>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 px-4 sm:px-6 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[280px] sm:w-[350px] md:w-[400px] p-6 sm:p-8 bg-black border border-white/10 hover:border-[#e2b27a]/40 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e2b27a] fill-[#e2b27a]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-[#e2b27a]/50"
                />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#e2b27a]">
                    {testimonial.vehicle}
                  </div>
                  <div className="text-xs text-white/50">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/60 mb-4 sm:mb-6">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4 sm:mb-6 leading-tight">
              Everything You Need to Decide Clearly
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f0f] border border-white/10 hover:border-[#e2b27a]/40 transition-all"
                data-animate
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="font-semibold text-white text-base sm:text-lg pr-4 sm:pr-6">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all ${
                      openFaq === idx
                        ? "bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rotate-180"
                        : "bg-white/5"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        openFaq === idx ? "text-[#1c130e]" : "text-[#e2b27a]"
                      }`}
                    />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-black via-[#1a1108] to-black overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] blur-2xl opacity-40" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center shadow-2xl">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-[#1c130e]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4 sm:mb-6 leading-tight">
            Configure Your Next
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
              Quiet Upgrade
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Join a community of detail-obsessed drivers and discover what a
            carefully calibrated module can do for everyday journeys.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <a
              href={BRANDING.links.products}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold hover:bg-white/90 transition-all group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BRANDING.links.contact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-transparent border-2 border-white/20 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold hover:border-white/40 transition-all group"
            >
              <span>Contact Specialist</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust badges - Responsive */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/60 text-xs sm:text-sm px-4">
            {[
              "Plug & Play Installation",
              "Reversible at Any Time",
              "Engineered in Germany",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e2b27a] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="relative bg-black border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center">
                <Bolt className="w-5 h-5 sm:w-7 sm:h-7 text-[#1c130e]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  MAXOTO
                </h3>
                <p className="text-[8px] sm:text-[9px] text-[#c3ac93] uppercase tracking-[0.25em]">
                  Performance Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Links - Responsive grid */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 mb-8 sm:mb-12 text-xs sm:text-sm">
            {[
              "PowerControl",
              "PedalBox",
              "Technology",
              "Contact",
              "Privacy",
              "Terms",
              "Warranty",
              "Support",
            ].map((link, index) => (
              <a
                key={index}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="text-white/60 hover:text-white transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-[10px] sm:text-xs text-white/40 tracking-wider">
            © {new Date().getFullYear()} MAXOTO. All rights reserved.
            Engineering Excellence.
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dash {
          from {
            stroke-dashoffset: -50;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-dash {
          animation: dash 8s linear infinite;
        }

        .animate-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        [data-animate] {
          opacity: 0;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
