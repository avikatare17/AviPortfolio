# Image Setup Instructions

## Background Images

This portfolio uses background images for the landing page and education section.

## 1. Landing Page Background Image

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

### Step 4: Verify the Landing Page Image

1. Start the development server:
   ```bash
   cd frontend
   npm start
   ```

2. Visit `http://localhost:3000` and verify the background image appears correctly

3. Test on different screen sizes to ensure the image looks good on mobile, tablet, and desktop

### Landing Page Image Configuration

The image is configured with:
- **Background Size**: Cover (fills the entire area)
- **Background Position**: Center
- **Background Attachment**: Fixed (parallax effect on desktop)
- **Overlay**: Dark semi-transparent overlay for text readability
- **Fallback**: Dark background color if image fails to load

## 2. Education Section Background Image

The Education section is configured to use a classroom/lecture hall background image.

### Step 1: Add the Image

1. Place your classroom background image in the following location:
   ```
   frontend/public/images/education-background.jpg
   ```

2. If your image has a different filename or format, update the CSS in `frontend/src/App.css`:
   - Find the `.education-background` class
   - Update the `background-image` URL to match your filename

### Step 2: Image Requirements

- **Recommended Format**: JPG, PNG, or WebP
- **Recommended Size**: 1920x1080 pixels or larger
- **File Size**: Optimize for web (aim for under 500KB)
- **Aspect Ratio**: 16:9 or similar wide format works best

### Step 3: Verify the Education Section Image

1. Start the development server (if not already running):
   ```bash
   cd frontend
   npm start
   ```

2. Navigate to the Education section and verify the background image appears correctly

3. Check that:
   - The background image is visible
   - The overlay provides good contrast for white text
   - Education cards are readable over the background
   - The image looks good on different screen sizes

### Education Section Image Configuration

The image is configured with:
- **Background Size**: Cover (fills the entire area)
- **Background Position**: Center
- **Background Attachment**: Fixed (parallax effect on desktop, scroll on mobile)
- **Overlay**: Dark semi-transparent overlay (60% opacity) for text readability
- **Cards**: Semi-transparent white cards (95% opacity) with blur effect for content
- **Title**: White text with shadow for visibility

## 3. Experience Section Background Image

The Experience section is configured to use an industrial/manufacturing background image.

### Step 1: Add the Image

1. Place your manufacturing background image in the following location:
   ```
   frontend/public/images/experience-background.jpg
   ```

2. If your image has a different filename or format, update the CSS in `frontend/src/App.css`:
   - Find the `.experience-background` class
   - Update the `background-image` URL to match your filename

### Step 2: Image Requirements

- **Recommended Format**: JPG, PNG, or WebP
- **Recommended Size**: 1920x1080 pixels or larger
- **File Size**: Optimize for web (aim for under 500KB)
- **Aspect Ratio**: 16:9 or similar wide format works best

### Step 3: Verify the Experience Section Image

1. Start the development server (if not already running):
   ```bash
   cd frontend
   npm start
   ```

2. Navigate to the Experience section and verify the background image appears correctly

3. Check that:
   - The background image is visible
   - The overlay provides good contrast for white text
   - Experience cards are readable over the background
   - The image looks good on different screen sizes

### Experience Section Image Configuration

The image is configured with:
- **Background Size**: Cover (fills the entire area)
- **Background Position**: Center
- **Background Attachment**: Fixed (parallax effect on desktop, scroll on mobile)
- **Overlay**: Dark semi-transparent overlay (60% opacity) for text readability
- **Cards**: Semi-transparent white cards (95% opacity) with blur effect for content
- **Title**: White text with shadow for visibility

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

**Text not readable on Landing Page?**
- Increase the overlay opacity in `.hero-overlay` class
- Adjust text shadow in `.hero-title`, `.hero-subtitle`, and `.hero-description`
- Increase the background opacity of `.hero-content`

**Text not readable on Education Section?**
- Increase the overlay opacity in `.education-overlay` class (currently 0.6)
- Increase the card background opacity in `.education-card` class (currently 0.95)
- Adjust the title text shadow in `.education-title` class
- Increase overlay opacity on mobile (currently 0.75 in media queries)

**Text not readable on Experience Section?**
- Increase the overlay opacity in `.experience-overlay` class (currently 0.6)
- Increase the card background opacity in `.experience-card` class (currently 0.95)
- Adjust the title text shadow in `.experience-title` class
- Increase overlay opacity on mobile (currently 0.75 in media queries)

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

