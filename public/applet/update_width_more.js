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
    content = content.replace(/max-w-7xl/g, 'max-w-[1400px]');
    content = content.replace(/px-6 lg:px-8/g, 'px-8 md:px-12 lg:px-16');
    fs.writeFileSync(file, content);
  }
});

console.log("Done");
