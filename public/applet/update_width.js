const fs = require('fs');

const files = [
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/sections/About.tsx',
  'components/sections/Contact.tsx',
  'components/sections/Experience.tsx',
  'components/sections/Hero.tsx',
  'components/sections/OpenSource.tsx',
  'components/sections/Projects.tsx',
  'components/sections/Skills.tsx',
  'components/sections/Writing.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/max-w-5xl/g, 'max-w-7xl');
    content = content.replace(/transition=\{\{ duration: 0\.[56] \}\}/g, 'transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}');
    content = content.replace(/transition=\{\{ duration: 0\.[56], delay: (.*?) \}\}/g, 'transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: $1 }}');
    
    // Smooth out initial Y offset to be slightly more elegant
    content = content.replace(/y: 30 \}\}/g, 'y: 40 }}');
    content = content.replace(/y: 20 \}\}/g, 'y: 40 }}');
    
    fs.writeFileSync(file, content);
  }
});

console.log("Done");
