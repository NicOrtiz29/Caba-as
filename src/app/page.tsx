import Header from "@/components/header";
import Hero from "@/components/hero";
import CabinShowcase from "@/components/cabin-showcase";
import MapSection from "@/components/map-section";
import ItineraryGenerator from "@/components/itinerary-generator";
import Testimonials from "@/components/testimonials";
import BookingForm from "@/components/booking-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <CabinShowcase />
        <MapSection />
        <ItineraryGenerator />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
