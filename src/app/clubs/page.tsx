import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(44,47,48,0.06)] h-20 px-8 flex justify-between items-center max-w-full mx-auto">
<div className="flex items-center gap-12">
<Link href="/"><span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-['Manrope'] antialiased tracking-tight" >CampusPulse</span></Link>
<div className="hidden md:flex gap-8">
<Link className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors font-['Manrope'] antialiased tracking-tight" href="/events" >Explore Events</Link>
<Link className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 font-['Manrope'] antialiased tracking-tight" href="/clubs" >Clubs</Link>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full gap-2">
<span className="material-symbols-outlined text-outline" >search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body" placeholder="Search clubs..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-slate-600 hover:scale-105 transition-all" >notifications</button>
<button className="material-symbols-outlined text-slate-600 hover:scale-105 transition-all" >bookmark</button>
<div className="h-10 w-10 rounded-full overflow-hidden hover:scale-105 transition-all cursor-pointer">
<img alt="User profile" className="w-full h-full object-cover" data-alt="close-up portrait of a smiling university student with glasses in a soft-lit campus library setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Ua78bW3unTD51JDtqw1zhqbdZKR0ICIbCRsneUHOoITx1AkV_2amNHB2Q-EaisVAYHFl6CaLW8VXWr-0yKDa4GafXm3Ca-I58zCxlcoG8Ao9dRrGhjJY0A7WuUCr5XPs8hE4dOy1FiDaTDXnyx39jTbBUotSin5IcziHg6-bIXxs2x4_aaim5KqTVL0fUErYd5aASmZpD6xIAMe3Tt9fD7mGNED92b1mI8oN_xeRpoGCFRvUQtcGI-q-DuCVk1tFn6gQZflHcgx6" />
</div>
</div>
</div>
</nav>
{/* Main Content Canvas */}
<main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
{/* Hero Header Section */}
<header className="mb-20 text-center md:text-left">
<div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-2 rounded-full mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="text-xs font-bold font-label uppercase tracking-widest" >Active Community</span>
</div>
<h1 className="editorial-header text-5xl md:text-7xl font-extrabold text-on-surface mb-6 max-w-4xl" >
                Find your tribe at <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" >CampusPulse</span>.
            </h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-body leading-relaxed" >
                Connect with 150+ student-led organizations. From high-tech robotics to contemporary dance, discover where you belong.
            </p>
</header>
{/* Filter Bar - Tonal Shift instead of Lines */}
<div className="bg-surface-container-low rounded-xl p-4 mb-12 flex flex-wrap gap-4 items-center justify-between">
<div className="flex gap-2">
<button className="bg-surface-container-lowest text-primary px-6 py-2 rounded-full font-bold shadow-sm hover:scale-105 transition-all" >All Clubs</button>
<button className="text-on-surface-variant hover:text-primary px-6 py-2 transition-colors" >Technology</button>
<button className="text-on-surface-variant hover:text-primary px-6 py-2 transition-colors" >Creative Arts</button>
<button className="text-on-surface-variant hover:text-primary px-6 py-2 transition-colors" >Sports</button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined" >filter_list</span>
<span className="text-sm font-label" >Sort by Activity</span>
</div>
</div>
{/* Clubs Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Coding Club Card */}
<div className="group bg-surface-container-lowest rounded-lg p-8 flex flex-col justify-between hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 border-none relative overflow-hidden">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-4xl text-primary/10 group-hover:text-primary/20 transition-colors" data-icon="code" >code</span>
</div>
<div>
<div className="h-14 w-14 rounded-md bg-primary-container/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary" data-icon="terminal" >terminal</span>
</div>
<h3 className="editorial-header text-2xl font-bold mb-4" >Coding</h3>
<p className="text-on-surface-variant font-body leading-relaxed mb-8" >
                        Building the future of software through weekly hackathons, peer-mentoring, and collaborative open-source projects.
                    </p>
</div>
<Link href="/clubs"><button className="w-full py-4 rounded-xl bg-surface-container-low text-on-surface font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary hover:scale-[1.02] active:scale-95 transition-all" >View Club</button></Link>
</div>
{/* Robotics Club Card */}
<div className="group bg-surface-container-lowest rounded-lg p-8 flex flex-col justify-between hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 border-none">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-4xl text-tertiary/10 group-hover:text-tertiary/20 transition-colors" data-icon="precision_manufacturing" >precision_manufacturing</span>
</div>
<div>
<div className="h-14 w-14 rounded-md bg-tertiary-container/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-tertiary" data-icon="smart_toy" >smart_toy</span>
</div>
<h3 className="editorial-header text-2xl font-bold mb-4" >Robotics</h3>
<p className="text-on-surface-variant font-body leading-relaxed mb-8" >
                        Design, assemble, and compete. Our engineering teams take on national championships with cutting-edge autonomous bots.
                    </p>
</div>
<Link href="/clubs"><button className="w-full py-4 rounded-xl bg-surface-container-low text-on-surface font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary hover:scale-[1.02] active:scale-95 transition-all" >View Club</button></Link>
</div>
{/* Dance Club Card */}
<div className="group bg-surface-container-lowest rounded-lg p-8 flex flex-col justify-between hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 border-none">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-4xl text-secondary/10 group-hover:text-secondary/20 transition-colors" data-icon="music_note" >music_note</span>
</div>
<div>
<div className="h-14 w-14 rounded-md bg-secondary-container/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary" data-icon="self_improvement" >self_improvement</span>
</div>
<h3 className="editorial-header text-2xl font-bold mb-4" >Dance</h3>
<p className="text-on-surface-variant font-body leading-relaxed mb-8" >
                        Exploring movement from ballet to hip-hop. Join us for studio workshops and annual showcase performances.
                    </p>
</div>
<Link href="/clubs"><button className="w-full py-4 rounded-xl bg-surface-container-low text-on-surface font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary hover:scale-[1.02] active:scale-95 transition-all" >View Club</button></Link>
</div>
{/* Entrepreneurship Card */}
<div className="group bg-surface-container-lowest rounded-lg p-8 flex flex-col justify-between hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 border-none">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-4xl text-primary/10 group-hover:text-primary/20 transition-colors" data-icon="lightbulb" >lightbulb</span>
</div>
<div>
<div className="h-14 w-14 rounded-md bg-primary-container/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary" data-icon="rocket_launch" >rocket_launch</span>
</div>
<h3 className="editorial-header text-2xl font-bold mb-4" >Startup Hub</h3>
<p className="text-on-surface-variant font-body leading-relaxed mb-8" >
                        Turning student ideas into viable businesses through venture modeling, pitch prep, and seed networking.
                    </p>
</div>
<Link href="/clubs"><button className="w-full py-4 rounded-xl bg-surface-container-low text-on-surface font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary hover:scale-[1.02] active:scale-95 transition-all" >View Club</button></Link>
</div>
{/* Environmental Club Card */}
<div className="group bg-surface-container-lowest rounded-lg p-8 flex flex-col justify-between hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 border-none">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-4xl text-tertiary/10 group-hover:text-tertiary/20 transition-colors" data-icon="eco" >eco</span>
</div>
<div>
<div className="h-14 w-14 rounded-md bg-tertiary-container/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-tertiary" data-icon="forest" >forest</span>
</div>
<h3 className="editorial-header text-2xl font-bold mb-4" >EcoAction</h3>
<p className="text-on-surface-variant font-body leading-relaxed mb-8" >
                        Dedicated to campus sustainability. Join our zero-waste initiatives and regional conservation efforts.
                    </p>
</div>
<Link href="/clubs"><button className="w-full py-4 rounded-xl bg-surface-container-low text-on-surface font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary hover:scale-[1.02] active:scale-95 transition-all" >View Club</button></Link>
</div>
{/* Photography Club Card */}
<div className="group bg-surface-container-lowest rounded-lg p-8 flex flex-col justify-between hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 border-none">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-4xl text-secondary/10 group-hover:text-secondary/20 transition-colors" data-icon="music_note" >music_note</span>
</div>
<div>
<div className="h-14 w-14 rounded-md bg-secondary-container/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary" data-icon="music_note" >music_note</span>
</div>
<h3 className="editorial-header text-2xl font-bold mb-4" >Music</h3>
<p className="text-on-surface-variant font-body leading-relaxed mb-8" >
                        Capturing campus life through the lens. Workshops in darkroom techniques and digital post-production.
                    </p>
</div>
<Link href="/clubs"><button className="w-full py-4 rounded-xl bg-surface-container-low text-on-surface font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-on-primary hover:scale-[1.02] active:scale-95 transition-all" >View Club</button></Link>
</div>
</div>
{/* Featured Section with Tonal Shift */}
<section className="mt-32 bg-secondary-container/10 rounded-xl p-12 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="editorial-header text-4xl font-extrabold mb-6" >Don't see your passion?</h2>
<p className="text-lg text-on-surface-variant font-body mb-8" >
                    Starting a new club is easy. We provide the funding, space, and organizational support to help you build a community around what you love.
                </p>
<Link href="/clubs"><button className="bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg" >Start a New Club</button></Link>
</div>
<div className="flex-1 w-full aspect-video rounded-lg overflow-hidden shadow-xl">
<img alt="Students collaborating" className="w-full h-full object-cover" data-alt="vibrant group of diverse students collaborating around a wooden table in a bright modern workspace with sketches and coffee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUGIFB7o7ZMN_rNVQ9SEb7g9hAGD_PO0koFGwzAs3Eelu1qDL6WcdTG0VUOEdauGr-E2Zv7bV5PcvEdFhkzFcCjU3gnFmxQ3WdstQoAKYfmghUJpEIPUAdmNcXtXqn13Shb1dQsVSiJ6-54SD6o8S8g2mtgFEDv7cBn1UN3IPbjfRD5OjsPlj6XEYXVAHxs8Vo_4Cxb3u2ujLSTyAbVjpuSK0W727v5ZSNQNWXpOERzUUSWHpSI2BE74BsE85PMxshX-Tbcc6X8jYb" />
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-slate-100 dark:bg-slate-950 w-full py-12 mt-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-1">
<Link href="/"><span className="font-['Manrope'] font-bold text-slate-900 dark:text-slate-100 text-xl block mb-4" >CampusPulse</span></Link>
<p className="font-['Inter'] text-sm text-slate-500 leading-relaxed" >© 2024 CampusPulse. Editorial Experience for Student Life.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-on-surface text-sm uppercase tracking-widest mb-2 font-label" >Platform</h4>
<Link className="text-slate-500 hover:text-indigo-500 font-['Inter'] text-sm transition-colors" href="/" >About</Link>
<Link className="text-slate-500 hover:text-indigo-500 font-['Inter'] text-sm transition-colors" href="/" >Contact</Link>
<Link className="text-slate-500 hover:text-indigo-500 font-['Inter'] text-sm transition-colors" href="/" >Support</Link>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-on-surface text-sm uppercase tracking-widest mb-2 font-label" >Legal</h4>
<Link className="text-slate-500 hover:text-indigo-500 font-['Inter'] text-sm transition-colors" href="/" >Privacy</Link>
<Link className="text-slate-500 hover:text-indigo-500 font-['Inter'] text-sm transition-colors" href="/" >Terms</Link>
<Link className="text-slate-500 hover:text-indigo-500 font-['Inter'] text-sm transition-colors" href="/" >Cookies</Link>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-on-surface text-sm uppercase tracking-widest mb-2 font-label" >Connect</h4>
<div className="flex gap-4">
<button className="material-symbols-outlined text-slate-500 hover:text-indigo-500" >share</button>
<button className="material-symbols-outlined text-slate-500 hover:text-indigo-500" >mail</button>
<button className="material-symbols-outlined text-slate-500 hover:text-indigo-500" >public</button>
</div>
</div>
</div>
</footer>
    </>
  );
}
