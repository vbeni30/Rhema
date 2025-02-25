import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import WhoWeAre from "@/components/WhoWeAre"
import OurServices from "@/components/OurServices"
import UpcomingEvents from "@/components/UpcomingEvents"
import Testimonials from "@/components/Testimonials"
import SermonArchive from "@/components/SermonArchive"
import DonationCTA from "@/components/DonationCTA"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <UpcomingEvents />
      <Testimonials />
      <SermonArchive />
      <DonationCTA />
      <Newsletter />
      <Footer />
    </main>
  )
}

