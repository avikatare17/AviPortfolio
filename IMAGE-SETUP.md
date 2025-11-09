# Image Setup Instructions

## Landing Page Background Image

The landing page is configured to use an aircraft background image. To set it up:

### Step 1: Add the Image

1. Place your aircraft background image in the following location:
   ```
   frontend/public/images/aircraft-background.jpg
   ```

2. If your image has a different filename or format, update the CSS in `frontend/src/App.css`:
   - Find the `.hero-background` class
   - Update the `background-image` URL to match your filename

### Step 2: Image Requirements

- **Recommended Format**: JPG, PNG, or WebP
- **Recommended Size**: 1920x1080 pixels or larger
- **File Size**: Optimize for web (aim for under 500KB)
- **Aspect Ratio**: 16:9 or similar wide format works best

### Step 3: Image Optimization (Optional but Recommended)

To reduce file size and improve load times:

1. **Online Tools**:
   - [TinyPNG](https://tinypng.com/) - Compress PNG and JPG
   - [Squoosh](https://squoosh.app/) - Advanced image optimization
   - [ImageOptim](https://imageoptim.com/) - macOS tool

2. **Command Line** (if you have ImageMagick):
   ```bash
   convert aircraft-background.jpg -quality 85 -resize 1920x1080^ aircraft-background-optimized.jpg
   ```

### Step 4: Verify the Image

1. Start the development server:
   ```bash
   cd frontend
   npm start
   ```

2. Visit `http://localhost:3000` and verify the background image appears correctly

3. Test on different screen sizes to ensure the image looks good on mobile, tablet, and desktop

### Current Image Configuration

The image is configured with:
- **Background Size**: Cover (fills the entire area)
- **Background Position**: Center
- **Background Attachment**: Fixed (parallax effect on desktop)
- **Overlay**: Dark semi-transparent overlay for text readability
- **Fallback**: Dark background color if image fails to load

### Troubleshooting

**Image not showing?**
- Check that the file is in `frontend/public/images/`
- Verify the filename matches exactly (case-sensitive)
- Check browser console for 404 errors
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Image too large/small?**
- Adjust the `background-size` property in CSS
- Try `contain` instead of `cover` if you want to see the full image
- Adjust `background-position` to focus on a specific area

**Text not readable?**
- Increase the overlay opacity in `.hero-overlay` class
- Adjust text shadow in `.hero-title`, `.hero-subtitle`, and `.hero-description`
- Increase the background opacity of `.hero-content`

### Alternative: Using a CDN

If you prefer to host the image elsewhere:

1. Upload the image to a CDN or image hosting service
2. Update the CSS:
   ```css
   background-image: url('https://your-cdn-url.com/aircraft-background.jpg');
   ```

### Notes

- The image path `/images/aircraft-background.jpg` is relative to the `public` folder
- In production, the image will be served from the same domain
- The image is referenced in the CSS, not in the HTML, for better performance
- Mobile devices use `background-attachment: scroll` instead of `fixed` for better performance

