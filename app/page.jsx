import Hero from '../components/Hero';
import BenefitsGrid from '../components/BenefitsGrid';
import BatchCountdown from '../components/BatchCountdown';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';
import BatchCTA from "../components/BatchCTA"
import AboutPage from './about/page';
import AboutUs from '@/components/AboutUs';

export const metadata = {
  title: 'American Stock Market Institute - Learn Trading, Earn Smart, Build Wealth',
  description: 'Master the art of trading with professional guidance. Transform your financial future with our comprehensive stock market education program.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section 1 */}
      <Hero
        title="🚀 Learn Trading. Earn Smart. Build Wealth."
        subtitle="Master the art of trading with professional guidance. Transform your financial future with our comprehensive stock market education program."
        ctaText="START — Get Details"
        ctaHref="/contact"
      />

      {/* Benefits Grid */}
      <BenefitsGrid />

<BatchCTA/>

<AboutUs/>

      {/* Batch Countdown */}
      <BatchCountdown />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* FAQ */}
      <FAQ />
    </>
  );
}