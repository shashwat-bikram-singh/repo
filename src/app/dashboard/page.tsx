import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* TopNavBar Shell */}
<nav className="flex justify-between items-center w-full px-8 h-20 sticky top-0 z-50 bg-[#f5f6f7]/80 dark:bg-slate-900/80 backdrop-blur-xl">
<div className="flex items-center gap-8">
<Link href="/"><span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#4647d3] to-[#6a37d4] bg-clip-text text-transparent">CampusPulse</span></Link>
<div className="hidden md:flex items-center gap-6">
<Link className="text-[#2c2f30] dark:text-white font-bold border-b-2 border-[#6366F1] pb-1" href="/">Dashboard</Link>
<Link className="text-[#595c5d] dark:text-slate-400 font-medium hover:text-[#2c2f30] dark:hover:text-white transition-colors" href="/calendar">Calendar</Link>
<Link className="text-[#595c5d] dark:text-slate-400 font-medium hover:text-[#2c2f30] dark:hover:text-white transition-colors" href="/clubs">Clubs</Link>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="search">search</span>
</div>
<input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary-container w-64 transition-all" placeholder="Search events..." type="text"/>
</div>
<button className="p-2 hover:bg-[#eff1f2] dark:hover:bg-slate-800/50 rounded-full transition-all active:scale-95">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</button>
<img alt="Student profile avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-container" data-alt="Portrait of a smiling young college student with trendy glasses and short hair, soft natural indoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGwHMCOVt-cShI2XzRdY31YOihcbVO-qdHlMHDAUsThzGA_X_E3T9BmcNb-DzumZWnrpHDO-pimot5OSjpybYWYOhD3R0bptmsqpcE_W_jcJRr9N067yAu4g3r3eKPGWMGmjgdpCciHVNf3xKYWhccfM8x-Hqm6yiSpJEe-8ssNl8k0NDU5thu-3WgqdWLrdwIDy1Xv6Nmppa3wMBSd7dcGBY0c5D3D24yuaXStLtZ0SpvCm8U3Cdl18H3Rav104deMYt8G3Vh0nHX"/>
</div>
</nav>
<div className="flex">
{/* SideNavBar Shell */}
<aside className="hidden lg:flex flex-col py-8 gap-4 h-screen w-64 fixed left-0 top-0 bg-[#eff1f2] dark:bg-slate-800/50 mt-20">
<div className="px-6 mb-4">
<h2 className="text-xl font-black text-[#2c2f30] dark:text-white">CampusPulse</h2>
<p className="text-xs text-on-surface-variant">Student Portal</p>
</div>
<nav className="flex flex-col gap-1">
<Link className="flex items-center gap-3 py-3 px-6 bg-white dark:bg-slate-900 text-[#4647d3] dark:text-[#9396ff] rounded-r-full font-bold shadow-sm" href="/">
<span className="material-symbols-outlined" data-icon="grid_view" data-weight="fill" >grid_view</span>
                    Home
                </Link>
<Link className="flex items-center gap-3 py-3 px-6 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full" href="/">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                    Events
                </Link>
<Link className="flex items-center gap-3 py-3 px-6 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full" href="/clubs">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
                    Clubs
                </Link>
<Link className="flex items-center gap-3 py-3 px-6 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full" href="/">
<span className="material-symbols-outlined" data-icon="school">school</span>
                    Academia
                </Link>
<Link className="flex items-center gap-3 py-3 px-6 text-[#595c5d] dark:text-slate-400 hover:translate-x-1 transition-transform hover:bg-[#dadddf] dark:hover:bg-slate-700 rounded-r-full mt-auto" href="/">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </Link>
</nav>
<div className="px-6 mt-8">
<button className="w-full signature-gradient text-on-primary font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="add">add</span>
                    Create Event
                </button>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 lg:ml-64 p-8 min-h-screen">
{/* Greeting & Quick Stats */}
<header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h1 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface mb-2">Welcome back, Alex!</h1>
<p className="text-lg text-on-surface-variant font-medium">You have 2 events scheduled for today.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-none flex flex-col min-w-[140px]">
<span className="text-3xl font-black text-primary mb-1">12</span>
<span className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Events Attended</span>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-none flex flex-col min-w-[140px]">
<span className="text-3xl font-black text-secondary mb-1">04</span>
<span className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Clubs Joined</span>
</div>
</div>
</header>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Hero: Next Event (6 columns) */}
<section className="lg:col-span-8 relative overflow-hidden signature-gradient rounded-xl p-8 text-white group cursor-pointer shadow-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">UPCOMING SOON</span>
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-tertiary rounded-full animate-pulse shadow-[0_0_8px_#963776]"></span>
<span className="text-xs font-bold text-white/80">Live Countdown</span>
</div>
</div>
<h3 className="font-headline text-4xl font-extrabold leading-tight mb-4 max-w-md">Quantum Computing Workshop</h3>
<div className="flex items-center gap-4 text-on-primary/90">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-lg" data-icon="schedule">schedule</span>
<span className="font-medium text-sm">Today, 4:00 PM</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-lg" data-icon="location_on">location_on</span>
<span className="font-medium text-sm">Tech Hall A1</span>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div className="flex gap-4">
<div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg text-center">
<div className="text-2xl font-black">02</div>
<div className="text-[10px] opacity-60 font-bold uppercase tracking-widest">Hours</div>
</div>
<div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg text-center">
<div className="text-2xl font-black">44</div>
<div className="text-[10px] opacity-60 font-bold uppercase tracking-widest">Mins</div>
</div>
</div>
<button className="bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-surface-container-lowest transition-all group-hover:scale-105 active:scale-95 shadow-lg">
                                View Details
                            </button>
</div>
</div>
<div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[160px]" data-icon="rocket_launch">rocket_launch</span>
</div>
</section>
{/* Side Info: Weather/Time or Pulse (4 columns) */}
<section className="lg:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" data-icon="bolt">bolt</span>
</div>
<div>
<h4 className="font-headline text-lg font-bold">Campus Pulse</h4>
<p className="text-xs text-on-surface-variant">Live University Activity</p>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<p className="text-sm font-medium">Tech Hall: <span className="text-on-surface-variant font-normal">Highly Active</span></p>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
<p className="text-sm font-medium">Main Library: <span className="text-on-surface-variant font-normal">Moderate</span></p>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#4647d3]"></div>
<p className="text-sm font-medium">Food Court: <span className="text-on-surface-variant font-normal">Quiet</span></p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-outline-variant/10">
<img alt="Modern university campus" className="w-full h-32 object-cover rounded-lg mb-4" data-alt="Wide shot of a contemporary university campus with glass buildings and green lawns in bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG5Ax14P5k3CF024ldRp3QGG08Tw9cgW-Bkp_XjuV89X4BNo05fVReMwuTGchn7yZmn1rI7I4uosK4IKMkdvj-39ne1AAwVLCQ_lFfuilLGEDLyw15Q6SM3x0Rh5dgWfHI-Bcrh2NAadpwYpDaXdiuOIxprM87099mpqjL7Bo8wRrKhigmLqgj1P7psovR2dHg170R9ob9TPXQXtFW0NMhMeeyc-YIilPLe1W89tIvXE-h3ZoifEYAJUveGmiTxTNrqdwa72pXbH52"/>
<p className="text-xs text-on-surface-variant leading-relaxed">The campus is currently experiencing peak hours for academic activities.</p>
</div>
</section>
{/* My Clubs Section (4 columns) */}
<section className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="font-headline text-xl font-bold">My Clubs</h3>
<button className="text-primary text-xs font-bold hover:underline">See all</button>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg group hover:scale-[1.02] transition-transform cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img alt="Coding Club" className="w-full h-full object-cover" data-alt="Macro photo of glowing computer code on a dark screen with vibrant neon blue and purple highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbwNB0Fnb_6KgessrZDzVgZHdobBTaZS9mJ6eqzp3dg2sDTcBzIEj1BuDy2M-khOlZSotPymGImXyTdJAbDhmRkhNFtVMaGPvm_wha2uEkMo5SPIwYhPe6ZRecDlAG5QlcyQ2h2yAtsqtsPKa1Kwen-dgaynnio443mQnCuMMIZooNyH0d2JJnWCg9565_du2R4zc_3nNZmUDRhpZVSZ_9YXMDeQO3PUNefLRQ6HuiHHwENrj4wXy9CjLFUjqxptC8bn2vKyDwTTeQ"/>
</div>
<div>
<h4 className="font-bold text-sm">Coding Club</h4>
<p className="text-xs text-on-surface-variant">42 Active Members</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg group hover:scale-[1.02] transition-transform cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img alt="Robotics Club" className="w-full h-full object-cover" data-alt="High-tech robotic arm in a brightly lit lab environment, sleek metallic textures and glowing sensors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDceEDU5CCl437na5oSP7o6paHkNe3LWjsYn81xv5hlYMI0bsrFYT5bw1nSUvId6cI2IfmEIoT6ldpQEUU4AlrBhImNTiXPyRe21oLuVYkf1cCXbKvpdW45vr3B_LfU7rcdXg1HfqW-S3EEFvCSfsUbsTeRsEeLyRqEtblsK7VG-UPAufY7nraL9D-pq8bQxk317AmAuRmW13XrjEAkQuj2H_TOJ1ORbdFHOea8JPYLlk_agA9CvqVvah0ZKzVwobTOTpueT75nFv0t"/>
</div>
<div>
<h4 className="font-bold text-sm">Robotics Club</h4>
<p className="text-xs text-on-surface-variant">28 Active Members</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<button className="w-full mt-6 py-3 rounded-lg border-2 border-dashed border-outline-variant text-on-surface-variant text-sm font-bold hover:bg-surface-container-low transition-colors">
                        Join More Clubs
                    </button>
</section>
{/* Registered Events (8 columns) */}
<section className="lg:col-span-8">
<div className="flex items-center justify-between mb-8">
<h3 className="font-headline text-xl font-bold">My Registered Events</h3>
<div className="flex gap-2">
<button className="p-2 bg-surface-container-low rounded-full hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Event Card 1 */}
<div className="bg-surface-container-lowest rounded-lg overflow-hidden group shadow-sm">
<div className="h-40 overflow-hidden relative">
<img alt="Entrepreneurship Seminar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Dynamic shot of people networking in a modern brightly lit office space with warm wooden accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr0F1M-jKNDFlzvjUpcL0sntoNY4QKPmiFf1o9MlSsv4okv5eYCH4VF_UHosADtOtcVbUMm6aozAYbJyXzHtnANjbe7O9by4D2Fg7b5ZIW7lFFIkBRWIlDPhIIo8TrY5wk9NIqdN6XAhQ7AYmftugJJnqujdrLATWO7ILy-ipZwPw6sAD-C1aXzapRcWx5BwRWtUlOiWmE7_txR0W2FA7yWofp2gCaaOW3f5A2D6YlsHVn54zZp0LHEv8Lpec7x90z2byYIbBaeftQ"/>
<div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">Dec 12</div>
</div>
<div className="p-6">
<h4 className="font-bold text-lg mb-2">AI Ethics Seminar</h4>
<p className="text-xs text-on-surface-variant mb-4 line-clamp-2">Join us for a deep dive into the societal impacts of artificial intelligence with Dr. Sarah Chen.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="Portrait of a woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV0cOKptUD7qAshSM5GyyjYCL44dd6fvyhJ4ozOa3s4w_0L99rqs-GalhdqlcvUGqd3wjrbOyigXbpC-sT4aIk_6cEBk91XuG8s-4D-NrsLBM5Cg2-5wnV2HRlfd_tk3JQUUMj-STwRjh-iC5kQ0pThvzIsBjL8uVLZhDmYGqWuzOfn41c2yf8BXWeBqbKERS_W2tOrpt0gybvOeIKMa8Sbdu-NK9reNWZVMgn9AqSI2f89fMFa8436MZxY7b0MdS-m2l4WF61fAQL"/>
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="Portrait of a man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrtFJKGoIA3M6lh4A8ewNOTh9ownrYKuZXwK0XVliJAv1q19sFOwPZZlbbNy36eXwynLOpGCjvCLRzJ1Mf_Fu1uzXXCOMw2V8cJVHTsCwSWD1LNj5M126GudW-rKgt15OgUnsd-K33hifRuVA3EKo8IcCZQjNgqnkyOtif4pc01UMcQK4Gy_kQp3hvp6BeLQFmKWcAQoGp43Qo7_X5mkksGH14v_kuc7EfYKk_6kbSwu9mq5ZYVA2-ilakalOhWVQcL3WDRLP9YKZq"/>
<div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[8px] font-bold">+18</div>
</div>
<span className="text-xs font-bold text-secondary">Going</span>
</div>
</div>
</div>
{/* Event Card 2 */}
<div className="bg-surface-container-lowest rounded-lg overflow-hidden group shadow-sm">
<div className="h-40 overflow-hidden relative">
<img alt="Winter Gala" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Atmospheric shot of a festive gala event with warm string lights and blurred figures in formal attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW8p5VmA0NRUj5VUVjfgaNyAQXvLuJ7rCZKQNqXrUWJ78Y6Y4IaO63F_i9rhr5xaezpy4TDkl5AkwmQimPmudg2vpMZqF7z-7uW-aqx4ig1rd6aJ5HF3WJj93kuDbz56z98CYvwIkV-U-OwfulQ84RqcIJMYXtNMZLXKy_RLUMuTqUID2KbsO2J_ygwwp-i-XSXWuYF9I0A1dvPssVxy5-TEZAaJDoB6ySEEXypi4i4E8uw2MLIrhMb03jNaZl3eVeAuzuA7Krh2hB"/>
<div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">Dec 15</div>
</div>
<div className="p-6">
<h4 className="font-bold text-lg mb-2">Winter Formal Night</h4>
<p className="text-xs text-on-surface-variant mb-4 line-clamp-2">The most anticipated social event of the semester. Formal attire required.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="Portrait of a man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHVL8SZotQ0ocwBjZAPbOHZyAaNmBNpB22vvhC4JPwbqG-9o9-_Fc1A53Mj1EhlR22CbUTG2Q4jNmNNVeXdpVut7CAaT8JaWBUH6f-MLW_d6Fcs_F-R9WUHgR05xTdF4VHhLOGLlCvX0XX6ZNRy4hQ14QFH831y8RAvdywEOvRwc5XL_OUI4gUe6dZfEbl2VrEFK65rqToTrup4w5JQnW2tGzjVKzt_d47smPdjO3oH6Xs5o5azutKE2P7KpMl0XBaWNrGzZdSkzzj"/>
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="Portrait of a woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOm1Yb31UhEJe9Ku7WL7XxcyOcd_QG5_-Z35eBMjziZjmJP757Xf8xQRrDFDBxyNi5bcgDnlMDrj-5vKvAaPEZt2X5aCtdnJMzNb4bVUc40aqdqMfPRonqRtWLjPUiC5b0x2aYCFY5822x5R2e_yX1lRUDc9VAIZ2gKpyqWS5NlfEGf8i_APJHHj2cCQ9CcDGzY3_7yL2rFzC6TGsONHkG5rg47LZ9ZrsT47QSBEzc5dWl3yGDtgAsxAnDr7Qu63_KGo-dx_4f9Km0"/>
<div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[8px] font-bold">+250</div>
</div>
<span className="text-xs font-bold text-secondary">Going</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
{/* Mobile Navigation Shell (Fixed Bottom) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 flex justify-around py-4 px-2 z-50 border-t border-outline-variant/10">
<Link className="flex flex-col items-center gap-1 text-[#4647d3]" href="/">
<span className="material-symbols-outlined" data-icon="grid_view" data-weight="fill" >grid_view</span>
<span className="text-[10px] font-bold">Home</span>
</Link>
<Link className="flex flex-col items-center gap-1 text-[#595c5d]" href="/">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="text-[10px] font-medium">Events</span>
</Link>
<Link className="flex flex-col items-center gap-1 text-[#595c5d]" href="/clubs">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="text-[10px] font-medium">Clubs</span>
</Link>
<Link className="flex flex-col items-center gap-1 text-[#595c5d]" href="/">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-[10px] font-medium">Profile</span>
</Link>
</nav>
    </>
  );
}
