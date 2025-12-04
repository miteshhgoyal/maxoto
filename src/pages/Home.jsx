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
  Wrench,
  Truck,
  Clock,
  BadgeCheck,
  LineChart,
  BarChart3,
  Sparkle,
} from "lucide-react";

// ============================================
// MAXOTO PREMIUM BRANDING
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
    satisfaction: "99.8%",
    experience: "20+ Years",
  },
};

const MaxotoLuxuryPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const scrollContainerRef = useRef(null);

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

  // Smooth testimonials scroll
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

  // PRODUCTS
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
        {
          label: "Power Gain",
          value: "+30%",
          icon: Flame,
          color: "text-[#e2b27a]",
        },
        {
          label: "Torque Gain",
          value: "+30%",
          icon: Rocket,
          color: "text-[#e2b27a]",
        },
        {
          label: "Compatibility",
          value: "4,000+",
          icon: Trophy,
          color: "text-[#e2b27a]",
        },
      ],
      features: [
        "Vehicle-specific maps for thousands of engines",
        "Engine Protect+ monitors key parameters in real time",
        "No permanent changes to the ECU flash",
        "Optimized for daily driving, touring, and towing",
        "Dyno-developed calibrations with road validation",
        "Fully reversible with OEM-style connectors",
      ],
      example: "Audi A3 (8V) 1.6 TDI 110 HP",
      technicalHighlights: [
        "Multi-channel sensor interfacing",
        "High-speed microcontroller platform",
        "Thermal and voltage protection layers",
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
        {
          label: "Response",
          value: "+25%",
          icon: Zap,
          color: "text-[#f0d7ac]",
        },
        {
          label: "Settings",
          value: "30+",
          icon: Settings,
          color: "text-[#f0d7ac]",
        },
        {
          label: "Install",
          value: "5-10min",
          icon: Timer,
          color: "text-[#f0d7ac]",
        },
      ],
      features: [
        "Profiles for Comfort, City, Sport, and Track use",
        "Fine adjustment inside each main mode",
        "Memory function retains last setting at key-on",
        "Compact handset with discreet mounting options",
        "Optimised for both ICE and selected EV platforms",
        "Zero impact on factory safety systems",
      ],
      example: "Toyota Land Cruiser 4.2 TD",
      technicalHighlights: [
        "High-resolution throttle signal processing",
        "Mode-specific response curves",
        "Fail-safe bypass logic",
      ],
    },
  ];

  // WHY MAXOTO
  const whyMaxoto = [
    {
      icon: Layers,
      title: "Umbrella of Innovation",
      description:
        "MAXOTO unites performance upgrades, diagnostics, and data services under a single, coherent engineering vision for modern vehicles.",
      color: "from-[#f0d7ac] to-[#c89a5b]",
      stat: "Multiple Verticals",
    },
    {
      icon: Award,
      title: "Exclusive Partnerships",
      description:
        "Development is anchored by long-term partnerships with European electronics specialists, including DTE Systems Germany.",
      color: "from-[#e2b27a] to-[#b77b44]",
      stat: "DTE Germany",
    },
    {
      icon: Cpu,
      title: "Future-Ready Technology",
      description:
        "Hardware and firmware stacks are designed for over-the-air updatability and compatibility with ICE, hybrid, and EV architectures.",
      color: "from-[#f5e3c8] to-[#c89a5b]",
      stat: "All Powertrains",
    },
  ];

  // JOURNEY
  const processSteps = [
    {
      number: "01",
      icon: Target,
      title: "Configure Your Vehicle",
      description:
        "Enter brand, model, year, and engine code to see compatible hardware, indicative gains, and available packages.",
      color: "from-[#e2b27a] to-[#c2894b]",
    },
    {
      number: "02",
      icon: Package,
      title: "Curated Package Creation",
      description:
        "Our configurator suggests the right combination of PowerControl, PedalBox, and accessories for your use case.",
      color: "from-[#f0d7ac] to-[#c89a5b]",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Installation & Setup",
      description:
        "Choose between certified partner installation or guided self-install with step-by-step visuals and video support.",
      color: "from-[#dec5a0] to-[#b17b44]",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Calibration & Fine-Tuning",
      description:
        "Tailor modes, sensitivity, and profiles to your preferences, and store multiple driver presets.",
      color: "from-[#f5e3c8] to-[#c89a5b]",
    },
  ];

  // TESTIMONIALS
  const testimonials = [
    {
      name: "Marcus Reynolds",
      role: "Automotive Enthusiast",
      location: "Munich, Germany",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "PowerControl transformed mid-range response while leaving the car’s refinement untouched. It feels like a higher-output factory tune rather than an add-on.",
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
    {
      name: "Isabella Rossi",
      role: "Luxury Car Owner",
      location: "Milan, Italy",
      avatar: "https://i.pravatar.cc/150?img=26",
      text: "Install was neat and reversible, and the interior remains visually untouched—exactly what I wanted.",
      rating: 5,
      vehicle: "Mercedes-AMG GT",
      verified: true,
    },
    {
      name: "David Park",
      role: "Tech Entrepreneur",
      location: "Seoul, South Korea",
      avatar: "https://i.pravatar.cc/150?img=51",
      text: "The combination of clear documentation, hardware quality, and support made the upgrade feel like dealing with an OEM supplier.",
      rating: 5,
      vehicle: "Tesla Model S Plaid",
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
    {
      question: "Can I revert to stock behaviour?",
      answer:
        "Yes. Removing the module restores stock response. PedalBox can be disabled from its handset, and PowerControl can be unplugged and bridged with the original connectors.",
    },
    {
      question: "Is MAXOTO legal in my market?",
      answer:
        "Local regulations differ. MAXOTO modules are designed as auxiliary devices, and customers are advised to follow regional legislation and inspection requirements.",
    },
    {
      question: "Can one module be moved between vehicles?",
      answer:
        "In many cases, harness swaps or re-coding allow reuse on another compatible platform. Our team can advise based on VIN and engine codes.",
    },
    {
      question: "Do you offer fleet or business solutions?",
      answer:
        "Yes. Dedicated account managers work with fleet operators, tuners, and dealerships to design scalable upgrade programs.",
    },
  ];

  // SERVICE BENEFITS
  const serviceBenefits = [
    {
      icon: Shield,
      title: "Lifetime Support",
      description:
        "Direct access to technical specialists familiar with your exact platform.",
      color: "text-[#e2b27a]",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description:
        "Secure, tracked logistics with packaging designed to protect electronics.",
      color: "text-[#f0d7ac]",
    },
    {
      icon: BadgeCheck,
      title: "Certified Quality",
      description:
        "ISO-aligned assembly and testing for every production batch.",
      color: "text-[#f5e3c8]",
    },
    {
      icon: Clock,
      title: "Rapid Installation",
      description:
        "Typical installs completed inside a single service appointment.",
      color: "text-[#e2b27a]",
    },
  ];

  // OWNERSHIP HIGHLIGHTS
  const ownershipHighlights = [
    {
      icon: Activity,
      label: "Dynamic Driving",
      value:
        "Balanced calibrations that keep everyday refinement while adding urgency when requested.",
    },
    {
      icon: LineChart,
      label: "Measured Gains",
      value:
        "Independent dyno figures demonstrate repeatable improvements across torque bands.",
    },
    {
      icon: Users,
      label: "Community",
      value:
        "Owner meets, technical deep-dives, and test days hosted with partner facilities.",
    },
    {
      icon: Globe,
      label: "Global Presence",
      value: `${BRANDING.stats.countries} active markets through distributors and installers.`,
    },
  ];

  // TECH STACK
  const techStack = [
    {
      icon: CircuitBoard,
      title: "Automotive-Grade Hardware",
      text: "PCBs, housings, and connectors designed for vibration, heat, and moisture in engine bays and cabins.",
    },
    {
      icon: Cpu,
      title: "Real-Time Processing",
      text: "High-speed microcontrollers process sensor data and pedal inputs within milliseconds.",
    },
    {
      icon: Activity,
      title: "Safety Layers",
      text: "Redundant monitoring, watchdog logic, and conservative default maps protect critical systems.",
    },
    {
      icon: BarChart3,
      title: "Data-Led Development",
      text: "Dyno sessions, telemetry logs, and customer feedback all feed into map refinement.",
    },
  ];

  // NETWORK GRID
  const networkStats = [
    { label: "Certified Installers", value: "120+", icon: Wrench },
    { label: "Partner Dealerships", value: "80+", icon: MapPin },
    { label: "Test Vehicles", value: "160+", icon: Box },
    { label: "Support Languages", value: "10+", icon: Globe },
  ];

  // CTA Button
  const CTAButton = ({
    href,
    children,
    className = "",
    size = "default",
    variant = "primary",
  }) => {
    const sizeClasses = {
      small: "px-5 py-2.5 text-sm",
      default: "px-7 py-3.5 text-base",
      large: "px-9 py-4 text-lg",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-[#e2b27a] via-[#d3a267] to-[#b77b44] text-[#1c130e] hover:from-[#f0d7ac] hover:to-[#b77b44] shadow-lg shadow-[#b77b44]/25",
      secondary:
        "bg-white/5 backdrop-blur-sm text-[#f5e3c8] border border-white/15 hover:bg-white/10 hover:border-white/30",
      ghost:
        "bg-transparent text-[#e2b27a] border-2 border-[#e2b27a]/60 hover:bg-[#e2b27a] hover:text-[#1c130e] hover:border-[#e2b27a]",
    };

    return (
      <a
        href={href}
        className={`group inline-flex items-center justify-center gap-2.5 ${sizeClasses[size]} ${variantClasses[variant]} font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] ${className}`}
      >
        <span className="tracking-wide">{children}</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-[#080606] text-white overflow-hidden">
      {/* Global SVG background patterns */}
      <div className="fixed inset-0 z-0">
        {/* Fine cross grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23a67c52' stroke-width='0.4'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Diagonal weave */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(200,154,91,0.22) 0px, rgba(200,154,91,0.22) 1px, transparent 1px, transparent 10px)",
          }}
        />
        {/* Hex mesh */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='78' viewBox='0 0 90 78' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 2l22 12v24L22 50 0 38V14L22 2zm46 0l22 12v24L68 50 46 38V14L68 2z' fill='none' stroke='%237f5a3a' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "90px 78px",
          }}
        />
        {/* Dot field */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(245,227,200,0.35) 1px, transparent 0)",
            backgroundSize: "55px 55px",
          }}
        />
        {/* Soft orbs */}
        <div className="absolute -top-1/3 -left-1/3 w-[650px] h-[650px] bg-gradient-radial from-[#e2b27a]/20 via-[#a67c52]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-1/3 w-[520px] h-[520px] bg-gradient-radial from-[#f0d7ac]/18 via-[#b78a57]/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/3 left-1/4 w-[580px] h-[580px] bg-gradient-radial from-[#c29a6a]/15 via-[#604534]/5 to-transparent rounded-full blur-3xl" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50" />
      </div>

      {/* Offer bar */}
      <div className="relative z-40 bg-[#d4b28a] text-[#271710] text-sm md:text-base py-2 px-4 flex flex-col md:flex-row items-center justify-center gap-1 border-b border-[#b3895c]">
        <p className="text-center font-medium">
          Introductory programs available for selected vehicles with full module
          and harness warranty.
        </p>
        <a
          href={BRANDING.links.products}
          className="underline underline-offset-4 font-semibold text-[#3e2414]"
        >
          View Programs
        </a>
      </div>

      {/* Nav */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-black/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-lg blur-sm opacity-60" />
                <div className="relative w-9 h-9 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-lg flex items-center justify-center">
                  <Bolt className="w-5 h-5 text-[#1c130e]" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">
                  MAXOTO
                </h1>
                <p className="text-[9px] text-[#c3ac93] uppercase tracking-[0.18em]">
                  Performance Engineering
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="#products"
                className="text-sm text-[#d1c0aa] hover:text-[#f0d7ac] font-medium"
              >
                Products
              </a>
              <a
                href="#process"
                className="text-sm text-[#d1c0aa] hover:text-[#f0d7ac] font-medium"
              >
                Journey
              </a>
              <a
                href="#tech"
                className="text-sm text-[#d1c0aa] hover:text-[#f0d7ac] font-medium"
              >
                Technology
              </a>
              <a
                href="#ownership"
                className="text-sm text-[#d1c0aa] hover:text-[#f0d7ac] font-medium"
              >
                Ownership
              </a>
              <a
                href="#testimonials"
                className="text-sm text-[#d1c0aa] hover:text-[#f0d7ac] font-medium"
              >
                Reviews
              </a>
              <CTAButton
                href={BRANDING.links.contact}
                size="small"
                variant="primary"
              >
                Contact
              </CTAButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content wrapper */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
          {/* hero-specific stripe */}
          <div
            className="absolute inset-x-0 top-0 h-40 opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(245,227,200,0.22) 0, rgba(245,227,200,0.22) 1px, transparent 1px, transparent 16px)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24 relative z-10">
            {/* trust badge */}
            <div className="flex justify-center mb-10" data-animate>
              <div className="relative inline-flex items-center gap-2.5 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/12 rounded-full">
                <div className="flex -space-x-1.5">
                  {[12, 45, 33].map((img) => (
                    <div
                      key={img}
                      className="w-7 h-7 rounded-full border-2 border-[#120c09] ring-1 ring-[#e2b27a]/50 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/40?img=${img}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-[#e2d4c0] font-medium">
                  Trusted by {BRANDING.stats.customers} drivers worldwide
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-[#e2b27a] fill-[#e2b27a]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* headline */}
            <div className="text-center max-w-4xl mx-auto mb-12" data-animate>
              <div className="mb-5">
                <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em]">
                  Tailored Performance, Calm Luxury
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                <span className="text-white">Quietly Redefine</span>
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] via-[#e2b27a] to-[#b77b44]">
                    Every Drive
                  </span>
                  <div className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e2b27a]/70 to-transparent" />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#d1c0aa] leading-relaxed max-w-2xl mx-auto mb-9">
                MAXOTO modules offer measurable gains and sharper response while
                respecting the original character of your vehicle. Each
                application is validated on-road and on dynos to feel cohesive,
                not intrusive.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <CTAButton
                  href={BRANDING.links.products}
                  size="large"
                  variant="primary"
                >
                  Explore Products
                </CTAButton>
                <CTAButton href="#process" size="large" variant="secondary">
                  View Ownership Journey
                </CTAButton>
              </div>
            </div>

            {/* hero stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              data-animate
            >
              {[
                { icon: Flame, value: "+30%", label: "Power" },
                { icon: Trophy, value: "4,000+", label: "Vehicles" },
                { icon: Timer, value: "15 min", label: "Install" },
                { icon: Shield, value: "99.8%", label: "Satisfaction" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group p-5 bg-gradient-to-br from-black/70 to-[#1a1511]/80 backdrop-blur-xl border border-white/8 rounded-xl hover:border-[#e2b27a]/40 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 0 0, rgba(226,178,122,0.35) 0, transparent 50%)",
                    }}
                  />
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#e2b27a]/25" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#e2b27a]/25" />
                  <div className="relative z-10">
                    <stat.icon className="w-7 h-7 text-[#e2b27a] mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#b1997a] uppercase tracking-[0.18em] font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND STORY / ABOUT */}
        <section className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, rgba(226,178,122,0.4), transparent)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
              <div data-animate>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  A Quietly Obsessive
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                    Engineering Culture
                  </span>
                </h2>
                <p className="text-[#d1c0aa] text-base leading-relaxed mb-4">
                  MAXOTO was founded by calibration engineers and test drivers
                  who spent their early careers inside OEM development programs.
                  The goal was simple: offer measurable performance benefits
                  without the drama and compromises that often define the
                  aftermarket.
                </p>
                <p className="text-[#d1c0aa] text-base leading-relaxed mb-4">
                  Every module is the product of hundreds of hours of data
                  logging, dyno work, and route validation on real roads—from
                  high-altitude passes to dense city traffic. The result is an
                  upgrade that integrates with how modern vehicles are actually
                  used.
                </p>
                <ul className="space-y-2.5 text-sm text-[#e1d2be]">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#e2b27a] mt-[2px]" />
                    Cross-functional teams spanning calibration, electronics,
                    and vehicle dynamics.
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#e2b27a] mt-[2px]" />
                    Development loops that include feedback from owners, tuners,
                    and professional drivers.
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#e2b27a] mt-[2px]" />
                    Documentation and support material written for both
                    enthusiasts and workshops.
                  </li>
                </ul>
              </div>

              <div
                className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 to-[#1b130f]/90 p-6 overflow-hidden"
                data-animate
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='52' fill='none' stroke='%23c89a5b' stroke-width='0.6' stroke-dasharray='4 4'/%3E%3Ccircle cx='60' cy='60' r='32' fill='none' stroke='%23f5e3c8' stroke-width='0.4' stroke-dasharray='2 6'/%3E%3Cline x1='8' y1='60' x2='112' y2='60' stroke='%23a67c52' stroke-width='0.4' stroke-dasharray='3 5'/%3E%3C/svg%3E")`,
                    backgroundSize: "120px 120px",
                  }}
                />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#1c130e]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#b1997a]">
                        Calibration Philosophy
                      </p>
                      <p className="text-sm text-[#f5e3c8] font-medium">
                        Factory integration, aftermarket flexibility.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#e1d2be] leading-relaxed">
                    Rather than chasing headline dyno figures at all costs,
                    MAXOTO focuses on sustainable, repeatable performance that
                    feels natural in day-to-day use. The emphasis is on how the
                    car responds through each gear, not only at maximum output.
                  </p>
                  <p className="text-sm text-[#e1d2be] leading-relaxed">
                    This approach is what allows MAXOTO-equipped vehicles to
                    retain the refinement and reliability that owners expect
                    from modern premium platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16" data-animate>
              <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Featured Modules
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Precision-Engineered
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  Performance Systems
                </span>
              </h2>
              <p className="text-lg text-[#d1c0aa] leading-relaxed">
                Two distinct modules, one philosophy—refinement without drama.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-3 mb-12" data-animate>
              {products.map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProduct(idx)}
                  className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
                    activeProduct === idx
                      ? "bg-gradient-to-r from-[#e2b27a] to-[#b77b44] text-[#1c130e] shadow-lg shadow-[#b77b44]/35 scale-105"
                      : "bg-white/5 text-[#d1c0aa] border border-white/10 hover:border-[#e2b27a]/40 hover:bg-white/10"
                  }`}
                >
                  <product.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{product.name}</span>
                </button>
              ))}
            </div>

            {/* Active product */}
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  activeProduct === idx ? "block" : "hidden"
                }`}
                data-animate
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Visual */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-10 rounded-2xl blur-3xl`}
                    />
                    <div className="relative p-10 bg-gradient-to-br from-black/75 via-[#18120f]/85 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                      {/* Hex svg overlay */}
                      <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='45' height='39' viewBox='0 0 45 39' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.5 1l17 9.5v19L22.5 39l-17-9.5v-19z' fill='none' stroke='%23b78a57' stroke-width='0.6'/%3E%3C/svg%3E")`,
                          backgroundSize: "45px 39px",
                        }}
                      />
                      <div className="relative aspect-square bg-gradient-to-br from-[#15100d] to-black rounded-xl flex items-center justify-center mb-6 overflow-hidden group">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />
                        <product.icon className="w-32 h-32 text-[#e2b27a] relative z-10" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {product.stats.map((stat, statIdx) => (
                          <div
                            key={statIdx}
                            className="relative text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-[#e2b27a]/40 transition-all overflow-hidden group"
                          >
                            <stat.icon
                              className={`w-6 h-6 ${stat.color} mx-auto mb-1.5 relative z-10`}
                            />
                            <div className="text-xl font-bold text-white mb-0.5 relative z-10">
                              {stat.value}
                            </div>
                            <div className="text-[10px] text-[#b1997a] uppercase tracking-[0.18em] font-medium relative z-10">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <div
                        className={`inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r ${product.accentColor} rounded-full mb-3`}
                      >
                        <product.icon className="w-4 h-4 text-[#1c130e]" />
                        <span className="text-[#1c130e] font-bold text-xs uppercase tracking-[0.22em]">
                          {product.name}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {product.tagline}
                      </h3>
                      <p className="text-lg text-[#f0d7ac] font-medium mb-4">
                        {product.subtitle}
                      </p>
                      <p className="text-base text-[#e1d2be] leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="relative p-3.5 bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#e2b27a] rounded-lg overflow-hidden">
                      <p className="text-xs text-[#b1997a] mb-0.5 relative z-10">
                        Example Application
                      </p>
                      <p className="text-white font-semibold text-sm relative z-10">
                        {product.example}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.technicalHighlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="relative px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-[#e1d2be] font-medium overflow-hidden"
                        >
                          <span className="relative z-10">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5">
                      {product.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="relative flex items-start gap-2.5 p-3 bg-white/4 backdrop-blur-sm border border-white/6 rounded-lg hover:border-[#e2b27a]/40 transition-all"
                        >
                          <div className="shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-[#1c130e]" />
                          </div>
                          <span className="text-[#e1d2be] leading-relaxed text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <CTAButton
                      href={BRANDING.links[product.id]}
                      size="default"
                      variant="primary"
                    >
                      Discover {product.name}
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY / PROCESS */}
        <section id="process" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#130e0a] to-black" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16" data-animate>
              <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Ownership Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                From Curiosity to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  Calibrated Confidence
                </span>
              </h2>
              <p className="text-lg text-[#d1c0aa] leading-relaxed">
                A short, guided path from first inquiry to your first drive.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              data-animate
            >
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-gradient-to-br from-black/80 to-[#15100d]/90 backdrop-blur-xl border border-white/12 rounded-2xl hover:border-[#e2b27a]/45 transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#e2b27a]/30" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#e2b27a]/30" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-6 h-6 text-[#21140f]" />
                      </div>
                      <span className="text-5xl font-bold text-white/5">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2.5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#d1c0aa] leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section id="tech" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16" data-animate>
              <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Inside the Hardware
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                A Modern
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  Electronics Platform
                </span>
              </h2>
              <p className="text-lg text-[#d1c0aa] leading-relaxed">
                Designed for the thermal, electrical, and mechanical realities
                of real vehicles.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              data-animate
            >
              {techStack.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-6 bg-gradient-to-br from-black/80 to-[#18120f]/88 border border-white/10 rounded-2xl hover:border-[#e2b27a]/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#e2b27a]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#d1c0aa] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Network stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-white/10 rounded-2xl bg-gradient-to-r from-black/80 via-[#1b130f]/85 to-black/80 p-6"
              data-animate
            >
              {networkStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#e2b27a]" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#b1997a]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OWNERSHIP HIGHLIGHTS */}
        <section id="ownership" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
              <div data-animate>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Subtle Details
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                    Enthusiasts Notice
                  </span>
                </h2>
                <p className="text-[#d1c0aa] text-base leading-relaxed mb-5">
                  MAXOTO modules are designed to feel native to your vehicle,
                  with carefully chosen connectors, cable lengths, and mounting
                  hardware that respect the original engineering. Installations
                  are discreet, service-friendly, and free from unnecessary
                  intrusion into existing looms.
                </p>
                <ul className="space-y-2.5 text-sm text-[#e1d2be]">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#e2b27a] mt-[2px]" />
                    OEM-style harnesses with automotive-grade sleeving and
                    seals.
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#e2b27a] mt-[2px]" />
                    Clear, illustrated guides that match your engine bay layout.
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#e2b27a] mt-[2px]" />
                    Mounting strategies that avoid drilling or permanent
                    modifications.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4" data-animate>
                {ownershipHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative p-4 bg-gradient-to-br from-black/75 to-[#18120f]/85 border border-white/10 rounded-xl"
                  >
                    <item.icon className="w-5 h-5 text-[#e2b27a] mb-2" />
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#b1997a] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#e1d2be] leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE BENEFITS */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
              data-animate
            >
              {serviceBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="relative p-5 bg-gradient-to-br from-black/80 to-[#191310]/85 backdrop-blur-xl border border-white/10 rounded-xl hover:border-[#e2b27a]/40 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                      <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-[#d1c0aa] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MAXOTO */}
        <section id="technology" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16" data-animate>
              <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Why Choose MAXOTO
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Redefining Automotive
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  Performance Standards
                </span>
              </h2>
              <p className="text-lg text-[#d1c0aa] leading-relaxed">
                A legacy of innovation, precision, and excellence.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              data-animate
            >
              {whyMaxoto.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-gradient-to-br from-black/80 to-[#18120f]/88 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#e2b27a]/40 transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#e2b27a]/15 group-hover:border-[#e2b27a]/30 transition-colors" />
                  <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#e2b27a]/15 group-hover:border-[#e2b27a]/30 transition-colors" />
                  <div className="relative z-10">
                    <div className="relative inline-block mb-5">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#f0d7ac] font-semibold mb-3">
                      {feature.stat}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#e1d2be] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-animate>
              <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Customer Stories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Built for Drivers Who
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  Notice Everything
                </span>
              </h2>
              <p className="text-lg text-[#d1c0aa] leading-relaxed">
                {BRANDING.stats.customers} owners have already made the quiet
                upgrade.
              </p>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
              data-animate
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative shrink-0 w-[380px] p-6 bg-gradient-to-br from-black/80 to-[#18120f]/85 backdrop-blur-xl border border-white/12 rounded-2xl hover:border-[#e2b27a]/45 transition-all shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#e2b27a]/30" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#e2b27a]/30" />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#e2b27a] fill-[#e2b27a]"
                        />
                      ))}
                    </div>
                    <p className="text-base text-[#e1d2be] leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full ring-2 ring-[#e2b27a]/55"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-full flex items-center justify-center ring-2 ring-black">
                            <Check className="w-2.5 h-2.5 text-[#1c130e]" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-base mb-0.5">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-[#f0d7ac] font-medium mb-0.5">
                          {testimonial.vehicle}
                        </div>
                        <div className="text-xs text-[#b1997a]">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16" data-animate>
              <span className="inline-block px-3.5 py-1.5 bg-gradient-to-r from-[#e2b27a]/12 to-[#f0d7ac]/15 border border-[#e2b27a]/30 rounded-full text-[#f0d7ac] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Everything You Need
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] to-[#e2b27a]">
                  To Decide Clearly
                </span>
              </h2>
            </div>

            <div className="space-y-3" data-animate>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="relative bg-gradient-to-br from-black/80 to-[#18120f]/85 backdrop-blur-xl border border-white/12 rounded-xl overflow-hidden hover:border-[#e2b27a]/40 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="relative w-full flex items-center justify-between p-5 text-left group z-10"
                  >
                    <span className="font-semibold text-white text-base pr-6 group-hover:text-[#f0d7ac] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        openFaq === idx
                          ? "bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rotate-180"
                          : "bg-white/5 group-hover:bg-white/10"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 ${
                          openFaq === idx ? "text-[#21140f]" : "text-[#e2b27a]"
                        }`}
                      />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="relative px-5 pb-5 z-10">
                      <div className="p-4 bg-white/4 border border-white/8 rounded-lg">
                        <p className="text-[#e1d2be] leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b1b11] to-black" />
          <div
            className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10"
            data-animate
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-2xl blur-xl opacity-40" />
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-2xl shadow-2xl shadow-[#b77b44]/40">
                <Rocket className="w-8 h-8 text-[#21140f]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Configure Your Next
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e3c8] via-[#e2b27a] to-[#b77b44]">
                Quiet Upgrade
              </span>
            </h2>
            <p className="text-lg text-[#d1c0aa] mb-10 max-w-2xl mx-auto leading-relaxed">
              Join a community of detail-obsessed drivers and discover what a
              carefully calibrated module can do for everyday journeys and
              long-distance escapes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
              <CTAButton
                href={BRANDING.links.products}
                size="large"
                variant="primary"
              >
                Explore Our Collection
              </CTAButton>
              <CTAButton
                href={BRANDING.links.contact}
                size="large"
                variant="ghost"
              >
                Speak with a Specialist
              </CTAButton>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#b1997a] text-sm font-medium">
              {[
                "Plug & Play Installation",
                "Reversible at Any Time",
                "Engineered in Germany",
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center gap-2">
                  <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-[#e2b27a] to-[#b77b44] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#21140f]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative border-t border-white/12 bg-gradient-to-b from-black to-[#120d09] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="relative w-9 h-9 bg-gradient-to-br from-[#e2b27a] to-[#b77b44] rounded-lg flex items-center justify-center">
                    <Bolt className="w-5 h-5 text-[#21140f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">MAXOTO</h3>
                    <p className="text-[9px] text-[#c3ac93] uppercase tracking-[0.18em]">
                      Performance Engineering
                    </p>
                  </div>
                </div>
                <p className="text-[#d1c0aa] leading-relaxed max-w-md mb-5 text-sm">
                  {BRANDING.tagline}. Delivering precision-engineered
                  performance solutions developed in partnership with European
                  electronics specialists.
                </p>
                <p className="text-xs text-[#a58b71]">
                  Elevating the driving experience for discerning enthusiasts in{" "}
                  {BRANDING.stats.countries} markets.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-[0.22em] text-xs mb-4">
                  Products
                </h4>
                <div className="space-y-2.5">
                  {[
                    "PowerControl",
                    "PedalBox",
                    "All Products",
                    "Compatibility",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block text-[#d1c0aa] hover:text-[#f0d7ac] transition-colors text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-[0.22em] text-xs mb-4">
                  Company
                </h4>
                <div className="space-y-2.5">
                  {["Technology", "Testimonials", "Contact", "Support"].map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block text-[#d1c0aa] hover:text-[#f0d7ac] transition-colors text-sm"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <p className="text-[#a58b71] text-xs">
                  © 2025 MAXOTO. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  {["Privacy Policy", "Terms of Service", "Warranty"].map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-[#a58b71] hover:text-[#f0d7ac] transition-colors text-xs"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global styles */}
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        [data-animate] {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default MaxotoLuxuryPage;
