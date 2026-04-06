import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* TopNavBar */}

<main className="pt-20">
{/* Hero Section */}
<section className="relative px-8 pt-8">
<div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="modern tech workspace with multiple screens, glowing neon keyboard, and students collaborating in a sleek dark environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyscsVAEm37SCEzeYwxxTzWghQ_dvxR3Ydf1g5T4q93_dlK9fvymwv8rXZaYzIRYIy4c4GhwWL45dFwNyFjE3wf4dHRgCPdHfKgMff9tC2vMnZHjKhaToCoQsgC7hy-nVeMBDLn4kAv8-rBjgguQAryqmKmpjl47AP4hYYw0M6MySEP60wTVs1N-WDHF9T6fbSB3j_L5ACuqrgXuuh1_dhw-y2AF48xfPtpBu1QPQ4Qp_SeRKSgsWtHt0I00ZE7z7C8hd3AccOpCep"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>
<div className="absolute bottom-12 left-12 flex items-end gap-8">
<div className="h-32 w-32 rounded-lg bg-surface-container-lowest p-2 shadow-xl ring-4 ring-white/10">
<div className="w-full h-full signature-gradient rounded-DEFAULT flex items-center justify-center">
<span className="material-symbols-outlined text-white text-5xl" >terminal</span>
</div>
</div>
<div className="mb-2">
<div className="flex items-center gap-3 mb-2">
<span className="bg-tertiary px-3 py-1 rounded-full text-on-tertiary text-xs font-bold uppercase tracking-wider">Engineering</span>
<div className="flex items-center text-secondary-fixed">
<span className="material-symbols-outlined text-sm" >star</span>
<span className="ml-1 text-sm font-bold">4.8</span>
</div>
</div>
<h1 className="text-5xl font-black text-white font-headline tracking-tighter">Coding Club</h1>
<p className="text-white/80 font-medium mt-1">Building the future, one line of code at a time.</p>
</div>
</div>
<div className="absolute bottom-12 right-12">
<button className="signature-gradient text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-all">
                        Join Club
                        <span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</section>
{/* Content Grid */}
<section className="px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Left Column: About & Leadership */}
<div className="lg:col-span-8 space-y-12">
{/* About Section */}
<div className="bg-surface-container-lowest rounded-lg p-10">
<h2 className="text-3xl font-black font-headline tracking-tight mb-6">About Our Mission</h2>
<div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
<p>The Coding Club at CampusPulse is a dynamic community of developers, designers, and tech enthusiasts. We believe that technology is the most powerful tool for change, and our mission is to empower students through peer-led learning, project collaboration, and industry exposure.</p>
<p>Whether you're writing your first "Hello World" or architecting complex systems, you'll find a home here. We host weekly workshops, hackathons, and guest lectures from industry veterans at companies like Google, Meta, and leading AI startups.</p>
</div>
{/* Stats Bento Row */}
<div className="grid grid-cols-3 gap-6 mt-10">
<div className="bg-surface-container-low p-6 rounded-DEFAULT text-center">
<span className="block text-3xl font-black text-primary font-headline">450+</span>
<span className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Active Members</span>
</div>
<div className="bg-surface-container-low p-6 rounded-DEFAULT text-center">
<span className="block text-3xl font-black text-secondary font-headline">12</span>
<span className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Open Projects</span>
</div>
<div className="bg-surface-container-low p-6 rounded-DEFAULT text-center">
<span className="block text-3xl font-black text-tertiary font-headline">24</span>
<span className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Hackathons Won</span>
</div>
</div>
</div>
{/* Posters & Media Section */}
<div>
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-3xl font-black font-headline tracking-tight">Posters &amp; Media</h2>
<p className="text-on-surface-variant">Gallery of our recent activities and event highlights.</p>
</div>
<button className="text-primary font-bold flex items-center gap-1 hover:underline">
                            View All Media
                            <span className="material-symbols-outlined">collections</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer bg-surface-container-highest">
</div></div></div></div></section></main>
    </>
  );
}
