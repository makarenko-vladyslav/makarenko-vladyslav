const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../assets');

const premiumValueProp = `<svg width="100%" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&amp;family=Inter:wght@300;400;500&amp;display=swap');
      .bg { fill: #000000; }
      
      .title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
        font-weight: 700;
        fill: #E3FF00;
        letter-spacing: 4px;
        text-transform: uppercase;
      }
      
      .highlight {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 38px;
        font-weight: 400;
        fill: #ffffff;
        letter-spacing: -1px;
      }
      
      .text {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 300;
        fill: #999999;
        line-height: 1.8;
      }

      .accent {
        fill: #ffffff;
        font-weight: 500;
      }
      
      .decorator {
        fill: none;
        stroke: #E3FF00;
        stroke-width: 2;
        opacity: 0.8;
      }
      
      .grid-bg { stroke: #111111; stroke-width: 1; fill: none; }
    </style>

    <pattern id="gridLarge" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path d="M 100 0 L 0 0 0 100" class="grid-bg" />
    </pattern>
    <linearGradient id="fadeBottom" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="1" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" class="bg" />
  <rect width="100%" height="100%" fill="url(#gridLarge)" opacity="0.5"/>
  <rect width="100%" height="100%" style="fill:url(#fadeBottom);" />

  <g transform="translate(150, 80)">
    <!-- Tech Accent -->
    <path d="M-40,10 L-25,10 L-20,15 L-20,40" class="decorator" />
    <circle cx="-20" cy="40" r="3" fill="#E3FF00" />
    
    <text x="0" y="16" class="title">VALUE PROPOSITION</text>
    
    <text x="0" y="80" class="highlight">Transforming complex concepts into</text>
    <text x="0" y="130" class="highlight">seamless, high-converting digital products.</text>
    
    <g transform="translate(0, 190)">
      <text x="0" y="0" class="text">I am a hybrid <tspan class="accent">Senior Web Designer &amp; Full-Stack Architect</tspan> with</text>
      <text x="0" y="32" class="text">a relentless focus on premium aesthetics, 60fps animations, and scalable</text>
      <text x="0" y="64" class="text">architecture. From pixel-perfect UX/UI to Server Actions and secure PostgreSQL,</text>
      <text x="0" y="96" class="text">I design experiences that drive measurable business growth and conversion.</text>
    </g>
  </g>
</svg>`;

const premiumServices = `<svg width="100%" viewBox="0 0 1200 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&amp;family=Inter:wght@300;400;500&amp;display=swap');
      .bg { fill: #000000; }
      .card-bg { fill: #050505; stroke: #1a1a1a; stroke-width: 1; }
      .card-title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; fill: #ffffff; }
      .card-text { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300; fill: #888888; }
      .accent { fill: #E3FF00; }
      .icon-bg { fill: #E3FF00; opacity: 0.1; }
      .g3d-marker { fill: #E3FF00; }
      .section-title { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; fill: #E3FF00; letter-spacing: 4px; text-transform: uppercase; }
    </style>
  </defs>
  <rect width="100%" height="100%" class="bg" />

  <g transform="translate(50, 40)">
    <path d="M0,5 L8,0 L8,10 Z" class="g3d-marker" />
    <text x="20" y="10" class="section-title">CORE EXPERTISE</text>
  </g>

  <!-- UX/UI Design -->
  <g transform="translate(50, 90)">
    <rect width="340" height="280" rx="15" class="card-bg" />
    <g transform="translate(30, 40)">
      <rect x="0" y="0" width="40" height="40" rx="8" class="icon-bg" />
      <path d="M12,20 L28,20 M20,12 L20,28" stroke="#E3FF00" stroke-width="2" stroke-linecap="round"/>
      <text x="0" y="85" class="card-title">UX/UI Mastery</text>
      <text x="0" y="125" class="card-text">Design systems, Figma</text>
      <text x="0" y="150" class="card-text">prototyping, micro-interactions,</text>
      <text x="0" y="175" class="card-text">and pixel-perfect execution</text>
      <text x="0" y="200" class="card-text">tailored for 0.01% aesthetics.</text>
    </g>
  </g>

  <!-- Frontend -->
  <g transform="translate(420, 90)">
    <rect width="340" height="280" rx="15" class="card-bg" />
    <g transform="translate(30, 40)">
      <rect x="0" y="0" width="40" height="40" rx="8" class="icon-bg" />
      <path d="M12,15 L28,15 M12,25 L20,25" stroke="#E3FF00" stroke-width="2" stroke-linecap="round"/>
      <text x="0" y="85" class="card-title">Frontend Magic</text>
      <text x="0" y="125" class="card-text">Next.js 14, React, TailwindCSS.</text>
      <text x="0" y="150" class="card-text">Framer Motion, WebGL 3D</text>
      <text x="0" y="175" class="card-text">experiences, Server Actions,</text>
      <text x="0" y="200" class="card-text">60fps performance optimization.</text>
    </g>
  </g>

  <!-- Backend Architecture -->
  <g transform="translate(790, 90)">
    <rect width="360" height="280" rx="15" class="card-bg" />
    <g transform="translate(30, 40)">
      <rect x="0" y="0" width="40" height="40" rx="8" class="icon-bg" />
      <path d="M15,12 L25,12 A5,5 0 0,1 30,17 L30,23 A5,5 0 0,1 25,28 L15,28 A5,5 0 0,1 10,23 L10,17 A5,5 0 0,1 15,12" stroke="#E3FF00" stroke-width="2" fill="none"/>
      <text x="0" y="85" class="card-title">Backend &amp; Cloud</text>
      <text x="0" y="125" class="card-text">PostgreSQL, Prisma ORM,</text>
      <text x="0" y="150" class="card-text">Supabase, Node.js edge APIs.</text>
      <text x="0" y="175" class="card-text">Secure authentication &amp; scalable</text>
      <text x="0" y="200" class="card-text">infrastructures on Vercel.</text>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(ASSETS_DIR, 'value-prop.svg'), premiumValueProp);
fs.writeFileSync(path.join(ASSETS_DIR, 'service-cards.svg'), premiumServices);

console.log('Successfully updated value-prop and service-cards SVGs.');
