import Header from "./components/Headers";
import MainBanner from "./components/MainBanner";
import BookingSection from "./components/BookingSection";
import EventSection from "./components/EventSection";
import DestinationSection from "./components/DestinationSection";
import PriceChart from "./components/PriceChart";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <BookingSection />
      <EventSection />
      <DestinationSection />
      <PriceChart />
      <NewsSection />
      <Footer />
    </main>
  );
}
