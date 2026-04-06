import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(44,47,48,0.06)] font-['Manrope'] antialiased tracking-tight">
      <div className="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
        <div className="flex items-center gap-12">
          <Link className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" href="/">CampusPulse</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-transparent hover:border-indigo-600 py-1 transition-all duration-200" href="/events">Explore Events</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors py-1" href="/clubs">Clubs</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 mr-4">
            <button className="p-2 text-slate-500 hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="p-2 text-slate-500 hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="bookmark">bookmark</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login"><button className="hidden sm:block px-5 py-2 text-indigo-600 font-semibold hover:scale-105 transition-all duration-200">Login</button></Link>
            <Link href="/register"><button className="px-6 py-2.5 signature-gradient text-on-primary rounded-xl font-bold hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Register</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
