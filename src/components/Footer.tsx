import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <Link className="font-['Manrope'] font-bold text-2xl text-slate-900 dark:text-slate-100 mb-6 block" href="/">CampusPulse</Link>
          <p className="font-['Inter'] text-sm text-slate-500 leading-relaxed mb-6">© 2024 CampusPulse. Editorial Experience for Student Life.</p>
          <div className="flex gap-4">
            <Link className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors" href="/">
              <span className="material-symbols-outlined text-lg">public</span>
            </Link>
            <Link className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors" href="/contact">
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-headline font-bold text-slate-900 dark:text-slate-100 mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 hover:text-indigo-500 transition-colors text-sm" href="/events">Explore Events</Link></li>
            <li><Link className="text-slate-500 hover:text-indigo-500 transition-colors text-sm" href="/clubs">Clubs</Link></li>
            <li><Link className="text-slate-500 hover:text-indigo-500 transition-colors text-sm" href="/calendar">Calendar</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-slate-900 dark:text-slate-100 mb-6">Company</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-slate-500">
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/about">About</Link></li>
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-slate-900 dark:text-slate-100 mb-6">Legal</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-slate-500">
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/privacy">Privacy</Link></li>
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/terms">Terms of Service</Link></li>
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
