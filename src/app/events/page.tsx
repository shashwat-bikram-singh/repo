import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(44,47,48,0.06)] h-20 px-8 flex justify-between items-center font-['Manrope'] antialiased tracking-tight">
<div className="flex items-center gap-12">
<Link href="/"><span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">CampusPulse</span></Link>
<div className="hidden md:flex items-center gap-8">
<Link className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 py-1 transition-all" href="/events">Explore Events</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors py-1" href="/clubs">Clubs</Link>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-4">
<button className="material-symbols-outlined p-2 text-slate-600 hover:scale-105 transition-all" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined p-2 text-slate-600 hover:scale-105 transition-all" data-icon="bookmark">bookmark</button>
</div>
<div className="flex items-center gap-3">
<Link href="/login"><button className="hidden sm:block px-6 py-2.5 text-slate-600 font-semibold hover:text-indigo-600 transition-colors">Login</button></Link>
<Link href="/login"><button className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-on-primary rounded-xl font-bold hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Register</button></Link>
</div>
</div>
</nav>
<main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
{/* Header Section */}
<header className="mb-12">
<h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4">Discover Campus Life</h1>
<p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Join workshops, social mixers, and academic seminars. Your central hub for every heartbeat of campus activity.</p>
</header>
{/* Filters Bento-ish Bar */}
<section className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-outline-variant" placeholder="Search events, keywords..." type="text"/>
</div>
<div className="md:col-span-2">
<select className="w-full px-4 py-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/40 text-on-surface-variant font-medium appearance-none">
<option>All Clubs</option>
<option>Tech Society</option>
<option>Arts Collective</option>
<option>Sports Union</option>
</select>
</div>
<div className="md:col-span-2">
<select className="w-full px-4 py-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/40 text-on-surface-variant font-medium">
<option>Any Date</option>
<option>This Week</option>
<option>Next Month</option>
</select>
</div>
<div className="md:col-span-3">
<select className="w-full px-4 py-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/40 text-on-surface-variant font-medium">
<option>All Categories</option>
<option>Workshop</option>
<option>Networking</option>
<option>Hackathon</option>
<option>Social</option>
</select>
</div>
</section>
{/* Dynamic Event Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Event Card 1 */}
<article className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)]">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="large auditorium with students attending a high-tech workshop, blue stage lighting and digital screens in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxhyPlkk6dDPQIAHOm44sXwmLMoWOh6tu-JacUPO-ufZu3apky-MBuiqu2z7qsihKKpN7IqDWqz8si8FNwgvcl5BOoMU-ORk3jWwOzoTfkczDOgymqjsj6t1dgfPWLlc9yF3ke1_DOS75R0LfcQXXtmy_G6u5DV4BDmBz-Hxe3Bdj-lYeTgePSVOtzQGyWEvGy0PPzUcgD6-Q8liqbijDqZwszZzHXPz_Eeuq_jaG0C2ukpCenP4iBFflepVQcfIOnb0RuDOgf8rEq"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> LIVE
                    </div>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="groups">groups</span>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tech Innovators Society</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2 leading-tight">Quantum Computing: Future of Processing</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
                        Oct 24, 2024 • 4:00 PM
                    </p>
<button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300">
                        Register
                    </button>
</div>
</article>
{/* Event Card 2 */}
<article className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)]">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="colorful festival atmosphere with student bands performing outdoors on a green lawn, bright daylight and vibrant colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlKv17td66IEc-kFD3UrySmJrp536D9JuTgbafmNralCrO103lEhycbYqWgvp5u-pHudgYQLp4gTei9Ig_G1dXU6ocymQ41Jw5jOptG-F8ayUem3p-HTFkntbLJ4Q9caFfylL0MvPJ8YnFFNgdMb-f0MfnkAQ8R7nz6LxaSEMeIssu6cZHV3evF0qFFEkgp3zPStYp8RPtT9PFF1zU-vBtFFKDJq7ZO4dCDHXoo-Lx-qRyMd_fmqtTFtBtX14H3011U1pXd5pkOg7N"/>
<div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                    </div>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="palette">palette</span>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Creative Arts Guild</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2 leading-tight">Autumn Sunset Music &amp; Arts Festival</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
                        Oct 28, 2024 • 6:30 PM
                    </p>
<button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300">
                        Register
                    </button>
</div>
</article>
{/* Event Card 3 */}
<article className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)]">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="students collaborating in a modern co-working space with laptops and whiteboards, soft natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-QiYH4fxzDSwb7-qDW3cfjCXlto6KNz36QWRqkyQDB8_vhHILiLeEr1LiAO1eDCJYWXJ26c9fxJUmGB64TQNk0L5Yjctzvf4tTyUAGb-5UgPJkkA04DPNVaRpMl22ewpbRm8-Pq4mULsRuEZchS448g2joyw2L5HBgiV18NUhONUmeDQ35klFm5642I_aS06BCUCn0gUVpYqXBRagLqHKRiHypFlRKRLYF7WdQqQTAjm6dJaeqZ31mLxeiuUGiBibCVxng7WdcO0X"/>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="business_center">business_center</span>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Entrepreneurship Club</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2 leading-tight">Startup Pitch Night: Fall Edition</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
                        Nov 02, 2024 • 5:00 PM
                    </p>
<button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300">
                        Register
                    </button>
</div>
</article>
{/* Event Card 4 */}
<article className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)]">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="indoor sports stadium with blurred action and athletes, cinematic lighting with focus on team jersey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVtSQydHOm36xlPOvS-Wt1QX_D1A20-OK5ptdzkULsx00D4_zbvxHg8IqCRGAYWPy_xWAgFDJq25HKdRSErVTRRRb3cf75J3pqRtWykm1xKvbOLEhCw60fHbDWNV--Chk3IDeADjw7tWXHoaesljAK48CSt0EsB4FlNtMhEVLbAUcgIfASYcT9F-MDqPjL-433Ab7S6CVmJ07yw6Q22nC2AD4Zyi73t0dK6NqBHVhNAmkswwvU-JOwrd8GE-M7Q7xM5r-CATVDwkxz"/>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="fitness_center">fitness_center</span>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Athletics Board</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2 leading-tight">Varsity Basketball: Pulse vs. Titans</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
                        Nov 05, 2024 • 7:00 PM
                    </p>
<button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300">
                        Register
                    </button>
</div>
</article>
{/* Event Card 5 */}
<article className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)]">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close-up of students laughing and talking at a coffee social, warm atmospheric bokeh lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLdbVsTux3Ek7JzKrdYIXWoS_I5sFs0bMit7w-uMOMDnjgoDwNm2v14HiznQjjqEQcSn0lCc6x9Co6yynDn4CQnLsGx3A9_hCtQMeiUnYAWN90T7WAHoEisezVoPiuh0u1HC29KTE5CaWvLpQdjPCK39ObPIQ_UNKFPuytpNzX7dPv9APZzsQSedHmnqtxHqc7UnfYbkvemOEz8MEH6k0QTCHX7F97p73LzgbGUR6K25pjF3f8ATdO_1Itc7z8-lNTiDhCRffQz2Hx"/>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="coffee">coffee</span>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">International Student Union</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2 leading-tight">Global Coffee Hour &amp; Exchange</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
                        Nov 08, 2024 • 10:30 AM
                    </p>
<button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300">
                        Register
                    </button>
</div>
</article>
{/* Event Card 6 */}
<article className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)]">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="professional leadership speaker addressing a crowd of students in a modern hall, dramatic spotlight and clean lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLraLH0bEHUbPFSLPj2EZ0q8kZQOMYHsykATbxSfX7LDuAiNexZVgN39ubRGk0h5SgE8QjI9RIVnWR5JQPKDszv2XimfmhRS83WrOIDFKsVyG6ZkgD4X3sxluVQcL4ScpfN7_hfa4X7P2Z5iZmNvIGyUGGPvKDfwJGNyBANT-tePN-DaU17Cyd23tyjN0PodOALX8E0691g66_lM-VZqBhwJ4ibbW6sTAcPVQr840bk0YtyndI3HwTW4SCcoQATyj1cE7ZfGMjfpoO"/>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="leaderboard">leaderboard</span>
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Business Leadership Academy</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2 leading-tight">Navigating the Future of Work</h3>
<p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-base" data-icon="calendar_today">calendar_today</span>
                        Nov 12, 2024 • 2:00 PM
                    </p>
<button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300">
                        Register
                    </button>
</div>
</article>
</div>
{/* Load More */}
<div className="mt-20 flex justify-center">
<button className="px-10 py-4 bg-surface-container-low text-on-surface font-bold rounded-xl hover:bg-surface-container-high hover:scale-105 transition-all">
                Load More Events
            </button>
</div>
</main>
{/* Footer */}
<footer className="bg-slate-100 dark:bg-slate-950 w-full py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="space-y-4">
<Link href="/"><span className="font-['Manrope'] font-bold text-2xl text-slate-900 dark:text-slate-100 block">CampusPulse</span></Link>
<p className="font-['Inter'] text-sm text-slate-500 leading-relaxed max-w-xs">
                    © 2024 CampusPulse. Editorial Experience for Student Life.
                </p>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-slate-900 dark:text-slate-100">Explore</span>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">About</Link>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">Contact</Link>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-slate-900 dark:text-slate-100">Resources</span>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">Support</Link>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">Privacy</Link>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-slate-900 dark:text-slate-100">Connect</span>
<div className="flex gap-4">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors" data-icon="public">public</button>
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors" data-icon="mail">mail</button>
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors" data-icon="podcasts">podcasts</button>
</div>
</div>
</div>
</footer>
    </>
  );
}
