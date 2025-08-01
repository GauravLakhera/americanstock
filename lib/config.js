// Configuration for the website
export const siteConfig = {
  name: "American Stock Market Institute",
  description: "Learn Trading, Earn Smart, Build Wealth",
  url: "https://americanstockmarketinstitute.in",
  
  // Batch countdown configuration
  nextBatchDate: new Date('2025-02-15T09:00:00'), // Next batch start date
  
  // Contact information
  contact: {
    phone: "+91 9927586879",
    whatsapp: "+91 9927586879",
    email: "info@americanstockmarketinstitute.in",
    address: "Nehru Colony, Behind LIC Building , Dehradun , Uttarakhand",
  },
  
  // Social media links
  social: {
    instagram: "https://instagram.com/americanstockmarket",
    telegram: "https://t.me/americanstockmarket",
    youtube: "https://youtube.com/@americanstockmarket",
  },
  
  // Statistics
  stats: {
    studentsTrained: 1000,
    yearsActive: 5,
    successRate: 95,
  },
  
  // Navigation links
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};

export const benefits = [
  {
    icon: "TrendingUp",
    title: "Live Market Trading",
    description: "Learn with real-time market data and live trading sessions."
  },
  {
    icon: "Users",
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals with proven track records."
  },
  {
    icon: "BookOpen",
    title: "Comprehensive Curriculum",
    description: "From basics to advanced strategies, we cover everything you need."
  },
  {
    icon: "Shield",
    title: "Risk Management",
    description: "Master the art of protecting your capital while maximizing returns."
  },
  {
    icon: "Award",
    title: "Certified Training",
    description: "Receive industry-recognized certification upon course completion."
  },
  {                   
    icon: 'PieChart',
    title: 'Data-Driven',
    description: 'Trade decisions backed by hard numbers.'
  }
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    content: "The live trading sessions were incredible. I went from zero knowledge to making consistent profits in just 3 months.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Homemaker",
    content: "The mentors are amazing! They simplified complex concepts and helped me build confidence in trading.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    content: "Best investment I ever made. The course not only taught me trading but also helped me understand market psychology.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer beginner to advanced level courses in stock market trading, including: Technical Analysis Fundamental Analysis Options Trading Intraday and Swing Trading"
  },
  {
    question: "Do I need any prior knowledge of finance or trading to join?",
    answer: "No prior knowledge is required for beginner courses. We start from the basics and gradually build up to advanced concepts."
  },
  {
    question: "Are the classes online or offline?",
    answer: "We offer both online and offline classes. You can choose the mode that best suits your convenience."
  },
  {
    question: "Who are the instructors?",
    answer: "Our instructors are experienced traders and professionals with real-time market exposure and years of teaching expertise."
  },
    {
    question: "Will I get practical/live trading experience?",
    answer: "Absolutely! Most of our programs include live market trading sessions, back-testing strategies, and simulation tools."
  },
    {
    question: "What is the course fee structure?",
    answer: "Fees vary depending on the course. Please contact us directly for the latest pricing and any available offers"
  },
    {
    question: "Do you offer lifetime access or support?",
    answer: "Yes, we provide lifetime mentorship, group discussion forums, and free access to future webinars for select programs."
  },
    {
    question: "Can I repeat a missed class?",
    answer: "Yes, recordings are available for online classes, and offline students can attend makeup sessions as per availability."
  },
    {
    question: "Do you offer any demo class?",
    answer: "Yes, we offer free demo classes. Contact us to book your spot."
  }
];