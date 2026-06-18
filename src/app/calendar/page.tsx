import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
<aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#eff1f2] dark:bg-slate-800/50 flex flex-col py-8 gap-4 z-50">
<div className="px-8 mb-4">
<h1 className="text-xl font-black text-[#2c2f30] dark:text-white">CampusPulse</h1>
<p className="text-on-surface-variant text-xs font-medium">Student Portal</p>
</div>
<nav className="flex-1 space-y-2">
<Link className="flex items-center px-8 py-3 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full group" href="/">
<span className="material-symbols-outlined mr-3">grid_view</span>
<span className="font-medium">Home</span>
</Link>
<Link className="flex items-center px-8 py-3 bg-white dark:bg-slate-900 text-[#4647d3] dark:text-[#9396ff] rounded-r-full font-bold shadow-sm group" href="/">
<span className="material-symbols-outlined mr-3">calendar_today</span>
<span className="font-medium">Events</span>
</Link>
<Link className="flex items-center px-8 py-3 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full group" href="/clubs">
<span className="material-symbols-outlined mr-3">groups</span>
<span className="font-medium">Clubs</span>
</Link>
<Link className="flex items-center px-8 py-3 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full group" href="/">
<span className="material-symbols-outlined mr-3">school</span>
<span className="font-medium">Academia</span>
</Link>
<Link className="flex items-center px-8 py-3 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full group" href="/">
<span className="material-symbols-outlined mr-3">settings</span>
<span className="font-medium">Settings</span>
</Link>
</nav>
<div className="px-6 mt-auto">
<button className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary py-4 px-6 rounded-xl font-bold text-sm shadow-lg hover:scale-[1.02] transition-all">
                Create Event
            </button>
</div>
</aside>
{/* TopNavBar (Shared Component) */}
<header className="flex justify-between items-center w-full px-8 h-20 sticky top-0 z-40 bg-[#f5f6f7]/80 dark:bg-slate-900/80 backdrop-blur-xl md:pl-72">
<div className="flex items-center gap-8">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low rounded-full border-none focus:ring-2 focus:ring-primary/40 text-sm w-64" placeholder="Search events..." type="text"/>
</div>
<nav className="hidden lg:flex items-center gap-6">
<Link className="text-[#595c5d] font-medium hover:text-[#2c2f30] transition-colors" href="/">Dashboard</Link>
<Link className="text-[#2c2f30] font-bold border-b-2 border-[#6366F1] pb-1" href="/calendar">Calendar</Link>
<Link className="text-[#595c5d] font-medium hover:text-[#2c2f30] transition-colors" href="/clubs">Clubs</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-[#eff1f2] rounded-full transition-all relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full border-2 border-surface"></span>
</button>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-high">
<img alt="Student profile avatar" className="w-full h-full object-cover" data-alt="portrait of a smiling young college student in a casual hoodie with campus architecture in a sunlit blurred background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaY4a3IhtI2GsTDRpo9ry3XlMcx7eyN3v9IpceDwfE3quzj1PDhrhyDmHFAXDZ7-1GcakCbvL-BOaKG1zxLv4BsKFh3mduphxoC0VWVONevGsCmcflbhJ6K1ouBG8dNvWYLO5R5PPoW4a63dM4OhbgLrGojRdi8xpXACjf1ns92pUbhDeb7iyTnQuMeWNlChFiucAL7zZ6GEcAqIWT6GYibBStSefxDCgHGOhAg_3cUeSbiByYc-1hOSHV2TyquMwFjANYNsfrru1q"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="md:ml-64 p-8 min-h-screen">
<div className="max-w-7xl mx-auto">
{/* Page Title and Filters */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-4xl font-extrabold tracking-tight mb-2">October 2024</h2>
<p className="text-on-surface-variant">Stay updated with campus activities and academic milestones.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex bg-surface-container-low p-1 rounded-full">
<button className="px-6 py-2 rounded-full bg-surface-container-lowest shadow-sm font-semibold text-sm">Month</button>
<button className="px-6 py-2 rounded-full font-medium text-sm text-on-surface-variant hover:text-on-surface transition-colors">Week</button>
</div>
<button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-low rounded-xl font-medium text-sm hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                        Category
                    </button>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-12 h-6 bg-surface-container-high rounded-full transition-colors group-hover:bg-surface-variant">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-0"></div>
</div>
<span className="text-sm font-medium text-on-surface-variant">My Clubs Only</span>
</label>
</div>
</div>
{/* Dashboard Layout (Asymmetric Bento Grid style) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Large Calendar View (The Anchor) */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
<div className="grid grid-cols-7 border-b border-surface-container-low">
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Sun</div>
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Mon</div>
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Tue</div>
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Wed</div>
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Thu</div>
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Fri</div>
<div className="py-4 text-center text-xs font-bold uppercase tracking-wider text-on-surface-variant">Sat</div>
</div>
<div className="grid grid-cols-7 auto-rows-[120px]">
{/* Empty cells for previous month */}
<div className="bg-surface-container-low/30 border-r border-b border-surface-container-low"></div>
<div className="bg-surface-container-low/30 border-r border-b border-surface-container-low"></div>
{/* Calendar Days */}
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">1</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">2</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">3</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer relative bg-primary-container/20">
<span className="text-sm font-bold text-primary">4</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
<div className="absolute bottom-4 left-4 right-4 text-[10px] font-bold text-primary bg-white/80 py-1 px-2 rounded-md truncate">
                                Today: Hackathon...
                            </div>
</div>
<div className="p-4 border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">5</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
</div>
</div>
{/* Row 2 */}
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">6</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">7</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">8</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">9</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">10</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">11</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
</div>
</div>
<div className="p-4 border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">12</span>
</div>
{/* Row 3 */}
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">13</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">14</span>
<div className="mt-2 flex flex-col gap-1">
<div className="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-bold truncate">Art Gala</div>
</div>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">15</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">16</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">17</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">18</span>
</div>
<div className="p-4 border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">19</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
</div>
</div>
{/* Row 4 */}
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">20</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">21</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">22</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">23</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">24</span>
</div>
<div className="p-4 border-r border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">25</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
</div>
<div className="p-4 border-b border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">26</span>
</div>
{/* Row 5 */}
<div className="p-4 border-r border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">27</span>
</div>
<div className="p-4 border-r border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">28</span>
</div>
<div className="p-4 border-r border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">29</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
</div>
<div className="p-4 border-r border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">30</span>
</div>
<div className="p-4 border-r border-surface-container-low group hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="text-sm font-medium">31</span>
</div>
<div className="bg-surface-container-low/30 border-r border-surface-container-low"></div>
<div className="bg-surface-container-low/30"></div>
</div>
</div>
{/* Day Details Sidebar */}
<div className="lg:col-span-4 flex flex-col gap-8">
{/* Selected Day Header */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<div className="flex items-start justify-between mb-8">
<div>
<p className="text-primary font-bold uppercase tracking-widest text-xs mb-1">Friday</p>
<h3 className="text-3xl font-black">Oct 4, 2024</h3>
</div>
<div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">event_available</span>
</div>
</div>
{/* Event List */}
<div className="space-y-6">
<div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-full">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-bold text-on-surface-variant uppercase">09:00 AM — 11:30 AM</span>
<span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tech</span>
</div>
<h4 className="font-bold text-lg mb-1">AI Ethics Workshop</h4>
<p className="text-sm text-on-surface-variant mb-3">Main Auditorium • Hosted by Tech Club</p>
<div className="flex -space-x-2">
<img alt="Attendee" className="w-7 h-7 rounded-full border-2 border-surface-container-lowest" data-alt="close-up profile photo of a young woman with a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9U_fT4jd6t4YHTXaTnCulNrhToqRpeps1pozo9yICCaFum7TpjMyx4fCnTOI61T_MTOL6XTEdAqfXvYm1Pz_fS7LCugi1NQoPxJOJLz8eE7p1rDIlKOG-SFQlIXoBzpwZ3gErysMNbmqrwuUfGcPcI8ypsrf9IqYuNPHVcQ71_BuYgAO3QItR4YidN2SzpttLajpfpSiNIygQ_64ahdLIAQ0B8EyvTFnjXmQk3OCX1S0VP9onTdCgAZQpRXZXFSsoZPL2A8__ZY2q"/>
<img alt="Attendee" className="w-7 h-7 rounded-full border-2 border-surface-container-lowest" data-alt="portrait of a young man with glasses looking towards camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvGUjD-MPwcAKWneu6-HXxfPGCDs7dB9o6qa_c0gTzhla2j5U17FWXgBXK2jciWE1FBIpJPtAf5D6kBwJCQQySz7LHhta1NIqDpPQozSV_LqAV6OWimFM6r-_xy31GuZAdy8iscov-G1vjKqplxlTf5tvRuOBhbj3Utn-A9z4WBzVkXzbZ2gb_C-hoFOBwS0xXfLH41RyEKEtOhwht3iLPI2vqYQmFRTQFarYsJk_ufqDaRRzPzK_1bW63UaBXeHE21LzOq4sc_6M"/>
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-[10px] font-bold border-2 border-surface-container-lowest">+12</div>
</div>
</div>
<div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-secondary before:rounded-full">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-bold text-on-surface-variant uppercase">02:00 PM — 04:00 PM</span>
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded uppercase">Creative</span>
</div>
<h4 className="font-bold text-lg mb-1">Modern Typography Lab</h4>
<p className="text-sm text-on-surface-variant mb-3">Design Studio 4 • Creative Society</p>
</div>
<div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-tertiary before:rounded-full">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-bold text-on-surface-variant uppercase">06:00 PM — 08:30 PM</span>
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 rounded uppercase">Sports</span>
</div>
<h4 className="font-bold text-lg mb-1">Inter-varsity Soccer</h4>
<p className="text-sm text-on-surface-variant">East Campus Field</p>
</div>
</div>
<button className="w-full mt-10 py-4 border-2 border-primary/20 text-primary rounded-xl font-bold text-sm hover:bg-primary-container/10 transition-colors">
                            View All For Oct 4
                        </button>
</div>
{/* Category Legend (Bento Card) */}
<div className="bg-surface-container-low p-6 rounded-xl">
<h5 className="text-sm font-bold mb-4">Event Categories</h5>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-3 rounded-lg flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-xs font-semibold">Tech &amp; Dev</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="text-xs font-semibold">Arts &amp; Media</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-tertiary"></div>
<span className="text-xs font-semibold">Athletics</span>
</div>
<div className="bg-white p-3 rounded-lg flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-error"></div>
<span className="text-xs font-semibold">Exams</span>
</div>
</div>
</div>
</div>
</div>
{/* Featured Large Promotional Card (Asymmetric Layering) */}
<section className="mt-12 relative rounded-lg overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent z-10 opacity-90"></div>
<img alt="Campus Event" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" data-alt="a large crowded modern university auditorium with dramatic stage lighting and high-tech screens during a student conference" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxuS1dwKg-fbUHn-e_HBXjNfkdfaKg4vysFEXpMY3IfMwMNu8uSvMrfofkBmMG58gVJyqX2r2kri8mh0LdPd-Q0IiDM7LgO_UqRRLb3qyFw2I4WAUp9hq1bm3ZPYKUCJVg_ZUh0s-OMLlyXFKTf0sEP8TKYwqvIY9dSFWBuM6b_6f_CN00QDn_bBFNP2pujjx8t_6kLCnIeoU9WEiCEehhrtQ8FkR1xyeegP07eftAQqkwzPqqIi4tpvZun1txA_CnzvEiFOewz4i4"/>
<div className="absolute inset-0 z-20 flex flex-col justify-center p-12 max-w-2xl">
<span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit">Featured Next Week</span>
<h3 className="text-5xl font-black text-white leading-tight mb-6">Annual Winter Hackathon &amp; Expo</h3>
<div className="flex items-center gap-8 text-on-primary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">schedule</span>
<span className="text-sm font-bold">Oct 12-14, 2024</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">location_on</span>
<span className="text-sm font-bold">Innovation Center</span>
</div>
</div>
<button className="mt-8 px-8 py-4 bg-white text-secondary font-black rounded-full w-fit hover:bg-secondary-container transition-colors shadow-2xl">
                        Register Your Team
                    </button>
</div>
</section>
</div>
</main>
{/* Floating Action Button (FAB) - Suppression Logic Applied: Not on Home, only for event creation on relevant pages */}
<button className="md:hidden fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-2xl flex items-center justify-center z-50">
<span className="material-symbols-outlined" >add</span>
</button>
{/* Bottom Navigation Bar (Mobile only) */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md flex justify-around items-center px-4 z-40 border-t border-surface-container-low">
<button className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">grid_view</span>
</button>
<button className="flex flex-col items-center justify-center text-primary">
<span className="material-symbols-outlined" >calendar_today</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">groups</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">school</span>
</button>
</nav>
    </>
  );
}
