import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
