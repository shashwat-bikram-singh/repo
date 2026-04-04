import Link from "next/link";
export default function Page() {
  return (
    <>
      {/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(44,47,48,0.06)] h-20 px-8 flex justify-between items-center font-['Manrope'] antialiased tracking-tight">
<div className="flex items-center gap-12">
<Link href="/"><span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">CampusPulse</span></Link>
<div className="hidden md:flex gap-8">
<Link className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors" href="/events">Explore Events</Link>
<Link className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors" href="/clubs">Clubs</Link>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex gap-4">
<Link href="/login"><button className="text-indigo-600 dark:text-indigo-400 font-bold hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95 duration-150">Login</button></Link>
<Link href="/login"><button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95 duration-150">Register</button></Link>
</div>
<div className="flex gap-4 border-l border-slate-200 pl-6 items-center">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-indigo-500 transition-colors">notifications</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-indigo-500 transition-colors">bookmark</span>
</div>
</div>
</nav>
{/* Main Content Area: Centered Authentication UI */}
<main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
<div className="w-full max-w-xl">
{/* Auth Card Wrapper */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0px_20px_40px_rgba(44,47,48,0.06)] overflow-hidden relative">
{/* Hero Visual for the card */}
<div className="h-40 relative overflow-hidden bg-primary-container/20">
<img className="w-full h-full object-cover opacity-60" data-alt="vibrant abstract background with fluid shapes in indigo and purple tones soft grain texture editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD19Qy1B4XRs0yDpvenYV-i9w7SGXnCTR7y4Gw5qAt7iv4WdgXhGksvS0h9WYYG5VZwfMdRM9HmkbYf9svWmUyOjgIAm674E5wHvFEgPYBaBkaCqFqcrgyMCsz6-EKg3HHRTB3Y1-Mdr3C7H-cKWQAUivxBS4ZMLa-JTKvsck66WSkZzQAH0yyWrfcvYl44w3Os0lrYXP5CtXcOj2el-J2MGO098K-M9HVS5tL1V7e-_CuEqfmQPOebFqpIV9TZhQ7WsIJoYFWlg8Wa"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-surface-container-lowest to-transparent">
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Welcome Back</h2>
<p className="text-on-surface-variant font-medium">Join the heartbeat of your campus</p>
</div>
</div>
<div className="p-8 md:p-12">
{/* Role Selection Tabs */}
<div className="flex p-1 bg-surface-container-low rounded-full mb-8">
<button className="flex-1 py-3 text-sm font-bold rounded-full bg-surface-container-lowest text-primary shadow-sm transition-all duration-200">
                            Student
                        </button>
<button className="flex-1 py-3 text-sm font-semibold rounded-full text-on-surface-variant hover:text-on-surface transition-all duration-200">
                            Club
                        </button>
</div>
{/* Auth Form */}
<form className="space-y-6">
{/* Student Context (Default View) */}
<div className="space-y-4">
<div className="relative group">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">College Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">alternate_email</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="name@college.edu" type="email"/>
</div>
</div>
<div className="relative group">
<label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">lock</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
{/* Action Button */}
<button className="w-full signature-gradient text-on-primary py-4 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-xl active:scale-95 transition-all duration-200" type="submit">
                            Login to Dashboard
                        </button>
{/* Secondary Actions */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/10">
<Link className="text-sm font-semibold text-primary hover:underline" href="/">Forgot password?</Link>
<p className="text-sm text-on-surface-variant">
                                Don't have an account? 
                                <Link href="/login"><button className="text-primary font-bold hover:underline ml-1" type="button">Register</button></Link>
</p>
</div>
</form>
</div>
</div>
{/* Contextual Social Proof */}
<div className="mt-8 text-center">
<p className="text-sm text-on-surface-variant/70 font-medium">Trusted by 50+ campus clubs and 10k+ students</p>
<div className="flex justify-center gap-8 mt-4 opacity-40 grayscale">
<img className="h-6" data-alt="minimalist university emblem logo simple line art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXMRwbJKKX8d30UqybBLxSW8jbKIPIL61cT72cRr7gl-x5rDTjo19OUfoYw0f6IqIy1sNn1NQFpLn6v5_PIVRfLc5yxlNWTge2GoRv0skiw0_wCM5OJtFt_0DiDdxWRjPRxlsP9rPTBFIAxTU3wClwPe2Jsq8KLGBzvFo6Q8Ege1Ev0N2UebNCoM7NjWVW-XO1wiLyPCxH-4IJY19hMs9zFp8il-AG82EYCjCdo_aBdVsWmSwPdoC-b21GewY2xU2D8e_VXDFaYMP8"/>
<img className="h-6" data-alt="classic collegiate shield emblem design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSGZx-XFOHDXEcVmhXiNcu0nMpGnx7OkJLPq63VvT-5M_EJbVMSo7224bmd9_lAabcfZQCNMQSGJyDLSv9kfbaBYDjirb5KprHy9guMaQLgs0hopV3kIosRwwHhAwzINpJ_z7xgRu3obi2jgAtgdfCKWVPTE8TnmPnb6PGGIr3WgwCXn9MHiJ7_h0DZkOkyRyNtQNnt25hnaDs3y9rnVTzfXV5lZH0fQDsDlwqxq5OXAQWqOaIgkq8vmMKz4RUhNJa2oeNDfhWqdji"/>
<img className="h-6" data-alt="modern academic institution typographic logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_nWIjHEtrVjv7LKclz8KPfGCrsGCBjPiOp0NPYDc6QodSUclkY-nAoPod1rHHbXr_MoIfTael2X1Uygq9Tjp6ygP6Xv2APHGbs5y1jFD3TlqZKKbwBoxtm30Jrxw-hd2h4U9LOG_TbNsepktRkfks9CA4QY6R9rITFloxaJkN0YKwhkwVRmhOZ-QChU0U_SHpJyY-5prfAjs942qfzEbf_66u3PUSbqZfytnqi_cbIjdPjPSKA2vLYKPSs9eYq_7nPPHQHUfcKYXA"/>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-slate-100 dark:bg-slate-950 w-full py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
<div className="col-span-1 md:col-span-1">
<Link href="/"><span className="font-['Manrope'] font-bold text-slate-900 dark:text-slate-100 text-xl block mb-4">CampusPulse</span></Link>
<p className="font-['Inter'] text-sm text-slate-500 leading-relaxed">
                    © 2024 CampusPulse. Editorial Experience for Student Life.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Explore</h4>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">About</Link>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">Contact</Link>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Support</h4>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">Support</Link>
<Link className="font-['Inter'] text-sm text-slate-500 hover:text-indigo-500 transition-colors" href="/">Privacy</Link>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Social</h4>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined text-lg">public</span>
</div>
<div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined text-lg">groups</span>
</div>
</div>
</div>
</div>
</footer>
    </>
  );
}
