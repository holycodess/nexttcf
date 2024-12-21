import FlightSearch from "@/components/flight-search"
import ServiceTabs from "@/components/tabs/service-tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServiceTabs />
      <div className="flex-1 p-4 md:pl-20">
        <FlightSearch />
      </div>
    </div>
  )
}