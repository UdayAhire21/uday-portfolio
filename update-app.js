const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.js');
let content = fs.readFileSync(filePath, 'utf8');

// Add Experience import
content = content.replace(
  'import Projects from "./components/Projects";',
  'import Experience from "./components/Experience";\nimport Projects from "./components/Projects";'
);

// Add Experience component in JSX
content = content.replace(
  '<Skills />\n      <Projects />',
  '<Skills />\n      <Experience />\n      <Projects />'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('App.js updated successfully!');
