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
    address: "Nehru Colony, Near LIC Building , Dehradun , Uttarakhand",
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
    question: "What is the duration of the course?",
    answer: "Our comprehensive trading course is designed for 3-6 months, depending on the module you choose. We also provide lifetime mentorship support."
  },
  {
    question: "Do I need prior trading experience?",
    answer: "Not at all! Our course is designed for complete beginners. We start from the basics and gradually build up to advanced trading strategies."
  },
  {
    question: "What is the success rate of your students?",
    answer: "Our students have an average success rate of 87% in achieving consistent profitability within 6 months of course completion."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we have partnerships with leading financial firms and provide job placement assistance for our top-performing students."
  }
];