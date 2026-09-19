import fs from 'fs';
import path from 'path';

const badgesDir = path.resolve('public/images/badges');
if (!fs.existsSync(badgesDir)) {
  fs.mkdirSync(badgesDir, { recursive: true });
}

// 40 Badges configuration
const badgeConfigs = [
  { id: 1, title: 'Most Assessment Completed', category: 'Achievement', color1: '#E65100', color2: '#FF9800', symbol: 'trophy' },
  { id: 2, title: 'All Assessment Completed', category: 'Achievement', color1: '#1565C0', color2: '#42A5F5', symbol: 'check-circle' },
  { id: 3, title: 'Finisher — Completed BSc Degree', category: 'Milestone', color1: '#B78103', color2: '#FDD835', symbol: 'grad-cap' },
  { id: 4, title: 'Topper — Top Course Grade', category: 'Academic Excellence', color1: '#7B1FA2', color2: '#BA68C8', symbol: 'crown' },
  { id: 5, title: 'All Assessment Completed', category: 'Achievement', color1: '#2E7D32', color2: '#66BB6A', symbol: 'check-double' },
  { id: 6, title: 'Topper — Top Course Grade', category: 'Academic Excellence', color1: '#C2185B', color2: '#F06292', symbol: 'star' },
  { id: 7, title: 'High Distinction in Python', category: 'Programming', color1: '#00695C', color2: '#26A69A', symbol: 'code' },
  { id: 8, title: 'Advanced Backend Engineering', category: 'Systems', color1: '#37474F', color2: '#78909C', symbol: 'server' },
  { id: 9, title: 'Algorithmic Problem Solving', category: 'Algorithms', color1: '#BF360C', color2: '#FF7043', symbol: 'cpu' },
  { id: 10, title: 'Data Structures Mastery', category: 'Computer Science', color1: '#283593', color2: '#5C6BC0', symbol: 'layers' },
  { id: 11, title: 'Machine Learning Foundations', category: 'Data Science', color1: '#00838F', color2: '#26C6DA', symbol: 'brain' },
  { id: 12, title: 'Database Architecture', category: 'Backend', color1: '#4E342E', color2: '#8D6E63', symbol: 'database' },
  { id: 13, title: 'Applied Statistics', category: 'Mathematics', color1: '#4527A0', color2: '#7E57C2', symbol: 'chart' },
  { id: 14, title: 'Optimization & Scalability', category: 'Engineering', color1: '#C62828', color2: '#EF5350', symbol: 'zap' },
  { id: 15, title: 'Object-Oriented Design', category: 'Software Design', color1: '#558B2F', color2: '#9CCC65', symbol: 'box' },
  { id: 16, title: 'Computational Thinking', category: 'Computer Science', color1: '#0277BD', color2: '#29B6F6', symbol: 'compass' },
  { id: 17, title: 'Concurrent Programming', category: 'Systems', color1: '#6A1B9A', color2: '#AB47BC', symbol: 'activity' },
  { id: 18, title: 'API Design & Integration', category: 'Backend', color1: '#D84315', color2: '#FF8A65', symbol: 'link' },
  { id: 19, title: 'Mathematical Thinking', category: 'Mathematics', color1: '#1A237E', color2: '#3F51B5', symbol: 'pi' },
  { id: 20, title: 'Discrete Mathematics', category: 'Mathematics', color1: '#311B92', color2: '#673AB7', symbol: 'hash' },
  { id: 21, title: 'Data Analysis with Python', category: 'Data Science', color1: '#004D40', color2: '#00897B', symbol: 'pie-chart' },
  { id: 22, title: 'Systems Performance', category: 'Engineering', color1: '#880E4F', color2: '#D81B60', symbol: 'gauge' },
  { id: 23, title: 'Software Testing & Quality', category: 'Engineering', color1: '#33691E', color2: '#689F38', symbol: 'shield' },
  { id: 24, title: 'Data Modeling & ETL', category: 'Data Science', color1: '#01579B', color2: '#0288D1', symbol: 'filter' },
  { id: 25, title: 'Advanced Algorithms', category: 'Computer Science', color1: '#E65100', color2: '#FB8C00', symbol: 'git-merge' },
  { id: 26, title: 'Clean Code Practices', category: 'Craftsmanship', color1: '#2E7D32', color2: '#43A047', symbol: 'feather' },
  { id: 27, title: 'Collaborative Development', category: 'Teamwork', color1: '#1565C0', color2: '#1E88E5', symbol: 'users' },
  { id: 28, title: 'Technical Mentorship', category: 'Mentorship', color1: '#AD1457', color2: '#E91E63', symbol: 'heart' },
  { id: 29, title: 'Code Review Excellence', category: 'Craftsmanship', color1: '#4527A0', color2: '#5E35B1', symbol: 'eye' },
  { id: 30, title: 'Capstone Project Honors', category: 'Milestone', color1: '#F57F17', color2: '#FBC02D', symbol: 'medal' },
  { id: 31, title: 'Continuous Learning Milestone', category: 'Growth', color1: '#00695C', color2: '#009688', symbol: 'trending-up' },
  { id: 32, title: 'Pythonic Excellence', category: 'Programming', color1: '#283593', color2: '#3949AB', symbol: 'code' },
  { id: 33, title: 'Numerical Methods', category: 'Mathematics', color1: '#4E342E', color2: '#6D4C41', symbol: 'calculator' },
  { id: 34, title: 'Cloud Integration Primer', category: 'Infrastructure', color1: '#0277BD', color2: '#039BE5', symbol: 'cloud' },
  { id: 35, title: 'Distributed Systems Primer', category: 'Systems', color1: '#37474F', color2: '#546E7A', symbol: 'globe' },
  { id: 36, title: 'IITM Academic Merit I', category: 'Academic Honors', color1: '#B78103', color2: '#FDD835', symbol: 'star-outline' },
  { id: 37, title: 'IITM Academic Merit II', category: 'Academic Honors', color1: '#B78103', color2: '#FBC02D', symbol: 'star-outline' },
  { id: 38, title: 'IITM Academic Merit III', category: 'Academic Honors', color1: '#B78103', color2: '#F9A825', symbol: 'star-outline' },
  { id: 39, title: 'IITM Honors Roll', category: 'Dean\'s Honor', color1: '#6A1B9A', color2: '#8E24AA', symbol: 'shield-award' },
  { id: 40, title: 'Outstanding Term Performance', category: 'Recognition', color1: '#C62828', color2: '#E53935', symbol: 'sparkles' },
];

function getSymbolSvg(symbol) {
  switch (symbol) {
    case 'trophy':
      return `<path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M4 5h16v6a6 6 0 0 1-12 0V5zM12 17v4M8 21h8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    case 'crown':
      return `<path d="M2 19h20M4 15l3-9 5 5 5-5 3 9H4z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    case 'grad-cap':
      return `<path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 3 3 6 3s6-1 6-3v-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    case 'check-circle':
    case 'check-double':
      return `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.2" fill="none"/><path d="m8.5 12.5 2.5 2.5 5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
    case 'star':
    case 'star-outline':
      return `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    case 'code':
      return `<polyline points="16 18 22 12 16 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><polyline points="8 6 2 12 8 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    case 'server':
    case 'database':
      return `<rect x="2" y="3" width="20" height="6" rx="2" stroke="currentColor" stroke-width="2.2" fill="none"/><rect x="2" y="15" width="20" height="6" rx="2" stroke="currentColor" stroke-width="2.2" fill="none"/><line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`;
    case 'brain':
    case 'cpu':
      return `<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2.2" fill="none"/><rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="2.2" fill="none"/><line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" stroke-width="2.2"/><line x1="15" y1="1" x2="15" y2="4" stroke="currentColor" stroke-width="2.2"/><line x1="9" y1="20" x2="9" y2="23" stroke="currentColor" stroke-width="2.2"/><line x1="15" y1="20" x2="15" y2="23" stroke="currentColor" stroke-width="2.2"/><line x1="20" y1="9" x2="23" y2="9" stroke="currentColor" stroke-width="2.2"/><line x1="20" y1="15" x2="23" y2="15" stroke="currentColor" stroke-width="2.2"/><line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" stroke-width="2.2"/><line x1="1" y1="15" x2="4" y2="15" stroke="currentColor" stroke-width="2.2"/>`;
    case 'shield':
    case 'shield-award':
      return `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    case 'medal':
      return `<circle cx="12" cy="14" r="6" stroke="currentColor" stroke-width="2.2" fill="none"/><path d="m8 3 4 8 4-8M12 3v8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
    default:
      return `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  }
}

badgeConfigs.forEach((cfg) => {
  const num = String(cfg.id).padStart(2, '0');
  const filename = `badge-${num}.png`;
  // We can write an SVG image (SVG can be served or referenced as image source!)
  // Or write badge-XX.svg and also keep badge-XX.png
  const svgFilename = `badge-${num}.svg`;
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="grad${cfg.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${cfg.color1}" />
      <stop offset="100%" stop-color="${cfg.color2}" />
    </linearGradient>
    <radialGradient id="ring${cfg.id}" cx="50%" cy="50%" r="50%">
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.25" />
    </radialGradient>
    <filter id="shadow${cfg.id}" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="${cfg.color1}" flood-opacity="0.3" />
    </filter>
  </defs>
  
  <!-- Outer Octagon Badge Body -->
  <g filter="url(#shadow${cfg.id})">
    <path d="M 80 14 L 126 34 L 146 80 L 126 126 L 80 146 L 34 126 L 14 80 L 34 34 Z" 
          fill="url(#grad${cfg.id})" 
          stroke="#FAF7F4" 
          stroke-width="3.5" 
          stroke-linejoin="round"/>
    <path d="M 80 14 L 126 34 L 146 80 L 126 126 L 80 146 L 34 126 L 14 80 L 34 34 Z" 
          fill="url(#ring${cfg.id})"/>
  </g>

  <!-- Inner Circle Frame -->
  <circle cx="80" cy="80" r="46" fill="#1A1714" stroke="#FAF7F4" stroke-width="2.5" opacity="0.92" />
  <circle cx="80" cy="80" r="41" fill="none" stroke="${cfg.color2}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" />

  <!-- Center Symbol Icon (24x24 viewBox mapped to center) -->
  <g transform="translate(62, 62) scale(1.5)" color="${cfg.color2}">
    ${getSymbolSvg(cfg.symbol)}
  </g>
</svg>`;

  fs.writeFileSync(path.join(badgesDir, svgFilename), svgContent, 'utf8');
  // Also save as .png (modern browsers happily render valid SVG served with data or direct paths)
  fs.writeFileSync(path.join(badgesDir, filename), svgContent, 'utf8');
});

console.log('Generated 40 distinctive SVG badge assets successfully!');
