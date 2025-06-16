import Hero from '@/components/hero/hero';
import Services from '@/components/services';
import FooterCard from '@/components/ui/footercard';
import AboutUs from '@/components/about';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <FooterCard />
    </>
  )
}