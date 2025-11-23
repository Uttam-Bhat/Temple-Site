# Temple Site

A responsive React website template with the same structure as the reference site, built with modern React and Vite.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern React with Vite
- ✅ Smooth animations and transitions
- ✅ Image carousel/banner with auto-slide
- ✅ Mobile-friendly navigation menu
- ✅ Dropdown menu for About section
- ✅ Clean, maintainable code structure
- ✅ Comments indicating where to place images

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the project:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
temple-site/
├── public/              # Static assets (place your images here)
│   └── images/          # Create these folders:
│       ├── banner/      # Banner/carousel images
│       ├── events/      # Event images
│       └── temple-main.jpg  # Main temple image
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Banner.jsx   # Image carousel
│   │   ├── VardhanthiUtsava.jsx  # Events section
│   │   ├── About.jsx    # About section
│   │   └── Footer.jsx   # Footer with contact info
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## Adding Your Images

### Banner Images
1. Place banner images in `public/images/banner/` directory
2. Update image paths in `src/components/Banner.jsx` (lines with TODO comments)
3. Recommended size: 1920x600px or similar aspect ratio

### Event Images
1. Place event images in `public/images/events/` directory
2. Update image paths in `src/components/VardhanthiUtsava.jsx` (lines with TODO comments)
3. Recommended size: 400x300px or similar aspect ratio

### Temple Main Image
1. Place main temple image in `public/images/` directory
2. Update image path in `src/components/About.jsx` (line with TODO comment)
3. Recommended size: 600x400px or similar aspect ratio

### Logo
1. Place logo image in `public/images/` directory
2. Uncomment and update logo code in `src/components/Header.jsx` (around line 10)
3. Adjust logo size in `src/components/Header.css` if needed

## Customizing Content

All components have TODO comments indicating where to:
- Replace placeholder text with actual content
- Update contact information
- Modify temple timings
- Add social media links

## Color Scheme

The current color scheme uses:
- Primary: #2c5f7c (Blue)
- Secondary: #4a90a4 (Light Blue)
- Accent: #d4a574 (Gold/Tan)

You can customize colors in `src/index.css` under `:root` variables.

## Deployment

This project can be easily deployed to:
- **Vercel**: Connect your GitHub repo or use Vercel CLI
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `dist` folder contents
- **Any static hosting**: Upload the `dist` folder after building

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images use placeholder URLs - replace them with your actual images
- All text content is placeholder - replace with your actual content
- The site is fully static and doesn't require a backend
- All navigation links are anchor links - you can add React Router if needed for multi-page navigation

