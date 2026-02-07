import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Logo from "./components/logo"

const tiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Virtual']
const prices = ['$2,500', '$6,000', '$8,000', '$12,000', '$25,000', '$3,000']

function Val({ v }: { v: string }) {
  if (v === '✓') return <span className="text-white">✓</span>
  if (v === '—') return <span className="text-zinc-600">—</span>
  return <span>{v}</span>
}

function FeatureRow({ name, desc, values }: { name: string; desc?: string; values: string[] }) {
  return (
    <TableRow className="border-zinc-800">
      <TableCell className="py-5 w-[280px]">
        <div className="font-medium text-white">{name}</div>
        {desc && <div className="text-sm text-zinc-500 mt-1">{desc}</div>}
      </TableCell>
      {values.map((v, i) => (
        <TableCell key={i} className="text-center text-zinc-300 w-[100px]">
          <Val v={v} />
        </TableCell>
      ))}
    </TableRow>
  )
}

function SectionRow({ title }: { title: string }) {
  return (
    <TableRow className="border-zinc-800 hover:bg-transparent">
      <TableCell colSpan={7} className="pt-10 pb-4 bg-[#050404]">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </TableCell>
    </TableRow>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#050404] text-white">
      <div className="max-w-5xl mx-auto px-8 py-12">

        <Logo />

        {/* Hero */}

        {/* Letter */}
        <div className="mb-16 text-zinc-400 space-y-4 text-xl">
          <p>Dear Potential Sponsor,</p>
          <p>
            We're thrilled to announce VTHacks 14, Virginia Tech's premier hackathon and one of the largest collegiate
            hackathons on the east coast. As a top 10 Major League Hacking University, we invite you to support the next
            generation of tech innovators. This 36-hour, in-person hackathon brings together brilliant students to
            create innovative software solutions.
          </p>
          <p>
            With more than 20 benefits for our partners, VTHacks 14 offers a unique platform to connect with the tech
            industry's brightest minds. Thank you for considering support for VTHacks. We're eager to collaborate and make this year's hackathon the
            best yet. For more details, contact us at sponsorship@vthacks.com.
          </p>
          <p>Best,<br />The VTHacks Team</p>
        </div>

        {/* Stats */}
        <h2 className="text-2xl font-semibold mb-6">VTHacks by the numbers</h2>
        <div className="border-t border-zinc-800 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 py-8">
            <div className="text-center"><div className="text-3xl font-bold">850+</div><div className="text-sm text-zinc-500">Attendees</div></div>
            <div className="text-center"><div className="text-3xl font-bold">51+</div><div className="text-sm text-zinc-500">Universities</div></div>
            <div className="text-center"><div className="text-3xl font-bold">35%</div><div className="text-sm text-zinc-500">Underrepresented</div></div>
            <div className="text-center"><div className="text-3xl font-bold">#10</div><div className="text-sm text-zinc-500">MLH University</div></div>
            <div className="text-center"><div className="text-3xl font-bold">2nd</div><div className="text-sm text-zinc-500">Largest on East Coast</div></div>
          </div>
        </div>

        {/* Table */}
        <div className="mb-16">
          <Table className="table-fixed">
            <TableHeader className="sticky top-0 z-10 backdrop-blur-sm bg-[#050404]/80">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="w-[280px] text-zinc-400 py-4">Tiers</TableHead>
                {tiers.map((tier, i) => (
                  <TableHead key={tier} className="text-center w-[100px] py-4">
                    <div className="text-white font-semibold">{tier}</div>
                    <div className="text-zinc-500 text-sm font-normal">{prices[i]}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* General */}
              <SectionRow title="General" />
              <FeatureRow name="Send Representatives" desc="Show up in person at VTHacks!" values={['✓', '✓', '✓', '✓', '✓', '—']} />
              <FeatureRow name="Hacker Contact Info" desc="Receive contact information of hackers post-event." values={['✓', '✓', '✓', '✓', '✓', '✓']} />
              <FeatureRow name="Sponsor Table" desc="A table to showcase recruiting materials." values={['S', 'S', 'L', 'L', 'L', '—']} />
              <FeatureRow name="Sponsor Snack Lounge" desc="Access to exclusive sponsor-only snack lounge." values={['✓', '✓', '✓', '✓', '✓', '—']} />
              <FeatureRow name="Resume Book" desc="Access to database of registrants' resumes." values={['—', '✓', '✓', '✓', '✓', '✓']} />
              <FeatureRow name="Opening Talk" desc="Speaking time during opening ceremony." values={['—', '1 min', '2 min', '3 min', '5 min', '—']} />
              <FeatureRow name="Tech Talk" desc="Host a tech talk about your innovations." values={['—', '—', '60 min', '90 min', '120 min', '—']} />
              <FeatureRow name="Email our Newsletter" desc="Feature in the VTHacks newsletter." values={['—', '—', '✓', '✓', '✓', '—']} />
              <FeatureRow name="Prize after tech talk" desc="Raffle a prize to an engaged attendee." values={['—', '—', '—', '✓', '✓', '—']} />
              <FeatureRow name="Closing talk" desc="Deliver the closing talk at VTHacks." values={['—', '—', '—', '✓', '✓', '—']} />
              <FeatureRow name="Premium Table Location" desc="Prime spot for visibility." values={['—', '—', '—', '—', '✓', '—']} />

              {/* Branding */}
              <SectionRow title="Branding" />
              <FeatureRow name="Branding Presence" desc="Branding for prominent exposure." values={['S', 'M', 'L', 'XL', 'XXL', '—']} />
              <FeatureRow name="Distribute Swag" desc="Distribute branded swag to attendees." values={['✓', '✓', '✓', '✓', '✓', '—']} />
              <FeatureRow name="Social Media Posts" desc="Posts on VTHacks' Instagram." values={['1', '2', '3', '4', '5', '1']} />
              <FeatureRow name="Social Media Takeover" desc="Control VTHacks' social for a day." values={['—', '—', '—', '✓', '✓', '—']} />
              <FeatureRow name="Banners throughout event" desc="Banners placed throughout venue." values={['—', '—', '—', '✓', '✓', '—']} />
              <FeatureRow name="VTHacks Cohosted with You" desc="Featured as co-host." values={['—', '—', '—', '—', '✓', '—']} />
              <FeatureRow name="Branded Ceiling Banner" desc="Ceiling banner for visibility." values={['—', '—', '—', '—', '✓', '—']} />
              <FeatureRow name="Gobblerfest" desc="Exposure at Gobblerfest." values={['—', '—', '—', '—', '✓', '—']} />

              {/* Hacker Access */}
              <SectionRow title="Hacker Access" />
              <FeatureRow name="Discord Channel" desc="Dedicated Discord channel." values={['✓', '✓', '✓', '✓', '✓', '✓']} />
              <FeatureRow name="Award Branded Prize" desc="Present a branded prize." values={['—', '✓', '✓', '✓', '✓', '—']} />
              <FeatureRow name="Branded UX Event" desc="Host a branded UX event." values={['—', '—', '✓', '✓', '✓', '—']} />
              <FeatureRow name="Interviews on Site/Private VC" desc="Conduct on-site interviews." values={['—', '—', '—', '—', '✓', '—']} />
            </TableBody>
          </Table>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 pt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Reach out!</h2>
          <div className="flex justify-center gap-8 text-zinc-500 flex-wrap">
            <a href="https://vthacks.com" className="hover:text-white">vthacks.com</a>
            <a href="mailto:sponsorship@vthacks.com" className="hover:text-white">sponsorship@vthacks.com</a>
            <a href="https://instagram.com/vthacks" className="hover:text-white">@vthacks</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
