const fs = require('fs');
const path = require('path');
const https = require('https');

const pages = [
  {
    name: 'Landing Page',
    route: '/',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NjNTE1YjZiYjhlMjRkYjBhY2E4ZmM5M2JjZjc5NzA4EgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Login / Register',
    route: '/login',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzNjOWViYzEwMDYzNTQ0NDc5ZjczZDE1MjMxNzM0YTQ1EgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Student Dashboard',
    route: '/dashboard',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdiMjRiM2ViZTQwOTQyNThhYjY4YmUzMTUzNjQzOGZmEgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Personalized Student Dashboard',
    route: '/dashboard/personalized',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2E0MjViMDZkMDhlNzQyZTI4YThmZTIzZTZiNzAyY2U2EgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Events Explorer',
    route: '/events',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzM4YmY0MGE3OTdhODRhZWI5NGYyZjg2ODAxMzdiNzMyEgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Enhanced Event Details',
    route: '/events/[id]',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzZhMDdiMWQ5ZTg1ODRjOTU4MDcxNzVjNjc1NmE2ZWU2EgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Enhanced Club Profile',
    route: '/clubs/[id]',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2I4MzNmYzIyZTljZTQ5YTVhNjEzYTc2MTEzYzY5NDM0EgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Clubs Directory',
    route: '/clubs',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2QxNmU4YjAwYjQ5ZDQ4OTNhZTRlMDhhNGNlMTg1YzQ3EgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  },
  {
    name: 'Event Calendar',
    route: '/calendar',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2I3MDVhMGYyZjUyYjRhMTU5MGFkNzFlOTdmOWE1MjNkEgsSBxDB--2ZyhMYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzEzMjc2MzcyMjA5MTExNTU0MQ&filename=&opi=89354086',
  }
];

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function processHTMLtoJSX(html) {
  // Strip markdown formatting if any
  html = html.replace(/```html/g, '').replace(/```/g, '');

  let bodyContent = html;
  // Extract body content if <body> tags exist
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    bodyContent = bodyMatch[1];
  } else {
    // If no body exists, but it has script tags or head, strip them out.
    // Try to find <nav> or <main> as starting point
    let contentMatch = html.match(/(<nav|<main|<div)[\s\S]*/i);
    if (contentMatch) {
        bodyContent = contentMatch[0];
    }
  }

  bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
  bodyContent = bodyContent.replace(/<style[\s\S]*?<\/style>/gi, '');
  bodyContent = bodyContent.replace(/<link[^>]*>/gi, '');
  bodyContent = bodyContent.replace(/<meta[^>]*>/gi, '');

  // Fix JSX specific attributes
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
  
  // Close unclosed tags like img, input, hr, br
  // Match <img ...> that doesn't end with /> and replace with <img ... />
  bodyContent = bodyContent.replace(/<(img|input|hr|br)([^>]*?)(?<!\/)>/g, '<$1$2 />');

  // Fix comments
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Remove inline styles completely since Tailwind and global CSS handle it
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, '');

  return bodyContent.trim();
}

async function run() {
  for (const page of pages) {
    console.log(`Processing ${page.name}...`);
    try {
      const html = await fetchHTML(page.url);
      const jsxContent = processHTMLtoJSX(html);
      
      const componentCode = `export default function Page() {\n  return (\n    <>\n      ${jsxContent}\n    </>\n  );\n}\n`;
      
      const basePath = path.join(__dirname, 'src', 'app', page.route === '/' ? '' : page.route);
      if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath, { recursive: true });
      }
      
      fs.writeFileSync(path.join(basePath, 'page.tsx'), componentCode);
      console.log(`Created ${path.join(basePath, 'page.tsx')}`);
    } catch (e) {
      console.error(`Failed to process ${page.name}:`, e);
    }
  }
}

run();
