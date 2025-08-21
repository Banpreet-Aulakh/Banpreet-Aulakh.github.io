# GitHub Pages Deployment Guide

## Quick Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial React portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository: `https://github.com/Banpreet-Aulakh/Banpreet-Aulakh.github.io`
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - Click "Configure" and select "Static HTML"

3. **The GitHub Action will automatically:**
   - Build your project
   - Deploy to GitHub Pages
   - Make it available at: `https://banpreet-aulakh.github.io/Banpreet-Aulakh.github.io`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Deploy to the `gh-pages` branch
- Make it available on GitHub Pages

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify the build works locally: `npm run build`
- Check the Actions tab for error details

### Site Not Loading
- Wait a few minutes after deployment (GitHub Pages can take time to update)
- Check the Actions tab to ensure deployment succeeded
- Verify the base path in `vite.config.js` matches your repository name

### Routing Issues
- GitHub Pages doesn't support client-side routing by default
- The current setup should work, but if you have issues, consider using HashRouter instead of BrowserRouter

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS settings
3. Update the `base` in `vite.config.js` to match your domain

## Performance Tips

- The build process optimizes your assets automatically
- Images are optimized during build
- CSS and JS are minified and compressed
- Only necessary files are included in the final bundle
