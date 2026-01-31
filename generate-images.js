const fs = require('fs');
const path = require('path');

// Create simple SVG placeholders
const placeholders = [
  { name: 'photographer.jpg', width: 800, height: 1000, text: 'Photographer' },
  { name: 'oldmans-beach.jpg', width: 800, height: 1200, text: 'Oldman\'s Beach' },
  { name: 'clip-1.jpg', width: 1200, height: 675, text: 'Morning Session' },
  { name: 'clip-2.jpg', width: 1200, height: 675, text: 'Perfect Barrel' },
  { name: 'clip-3.jpg', width: 1200, height: 675, text: 'Aerial Action' },
  { name: 'clip-4.jpg', width: 1200, height: 675, text: 'Sunset Rides' }
];

const imagesDir = path.join(__dirname, 'public', 'images');

placeholders.forEach(({ name, width, height, text }) => {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4682B4;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad-${name})" />
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" 
        fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

  // Save as SVG (Next.js Image component supports SVG)
  const svgName = name.replace('.jpg', '.svg');
  fs.writeFileSync(path.join(imagesDir, svgName), svg.trim());
});

console.log('Placeholder images created successfully!');
