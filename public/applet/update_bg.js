const fs = require('fs');
const glob = require('glob');

const files = fs.readdirSync('components/sections').map(file => `components/sections/${file}`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className="bg-\[#0F0F0F\] border/g, 'className="bg-[#0F0F0F]/60 backdrop-blur-md border');
  fs.writeFileSync(file, content);
});

console.log("Done");
