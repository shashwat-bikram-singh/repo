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
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace typical navigations:
  // Convert <a> tags to Nextjs <Link> tags
  content = content.replace(/<a([^>]*?)href="#"([^>]*?)>([\s\S]*?)<\/a>/gi, (match, p1, p2, inner) => {
    let target = '/';
    if (inner.includes('Explore Events')) target = '/events';
    else if (inner.includes('Clubs')) target = '/clubs';
    else if (inner.includes('Calendar')) target = '/calendar';
    else if (inner.includes('CampusPulse')) target = '/';
    return `<Link${p1}href="${target}"${p2}>${inner}</Link>`;
  });
  
  // also some <a> with href="#" have no text but icons, will fall back to target='/'

  // Buttons that navigate:
  content = content.replace(/<button([^>]*?)>(Login)<\/button>/gi, '<Link href="/login"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>(Register)<\/button>/gi, '<Link href="/login"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>\s*(Explore Events)\s*<\/button>/gi, '<Link href="/events"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>\s*(Join a Club)\s*<\/button>/gi, '<Link href="/clubs"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>(Get Started for Free)<\/button>/gi, '<Link href="/login"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>(View Details)<\/button>/gi, '<Link href="/events"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>(View Club[\s\S]*?)<\/button>/gi, '<Link href="/clubs"><button$1>$2</button></Link>');
  content = content.replace(/<button([^>]*?)>(Start a New Club)<\/button>/gi, '<Link href="/clubs"><button$1>$2</button></Link>');

  // Brand spans
  // <span ...>CampusPulse</span> acting as logo 
  content = content.replace(/<span([^>]*?)>CampusPulse<\/span>/gi, (match, p1) => {
    // only if it looks like a logo
    if (p1.includes('text-2') || p1.includes('font-bold') || p1.includes('text-xl')) {
        return `<Link href="/"><span${p1}>CampusPulse</span></Link>`;
    }
    return match;
  });

  if (content !== original) {
    if (!content.includes('import Link from')) {
        // insert after "use client" if it exists, or at the top
        if (content.includes('"use client"')) {
            content = content.replace('"use client";', '"use client";\nimport Link from "next/link";');
        } else {
            // Check for import statements
            const lastImportIndex = content.lastIndexOf('import ');
            if (lastImportIndex !== -1) {
                const endOfLastImport = content.indexOf('\n', lastImportIndex);
                content = content.slice(0, endOfLastImport + 1) + 'import Link from "next/link";\n' + content.slice(endOfLastImport + 1);
            } else {
                content = 'import Link from "next/link";\n' + content;
            }
        }
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
