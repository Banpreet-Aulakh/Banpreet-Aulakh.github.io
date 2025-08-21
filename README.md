# Banpreet Aulakh Portfolio - React + Vite

This is a React-based portfolio website converted from the original HTML template. It features React Router for navigation between different sections, a modular component structure, and is built with Vite for fast development and deployment.

## Features

- **React Router Navigation**: Clean URL-based navigation between sections
- **Modular Components**: Reusable components for consistent page layout
- **Responsive Design**: Maintains the original styling with improved mobile experience
- **Easy to Extend**: Simple structure for adding new pages and content
- **Vite Build Tool**: Lightning-fast development server and optimized builds
- **GitHub Pages Ready**: Configured for automatic deployment

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with social links
│   ├── Footer.jsx      # Site footer
│   └── PageLayout.jsx  # Reusable page layout wrapper
├── pages/              # Individual page components
│   ├── Home.jsx        # Welcome/home page
│   ├── About.jsx       # About me page
│   ├── Projects.jsx    # Projects showcase
│   ├── Experience.jsx  # Work experience
│   └── Courses.jsx     # Academic coursework
├── assets/             # Images and static assets
├── App.jsx             # Main app component with routing
├── index.jsx           # React entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with the production-ready files.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Here's how to set it up:

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"

### 2. Push Your Code

The GitHub Actions workflow will automatically:
- Build your project when you push to the main branch
- Deploy it to GitHub Pages
- Make it available at: `https://banpreet-aulakh.github.io/Banpreet-Aulakh.github.io`

### 3. Manual Deployment (Optional)

If you prefer manual deployment:

```bash
npm run deploy
```

This will build and deploy using the gh-pages package.

## Adding New Pages

To add a new page:

1. Create a new component in `src/pages/`:
   ```jsx
   import React from 'react';
   import PageLayout from '../components/PageLayout.jsx';

   const NewPage = () => {
     return (
       <PageLayout title="New Page Title" className="page-section">
         <p>Your content here</p>
       </PageLayout>
     );
   };

   export default NewPage;
   ```

2. Add the route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage.jsx';

   // In the Routes component:
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link in `src/components/Header.jsx`:
   ```jsx
   <NavLink 
     to="/new-page"
     className={({ isActive }) => isActive ? 'active' : ''}
   >
     New Page
   </NavLink>
   ```

## Customization

### Styling
- Global styles are in `src/index.css`
- Component-specific styles are in `src/App.css`
- The original color scheme and fonts are preserved

### Content
- Update personal information in the respective page components
- Modify the projects, experience, and courses arrays in their respective components
- Replace placeholder images in the `src/assets/` directory

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router 6**: Client-side routing
- **Vite 5**: Lightning-fast build tool and dev server
- **CSS3**: Styling with responsive design

## Original Template Features Preserved

- Color scheme: Navy blue (#0c1c2c) and beige (#f2e9e4)
- Typography: Space Mono for headings, Roboto for body text
- Responsive design with mobile-first approach
- Social media links (LinkedIn, GitHub)
- Project collapsible sections

## Performance Benefits of Vite

- **Fast Startup**: Development server starts in ~250ms
- **Hot Module Replacement**: Instant updates during development
- **Optimized Builds**: Smaller bundle sizes and faster loading
- **Modern Tooling**: Built with modern web standards

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile devices
- Progressive enhancement for older browsers

## License

This project is for personal portfolio use. The original design and styling concepts are maintained while converting to a React-based architecture with Vite.
