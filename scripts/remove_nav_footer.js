const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app');

files.forEach(file => {
  // Skip layout.tsx and template.tsx
  if (file.includes('layout.tsx') || file.includes('template.tsx')) return;

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove top fixed nav
  // We match <nav className="fixed top-0... or similar to avoid removing sidebar navs
  // Also events/[id]/page.tsx has <nav className="fixed top-0...
  // Dashboard has sticky top-0
  const navRegex = /<nav[^>]*?(fixed|sticky)[^>]*?top-0[^>]*?>[\s\S]*?<\/nav>/gi;
  content = content.replace(navRegex, '');

  // Remove footers, usually <footer... to </footer>
  const footerRegex = /<footer[^>]*?>[\s\S]*?<\/footer>/gi;
  content = content.replace(footerRegex, '');

  // Also Dashboard has another fixed nav for mobile: <nav className="md:hidden fixed bottom-0...
  // Should we remove it? It's specific to the dashboard. Let's keep it if it's the bottom app bar, wait, we might have removed the top nav, but dashboard has its own layout we don't want to break it...
  // Wait, if we use a global layout NavBar, dashboard will have two. Our regex just removes `fixed top-0` or `sticky top-0`.
  
  // Dashboard's top nav is "flex justify-between items-center w-full px-8 h-20 sticky top-0 z-50..."
  // This will be removed.

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
