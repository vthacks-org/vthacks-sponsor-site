import MLHBadge from "./components/MLHBadge"
import Hero from "./components/Hero"
import SponsorTable from "./components/SponsorTable"
import Sponsors from "./components/Sponsors"

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center group">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
        {value}
      </div>
      <div className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-[0.2em] mt-2 group-hover:text-zinc-300 transition-colors duration-300">
        {label}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#050404] text-white selection:bg-white/20">
      <MLHBadge />

      {/* Hero Section - Full Width */}
      <Hero />

      {/* Stats Section - Full Width to match hero */}
      <div className="w-full px-8 md:px-16 lg:px-24 py-24 md:py-32" id="sponsors">
        <div className="max-w-6xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-24">
            <StatItem value="850+" label="Attendees" />
            <StatItem value="51+" label="Universities" />
            <StatItem value="35%" label="Underrepresented" />
            <StatItem value="#10" label="MLH University" />
            <StatItem value="2nd" label="Largest on East Coast" />
          </div>

          {/* Sponsors Slider */}
          <div className="w-full max-w-5xl mx-auto opacity-40 hover:opacity-100 transition-opacity duration-500">
            <Sponsors />
          </div>
        </div>
      </div>

      {/* Sponsorship Table - Contained */}
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SponsorTable />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-8 md:px-16 lg:px-24 pb-16">
        <div className="max-w-6xl mx-auto border-t border-zinc-800 pt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Reach out!</h2>
          <div className="flex justify-center gap-8 text-zinc-500 flex-wrap">
            <a href="https://vthacks.com" className="hover:text-white transition-colors">vthacks.com</a>
            <a href="mailto:sponsorship@vthacks.com" className="hover:text-white transition-colors">sponsorship@vthacks.com</a>
            <a href="https://instagram.com/vthacks" className="hover:text-white transition-colors">@vthacks</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
