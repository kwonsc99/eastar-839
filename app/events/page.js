// pages/events.js 또는 app/events/page.js (Next.js 13+ App Router)
import Event from "../components/Event";
import Header from "../components/Headers";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Event />
    </div>
  );
}
