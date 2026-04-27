import { Fragment, useState } from "react";

/* ── Data ── */
const tiers = ["Starter", "Partner", "Bronze", "Silver", "Gold", "Platinum", "Diamond"] as const;
type Tier = (typeof tiers)[number];

const prices: Record<Tier, string> = {
    Starter: "$500",
    Partner: "$1,000",
    Bronze: "$2,500",
    Silver: "$6,000",
    Gold: "$8,000",
    Platinum: "$12,000",
    Diamond: "$16,000",
};

const tierStyles: Record<Tier, { header: string; headerText: string; cell: string; badge: string }> = {
    Starter: {
        header: "bg-gradient-to-b from-slate-600/15 to-transparent",
        headerText: "text-slate-400",
        cell: "bg-slate-600/[0.03]",
        badge: "bg-slate-800/25 text-slate-400 border-slate-600/30",
    },
    Partner: {
        header: "bg-gradient-to-b from-emerald-600/15 to-transparent",
        headerText: "text-emerald-300",
        cell: "bg-emerald-600/[0.03]",
        badge: "bg-emerald-800/25 text-emerald-300 border-emerald-700/30",
    },
    Bronze: {
        header: "bg-gradient-to-b from-stone-700/15 to-transparent",
        headerText: "text-stone-500",
        cell: "bg-stone-800/[0.03]",
        badge: "bg-stone-800/25 text-stone-500 border-stone-700/30",
    },
    Silver: {
        header: "bg-gradient-to-b from-zinc-500/15 to-transparent",
        headerText: "text-zinc-300",
        cell: "bg-zinc-500/[0.03]",
        badge: "bg-zinc-700/30 text-zinc-300 border-zinc-600/40",
    },
    Gold: {
        header: "bg-gradient-to-b from-yellow-700/20 to-transparent",
        headerText: "text-yellow-400",
        cell: "bg-yellow-700/[0.05]",
        badge: "bg-yellow-800/30 text-yellow-400 border-yellow-700/40",
    },
    Platinum: {
        header: "bg-gradient-to-b from-violet-500/25 to-violet-900/5",
        headerText: "text-violet-300",
        cell: "bg-violet-500/[0.06]",
        badge: "bg-violet-800/40 text-violet-300 border-violet-600/50",
    },
    Diamond: {
        header: "bg-gradient-to-b from-cyan-400/25 to-cyan-900/5",
        headerText: "text-cyan-300",
        cell: "bg-cyan-400/[0.07]",
        badge: "bg-cyan-800/40 text-cyan-300 border-cyan-500/50",
    },
};

interface Feature {
    name: string;
    desc?: string;
    values: Record<Tier, string>;
}

interface Section {
    title: string;
    features: Feature[];
}

function f(
    name: string,
    desc: string,
    vals: [string, string, string, string, string, string, string]
): Feature {
    return {
        name,
        desc,
        values: {
            Starter: vals[0],
            Partner: vals[1],
            Bronze: vals[2],
            Silver: vals[3],
            Gold: vals[4],
            Platinum: vals[5],
            Diamond: vals[6],
        },
    };
}

const sections: Section[] = [
    {
        title: "General",
        features: [
            f("Send Representatives", "Show up in person at VTHacks!", ["—", "—", "✓", "✓", "✓", "✓", "✓"]),
            f("Hacker Contact Info", "Receive contact information of hackers.", ["✓", "✓", "✓", "✓", "✓", "✓", "✓"]),
            f("Sponsor Table", "A table to showcase recruiting materials.", ["—", "—", "S", "S", "L", "L", "L"]),
            f("Sponsor Snack Lounge", "Access to exclusive sponsor-only snack lounge.", ["—", "—", "✓", "✓", "✓", "✓", "✓"]),
            f("Resume Book", "Access to database of registrants' resumes.", ["—", "✓", "✓", "✓", "✓", "✓", "✓"]),
            f("Opening Talk", "Speaking time during opening ceremony.", ["—", "—", "—", "1 min", "2 min", "3 min", "5 min"]),
            f("Tech Talk", "Host a tech talk about your innovations.", ["—", "—", "—", "—", "60 min", "90 min", "120 min"]),
            f("Email our Newsletter", "Feature in the VTHacks newsletter.", ["—", "—", "—", "—", "✓", "✓", "✓"]),
            f("Prize after tech talk", "Raffle a prize to an engaged attendee.", ["—", "—", "—", "—", "—", "✓", "✓"]),
            f("Closing talk", "Deliver the closing talk at VTHacks.", ["—", "—", "—", "—", "—", "✓", "✓"]),
            f("Premium Table Location", "Prime spot for visibility.", ["—", "—", "—", "—", "—", "—", "✓"]),
        ],
    },
    {
        title: "Branding",
        features: [
            f("Logo on Website & Merch", "Logo included on website and event merch.", ["✓", "✓", "✓", "✓", "✓", "✓", "✓"]),
            f("Branding Presence", "Branding for prominent exposure.", ["S", "S", "S", "M", "L", "XL", "XXL"]),
            f("Distribute Swag", "Distribute branded swag to attendees.", ["—", "✓", "✓", "✓", "✓", "✓", "✓"]),
            f("Social Media Posts", "Posts on VTHacks' Instagram.", ["—", "1", "1", "2", "3", "4", "5"]),
            f("Social Media Takeover", "Control VTHacks' social for a day.", ["—", "—", "—", "—", "—", "✓", "✓"]),
            f("Banners throughout event", "Banners placed throughout venue.", ["—", "—", "—", "—", "—", "✓", "✓"]),
            f("VTHacks Cohosted with You", "Featured as co-host.", ["—", "—", "—", "—", "—", "—", "✓"]),
            f("Branded Ceiling Banner", "Ceiling banner for visibility.", ["—", "—", "—", "—", "—", "—", "✓"]),
            f("Gobblerfest", "Exposure at Gobblerfest.", ["—", "—", "—", "—", "—", "—", "✓"]),
        ],
    },
    {
        title: "Hacker Access",
        features: [
            f("Discord Channel", "Dedicated Discord channel.", ["—", "✓", "✓", "✓", "✓", "✓", "✓"]),
            f("Award Branded Prize", "Present a branded prize.", ["—", "—", "—", "✓", "✓", "✓", "✓"]),
            f("Branded UX Event", "Host a branded UX event.", ["—", "—", "—", "—", "✓", "✓", "✓"]),
            f("Interviews on Site/Private VC", "Conduct on-site interviews.", ["—", "—", "—", "—", "—", "—", "✓"]),
        ],
    },
];

/* ── Value display ── */
function Val({ v }: { v: string }) {
    if (v === "✓")
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </span>
        );
    if (v === "—")
        return <span className="text-zinc-600">—</span>;
    return <span className="text-zinc-300">{v}</span>;
}

/* ── Desktop table ── */
function DesktopTable() {
    return (
        <div className="hidden lg:block">
            <table className="w-full table-fixed border-collapse">
                {/* Sticky header */}
                <thead className="sticky top-0 z-20 backdrop-blur-sm">
                    <tr>
                        <th className="w-[280px] text-left py-5 px-4 bg-[#050404]/30">
                            <span className="text-zinc-500 text-sm font-normal uppercase tracking-wider">Tiers</span>
                        </th>
                        {tiers.map((tier) => (
                            <th key={tier} className={`text-center py-5 px-2 bg-[#050404]/80 ${tierStyles[tier].header}`}>
                                <div className={`font-semibold text-base ${tierStyles[tier].headerText}`}>{tier}</div>
                                <div className="text-zinc-500 text-sm font-normal mt-0.5">{prices[tier]}</div>
                            </th>
                        ))}
                    </tr>
                    {/* Subtle separator line */}
                    <tr>
                        <td colSpan={8} className="h-px bg-zinc-500/20 p-0" />
                    </tr>
                </thead>

                <tbody>
                    {sections.map((section) => (
                        <Fragment key={section.title}>
                            {/* Section header */}
                            <tr>
                                <td colSpan={8} className="pt-10 pb-4 px-4">
                                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                                </td>
                            </tr>
                            {/* Feature rows */}
                            {section.features.map((feature) => (
                                <tr
                                    key={feature.name}
                                    className="border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.02]"
                                >
                                    <td className="py-5 px-4">
                                        <div className="font-medium text-white text-[15px]">{feature.name}</div>
                                        {feature.desc && (
                                            <div className="text-sm text-zinc-500 mt-1 leading-relaxed">{feature.desc}</div>
                                        )}
                                    </td>
                                    {tiers.map((tier) => (
                                        <td key={tier} className={`text-center py-5 px-2 ${tierStyles[tier].cell}`}>
                                            <Val v={feature.values[tier]} />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* ── Mobile table ── */
function MobileTable() {
    const [selectedTier, setSelectedTier] = useState<Tier>("Bronze");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="lg:hidden">
            {/* Sticky tier selector */}
            <div className="sticky top-0 z-20 bg-[#050404]/30 backdrop-blur-sm border-b border-zinc-500/30 px-4 sm:px-6 pb-3 pt-3">
                <div className="flex items-center justify-between">
                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex  bg-white/80  pl-3 pr-2 items-center gap-2 text-black font-semibold text-lg px-1 py-1 rounded-3xl transition-colors hover:bg-white/5"
                        >
                            {selectedTier}
                            <svg
                                className={`w-4 h-4 text-black transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden min-w-[200px] z-30">
                                {tiers.map((tier) => (
                                    <button
                                        key={tier}
                                        onClick={() => {
                                            setSelectedTier(tier);
                                            setDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${tier === selectedTier
                                            ? `${tierStyles[tier].badge} border-l-2`
                                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <span className="font-medium">{tier}</span>
                                        <span className="text-sm text-zinc-500">{prices[tier]}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price badge */}
                    <div className="text-right">
                        <span className="text-zinc-400 text-sm">{prices[selectedTier]}</span>
                    </div>
                </div>
            </div>

            {/* Close dropdown on scroll / tap outside */}
            {dropdownOpen && (
                <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
            )}

            {/* Feature list */}
            <div className="px-4 sm:px-6">
                {sections.map((section) => (
                    <div key={section.title}>
                        {/* Section header */}
                        <div className="pt-10 pb-4">
                            <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                        </div>

                        {/* Feature rows */}
                        {section.features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex items-start justify-between py-5 border-b border-white/10 gap-4"
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-white text-[15px]">{feature.name}</div>
                                    {feature.desc && (
                                        <div className="text-sm text-zinc-500 mt-1 leading-relaxed">{feature.desc}</div>
                                    )}
                                </div>
                                <div className="flex-shrink-0 pt-0.5">
                                    <Val v={feature.values[selectedTier]} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Main export ── */
export default function SponsorTable() {
    return (
        <div className="relative border border-dashed border-zinc-500/30 rounded-none">
            {/* Dotted mesh background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
            <div className="relative">
                <DesktopTable />
                <MobileTable />
            </div>
        </div>
    );
}
