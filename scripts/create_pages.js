const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/app');

const pagesToCreate = [
  { name: 'about', title: 'About CampusPulse', content: 'We believe in building digital hubs for campus communities.' },
  { name: 'contact', title: 'Contact Us', content: 'Reach out to our support team at support@campuspulse.edu for any platform concerns.' },
  { name: 'support', title: 'Support Center', content: 'Find FAQs and troubleshooting guides to maximize your experience.' },
  { name: 'privacy', title: 'Privacy Policy', content: 'Your data belongs to you. Read our full policy on how we protect your information.' },
  { name: 'terms', title: 'Terms of Service', content: 'By using CampusPulse, you agree to our standard terms and community guidelines.' },
  { name: 'cookies', title: 'Cookie Policy', content: 'Learn about how we use cookies to provide an optimized and secure web experience.' },
];

pagesToCreate.forEach(page => {
  const dirPath = path.join(pagesDir, page.name);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, 'page.tsx');
  
  const fileContent = `import Link from "next/link";

export default function ${page.name.charAt(0).toUpperCase() + page.name.slice(1)}Page() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-4xl mx-auto min-h-[60vh] flex flex-col">
      <div className="bg-surface-container-lowest rounded-2xl p-12 shadow-[0px_20px_40px_rgba(44,47,48,0.06)] border border-outline-variant/20 flex-1">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-indigo-700 transition-colors font-bold text-sm mb-6">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
          </Link>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">${page.title}</h1>
          <div className="w-20 h-1 signature-gradient rounded-full"></div>
        </div>
        
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-on-surface-variant">
          <p className="text-xl leading-relaxed mb-6 font-medium">${page.content}</p>
          <div className="h-64 rounded-xl bg-surface-container-low flex flex-col justify-center items-center text-outline-variant border-2 border-dashed border-outline-variant/30 mt-12 group hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-primary transition-colors">article</span>
            <p className="font-semibold text-center">Detailed content section for ${page.title}</p>
            <p className="text-sm mt-2 opacity-70">Matches global design system typography and spacing</p>
          </div>
        </div>
      </div>
    </main>
  );
}
`;
  
  fs.writeFileSync(filePath, fileContent);
  console.log(`Created ${filePath}`);
});
