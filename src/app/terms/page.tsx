import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-4xl mx-auto min-h-[60vh] flex flex-col">
      <div className="bg-surface-container-lowest rounded-2xl p-12 shadow-[0px_20px_40px_rgba(44,47,48,0.06)] border border-outline-variant/20 flex-1">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-indigo-700 transition-colors font-bold text-sm mb-6">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
          </Link>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">Terms of Service</h1>
          <div className="w-20 h-1 signature-gradient rounded-full"></div>
        </div>
        
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-on-surface-variant">
          <p className="text-xl leading-relaxed mb-6 font-medium">By using CampusPulse, you agree to our standard terms and community guidelines.</p>
          <div className="h-64 rounded-xl bg-surface-container-low flex flex-col justify-center items-center text-outline-variant border-2 border-dashed border-outline-variant/30 mt-12 group hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-primary transition-colors">article</span>
            <p className="font-semibold text-center">Detailed content section for Terms of Service</p>
            <p className="text-sm mt-2 opacity-70">Matches global design system typography and spacing</p>
          </div>
        </div>
      </div>
    </main>
  );
}
