import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* Navigation */}

<main className="pt-20">
{/* Hero Section */}
<section className="relative overflow-hidden px-8 py-24 md:py-32">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 text-primary mb-8">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wider">Live Campus Updates</span>
</div>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-6">
                        Discover Campus <span className="text-gradient">Events &amp; Clubs</span>
</h1>
<p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed mb-10 max-w-xl">
                        All your college activities in one place. Connect with peers, master new skills, and shape your student life experience.
                    </p>
<div className="flex flex-wrap gap-4">
<Link href="/events"><button className="px-8 py-4 signature-gradient text-on-primary rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300">Explore Events</button></Link>
<Link href="/clubs"><button className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300">Join a Club</button></Link>
</div>
</div>
<div className="relative">
<div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl"></div>
<div className="relative rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
<img alt="Campus Life" className="w-full h-[500px] object-cover" data-alt="Modern university campus building with glass facade at sunset with vibrant purple and orange sky reflecting in windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbn5-tVz3BEhe7xucAnOXWRYCKZjOYk9Wnc2isb6R9ATUw3eBDwWzhBAvxRxJuEcEOoP1Q0rqyauXz391jK8lEgbKiR2QqWlZTejjkjeKeBOuhC1BjtnBXeZ0-2RGk07Bue9cltcDTy9qlUD8q6mdA4uNQ_aZT7hXqd4LoUnSbjB-DTmGvVHjrHCHbkul7WrM3SAzyAB2rTKxHK6nMwpRj8yt4LgEqq_Kz93NoRVl5dsbqO8C_kaUTIMglBol5C6gG-Lt0k7_agmNE"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
</div>
</div>
</section>
{/* Featured Events */}
<section className="px-8 py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="font-headline text-4xl font-extrabold mb-4">Featured Events</h2>
<p className="text-on-surface-variant">Handpicked opportunities for growth and fun this week.</p>
</div>
<button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-200">
                        View All <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Event Card 1 */}
<div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300">
<div className="h-48 relative overflow-hidden">
<img alt="Hackathon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Group of students working on laptops in a high-tech lab setting with blue neon accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAARJ6RmK5Rn1bO05iZdVo4YyHLNdkvn6MWuOfvdVMsAzYnHARrqfvm-gD78difCA-4tnYRH36OHhNIUJocLv6vz_JKKyOW1IdIAmLyWjeRZV-25i9NbGil5YZiTUx79YxhqQ1qoloZPwg8HW1kW0v_N9lcJf_SW2MByZH8pbp2u6zOLM7T9I9r3zxmDN_9ChaA7TgSMEWS2O56zj301DnXjBzewAk1eMwjpfb42WpvwYheG5pu587DKpWmaPE7CBpCXYeqqQWH11Wn"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">Tech</div>
</div>
<div className="p-8">
<div className="flex items-center gap-2 text-tertiary mb-3">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-xs font-bold">Oct 24, 2024</span>
</div>
<h3 className="font-headline text-xl font-bold mb-3">CodeSpring Hackathon</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">Build the future in 48 hours. Collaborate with top talent and win amazing prizes.</p>
<Link href="/events"><button className="w-full py-3 bg-surface-container-low text-on-surface font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all duration-200">View Details</button></Link>
</div>
</div>
{/* Event Card 2 */}
<div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300">
<div className="h-48 relative overflow-hidden">
<img alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Professional workshop setting with a speaker presenting to a diverse group of focused young adults in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTouw7-Mn1NABtcjp154lNCxUpD7I4m6Jm-iqTjwTwQKakTvYjWceNdKG5uVMFMXSnppHF1R2gB-BGbfui_FrIf_rblvNk72MrplGWRPnX9N5QEDQwDa_jB8sH08E57cxAFZ0uowTLOtwm7SyPfjQGnZJvcXC2YL0ZQeNCV2AxDpWImzpAYWSmXV0iKj5m0qUvomhFdciS36P680Vv8PyE_AIgJuxnBz1TVWJisCyJiWObwLdDnzgTJ6Oxhzw4OCWFi2eX54PZLgM"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-secondary">Career</div>
</div>
<div className="p-8">
<div className="flex items-center gap-2 text-tertiary mb-3">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-xs font-bold">Oct 27, 2024</span>
</div>
<h3 className="font-headline text-xl font-bold mb-3">UI/UX Design Workshop</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">Learn the fundamentals of user experience and visual design from industry experts.</p>
<Link href="/events"><button className="w-full py-3 bg-surface-container-low text-on-surface font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all duration-200">View Details</button></Link>
</div>
</div>
{/* Event Card 3 */}
<div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300">
<div className="h-48 relative overflow-hidden">
<img alt="Cultural Fest" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Vibrant outdoor music festival at night with colorful stage lights, silhouettes of a dancing crowd, and confetti" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArNB6bVg6h1AgE3QeGgzgOa18-TVE1j4UQIZXZz6pVXP_AJ-d58fL8YhVTwsEMIvvA6BIM3j9oWNRuTl506YeLjpZ3LM_8HZiNnapgqRp0gX2X81fyllupyM-7wQdfUMsEFew-omnG3o-hNKS65MwOijVbp4Th8StyQp6oSiWFjuwLridGBAuF_clpGRZ4XZPwAmPAgrp1sFlBpqDM5B6_FRDA6UQjjNamzCyC75-LZxZ808NWdTqq-jlHGE6zAaZWqI7wLqAVoomG"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-tertiary">Cultural</div>
</div>
<div className="p-8">
<div className="flex items-center gap-2 text-tertiary mb-3">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span className="text-xs font-bold">Nov 02, 2024</span>
</div>
<h3 className="font-headline text-xl font-bold mb-3">Pulse Festival 2024</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">The biggest campus celebration featuring live music, food stalls, and art exhibitions.</p>
<Link href="/events"><button className="w-full py-3 bg-surface-container-low text-on-surface font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all duration-200">View Details</button></Link>
</div>
</div>
</div>
</div>
</section>
{/* Why Use Section (Bento Inspired) */}
<section className="px-8 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl font-extrabold mb-4">Elevate Your Campus Experience</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">CampusPulse bridges the gap between students and opportunities through intelligent automation and community building.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Feature 1 */}
<div className="md:col-span-1 bg-primary-container/10 p-10 rounded-xl flex flex-col justify-between">
<div>
<div className="w-14 h-14 signature-gradient rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-3xl">event_busy</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Never miss deadlines</h3>
<p className="text-on-surface-variant leading-relaxed">Sync campus event registrations directly with your academic calendar. Stay ahead of every schedule.</p>
</div>
</div>
{/* Feature 2 */}
<div className="md:col-span-1 bg-surface-container p-10 rounded-xl flex flex-col justify-between">
<div>
<div className="w-14 h-14 bg-tertiary rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-tertiary/20">
<span className="material-symbols-outlined text-3xl">notifications_active</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Get reminders</h3>
<p className="text-on-surface-variant leading-relaxed">Receive smart notifications for club meetings, workshops, and early-bird event registrations tailored to your interests.</p>
</div>
</div>
{/* Feature 3 */}
<div className="md:col-span-1 bg-secondary-container/20 p-10 rounded-xl flex flex-col justify-between">
<div>
<div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined text-3xl">group</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Join communities</h3>
<p className="text-on-surface-variant leading-relaxed">Find like-minded people. Join specialized clubs and grow your network within the university ecosystem.</p>
</div>
</div>
</div>
</div>
</section>
{/* Clubs Section */}
<section className="px-8 py-24 bg-surface-container-low overflow-hidden relative">
<div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-16">
<h2 className="font-headline text-4xl font-extrabold">Active Clubs</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Club 1 */}
<div className="bg-surface-container-lowest p-8 rounded-lg hover:scale-105 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 group">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
</div>
<span className="text-xs font-bold text-slate-400">1.2k Members</span>
</div>
<h3 className="font-headline text-lg font-bold mb-2">Coding Club</h3>
<p className="text-on-surface-variant text-sm mb-6">Sharpen your logic and build innovative software solutions.</p>
<button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Club <span className="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
{/* Club 2 */}
<div className="bg-surface-container-lowest p-8 rounded-lg hover:scale-105 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 group">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
<span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
<span className="text-xs font-bold text-slate-400">850 Members</span>
</div>
<h3 className="font-headline text-lg font-bold mb-2">Robotics Club</h3>
<p className="text-on-surface-variant text-sm mb-6">Dive into the world of hardware, sensors, and AI-driven bots.</p>
<button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Club <span className="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
{/* Club 3 */}
<div className="bg-surface-container-lowest p-8 rounded-lg hover:scale-105 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 group">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600">
<span className="material-symbols-outlined" data-icon="music_note">music_note</span>
</div>
<span className="text-xs font-bold text-slate-400">2.1k Members</span>
</div>
<h3 className="font-headline text-lg font-bold mb-2">Music Club</h3>
<p className="text-on-surface-variant text-sm mb-6">From classical to contemporary, find your rhythm here.</p>
<button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Club <span className="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
{/* Club 4 */}
<div className="bg-surface-container-lowest p-8 rounded-lg hover:scale-105 hover:shadow-[0px_20px_40px_rgba(44,47,48,0.06)] transition-all duration-300 group">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined" data-icon="brush">brush</span>
</div>
<span className="text-xs font-bold text-slate-400">600 Members</span>
</div>
<h3 className="font-headline text-lg font-bold mb-2">Creative Arts</h3>
<p className="text-on-surface-variant text-sm mb-6">Express your vision through digital and traditional media.</p>
<button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Club <span className="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="px-8 py-24">
<div className="max-w-7xl mx-auto">
<div className="signature-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-primary mb-6">Ready to make the most of your college years?</h2>
<p className="text-on-primary/80 text-lg mb-10">Join thousands of students who are already using CampusPulse to transform their campus life.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/login"><button className="px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">Get Started for Free</button></Link>
<button className="px-10 py-5 bg-transparent border-2 border-white/30 text-on-primary rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">Contact Support</button>
</div>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}

    </>
  );
}
