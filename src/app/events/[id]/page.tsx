import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
<div className="flex justify-between items-center px-8 py-4 max-w-full">
<div className="flex items-center gap-8">
<Link href="/"><span className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 font-headline">CampusPulse</span></Link>
<div className="hidden md:flex items-center gap-6">
<Link className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 font-manrope tracking-tight py-1" href="/">Events</Link>
<Link className="text-slate-600 dark:text-slate-400 font-manrope tracking-tight hover:text-indigo-500 transition-colors duration-200 py-1" href="/clubs">Clubs</Link>
<Link className="text-slate-600 dark:text-slate-400 font-manrope tracking-tight hover:text-indigo-500 transition-colors duration-200 py-1" href="/">Schedule</Link>
<Link className="text-slate-600 dark:text-slate-400 font-manrope tracking-tight hover:text-indigo-500 transition-colors duration-200 py-1" href="/">Network</Link>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
<span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search events..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">favorite</button>
<Link href="/login"><button className="signature-gradient text-on-primary px-6 py-2 rounded-xl font-bold scale-95 active:opacity-80 transition-transform">Register</button></Link>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="User profile" data-alt="close-up portrait of a cheerful young adult student with glasses and a friendly smile in a casual hoodie" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsC1E55iJ47fveAut-jKIaCnCUebb3NBtqk4p3qMkStNqben-HQET8e7lAgjef5DZNYvQek27Bn9KZr8h4bOmfEL5W6e7KbWqyRe4pv_5UCylh_TIshP0KHVvzWZXo8LAnuQJv5vUbTZ6I7Qho5aI8T5qIE6QS_kJiO_dxuwsKpzw9lIS1K2qn88-fzVLLRbdnC2QtLqSUwtWQqQtt9HbkhsPLdgXAWU7r4iOXDs3ldj-R1o3Vurny6FiWd0Zk81reNlizuG4gocqB"/>
</div>
</div>
</div>
</div>
</nav>
<main className="flex-grow pt-20">
{/* Hero Header */}
<header className="relative w-full h-[614px] min-h-[500px] overflow-hidden flex items-end">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="futuristic digital visualization of quantum computing processor with glowing blue and purple circuits and light particles in a dark lab setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvid-kJV316OXkoAaARuEw1tdFQoDsy0PbYpZ-90mSoOJxS1F3HZfjw3IIyGA_3YRSz7AGQjyU-KFJTyj3NM4IMMJbOtIgHcsFESCPgLQwHCudNJn2QevKWWoMzN8EDJQ00zQVHx6lslBNLpfl6WkMCY-bwEpSYvmbcqTCAVskeGnpxpVxcXNzCh4SnV4I9q3GSUae6DvuRQxlrf0F2_W_MS5g5ORICj6LDC_GWxHuXfhcYHH3yZirrQXd0i1tFFFccdHbajJxmaA"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-on-surface/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-12">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex flex-wrap gap-3">
<span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md text-primary-fixed-dim rounded-full text-sm font-bold border border-primary/20">Engineering Auditorium</span>
<span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-bold border border-white/20">Oct 24, 2024</span>
<span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-bold border border-white/20">4:00 PM</span>
</div>
<h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-none">
                        Quantum Computing: Future of Processing
                    </h1>
<div className="flex items-center gap-6 mt-4">
<button className="signature-gradient text-on-primary text-lg px-10 py-4 rounded-xl font-bold shadow-xl scale-95 active:opacity-80 transition-transform flex items-center gap-2">
                            Register for Event
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-colors">
                            Add to Calendar
                        </button>
</div>
</div>
</div>
</header>
{/* Content Grid */}
<div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Left Column: Main Content */}
<div className="lg:col-span-8 space-y-16">
{/* About Section */}
<section>
<h2 className="text-3xl font-headline font-bold text-on-surface mb-8 tracking-tight">About this Event</h2>
<div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
<p>Dive into the frontier of computation with our immersive workshop. Quantum computing is no longer just a theoretical concept; it's a rapidly evolving reality that promises to solve problems currently impossible for classical supercomputers. We'll explore qubits, superposition, and entanglement in a way that's accessible but rigorous.</p>
<p>Whether you're an engineering student, a physicist, or a computer science enthusiast, this session will provide you with the foundational knowledge and the current landscape of quantum hardware and software development.</p>
</div>
</section>
{/* Event Poster Gallery Section */}
<section>
<h2 className="text-3xl font-headline font-bold text-on-surface mb-8 tracking-tight">Event Poster</h2>
<div className="relative group aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="high-quality premium event poster for the quantum computing workshop showing futuristic typography and circuit patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2eDInq2T6vR4kS6jM5M7m0_7A8_Z1Q6X0f9f2R7V5b4_z3_8f9_Z1_V6P9w=s2000"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
<button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition-colors">
<span className="material-symbols-outlined text-primary">fullscreen</span>
</button>
</div>
</section>
{/* Detailed Information Section */}
<section className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30">
<h2 className="text-3xl font-headline font-bold text-on-surface mb-8 tracking-tight">Detailed Information</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6">
<div>
<h4 className="font-bold text-primary flex items-center gap-2 mb-3">
<span className="material-symbols-outlined">inventory_2</span>
                                    Technical Requirements
                                </h4>
<ul className="space-y-2 text-on-surface-variant list-disc list-inside ml-2">
<li>Laptop with 8GB RAM minimum</li>
<li>Python 3.8+ installed</li>
<li>Qiskit SDK pre-installed</li>
<li>Stable internet connection</li>
</ul>
</div>
<div>
<h4 className="font-bold text-primary flex items-center gap-2 mb-3">
<span className="material-symbols-outlined">assignment_turned_in</span>
                                    Prerequisites
                                </h4>
<ul className="space-y-2 text-on-surface-variant list-disc list-inside ml-2">
<li>Basic Linear Algebra</li>
<li>Introduction to CS knowledge</li>
<li>Familiarity with Python syntax</li>
</ul>
</div>
</div>
<div className="space-y-6">
<h4 className="font-bold text-primary flex items-center gap-2 mb-3">
<span className="material-symbols-outlined">quiz</span>
                                Frequently Asked Questions
                            </h4>
<div className="space-y-4">
<details className="group border-b border-outline-variant/30 pb-4">
<summary className="list-none cursor-pointer font-bold text-on-surface flex justify-between items-center">
                                        Is prior quantum knowledge required?
                                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-2 text-sm text-on-surface-variant">No, we start from the fundamental principles. However, basic math and programming skills are highly recommended.</p>
</details>
<details className="group border-b border-outline-variant/30 pb-4">
<summary className="list-none cursor-pointer font-bold text-on-surface flex justify-between items-center">
                                        Will certificates be provided?
                                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-2 text-sm text-on-surface-variant">Yes, all attendees will receive a digital certificate of completion endorsed by the Coding Club.</p>
</details>
<details className="group">
<summary className="list-none cursor-pointer font-bold text-on-surface flex justify-between items-center">
                                        Is there a registration fee?
                                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-2 text-sm text-on-surface-variant">The event is free for all university students with a valid ID.</p>
</details>
</div>
</div>
</div>
</section>
{/* Speakers Section */}
<section>
<h2 className="text-3xl font-headline font-bold text-on-surface mb-8 tracking-tight">Speakers</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Speaker 1 */}
<div className="flex items-center gap-4 p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
<img className="w-16 h-16 rounded-full bg-surface-container-low object-cover" data-alt="professional portrait of a middle-aged male professor with a lab coat and a scholarly appearance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhjnEIasox5nEsrxtt5VZsm8l_3P8qKUZ2_m4jA9rW1r_h_VoyZFpYMnhLqMVbmIXhUB-5HfdUde_4M3f_mMqer-KZoCLcYx3R3Q-UaR_EQlhxduaWTK0wCIrkjWPl85C1JpPSv3_BMpwum7DeK0Dpgc5_frf912Q8JU_3X_JqYmXxR9Tw5-Z1ZV13abDduOYeQ4WAdDLCL5IvIDxJBNuZ5UMqgunQa6BUD_a-oNX3FdZwQT9bv3GBRYfoQnKObJDPUrXXkUinMIIZ"/>
<div>
<h4 className="font-bold text-on-surface">Dr. Helena Vance</h4>
<p className="text-sm text-on-surface-variant">Quantum Research Lead at Cyberdyne</p>
</div>
</div>
{/* Speaker 2 */}
<div className="flex items-center gap-4 p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
<img className="w-16 h-16 rounded-full bg-surface-container-low object-cover" data-alt="portrait of a young female tech entrepreneur with short hair and a modern minimalist style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC441C4f0H9nlxu-YY_A1iQcaSSsswaXjt0nTSMqfmxidF13zOdLvLJbjjS6pc8bAYiUVz-KC0J11L1eUxCF_mMcs7uIQ-E_VvXfmBXd48k_Us5TtEqDIbDfj1iUU6wY700bhZfrLepdaOZgJ0UYZ6YDtUJep5Mzom0IxYNsVAI1QDI9KZzdDuvaMQS_34fijXkhFMpijf0RsXUThVV8GFOLv3EFa2tX6p9BiTbjRfQ19OBoMNzsqviSM5nIz0yXA-taNC4X7KDInPV"/>
<div>
<h4 className="font-bold text-on-surface">Marcus Chen</h4>
<p className="text-sm text-on-surface-variant">Senior Algorithm Engineer</p>
</div>
</div>
</div>
</section>
{/* Agenda Section */}
<section>
<h2 className="text-3xl font-headline font-bold text-on-surface mb-8 tracking-tight flex items-center gap-3">
                        Agenda
                        <span className="w-2 h-2 rounded-full bg-tertiary pulse-orb"></span>
</h2>
<div className="space-y-4">
<div className="flex gap-6 items-start p-6 rounded-lg bg-surface-container-low border border-outline-variant/10">
<span className="font-headline font-bold text-primary shrink-0 w-20">04:00 PM</span>
<div>
<h4 className="font-bold text-on-surface">Opening Keynote</h4>
<p className="text-on-surface-variant">The history of quantum theory and current benchmarks.</p>
</div>
</div>
<div className="flex gap-6 items-start p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
<span className="font-headline font-bold text-primary shrink-0 w-20">04:45 PM</span>
<div>
<h4 className="font-bold text-on-surface">Live Qubit Demonstration</h4>
<p className="text-on-surface-variant">Visualizing entanglement through simulated environments.</p>
</div>
</div>
<div className="flex gap-6 items-start p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
<span className="font-headline font-bold text-primary shrink-0 w-20">05:30 PM</span>
<div>
<h4 className="font-bold text-on-surface">Networking Mixer</h4>
<p className="text-on-surface-variant">Coffee and direct discussions with the speaker panel.</p>
</div>
</div>
</div>
</section>
</div>
{/* Right Column: Sidebar */}
<aside className="lg:col-span-4 space-y-8">
{/* Deadline Indicator */}
<div className="bg-tertiary-container/30 p-6 rounded-xl flex items-center gap-4 border border-tertiary/20">
<span className="material-symbols-outlined text-tertiary text-3xl">timer</span>
<div>
<p className="text-tertiary font-bold leading-none">Hurry up!</p>
<p className="text-on-tertiary-container text-sm">Registration closes in 2 days</p>
</div>
</div>
{/* Organizer Card */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
<div className="h-24 bg-primary-container relative">
<div className="absolute -bottom-6 left-6 w-16 h-16 rounded-full border-4 border-surface-container-lowest bg-white overflow-hidden">
<img className="w-full h-full p-2" data-alt="stylized logo icon with geometric shapes in indigo and purple representing a student coding club" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjYobxPlvM5jRJ2vwePvpskKCxj1MxFlGdZejrBXUYLcWU3Nt1IMpt_Q_GQQWXJ5JwBZli1rZd60m_OT-7gT0jKNjSDERwgoSg0RO9SS9ErnNyXEjJmOw_B_Rbat8mQw_YsTdzLFd_V5YTOfJD9rFTmBhyO7UsHPP8FpYRYXn5qXk93wR1tCsKHU64he_5Em86m2SE-byjPyBIUIGgkDetGNAPYQbwqahKYnwwlr7ommI0qS0OU8LbXFpTdx6r4jaSOcdSK5fmwrIs"/>
</div>
</div>
<div className="p-8 pt-10 space-y-4">
<div>
<h3 className="text-xl font-headline font-bold text-on-surface">Coding Club</h3>
<p className="text-sm text-on-surface-variant mt-1">Innovation through code. We are a community of developers pushing the boundaries of software.</p>
</div>
<button className="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl hover:bg-surface-container-high transition-colors">
                            View Club
                        </button>
</div>
</div>
{/* Location Map */}
<div className="bg-surface-container-lowest rounded-xl p-2 shadow-sm border border-outline-variant/20">
<div className="rounded-lg overflow-hidden h-64">
<img className="w-full h-full object-cover" data-alt="overhead high-quality satellite view map showing a university campus engineering building surrounded by walkways and green spaces" data-location="Engineering Auditorium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdhs65K9JDpKrmyqfihTuIUTPpuC2oI6v9jHpOQAnKtrJbLKsNdypITmEoo87aXEfhn0BJYVYLyMjpplPP9K2JapOjKITfWnWdtgA0seL58skCMqvQYA2eJpn4CyQgdIGmXpZHn3I8q2kWKEg8rL2sPGuPHk2cjGRRvokrCZYLAa7J-Okl5__dGrIfCeWMqo47rluCbnv3vd2HU3j0vcCHtwP4D50cviS4ahBLGSNH5J1fwSjF6OgGE-lkdvNmjDbP_7LeicthSdx3"/>
</div>
<div className="p-4 flex items-start gap-3">
<span className="material-symbols-outlined text-primary">location_on</span>
<div>
<h4 className="font-bold text-on-surface">Engineering Auditorium</h4>
<p className="text-xs text-on-surface-variant">Main Campus, West Wing, Building 4B</p>
</div>
</div>
</div>
{/* Quick Actions */}
<div className="flex flex-col gap-4">
<button className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl text-on-surface hover:bg-surface-container-high transition-colors border border-outline-variant/10">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">share</span>
<span className="font-medium">Share Event</span>
</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
<button className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl text-on-surface hover:bg-surface-container-high transition-colors border border-outline-variant/10">
<span className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">help</span>
<span className="font-medium">Contact Organizer</span>
</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</aside>
</div>
</main>
{/* Footer */}
<footer className="w-full py-12 mt-auto bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<Link href="/"><span className="font-black text-slate-900 dark:text-white text-xl">CampusPulse</span></Link>
<p className="font-manrope text-sm text-slate-500 dark:text-slate-400">© 2024 CampusPulse. Empowering Student Life.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<Link className="font-manrope text-sm text-slate-500 dark:text-slate-400 hover:underline hover:text-indigo-500" href="/">Privacy Policy</Link>
<Link className="font-manrope text-sm text-slate-500 dark:text-slate-400 hover:underline hover:text-indigo-500" href="/">Terms of Service</Link>
<Link className="font-manrope text-sm text-slate-500 dark:text-slate-400 hover:underline hover:text-indigo-500" href="/">Campus Map</Link>
<Link className="font-manrope text-sm text-slate-500 dark:text-slate-400 hover:underline hover:text-indigo-500" href="/">Help Center</Link>
</div>
</div>
</footer>
    </>
  );
}
